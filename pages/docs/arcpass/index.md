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
    href="https://discord.com/invite/TCn9v88V"
    text="Join Community"
    theme="alt"
    icon="external"
    :external="true"
  />
</ButtonGroup>
