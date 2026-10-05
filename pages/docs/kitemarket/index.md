---
title: KiteMarket - Minecraft 交易集市
description: 高级收购、一口价、公开竞拍与共享钱包，完整原版 GUI、ItemsAdder 兼容及开放开发接口。¥68 买断，一个市场网络不限节点。
layout: home
hero:
  name: KiteMarket
  text: 玩家交易集市
  image: /images/kitemarket/kitemarket-icon.svg
  tagline: 高级收购、一口价与公开竞拍。一个市场网络，节点不限。
  actions:
    - theme: brand
      text: 快速入门
      link: ./guide
    - theme: brand
      text: 下载
      link: ./download
    - theme: alt
      text: 授权与价格
      link: ./license
head:
  - - meta
    - property: og:image
      content: https://kitemc.com/images/kitemarket/kitemarket-icon-512.png
---

::: info 下载与购买
**1.0.0 运行包及购买暂未开放。** 价格为 **¥68 / USD 9.99 买断**；开发接口与示例源码已公开，实际发行状态见[下载页](./download)。
:::

<FeatureGrid :cols="3">
  <FeatureBox icon="cart" title="高级收购" description="先冻结预算，按材料、附魔、耐久、名称与 Lore 或精确样品收货；支持多人部分供货。" />
  <FeatureBox icon="cube" title="一口价出售" description="先托管真实物品，按每件单价部分购买；卖家可设置最低购买量，成交后到领取箱取货。" />
  <FeatureBox icon="trophy" title="公开竞拍" description="手动出价，冻结最高有效报价；被超价立即释放，末秒出价延时结算。" />
  <FeatureBox icon="cog" title="个性化原版 GUI" description="无需资源包，在文件中配置全部35页的标题、功能物品、Lore、位置和背景。" />
  <FeatureBox icon="globe" title="同版本共享市场" description="共享钱包、订单与领取资产；一个许可证对应一个独立市场网络，网络内不限节点。" />
  <FeatureBox icon="code" title="开放开发接口" description="Java 11／MIT 查询与界面 SDK，支持 ItemsAdder 自有主题和独立开发插件。" />
</FeatureGrid>

## 看清交易，再放心确认

买、卖、交货和竞拍使用统一流程。确认前查看数量、总额、税额与净收入，供货时能看到实际交出和保留的物品。成交收入进入钱包，商品进入领取箱；背包满时仍保留资产，不掉落或删除。

发布后价格、条件和费率固定，管理员干预必须填写原因；结果不确定时进入待核对，保留可查询的操作编号。具体规则见[交易与物品条件](./trading)。

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-market.png" caption="市场列表" description="真实游戏截图待补充：展示搜索、筛选、真实商品与翻页。" />

## 原版就能用，外观由你决定

基础插件包含完整原版 GUI，无需资源包。默认54槽布局、36格商品列表、分步发布和金额按钮，让玩家知道当前步骤与操作后果。首页提供一口价、收购供货和竞拍入口，四角连接我的集市、领取箱、钱包和我的挂单；真实资产与待核对提醒查询失败时会说明暂不可用。

服主可在配置文件中调整全部35页的标题、功能物品、Lore、位置和背景，支持双语内容；旧首页配置继续兼容。无效重载保留上一份有效配置；**不提供游戏内样式编辑器**。原商品名称、附魔及 Lore 仍保留，不能用外观配置伪装交易标的。

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-home.png" caption="集市首页" description="真实游戏截图待补充：展示交易入口、个人近况与资产提醒。" />

ItemsAdder v4 兼容属于基础能力。安装自有或第三方主题后，即可使用资源包界面；资源未就绪时说明原因并回退原版，切换保留发布草稿。开发者可通过配置或 Java SDK 自用、免费分发或独立销售主题，不需要额外的 KiteMC 主题授权。插件不内置 IA 主题资源。见[ItemsAdder 接入](./dlc)与[界面开发](./ui-development)。

## ¥68 / USD 9.99，买断完整功能

一个许可证绑定一个独立市场网络，**网络内不限节点**。独立购买产生独立许可证，不自动合并网络。开放销售后通过 KiteMC 许可证中心购买。

买断包含基础插件更新；维护期间提供问题支持，**不承诺永久维护服务**。第三方经济插件、ItemsAdder 和资源包不包含在价格中。查询 SDK 与示例采用独立 MIT 许可，核心实现保持闭源。授权说明见[网络授权](./license)。

## 共享账本，明确边界

MySQL 8 或 MariaDB 10.11 是市场权威账本；每种货币使用固定精度的整数最小单位。Vault、PlayerPoints、CoinsEngine 与 ExcellentEconomy 提供独立充提适配器，网关不可用时已有钱包余额仍可交易。外部接口结果无法确定时进入待核对，不盲目重复扣款或补发；见[钱包](./wallet)与[故障处理](./operations)。

基础目标从 Minecraft 1.16.5 起，按版本提供三个运行包。目标范围、已有实测和仅启动检查见[兼容说明](./compatibility)。共享市场的节点必须使用相同 Minecraft 版本。

首版不提供以物易物、网页市场、混版本市场或第三方物品 ID 语义适配。精确样品仍受特殊物品支持名单和保真检查约束。

标准 bStats 基础统计（ID **34434**）默认开启，可在插件或 bStats 全局配置中关闭。没有自定义玩家、交易、许可证或数据库统计项。

## 从这里开始

<LinkGrid :cols="2">
  <LinkCard icon="rocket" title="安装与配置" description="选择运行包，连接数据库，配置货币与网络授权。" href="./guide" />
  <LinkCard icon="cart" title="交易与物品条件" description="了解收购、一口价、竞拍和高级匹配条件。" href="./trading" />
  <LinkCard icon="document-text" title="命令与权限" description="玩家入口、服主管理与只读审计权限。" href="./commands" />
  <LinkCard icon="terminal" title="市场 API" description="异步查询、不可变数据与成交后通知。" href="./api" />
  <LinkCard icon="code" title="界面 SDK" description="配置主题、IA 图标和 Java 呈现器示例。" href="./ui-development" />
  <LinkCard icon="shield" title="故障与升级" description="核对不确定操作，备份资产并安全升级。" href="./operations" />
</LinkGrid>

<ButtonGroup>
  <ActionButton href="./download" text="下载与版本" theme="brand" icon="download" />
  <ActionButton href="./license" text="授权与价格" theme="alt" icon="cart" />
  <ActionButton href="https://github.com/KiteMC/KiteMarket" text="GitHub 仓库" theme="alt" icon="external" :external="true" />
</ButtonGroup>
