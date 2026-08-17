---
title: VerifyMC - Minecraft 白名单与注册插件
description: 现代化白名单与注册插件，支持邮箱验证、Discord 绑定、Web 管理面板和精美的 GlassX 主题。
head:
  - - meta
    - name: keywords
      content: VerifyMC, Minecraft, 白名单, 注册, 邮箱验证, Discord, 管理面板, BungeeCord, Velocity, 我的世界
  - - meta
    - property: og:title
      content: VerifyMC - Minecraft 白名单与注册插件
  - - meta
    - property: og:description
      content: 现代化白名单与注册插件，支持邮箱验证、Discord 绑定和 Web 管理面板。
layout: home

hero:
  name: "VerifyMC"
  text: "现代化 Minecraft 白名单与注册插件"
  image: /images/logo/verifymc.svg
  tagline: 强大、安全、可扩展的 Minecraft 服务器白名单管理
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
  <FeatureBox icon="shield" title="审核与通知" description="网页管理面板、实时审核、审核通过/拒绝自动邮件通知" />
  <FeatureBox icon="color-swatch" title="现代 GlassX 主题" description="精美玻璃拟态设计、动画效果、移动端友好、国际化支持" />
  <FeatureBox icon="link" title="代理与基岩版支持" description="BungeeCord/Velocity 代理插件、Geyser/Floodgate 基岩版支持" />
  <FeatureBox icon="clipboard-list" title="注册问卷" description="可自定义问卷系统、多语言支持、灵活的问题类型" />
  <FeatureBox icon="shield" title="LLM 问答评分" description="AI 驱动的文本问答自动评分，支持 DeepSeek/Google，内置熔断器与并发控制" />
</FeatureGrid>
