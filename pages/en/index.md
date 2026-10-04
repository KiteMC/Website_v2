---
title: KiteMC - Minecraft Server Tools & Plugins
description: KiteMC documentation for KiteMarket, ArcPass, and archived projects.
head:
  - - meta
    - name: keywords
      content: KiteMC, KiteMarket, Minecraft, server, plugin, VerifyMC, ArcPass, documentation
  - - meta
    - property: og:title
      content: KiteMC - Minecraft Server Tools & Plugins
  - - meta
    - property: og:description
      content: Official documentation for KiteMarket, ArcPass, and archived KiteMC projects.
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
    title="KiteMarket"
    description="Advanced buy orders, fixed-price sales, public auctions and shared wallets. Complete vanilla GUI, extensible IA themes; USD 19.99 one-time purchase"
    image="/images/kitemarket/kitemarket-icon-128.png"
    href="./docs/kitemarket/"
    link-text="Product & release status"
  />
  <ProductCard
    title="ArcPass"
    description="Powerful battle pass system for Minecraft servers with multi-tier rewards and seasons"
    image="/images/logo/arcpass.svg"
    href="./docs/arcpass/"
    link-text="Start Reading"
  />
  <ProductCard
    title="VerifyMC"
    description="Discontinued email verification plugin. Historical documentation remains available for existing users"
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
    name: 'Afdian',
    description: 'Support KiteMC creators',
    image: 'https://ifdian.net/favicon.ico',
    href: 'https://ifdian.net/a/kitemc'
  },
  {
    name: 'Rainyun',
    description: 'Cloud service provider',
    image: '/images/logo/rainyun.png',
    href: 'https://cloud.kitemc.com/'
  }
]" />
