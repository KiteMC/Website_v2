---
title: KiteMarket - Minecraft Trading Market
description: Advanced buy orders, fixed-price sales, auctions and shared wallets. Complete vanilla GUI, ItemsAdder compatibility and public SDKs. USD 19.99 for one market network with unlimited nodes.
head:
  - - meta
    - property: og:image
      content: https://kitemc.com/images/kitemarket/kitemarket-icon-512.png
---

# KiteMarket

<img src="/images/kitemarket/kitemarket-icon-128.png" alt="KiteMarket market stall icon" width="96" height="96" />

Help players buy, sell and fulfill orders with a clear view of where their money and items go. KiteMarket brings advanced buy orders, fixed-price sales, public auctions, item claims and shared wallets into one independent plugin. Multiple servers on the same Minecraft version can share a market.

::: info Preparing 1.0.0
The website and developer material are being made public. **Runtime plugin downloads and sales are not open yet.** The planned one-time price is **CNY 128 / USD 19.99**; see [release status](./download). Preparing a release does not expand the [verified compatibility scope](./compatibility).
:::

## One product, three ways to trade

<FeatureGrid :cols="3">
  <FeatureBox icon="cart" title="Advanced buy orders" description="Reserve the full budget and accept materials, enchantments, durability, name/lore or an exact sample. Multiple players can partially fulfill an order." />
  <FeatureBox icon="cube" title="Fixed-price sales" description="Escrow actual items before listing. Buyers can purchase part of the quantity at the published unit price and claim the items afterward." />
  <FeatureBox icon="trophy" title="Public auctions" description="Bid manually and reserve the highest valid offer. Outbid funds are released immediately, and late bids extend the deadline." />
</FeatureGrid>

Review quantity, total, tax and net income before confirming. Fulfillment previews show what will leave the inventory and what will stay. Income goes to wallets and items go to claims; a full inventory does not discard assets. Published prices, conditions and fee rules are fixed, and administrative intervention needs a recorded reason. See [trading and item conditions](./trading).

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-market.png" caption="Market listings" description="Real gameplay screenshot coming later: search, filters, actual items and pagination." />

## Ready for vanilla clients, open to your own design

The complete vanilla GUI needs no resource pack. A 54-slot layout, 36 listing slots, guided publishing and amount buttons explain the current step and its consequences. The home page shows real orders, unclaimed assets and operations requiring review; unavailable queries are reported clearly.

Server owners can configure titles, functional item icons, lore, positions and backgrounds for all 34 pages, with bilingual text. Invalid reloads retain the previous valid configuration. **There is no in-game appearance editor.** Actual trade items retain their names, enchantments and lore; appearance settings cannot disguise them.

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-home.png" caption="Market home" description="Real gameplay screenshot coming later: trading entrances, personal activity and asset reminders." />

ItemsAdder v4 compatibility is a base capability. Developers may create configuration themes or Java renderers for private use, free distribution or independent sale without an official DLC. Unavailable resources explain the reason and fall back to vanilla; switching preserves drafts. No commercial IA theme is bundled. Official IA DLC, Germ and DragonCore development have been canceled. See [ItemsAdder integration](./dlc) and [interface development](./ui-development).

## CNY 128 / USD 19.99 for the complete product

One license binds to one independent market network with **no node-count limit**. Separate purchases create separate licenses rather than merging networks. Initial sales will be through the KiteMC License Center only, using its existing payment channels with no launch discount.

The one-time purchase includes base-plugin updates and issue support while maintained. **Perpetual maintenance service is not promised.** Third-party economy plugins, ItemsAdder and resource packs are sold separately by their providers. Query SDKs and examples have independent MIT licenses; the core implementation remains closed source. See [network licensing](./license).

## Shared accounting, clear boundaries

MySQL 8 or MariaDB 10.11 is the authoritative market ledger. Each currency uses integer minor units at a fixed precision. Vault, PlayerPoints, CoinsEngine and ExcellentEconomy have separate transfer adapters. Existing wallet funds remain usable when a gateway is unavailable. An uncertain external result requires review rather than blindly repeating a debit or item delivery; see [wallets](./wallet) and [recovery](./operations).

The base target begins at Minecraft 1.16.5, with three runtime distributions. Intended coverage, real transaction evidence and startup-only checks are listed separately. This page does not claim certification for all versions, economy backends or performance ranges. Nodes sharing a market must run the same Minecraft version.

V1 does not include barter, a web market, mixed-version markets or semantic integration with third-party item IDs. Exact samples still obey special-item admission and fidelity checks.

Standard bStats basic metrics (ID **34434**) are enabled by default and can be disabled in the plugin or global bStats configuration. No custom player, transaction, license or database metrics are added.

## Get started

- [Downloads and release status](./download)
- [Installation and configuration](./guide)
- [Trading and item conditions](./trading)
- [Commands and permissions](./commands)
- [Interfaces and third-party development](./ui-development)
- [Market API quick start](./api)
- [Recovery, upgrades and rollback](./operations)
- [Versions and verification records](./compatibility)
