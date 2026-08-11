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

---

<script setup>
import { ref } from 'vue';
</script>

<FeatureGrid :cols="3">
  <FeatureBox icon="ticket" title="多等级通行证" description="支持免费、付费、VIP 等多个通行证等级，每个等级拥有独立的奖励路线" />
  <FeatureBox icon="clipboard-list" title="丰富的任务系统" description="日常任务、周常任务、赛季任务、剧情任务，多种任务类型满足不同玩法" />
  <FeatureBox icon="gift" title="灵活的奖励类型" description="物品、经济、权限、称号、装饰品等多种奖励，支持 Oraxen/ItemsAdder 自定义物品" />
  <FeatureBox icon="trophy" title="赛季管理" description="完整的赛季系统，支持手动开启/结束赛季，自动重置玩家进度" />
  <FeatureBox icon="color-swatch" title="自定义 GUI" description="高度可配置的界面系统，支持自定义布局、物品、动画效果" />
  <FeatureBox icon="chart-bar" title="排行榜系统" description="等级排行、经验排行、赛季排行，激励玩家竞争" />
  <FeatureBox icon="puzzle" title="广泛的插件兼容" description="支持 Vault、LuckPerms、PlaceholderAPI、DeluxeTags、TAB、MythicMobs、Jobs 等" />
  <FeatureBox icon="lightning-bolt" title="Folia 支持" description="完全兼容 Folia 多线程服务端，适用于大型服务器" />
  <FeatureBox icon="globe" title="跨服支持" description="通过 Redis 或共享 MySQL 实现无缝跨服数据同步，支持迁移锁和分布式锁" />
</FeatureGrid>

## 预览

## 1.8.2 更新

- 正式支持 `playtime` 在线时长任务，任务进度按玩家在线分钟累计。
- 兼容升级前已有的 `zaixian30`、`zaixian180`、`zaixian900` 等在线任务。
- 修复在线任务导致整套任务配置加载失败、插件无法完成初始化的问题。
- 修复初始化失败后一直显示“插件正在初始化”的误导提示。

### 1.8.x 功能

- 全新的游戏内奖励编辑器：支持从背包捕获物品、物品序列化、材料浏览、数量编辑和展示物品预览。
- 增强任务系统：支持条件评估、触发器分发、完成记录和更完整的任务集成 API。
- 赛季与跨服数据可靠性提升：加入赛季代数、赛季数据协调、历史归档和过期写入保护。
- 新增内置奖励定义及称号奖励，并加强奖励引用校验。
- 完善 Bukkit/Folia 适配、GUI 配置校验、配置迁移和本地化支持。
- MariaDB 10.11 兼容性修复，解决任务完成和奖励领取保存失败。

<div style="margin: 2rem 0;">
  <img src="/images/arcpass/cover-16x9.png" alt="ArcPass 封面" style="border-radius: 12px; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>

### 功能演示

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 1.5rem 0;">
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S02.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">多等级通行证</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S05.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">任务系统</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S06.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">任务完成流程</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S07.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">排行榜</p>
  </div>
</div>

### 截图展示

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 1.5rem 0;">
  <div>
    <img src="/images/arcpass/screenshot-main-menu.png" alt="主菜单" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">主菜单</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-reward-track.png" alt="奖励轨道" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">奖励轨道</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-quest-list.png" alt="任务列表" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">任务列表</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-leaderboard.png" alt="排行榜" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">排行榜</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-admin-panel.png" alt="管理面板" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">管理面板</p>
  </div>
</div>

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
    href="https://discord.gg/dcsBw5Z5ZT"
    text="加入社区"
    theme="alt"
    icon="external"
    :external="true"
  />
</ButtonGroup>
