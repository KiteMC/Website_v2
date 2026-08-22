---
title: VerifyMC - Minecraft 白名单与注册插件
description: 面向 Minecraft 服务器的白名单与注册插件，默认中文，支持 English、邮箱验证、Discord 绑定和 Web 管理面板。
head:
  - - meta
    - name: keywords
      content: VerifyMC, Minecraft, 白名单, 注册, 邮箱验证, Discord, 管理面板, BungeeCord, Velocity, 中文, English
  - - meta
    - property: og:title
      content: VerifyMC - Minecraft 白名单与注册插件
  - - meta
    - property: og:description
      content: 默认中文、可切换 English 的 Minecraft 白名单与注册插件，支持邮箱验证、Discord 绑定和 Web 管理面板。
layout: home

hero:
  name: "VerifyMC"
  text: "Minecraft 白名单与注册插件"
  image: /images/logo/verifymc.svg
  tagline: v1.8.0 · 中文默认，可切换 English · 注册、审核和管理一站完成
  actions:
    - theme: brand
      text: 文档
      link: ./guide/
    - theme: brand
      text: 下载
      link: ./download
    - theme: alt
      text: GitHub
      link: https://github.com/KiteMC/VerifyMC
---

<script setup>
import FeatureGrid from '@theme/components/FeatureGrid.vue';
import FeatureBox from '@theme/components/FeatureBox.vue';
</script>

<FeatureGrid :cols="3">
  <FeatureBox icon="mail" title="邮箱与图形验证码" description="邮箱验证、自托管图形验证码（数学题/文字）、域名白名单、别名限制" />
  <FeatureBox icon="gamepad" title="Discord 集成" description="OAuth2 Discord 账户绑定、可选或强制模式、持久化存储" />
  <FeatureBox icon="shield" title="审核与通知" description="网页管理面板、实时审核，以及审核结果邮件通知" />
  <FeatureBox icon="color-swatch" title="清晰的管理界面" description="GlassX 前端支持移动端、中文默认和 English 切换" />
  <FeatureBox icon="link" title="代理与基岩版支持" description="BungeeCord/Velocity 代理插件、Geyser/Floodgate 基岩版支持" />
  <FeatureBox icon="clipboard-list" title="注册问卷" description="可自定义问卷系统、多语言支持、灵活的问题类型" />
  <FeatureBox icon="shield" title="可选问卷评分" description="注册问卷支持手动审核，也可接入 DeepSeek/Google 自动评分" />
</FeatureGrid>

<p class="current-release"><strong>当前版本：v1.8.0</strong> · 查看 <a href="./download">下载与更新</a>，或直接前往 <a href="https://github.com/KiteMC/VerifyMC/releases">GitHub Releases</a>。</p>

<style>
.current-release { margin: 2rem 0 0; color: var(--vp-c-text-2); }
</style>
