---
title: VerifyMC - Minecraft Whitelist & Registration Plugin
description: Minecraft whitelist and registration plugin with Chinese as the default language, English switching, email verification, Discord linking, and a web admin panel.
head:
  - - meta
    - name: keywords
      content: VerifyMC, Minecraft, whitelist, registration, email verification, Discord, admin panel, BungeeCord, Velocity, Chinese, English
  - - meta
    - property: og:title
      content: VerifyMC - Minecraft Whitelist & Registration Plugin
  - - meta
    - property: og:description
      content: Minecraft whitelist plugin with Chinese as the default, English switching, email verification, Discord linking, and a web admin panel.
layout: home

hero:
  name: "VerifyMC"
  text: "Minecraft Whitelist & Registration Plugin"
  image: /images/logo/verifymc.svg
  tagline: v1.8.0 - Chinese by default, English available - Registration, review, and management in one place
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
  <FeatureBox icon="shield" title="Review & Notifications" description="Web admin panel, real-time review, and email notifications for decisions" />
  <FeatureBox icon="color-swatch" title="Clear Admin Interface" description="GlassX frontend with mobile support, Chinese default, and English switching" />
  <FeatureBox icon="link" title="Proxy & Bedrock Support" description="BungeeCord/Velocity proxy plugin, Geyser/Floodgate Bedrock edition support" />
  <FeatureBox icon="clipboard-list" title="Registration Questionnaire" description="Customizable questionnaire system, multi-language support, flexible question types" />
  <FeatureBox icon="shield" title="Optional Questionnaire Scoring" description="Review registration questionnaires manually or score them with DeepSeek/Google" />
</FeatureGrid>

<p class="current-release"><strong>Current release: v1.8.0</strong> - See <a href="./download">downloads and updates</a> or visit <a href="https://github.com/KiteMC/VerifyMC/releases">GitHub Releases</a>.</p>

<style>
.current-release { margin: 2rem 0 0; color: var(--vp-c-text-2); }
</style>
