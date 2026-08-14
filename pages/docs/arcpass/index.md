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

---

<script setup>
import { ref } from 'vue';
</script>

<FeatureGrid :cols="3">
  <FeatureBox icon="ticket" title="Multi-Tier Pass System" description="Support for free, premium, and VIP tiers with independent reward tracks" />
  <FeatureBox icon="clipboard-list" title="Rich Quest System" description="Daily, weekly, seasonal, and story quests with various objectives" />
  <FeatureBox icon="gift" title="Flexible Reward Types" description="Items, economy, permissions, titles, cosmetics, and custom items via Oraxen/ItemsAdder" />
  <FeatureBox icon="trophy" title="Season Management" description="Complete season system with manual control and automatic player progress reset" />
  <FeatureBox icon="color-swatch" title="Customizable GUI" description="Highly configurable interface system with custom layouts, items, and animations" />
  <FeatureBox icon="chart-bar" title="Leaderboard System" description="Level, experience, and season rankings to encourage competition" />
  <FeatureBox icon="puzzle" title="Wide Plugin Compatibility" description="Supports Vault, LuckPerms, PlaceholderAPI, DeluxeTags, TAB, MythicMobs, Jobs, and more" />
  <FeatureBox icon="lightning-bolt" title="Folia Support" description="Fully compatible with Folia multi-threaded server software" />
  <FeatureBox icon="globe" title="Cross-Server Support" description="Seamless multi-server sync via Redis or shared MySQL with migration locks and distributed locking" />
</FeatureGrid>

## What's New In 1.8.5

- Fixed intermittent cases where points or economy balance were deducted but the purchased pass tier was not granted.
- Purchase success now waits for the tier grant to be persisted instead of relying on a later auto-save.
- Save failures roll back the tier grant and refund the deducted currency.
- Purchases are serialized per player to prevent rapid clicks or concurrent requests from charging more than once.
- The GUI shop and `/ap buy` command now share the same transactional purchase path.

### 1.8.x Features

- Full in-game reward editor with item capture, serialization, material browsing, amount editing, and display-item preview.
- Expanded quest conditions, trigger dispatching, completion tracking, and integration APIs.
- Safer season and cross-server data with generation tracking, reconciliation, archives, and stale-write protection.
- Bundled reward definitions, including title rewards, with stronger reference validation.
- Improved Bukkit/Folia adapters, GUI schema validation, configuration migration, and localization.
- MariaDB 10.11 compatibility fixes for quest completion and reward claim persistence.

<div style="margin: 2rem 0;">
  <img src="/images/arcpass/cover-16x9.png" alt="ArcPass Cover" style="border-radius: 12px; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>

### Feature Demos

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 1.5rem 0;">
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S02.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Multi-Tier Pass System</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S05.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Quest System</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S06.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Quest Completion Flow</p>
  </div>
  <div>
    <video autoplay loop muted playsinline style="border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.12);">
      <source src="/images/arcpass/scenes/S07.mp4" type="video/mp4" />
    </video>
    <p style="text-align: center; color: var(--vp-c-text-2); margin-top: 8px; font-size: 0.9em;">Leaderboard</p>
  </div>
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
    description="Simplified Chinese by default, with optional English and custom language packs"
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
