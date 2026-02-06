---
title: KiteMC - Minecraft Server Tools & Plugins
description: Official documentation for KiteMC team projects including VerifyMC whitelist plugin and ArcPass battle pass system.
head:
  - - meta
    - name: keywords
      content: KiteMC, Minecraft, server, plugin, VerifyMC, ArcPass, documentation
  - - meta
    - property: og:title
      content: KiteMC - Minecraft Server Tools & Plugins
  - - meta
    - property: og:description
      content: Official documentation for KiteMC team projects including VerifyMC and ArcPass.
layout: home

hero:
  name: 'KiteMC'
  text: 'Documentation'
  tagline: 'Documentation for all KiteMC team projects'
  image:
    src: /images/logo/kitemc.svg
    alt: KiteMC
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/KiteMC/
---

## Our Projects

<ProductGrid :cols="2">
  <ProductCard
    title="ArcPass"
    description="Powerful battle pass system for Minecraft servers with multi-tier rewards and seasons"
    image="/images/logo/arcpass.svg"
    href="./docs/arcpass/"
    link-text="Start Reading"
  />
  <ProductCard
    title="VerifyMC"
    description="Real-name email verification plugin with web-based management dashboard"
    image="/images/logo/verifymc.svg"
    href="./docs/verifymc/"
    link-text="Start Reading"
  />
</ProductGrid>

## Friend Links

<FriendLinks :links="[
  {
    name: 'KiteMC License Center',
    description: 'License management platform',
    image: '/images/logo/kitemc.svg',
    href: 'https://license.kitemc.com/'
  },
  {
    name: 'Rainyun',
    description: 'Cloud service provider',
    image: '/images/logo/rainyun.png',
    href: 'https://cloud.kitemc.com/'
  }
]" />
