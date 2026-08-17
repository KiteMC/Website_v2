---
title: VerifyMC - Minecraft Whitelist & Registration Plugin
description: Modern whitelist and registration plugin with email verification, Discord integration, admin panel, and beautiful GlassX theme for Minecraft servers.
head:
  - - meta
    - name: keywords
      content: VerifyMC, Minecraft, whitelist, registration, email verification, Discord, admin panel, BungeeCord, Velocity
  - - meta
    - property: og:title
      content: VerifyMC - Minecraft Whitelist & Registration Plugin
  - - meta
    - property: og:description
      content: Modern whitelist plugin with email verification, Discord integration, and web admin panel for Minecraft servers.
layout: home

hero:
  name: "VerifyMC"
  text: "Modern Minecraft Whitelist & Registration Plugin"
  image: /images/logo/verifymc.svg
  tagline: Powerful, secure, and extensible whitelist management for Minecraft servers
  actions:
    - theme: brand
      text: Documentation
      link: ./guide/
    - theme: brand
      text: Download
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
  <FeatureBox icon="mail" title="Email & CAPTCHA Verification" description="Email verification, self-hosted graphical CAPTCHA (math/text), domain whitelist, alias restrictions" />
  <FeatureBox icon="gamepad" title="Discord Integration" description="OAuth2 Discord account linking, optional or required mode, persistent storage" />
  <FeatureBox icon="shield" title="Admin Review & Notifications" description="Web admin panel, real-time review, automatic email notifications for approval/rejection" />
  <FeatureBox icon="color-swatch" title="Modern GlassX Theme" description="Beautiful glassmorphism design, animated effects, mobile-friendly, i18n support" />
  <FeatureBox icon="link" title="Proxy & Bedrock Support" description="BungeeCord/Velocity proxy plugin, Geyser/Floodgate Bedrock edition support" />
  <FeatureBox icon="clipboard-list" title="Registration Questionnaire" description="Customizable questionnaire system, multi-language support, flexible question types" />
  <FeatureBox icon="shield" title="LLM Essay Scoring" description="AI-powered auto-scoring for text questionnaire answers via DeepSeek/Google, with circuit breaker and concurrency control" />
</FeatureGrid>
