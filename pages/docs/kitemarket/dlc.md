# ItemsAdder 接入

KiteMarket 保留完整原版 GUI 和 ItemsAdder v4 兼容。服主与开发者可以使用自己的资源制作配置主题或 Java 呈现器，自用、免费分发或独立销售，**无需官方 DLC 权益**。交易、真实物品、输入校验和确认仍由共用服务端流程处理。

::: info 官方主题已取消
2026年10月4日，KiteMC 取消官方 Market Stall IA 主题 DLC 的开发与上架，不再与插件同步发布。本页保留原路由，改为第三方 IA 接入指南；旧图源、发行和验收资料仅保留历史用途。许可证平台的通用 DLC 能力不因此取消。
:::

## 安装自己的主题

1. 取得合法的 ItemsAdder v4 运行插件和配套 ProtocolLib，确认支持目标服务器；已有代表组合见[兼容说明](./compatibility)。仅有 API JAR 不能运行。
2. 按主题说明安装其独立 ItemsAdder 命名空间，将 KiteMarket 主题声明放入 `plugins/KiteMarket/themes/*.yml`。Java 主题还需安装提供者插件。可运行配置和 Java 示例见[界面与第三方开发](./ui-development)。
3. 按实际 IA 指南手动 `/iareload`，等待加载完成，再 `/iazip` 重建和下发资源包；KiteMarket 不代替管理员执行第三方重建命令。
4. 登记**实际下发且包含主题的资源包**的 SHA-1（40位十六进制）及 UUID。临时启用 `gui.itemsadder.diagnostics: true` 并 `/km reload`，可从 `[KITEMARKET_PACK]` 读取观察到的 UUID、SHA-1和 URL。登记后重新 `/km reload`，再关闭诊断。
5. 玩家成功加载指定包后使用 `/km ui itemsadder example-ia`，或配置该主题为默认后 `/km ui auto`。用 `/km ui` 核对实际界面和回退原因。

示例中 `example-ia` 必须是已经安装的主题 ID；资源包身份占位值必须替换为实际观察值：

```yaml
gui:
  renderer: auto
  auto-order: [itemsadder, vanilla]
  default-themes:
    itemsadder: example-ia
  itemsadder:
    enabled: true
    diagnostics: false
    pack-sha1: "REPLACE_WITH_ACTUAL_40_HEX_SHA1"
    pack-id: "REPLACE_WITH_ACTUAL_SENT_UUID"
```

未安装 IA 主题时使用 `gui.default-themes: {}`；不会默认选择旧官方主题。第三方主题也可通过 `requires` 登记自己的包身份，详见开发指南。无效候选保留当前有效配置，不需要填写官方 DLC 商品 ID、签名或下载端点。

## 使用与回退

| 玩家入口 | 行为 |
|---|---|
| `/km ui auto` | 按配置顺序尝试已就绪的提供者与默认主题 |
| `/km ui vanilla` | 使用完整原版 GUI，无需资源包 |
| `/km ui itemsadder example-ia` | 选择已安装的自有主题；未就绪时说明原因并回退 |
| `/km ui` | 显示请求偏好、实际界面和主题可用状态 |

偏好按市场网络和玩家保存，换服保持一致；主题缺失或回退不覆盖原偏好。切换保留发布草稿，不重复提交交易。两种界面共用真实物品、订单版本、报价、最终背包重查和操作编号。

资源注册、适配器及玩家对**指定资源包的成功加载**都需就绪；发送或接受不等于加载成功。拒绝、失败、对应包丢弃／移除或不匹配时回退，无关资源包不清空 IA 就绪记录。断线、换节点、全量移除和 IA 重载后重新确认。更新内容需使用新的实际下发 UUID 和对应摘要，不能只在 KiteMarket 配置中生成随机 UUID，也不能给已登记 UUID 换摘要。

## 开发与历史资料

基础库存布局、共用页面和金额输入保留；开发者可使用自己的字体图片、按钮物品图标及逐页配置。SDK 的动作／输入仍接受服务端校验，不能以主题绕过确认或直接扣款。完整示例、34页键和生命周期说明见[开发指南](./ui-development)。

旧 `official.market-stall`／`market-stall` 偏好和历史安装命令只保留兼容，不作为当前官方产品或安装流程。已有历史素材、缓存和证明迁移时先保留，见[运维说明](./operations)；取消主题不将历史美术自动授予 MIT 许可，也不删除市场钱包、订单和资产。
