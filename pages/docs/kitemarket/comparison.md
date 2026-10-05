---
title: 市场插件对比
description: 基于公开一手资料，对比 SweetPlayerMarket、QuickShop-Hikari、zAuctionHouse 与 KiteMarket 的定位和可核对能力。
---

# 市场插件对比

这页帮助服主判断 KiteMarket 适合什么场景。对比范围包括两个开源项目、一个商业市场插件和 KiteMarket：

- [SweetPlayerMarket](https://github.com/MrXiaoM/SweetPlayerMarket)：开源的集中式玩家市场，作者资料列出出售、收购、MySQL 与跨服等能力。
- [QuickShop-Hikari](https://github.com/QuickShop-Community/QuickShop-Hikari)：开源的箱子商店，重点是玩家在世界中创建和经营商店。
- [zAuctionHouse](https://github.com/GroupeZ-dev/zAuctionHouse)：商业发行的拍卖／市场插件，同时公开了源码仓库和功能说明。
- **KiteMarket**：面向需要收购订单、固定价出售、公开竞拍和共享资产处理的服务器市场。

**资料核对日期：2026 年 10 月 5 日（Asia/Shanghai）。** 本页只引用作者仓库、作者商品页和官方文档；没有把“页面未提到”写成“不支持”，也没有用未经完成的横向实测来宣称性能或可靠性领先。价格、版本和功能可能随作者更新，付费产品以其官方商品页为准。

## 先看产品定位

| 产品 | 更适合的主要场景 | 公开资料中的收费／分发方式 |
| --- | --- | --- |
| SweetPlayerMarket | 想要集中式出售、收购和跨服市场，并且能查看源码的服主 | 作者资源页标注免费更新；源码公开，具体授权以仓库为准 |
| QuickShop-Hikari | 想让玩家在建筑附近开设箱子商店，形成世界内的点对点交易 | 开源项目，使用仓库声明的许可证 |
| zAuctionHouse | 想使用现成的固定价市场、批量出售、分类和管理功能的服务器 | 商业发行；当前价格与购买条款见其 [Spigot 商品页](https://www.spigotmc.org/resources/zauctionhouse-1-8-1-21.81494/) |
| KiteMarket | 想把收购、固定价、竞拍、钱包、领取箱和异常核对放进一套统一流程 | 买断价格和网络授权规则见 [KiteMarket 许可证页](./license) |

QuickShop-Hikari 与集中式市场并不是同一种产品：它擅长“玩家拥有一个商店并在世界中展示”，而 KiteMarket、SweetPlayerMarket 和 zAuctionHouse 更接近“全服可搜索的市场”。选择时应先确定玩家要找的是附近的店，还是一张共享订单簿。

## 能力对照

| 维度 | SweetPlayerMarket | QuickShop-Hikari | zAuctionHouse（公开 V4 资料） | KiteMarket |
| --- | --- | --- | --- | --- |
| 主要交易 | 作者页面列出出售和收购市场 | 箱子商店的买入／卖出 | 固定价上架、批量出售、分类、搜索与分页 | 高级收购订单、一口价出售、公开手动竞拍 |
| 收购订单 | 公开资料明确列出收购 | 不是核心流程 | 本次公开资料未核实 KiteMarket 式收购订单；README 的 V4 路线图将 Bid／Auction 列为待实现项 | 发布时冻结完整预算；支持多人部分供货，条件与最终扣物使用同一判定器 |
| 物品条件 | 作者资料列出市场筛选与上架限制；具体规则需按发行版核对 | 官方 README 列出 NBT、附魔、耐久、药水和生物蛋等物品属性支持 | README 列出自定义物品插件兼容和潜影盒预览 | 普通材料、高级条件和精确样品三种模式；材料集合、附魔等级、耐久比例、名称与 Lore 可组合 |
| 购买前确认 | 有市场详情和记录能力；本页不把它扩展成与 KiteMarket 相同的交货预览 | 交易围绕商店箱子完成 | README 列出物品预览、历史和管理能力 | 显示将交出／保留的实际物品、数量、总额、税额和净收入；确认前重新检查背包 |
| 资产去向 | 作者资料列出交易记录；领取语义按发行版核对 | 物品和货币在箱子商店交易中流转 | README 列出历史、日志和找回相关能力 | 成交物品进入领取箱，钱包收入和未售物品可追踪；背包满时不掉落、不删除 |
| 共享市场与经济 | 作者资料列出 MySQL／跨服方向；具体后端按发行版核对 | 以箱子商店为中心，数据库与网络拓扑按官方文档配置 | README 列出 Redis、分布式锁和消息同步扩展 | MySQL 8／MariaDB 10.11 权威账本；Vault、PlayerPoints、CoinsEngine、ExcellentEconomy 独立适配 |
| 界面与扩展 | 源码可读，适合自行改造 | 提供 API 与主题／消息配置 | 以 zMenu 等配置和扩展生态为主 | 原版 35 页文件配置；ItemsAdder v4 兼容；Java 11 查询与界面 SDK，第三方主题可独立开发和销售 |
| 可靠性边界 | 需要按固定发行版实测 | 需要按商店、经济插件和网络配置实测 | 需要按购买的具体版本和依赖实测 | 结果分为成功、拒绝、可安全重试和待核对；外部经济或物品副作用未知时不盲目重放 |

表中“未核实”表示本次公开资料没有足够证据，不代表该产品永远没有对应能力。正式选型时，应固定具体版本、服务端、依赖和配置，对相同任务进行实测。

## KiteMarket 的差异化重点

KiteMarket 的卖点不是把所有市场插件已有的功能重新命名，而是把几条通常需要分别核对的流程放到同一个可追踪链路中：

1. **收购条件可读。** 发布者可以用材料集合、附魔范围、耐久比例、名称／Lore 条件或精确样品表达需求；供应者在交货前看到每个物品为何匹配或不匹配。
2. **预览和最终扣物使用同一规则。** 预览不会另外生成一份“看起来符合”的物品；确认时重新检查实际背包，并保存真实物品快照。
3. **三种交易各自保持清晰语义。** 一口价使用每件单价，可按发布者设定的最低购买量分批购买；竞拍按整件或整堆报价，不显示容易误解的“剩余 x/y”库存语义。
4. **钱和物品有明确去向。** 成交收入进入市场钱包，商品进入领取箱；满背包时继续保留待领取资产。外部接口无法确认时，管理员可以查看待核对记录，而不是猜测已经成功。
5. **服主和开发者都能扩展。** 服主在配置文件中调整页面标题、物品、Lore、位置和背景；开发者通过 Java SDK 或 ItemsAdder 自有主题接入页面，不需要购买官方主题资源。

这些是当前规格与文档中可以核对的产品设计重点，不是对所有竞品完成同环境基准测试后的“全面领先”结论。真实认证范围见[版本与认证状态](./compatibility)。

## 按需求选择

| 你的首要需求 | 可以优先查看 |
| --- | --- |
| 世界内的玩家商店、商品展示和就地交易 | [QuickShop-Hikari](https://github.com/QuickShop-Community/QuickShop-Hikari) |
| 开源集中市场，愿意自行维护和改造源码 | [SweetPlayerMarket](https://github.com/MrXiaoM/SweetPlayerMarket) |
| 固定价市场、批量出售和现成管理生态 | [zAuctionHouse 文档](https://zauctionhouse.groupez.dev/) |
| 高级收购、交货前匹配预览、共享钱包和异常核对 | KiteMarket 的[交易说明](./trading)、[钱包](./wallet)与[故障处理](./operations) |

## 来源与更新边界

- [SweetPlayerMarket 作者资源页](https://www.minebbs.com/resources/sweetplayermarket.14679/) 与[官方仓库](https://github.com/MrXiaoM/SweetPlayerMarket)
- [QuickShop-Hikari 官方仓库](https://github.com/QuickShop-Community/QuickShop-Hikari) 与其仓库内的 README、许可证和文档链接
- [zAuctionHouse 官方仓库](https://github.com/GroupeZ-dev/zAuctionHouse)、[公开文档](https://zauctionhouse.groupez.dev/) 与 [Spigot 商品页](https://www.spigotmc.org/resources/zauctionhouse-1-8-1-21.81494/)
- KiteMarket 自身的[交易规则](./trading)、[界面开发](./ui-development)和[认证范围](./compatibility)

公开资料会随版本变化。若要做采购或迁移决定，请把核对日期、具体发行版、依赖版本和实际测试结果一并记录。
