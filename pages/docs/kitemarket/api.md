---
title: KiteMarket 市场 API 入门
description: Java 11、MIT 的独立只读市场 SDK：查询、不可变 DTO、异步服务注册与安全成交通知。
---

# 市场 API 入门

`KiteMarket-API` 是独立的 Java 11／MIT SDK，不依赖闭源 `market-core`。它用于只读查询和成交后通知，不提供交易写入口。`1.0.0` 运行包目前待发布；公开接口与示例的获取方式见[下载页](./download)。

## 引用 SDK

从对应版本获取 `KiteMarket-API-1.0.0.jar`，放入自己项目的 `libs/`。公开仓库 [KiteMC/KiteMarket](https://github.com/KiteMC/KiteMarket)提供接口源码、Javadoc 与可运行示例；不要求 GitHub Packages Token。

```kotlin
dependencies {
    compileOnly(files("libs/KiteMarket-API-1.0.0.jar"))
    compileOnly("com.destroystokyo.paper:paper-api:1.16.5-R0.1-SNAPSHOT")
}
tasks.withType<JavaCompile>().configureEach {
    options.release.set(11)
}
```

`plugin.yml` 添加 `depend: [KiteMarket]`。若你的插件没有市场也能运行，可使用 `softdepend`，但仅在确认主插件存在后加载引用 API 的适配类，避免缺失类错误。

**不要打包、shade 或重定位 SDK**。运行时由 KiteMarket 提供唯一接口类，重复副本可能导致服务无法识别。SDK JAR 不是服务器插件。

## 等待服务，再异步查询

```java
import com.kitemc.market.api.KiteMarketApi;

KiteMarketApi api = getServer().getServicesManager().load(KiteMarketApi.class);
if (api == null) return; // 数据库尚未就绪，等待 ServiceRegisterEvent。

api.orders(null, null, "", 0, 36).whenComplete((orders, failure) -> {
    if (!isEnabled()
        || getServer().getServicesManager().load(KiteMarketApi.class) != api) return;
    if (failure != null) {
        getLogger().warning("Market query unavailable");
        return;
    }
    orders.forEach(order -> getLogger().info(
        order.getId() + " " +
        order.getCurrency().display(order.getUnitPrice()).toPlainString()));
});
```

`depend` 只保证加载顺序，不保证数据库已连接。监听 `ServiceRegisterEvent` 后重新获取服务，并在卸载或替换时丢弃旧结果。可运行查询示例位于公开仓库 `examples/api-java`，包含延迟注册、失败处理和有容量限制的事件去重，不新增玩家命令。

查询返回 `CompletableFuture`。不能在主线程、Folia 区域线程或玩家线程 `get()`／`join()` 等待。回调不保证玩家调度上下文；更新 GUI、发送玩家信息或读取背包需另行正确调度。失败应显示暂不可用，不能伪装成零余额或空市场。

## 查询与结果

| 方法 | 返回内容 |
|---|---|
| `networkId()` | 市场网络的持久化 UUID |
| `currencies()` | 币种 ID 与固定精度 |
| `orders(type, owner, search, offset, limit)` | 订单页；类型可空，owner 为空仅查开放订单，指定 owner 包含其终态订单 |
| `order(id)` | 指定订单；不存在时异常完成 |
| `wallets(player)` | 指定玩家的可用余额和冻结余额 |
| `assets(player)` | 可领取条目 ID、数量与物品摘要 |
| `history(player, offset, limit)` | 指定玩家的审计白名单摘要 |

分页要求 `offset >= 0`、`1 <= limit <= 100`，搜索最多256字符。历史按原审计行分页，未知内部类型投影为 `OTHER`，不泄露原始记录。

所有金额使用 `long` 最小货币单位。`CurrencyView.getPrecision() == 2` 时，`128` 表示 `1.28`；用 `currency.display(amount).toPlainString()` 格式化。时间为 Unix 毫秒，税率使用基点。

独立 DTO 在 `com.kitemc.market.api.model` 下：`CurrencyView`、`OrderView`、`WalletView`、`ClaimAssetView`、`HistoryEntry`、`TradeSummary`、`ItemSummary` 及枚举。字段和嵌套列表、集合、映射不可变。订单的可选样品摘要只含材质、名称、Lore、附魔与耐久，不能据此生成或领取资产。

接口不返回原始审计 JSON、序列化物品字节、精确样品指纹、许可证凭据、执行令牌或恢复证据。缺失历史金额保持 `null`，不猜成零；`RECORDED` 不表示外部副作用已经成功，`PENDING_REVIEW` 表示需要核对。开发版 `match(ItemRule, ItemSnapshot)` 不属于公开 API。

## 成交后通知

```java
import com.kitemc.market.api.MarketCommittedEvent;
import com.kitemc.market.api.model.TradeSummary;
import org.bukkit.event.EventHandler;

@EventHandler
public void onTrade(MarketCommittedEvent event) {
    String deduplicationKey = event.getNetworkId() + ":" + event.getEventId();
    TradeSummary trade = event.getTrade();
    // 先按 deduplicationKey 去重；完整可运行示例提供有限近期缓存。
    getLogger().info(deduplicationKey + " " + event.getTopic()
        + " net=" + trade.getCurrency().display(trade.getNetIncome()).toPlainString());
}
```

`MarketCommittedEvent` 异步、不可取消，只报告已提交的 `BUY`、`SUPPLY`、`AUCTION_WON`。`getTrade()` 返回订单与操作 ID、类型、物品收取人、收益收取人、数量、币种、总额、税额和净收入；没有原始 `getPayload()`。

通知通过节点增量轮询触发，可能延迟或遗漏，启动前历史不自动补发，多个节点可能看到同一事件。按**网络 UUID＋事件 ID**去重；事件 ID 不保证连续。需要长期去重时自行持久化，不能把通知用作补发资金或物品的依据。重启后重新查询权威状态。

## 需要扩展玩家界面？

使用独立的 [UI SDK](./ui-development)，接收当前页面快照，并回传服务端登记的动作。最终权限、报价、背包重查和确认继续由 KiteMarket 完成。两个 SDK 均不能任意发币、扣物、绕过确认或执行远程交易写入。

自有配置主题和 Java IA 呈现器无需购买官方 DLC。第三方可自用、免费分发或独立销售；真实 IA 示例适配代码使用 Java 21，和两个 Java 11 SDK 的字节码边界分别看待。
