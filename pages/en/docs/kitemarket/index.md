---
title: KiteMarket - Minecraft Trading Market
description: Advanced buy orders, fixed-price sales, auctions and shared wallets. Complete vanilla GUI, ItemsAdder compatibility and public SDKs. USD 9.99 for one market network with unlimited nodes.
layout: home
hero:
  name: KiteMarket
  text: A market for your players
  image: /images/kitemarket/kitemarket-icon.svg
  tagline: Buy orders, fixed-price sales and public auctions. One market network, unlimited nodes.
  actions:
    - theme: brand
      text: Getting Started
      link: ./guide
    - theme: brand
      text: Download
      link: ./download
    - theme: alt
      text: License & Pricing
      link: ./license
head:
  - - meta
    - property: og:image
      content: https://kitemc.com/images/kitemarket/kitemarket-icon-512.png
---

::: info Downloads and purchasing
**1.0.0 runtime downloads and sales are not open yet.** The one-time price is **CNY 68 / USD 9.99**. SDK and example sources are public; see the [download page](./download) for available releases.
:::

<FeatureGrid :cols="3">
  <FeatureBox icon="cart" title="Advanced buy orders" description="Reserve the full budget and accept materials, enchantments, durability, name/lore or an exact sample. Multiple players can partially fulfill an order." />
  <FeatureBox icon="cube" title="Fixed-price sales" description="Escrow actual items before listing. Buyers choose a quantity at the unit price, with a seller-defined purchase minimum, and claim items afterward." />
  <FeatureBox icon="trophy" title="Public auctions" description="Bid manually and reserve the highest valid offer. Outbid funds are released immediately, and late bids extend the deadline." />
  <FeatureBox icon="cog" title="Configurable vanilla GUI" description="No resource pack needed. Customize all 35 pages' titles, functional icons, lore, positions and backgrounds in files." />
  <FeatureBox icon="globe" title="A shared market network" description="Share wallets, orders and claim assets between nodes on the same Minecraft version, with no node-count limit." />
  <FeatureBox icon="code" title="Public developer interfaces" description="Java 11 / MIT query and UI SDKs for your own ItemsAdder themes and independent integrations." />
</FeatureGrid>

## Understand the trade before confirming

Buying, selling, fulfillment and bidding use shared flows. Review quantity, total, tax and net income before confirming. Fulfillment previews show the actual items that will leave your inventory and those that will stay. Income goes to wallets and goods go to claims; a full inventory does not drop or discard assets.

Published prices, conditions and fees are fixed. Administrative intervention needs a recorded reason, and an uncertain result enters review with a queryable operation ID. See [trading and item conditions](./trading).

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-market.png" caption="Market listings" description="Real gameplay screenshot coming later: search, filters, actual items and pagination." />

## Ready for vanilla clients, made for your own design

The complete vanilla GUI needs no resource pack. A 54-slot layout, 36 listing slots, guided publishing and amount buttons explain the current step and its consequences. Home separates fixed-price sales, buy-order fulfillment and auctions, with my market, claims, wallet and my orders in its corners. Actual asset and review reminders report unavailable queries clearly.

Server owners can configure titles, functional item icons, lore, positions and backgrounds for all 35 pages, with bilingual text; existing home customization remains supported. Invalid reloads retain the previous valid configuration. **There is no in-game appearance editor.** Actual trade items retain their names, enchantments and lore; appearance settings cannot disguise them.

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-home.png" caption="Market home" description="Real gameplay screenshot coming later: trading entrances, personal activity and asset reminders." />

ItemsAdder v4 compatibility is a base capability. Install your own or a third-party theme to use its resource-pack interface. Missing resources explain the reason and fall back to vanilla; switching preserves drafts. Developers may create configuration themes or Java renderers for private use, free distribution or independent sale without an additional KiteMC theme license. IA theme resources are not bundled. See [ItemsAdder integration](./dlc) and [interface development](./ui-development).

## CNY 68 / USD 9.99 for the complete product

One license binds to one independent market network with **no node-count limit**. Separate purchases create separate licenses rather than merging networks. Purchase through the KiteMC License Center once sales open.

The one-time purchase includes base-plugin updates and issue support while maintained. **Perpetual maintenance service is not promised.** Third-party economy plugins, ItemsAdder and resource packs are sold separately by their providers. Query SDKs and examples have independent MIT licenses; the core implementation remains closed source. See [network licensing](./license).

## Shared accounting, clear boundaries

MySQL 8 or MariaDB 10.11 is the authoritative market ledger. Each currency uses integer minor units at a fixed precision. Vault, PlayerPoints, CoinsEngine and ExcellentEconomy have separate transfer adapters. Existing wallet funds remain usable when a gateway is unavailable. An uncertain external result requires review rather than blindly repeating a debit or item delivery; see [wallets](./wallet) and [recovery](./operations).

The base target begins at Minecraft 1.16.5, with three runtime distributions. See [compatibility](./compatibility) for target coverage, existing tests and startup-only checks. Nodes sharing a market must run the same Minecraft version.

V1 does not include barter, a web market, mixed-version markets or semantic integration with third-party item IDs. Exact samples still obey special-item admission and fidelity checks.

Standard bStats basic metrics (ID **34434**) are enabled by default and can be disabled in the plugin or global bStats configuration. No custom player, transaction, license or database metrics are added.

## Get started

<LinkGrid :cols="2">
  <LinkCard icon="rocket" title="Installation & Configuration" description="Choose a runtime, connect your database and configure currencies and licensing." href="./guide" />
  <LinkCard icon="cart" title="Trading & Item Conditions" description="Buy orders, fixed-price sales, auctions and advanced matching rules." href="./trading" />
  <LinkCard icon="document-text" title="Commands & Permissions" description="Player commands, administration and read-only audit permissions." href="./commands" />
  <LinkCard icon="terminal" title="Market API" description="Asynchronous queries, immutable data and committed-trade notifications." href="./api" />
  <LinkCard icon="code" title="UI SDK" description="Configuration themes, IA icons and Java renderer examples." href="./ui-development" />
  <LinkCard icon="shield" title="Recovery & Upgrades" description="Review uncertain operations, back up assets and upgrade safely." href="./operations" />
</LinkGrid>

<ButtonGroup>
  <ActionButton href="./download" text="Downloads & Versions" theme="brand" icon="download" />
  <ActionButton href="./license" text="License & Pricing" theme="alt" icon="cart" />
  <ActionButton href="https://github.com/KiteMC/KiteMarket" text="GitHub Repository" theme="alt" icon="external" :external="true" />
</ButtonGroup>
