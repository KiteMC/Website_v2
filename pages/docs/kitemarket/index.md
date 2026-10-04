---
title: KiteMarket - Minecraft 交易集市
description: 高级收购、一口价、公开竞拍与共享钱包，完整原版 GUI、ItemsAdder 兼容及开放开发接口。¥128 买断，一个市场网络不限节点。
head:
  - - meta
    - property: og:image
      content: https://kitemc.com/images/kitemarket/kitemarket-icon-512.png
---

# KiteMarket

<img src="/images/kitemarket/kitemarket-icon-128.png" alt="KiteMarket 集市摊位图标" width="96" height="96" />

让玩家清楚地买、卖、交货，也让服主看得懂每一笔钱和物品的去向。KiteMarket 将高级收购、一口价出售、公开竞拍、领取箱和共享钱包放在一个独立插件中。同一 Minecraft 版本的多个服务器可共享一个市场。

::: info 1.0.0 发行准备
官网与开发者资料正在公开，**插件运行包暂未发布，购买暂未开放**。价格已确定为 **¥128 / USD 19.99 买断**；发行进度见[下载页](./download)。不会因准备发行而扩大[已验证范围](./compatibility)。
:::

## 一个产品，三种交易

<FeatureGrid :cols="3">
  <FeatureBox icon="cart" title="高级收购" description="先冻结预算，按材料、附魔、耐久、名称与 Lore 或精确样品收货；支持多人部分供货。" />
  <FeatureBox icon="cube" title="一口价出售" description="先托管真实物品，按公开单价部分购买；成交后到领取箱取货。" />
  <FeatureBox icon="trophy" title="公开竞拍" description="手动出价，冻结最高有效报价；被超价立即释放，末秒出价延时结算。" />
</FeatureGrid>

确认前查看数量、总额、税额与净收入；供货前检查实际交出和保留的物品。成交收入进入钱包，物品进入领取箱，背包满时仍保留资产。发布后价格、条件和费率固定，管理员干预必须填写原因。具体规则见[交易与物品条件](./trading)。

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-market.png" caption="市场列表" description="真实游戏截图待补充：展示搜索、筛选、真实商品与翻页。" />

## 原版即可使用，服主可自行设计

基础插件包含完整原版 GUI，无需资源包。默认54槽布局、36格商品列表、分步发布和金额按钮，让玩家知道当前步骤与操作后果。首页显示真实挂单、待领物品和待核对提醒；查询失败会说明暂不可用。

服主可在配置文件中调整全部34页的标题、功能物品、Lore、位置和背景，支持双语内容。无效重载保留上一份有效配置；**不提供游戏内样式编辑器**。原商品名称、附魔及 Lore 仍保留，不能用外观配置伪装交易标的。

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-home.png" caption="集市首页" description="真实游戏截图待补充：展示交易入口、个人近况与资产提醒。" />

ItemsAdder v4 兼容属于基础能力。开发者可用配置或 Java SDK 制作自有主题，自用、免费分发或独立销售，无需官方 DLC。资源未就绪时说明原因并回退原版，切换保留发布草稿。KiteMarket 不内置商业 IA 主题；官方 IA DLC、萌芽和龙核第一方开发均已取消。见[ItemsAdder 接入](./dlc)与[界面开发](./ui-development)。

## ¥128 / USD 19.99，买断完整功能

一个许可证绑定一个独立市场网络，**网络内不限节点**。独立购买产生独立许可证，不自动合并网络。首发只在 KiteMC 许可证中心购买，沿用本站支付渠道，不设首发折扣。

买断包含基础插件更新；维护期间提供问题支持，**不承诺永久维护服务**。第三方经济插件、ItemsAdder 和资源包不包含在价格中。查询 SDK 与示例采用独立 MIT 许可，核心实现保持闭源。授权说明见[网络授权](./license)。

## 共享账本，明确边界

MySQL 8 或 MariaDB 10.11 是市场权威账本；每种货币使用固定精度的整数最小单位。Vault、PlayerPoints、CoinsEngine 与 ExcellentEconomy 提供独立充提适配器，网关不可用时已有钱包余额仍可交易。外部接口结果无法确定时进入待核对，不盲目重复扣款或补发；见[钱包](./wallet)与[故障处理](./operations)。

基础目标从 Minecraft 1.16.5 起，按版本提供三个运行包。目标范围、真实交易记录和仅启动检查分别列出；本页不宣称所有版本、经济后端或性能范围都已认证。共享市场的节点必须使用相同 Minecraft 版本。

首版不提供以物易物、网页市场、混版本市场或第三方物品 ID 语义适配。精确样品仍受特殊物品支持名单和保真检查约束。

标准 bStats 基础统计（ID **34434**）默认开启，可在插件或 bStats 全局配置中关闭。没有自定义玩家、交易、许可证或数据库统计项。

## 从这里开始

- [下载与发行安排](./download)
- [安装与配置](./guide)
- [交易与物品条件](./trading)
- [命令与权限](./commands)
- [界面与第三方开发](./ui-development)
- [市场 API 入门](./api)
- [故障处理、升级与回滚](./operations)
- [版本与验证记录](./compatibility)
