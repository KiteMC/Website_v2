---
title: ArcPass - Minecraft 服务器通行证插件
description: 功能强大的战斗通行证系统，支持 Paper、Spigot 和 Folia 服务端，提供多等级奖励、赛季任务和自定义 GUI。
head:
  - - meta
    - name: keywords
      content: ArcPass, Minecraft, 通行证, 战斗通行证, 服务器插件, Paper, Spigot, Folia, 奖励, 任务, 赛季
  - - meta
    - property: og:title
      content: ArcPass - Minecraft 服务器通行证插件
  - - meta
    - property: og:description
      content: 功能强大的战斗通行证系统，支持多等级奖励、赛季任务和自定义 GUI。
layout: home

hero:
  name: "ArcPass"
  text: "Minecraft 服务器通行证插件"
  image: /images/logo/arcpass.svg
  tagline: 功能强大的战斗通行证系统，支持 Paper、Spigot 和 Folia
  actions:
    - theme: brand
      text: 快速入门
      link: ./guide/
    - theme: brand
      text: 下载
      link: ./download
    - theme: alt
      text: 购买许可证
      link: https://license.kitemc.com/products/arcpass

features:
  - icon:
      src: /images/icons/ticket.svg
    title: 多等级通行证
    details: 支持免费、付费、VIP 等多个通行证等级，每个等级拥有独立的奖励路线
  - icon:
      src: /images/icons/clipboard.svg
    title: 丰富的任务系统
    details: 日常任务、周常任务、赛季任务、剧情任务，多种任务类型满足不同玩法
  - icon:
      src: /images/icons/gift.svg
    title: 灵活的奖励类型
    details: 物品、经济、权限、称号、装饰品等多种奖励，支持 Oraxen/ItemsAdder 自定义物品
  - icon:
      src: /images/icons/trophy.svg
    title: 赛季管理
    details: 完整的赛季系统，支持手动开启/结束赛季，自动重置玩家进度
  - icon:
      src: /images/icons/palette.svg
    title: 自定义 GUI
    details: 高度可配置的界面系统，支持自定义布局、物品、动画效果
  - icon:
      src: /images/icons/chart.svg
    title: 排行榜系统
    details: 等级排行、经验排行、赛季排行，激励玩家竞争
  - icon:
      src: /images/icons/plugin.svg
    title: 广泛的插件兼容
    details: 支持 Vault、LuckPerms、PlaceholderAPI、DeluxeTags、TAB、MythicMobs、Jobs 等
  - icon:
      src: /images/icons/bolt.svg
    title: Folia 支持
    details: 完全兼容 Folia 多线程服务端，适用于大型服务器
---

<script setup>
import { ref } from 'vue';
</script>

## 为什么选择 ArcPass？

ArcPass 是一款专为 Minecraft 服务器设计的专业级通行证（Battle Pass）插件。无论是小型私服还是大型商业服务器，ArcPass 都能为您的服务器增添持续的游戏目标和丰富的奖励体验。

### 核心优势

<FeatureGrid :cols="2">
  <FeatureBox
    icon="puzzle"
    title="模块化设计"
    description="通行证、任务、奖励、赛季完全独立配置，灵活组合满足各种需求"
  />
  <FeatureBox
    icon="lightning-bolt"
    title="异步处理"
    description="数据库操作异步执行，不影响服务器性能，保持流畅体验"
  />
  <FeatureBox
    icon="globe"
    title="多语言支持"
    description="内置中英文语言包，支持自定义语言文件，轻松国际化"
  />
  <FeatureBox
    icon="code"
    title="开发者友好"
    description="完整的 API 和事件系统，方便第三方插件集成和二次开发"
  />
</FeatureGrid>

### 快速链接

<LinkGrid :cols="2">
  <LinkCard
    icon="rocket"
    title="快速入门指南"
    description="5 分钟上手 ArcPass"
    href="./guide/"
  />
  <LinkCard
    icon="cog"
    title="配置文件说明"
    description="详细的配置文档"
    href="./config/"
  />
  <LinkCard
    icon="document-text"
    title="命令与权限"
    description="完整命令列表"
    href="./commands/"
  />
  <LinkCard
    icon="terminal"
    title="开发者 API"
    description="API 文档和示例代码"
    href="./developer/"
  />
  <LinkCard
    icon="question-mark-circle"
    title="常见问题"
    description="FAQ 解答"
    href="./faq/"
  />
  <LinkCard
    icon="download"
    title="下载"
    description="获取最新版本"
    href="./download"
  />
</LinkGrid>

### 获取 ArcPass

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="购买许可证"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/register"
    text="注册账户"
    theme="alt"
    icon="register"
    :external="true"
  />
  <ActionButton
    href="https://discord.com/invite/TCn9v88V"
    text="加入社区"
    theme="alt"
    icon="external"
    :external="true"
  />
</ButtonGroup>
