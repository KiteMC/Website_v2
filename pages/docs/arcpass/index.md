---
title: ArcPass - Battle Pass Plugin for Minecraft Servers
description: Powerful battle pass system for Paper, Spigot, and Folia servers with multi-tier rewards, seasonal quests, and customizable GUI.
head:
  - - meta
    - name: keywords
      content: ArcPass, Minecraft, battle pass, server plugin, Paper, Spigot, Folia, rewards, quests, seasons
  - - meta
    - property: og:title
      content: ArcPass - Battle Pass Plugin for Minecraft
  - - meta
    - property: og:description
      content: Powerful battle pass system with multi-tier rewards, seasonal quests, and customizable GUI for Minecraft servers.
layout: home

hero:
  name: "ArcPass"
  text: "Battle Pass Plugin for Minecraft"
  image: /images/logo/arcpass.svg
  tagline: Powerful battle pass system for Paper, Spigot, and Folia servers
  actions:
    - theme: brand
      text: Getting Started
      link: ./guide/
    - theme: brand
      text: Download
      link: ./download
    - theme: alt
      text: Purchase License
      link: https://license.kitemc.com/products/arcpass

features:
  - icon:
      src: /images/icons/ticket.svg
    title: Multi-Tier Pass System
    details: Support for free, premium, and VIP tiers with independent reward tracks
  - icon:
      src: /images/icons/clipboard.svg
    title: Rich Quest System
    details: Daily, weekly, seasonal, and story quests with various objectives
  - icon:
      src: /images/icons/gift.svg
    title: Flexible Reward Types
    details: Items, economy, permissions, titles, cosmetics, and custom items via Oraxen/ItemsAdder
  - icon:
      src: /images/icons/trophy.svg
    title: Season Management
    details: Complete season system with manual control and automatic player progress reset
  - icon:
      src: /images/icons/palette.svg
    title: Customizable GUI
    details: Highly configurable interface system with custom layouts, items, and animations
  - icon:
      src: /images/icons/chart.svg
    title: Leaderboard System
    details: Level, experience, and season rankings to encourage competition
  - icon:
      src: /images/icons/plugin.svg
    title: Wide Plugin Compatibility
    details: Supports Vault, LuckPerms, PlaceholderAPI, DeluxeTags, TAB, MythicMobs, Jobs, and more
  - icon:
      src: /images/icons/bolt.svg
    title: Folia Support
    details: Fully compatible with Folia multi-threaded server software
---

<script setup>
import { ref } from 'vue';
</script>

## Preview

<div style="margin: 2rem 0;">
  <img src="/images/arcpass/cover-banner.png" alt="ArcPass Cover Banner" style="border-radius: 12px; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>

### Screenshots

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 1.5rem 0;">
  <div>
    <img src="/images/arcpass/screenshot-main-menu.png" alt="Main Menu" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Main Menu</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-reward-track.png" alt="Reward Track" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Reward Track</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-quest-list.png" alt="Quest List" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Quest List</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-leaderboard.png" alt="Leaderboard" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Leaderboard</p>
  </div>
  <div>
    <img src="/images/arcpass/screenshot-admin-panel.png" alt="Admin Panel" style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);" />
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Admin Panel</p>
  </div>
</div>

### Reward Track Demo

<video controls style="border-radius: 12px; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 1rem 0;">
  <source src="/images/arcpass/footage-reward-track.mkv" type="video/x-matroska" />
  Your browser does not support this video format.
</video>

## Why Choose ArcPass?

ArcPass is a professional-grade battle pass plugin designed for Minecraft servers. Whether you run a small private server or a large commercial network, ArcPass provides continuous gameplay goals and rich reward experiences.

### Core Advantages

<FeatureGrid :cols="2">
  <FeatureBox
    icon="puzzle"
    title="Modular Design"
    description="Passes, quests, rewards, and seasons are independently configurable for flexible combinations"
  />
  <FeatureBox
    icon="lightning-bolt"
    title="Async Operations"
    description="Database operations run asynchronously without impacting server performance"
  />
  <FeatureBox
    icon="globe"
    title="Multi-Language"
    description="Built-in English and Chinese, supports custom language packs for easy internationalization"
  />
  <FeatureBox
    icon="code"
    title="Developer Friendly"
    description="Complete API and event system for third-party integration and customization"
  />
</FeatureGrid>

### Quick Links

<LinkGrid :cols="2">
  <LinkCard
    icon="rocket"
    title="Getting Started Guide"
    description="Get up and running in 5 minutes"
    href="./guide/"
  />
  <LinkCard
    icon="cog"
    title="Configuration Guide"
    description="Detailed configuration documentation"
    href="./config/"
  />
  <LinkCard
    icon="document-text"
    title="Commands & Permissions"
    description="Complete command list"
    href="./commands/"
  />
  <LinkCard
    icon="terminal"
    title="Developer API"
    description="API documentation and examples"
    href="./developer/"
  />
  <LinkCard
    icon="question-mark-circle"
    title="FAQ"
    description="Frequently asked questions"
    href="./faq/"
  />
  <LinkCard
    icon="download"
    title="Download"
    description="Get the latest version"
    href="./download"
  />
</LinkGrid>

### Get ArcPass

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="Purchase License"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/register"
    text="Register Account"
    theme="alt"
    icon="register"
    :external="true"
  />
  <ActionButton
    href="https://discord.gg/dcsBw5Z5ZT"
    text="Join Community"
    theme="alt"
    icon="external"
    :external="true"
  />
</ButtonGroup>
