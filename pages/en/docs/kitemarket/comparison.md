---
title: Market Plugin Comparison
description: A source-based comparison of SweetPlayerMarket, QuickShop-Hikari, zAuctionHouse and KiteMarket.
---

# Market Plugin Comparison

This page helps server owners decide where KiteMarket fits. The comparison covers two open-source projects, one commercial market plugin and KiteMarket:

- [SweetPlayerMarket](https://github.com/MrXiaoM/SweetPlayerMarket): an open-source centralized player market whose author materials list sales, buy orders, MySQL and cross-server use.
- [QuickShop-Hikari](https://github.com/QuickShop-Community/QuickShop-Hikari): an open-source chest-shop system focused on player-owned shops in the game world.
- [zAuctionHouse](https://github.com/GroupeZ-dev/zAuctionHouse): a commercial market/auction product with a public source repository and feature documentation.
- **KiteMarket**: a market for servers that need buy orders, fixed-price sales, public auctions and tracked asset handling.

**Sources checked on October 5, 2026 (Asia/Shanghai).** This page uses author repositories, author product pages and first-party documentation. A feature not mentioned in a public page is marked as unverified rather than treated as unsupported. No uncompleted benchmark is presented as a performance or reliability win. Prices, versions and features can change; use each vendor's product page for current terms.

## Start with the product positioning

| Product | Best fit | Public pricing / distribution |
| --- | --- | --- |
| SweetPlayerMarket | A centralized sale and buy-order market for owners who want readable source code and cross-server options | The author resource page describes free updates; source is public and its repository defines the applicable license |
| QuickShop-Hikari | Player-owned chest shops placed around the world | Open-source project; follow the license declared in the repository |
| zAuctionHouse | A ready-made fixed-price market with bulk sales, categories and management features | Commercial distribution; current price and terms are on its [Spigot product page](https://www.spigotmc.org/resources/zauctionhouse-1-8-1-21.81494/) |
| KiteMarket | A single workflow for buy orders, fixed-price sales, auctions, wallets, claims and reviewable exceptions | One-time price and network licensing are described on the [KiteMarket license page](./license) |

QuickShop-Hikari and a centralized market solve different problems. QuickShop is strongest when players want to visit a shop in the world; KiteMarket, SweetPlayerMarket and zAuctionHouse are closer to a searchable server-wide order book. Decide whether players are looking for nearby stores or shared listings first.

## Capability comparison

| Dimension | SweetPlayerMarket | QuickShop-Hikari | zAuctionHouse (public V4 material) | KiteMarket |
| --- | --- | --- | --- | --- |
| Main trading model | The author page lists sale and buy markets | Buy/sell chest shops | Fixed-price listings, bulk sales, categories, search and pagination | Advanced buy orders, fixed-price sales and public manual auctions |
| Buy orders | Explicitly listed in public author materials | Not the core workflow | The current public material does not verify KiteMarket-style buy orders; the README's V4 roadmap lists Bid/Auction as pending | The full budget is reserved at publish time; multiple players can fulfill an order, using one matcher for conditions and final removal |
| Item conditions | The author materials list market filters and listing restrictions; exact rules depend on the release | The official README lists NBT, enchantments, durability, potions and spawn eggs | The README lists custom-item-plugin support and shulker previews | Three modes: standard material, advanced conditions and exact sample; material sets, enchantment levels, durability ratio, name and lore can be combined |
| Before-confirmation review | Market details and records are listed; this page does not expand them into the same delivery preview | Transactions are centered on the shop chest | The README lists item previews, history and management | Shows the actual items to give/keep, quantity, total, tax and net income; the inventory is checked again before confirmation |
| Asset destination | The author materials list transaction records; claim semantics depend on the release | Items and money move through the chest shop | The README lists history, logs and recovery-related features | Sold items enter claims, wallet income and unsold items remain traceable; a full inventory does not drop or delete assets |
| Shared market and economy | The author materials list MySQL/cross-server direction; verify backends per release | Configure the database and network topology according to the shop documentation | The README lists Redis, distributed locking and message synchronization extensions | MySQL 8/MariaDB 10.11 authoritative ledger; separate Vault, PlayerPoints, CoinsEngine and ExcellentEconomy adapters |
| UI and extension | Readable source makes local customization possible | Public API plus theme/message configuration | Configuration and extension ecosystem built around tools such as zMenu | File-configurable 35-page vanilla GUI; ItemsAdder v4 compatibility; Java 11 query/UI SDK and independently developed themes |
| Reliability boundary | Test the fixed release you plan to run | Test the shop, economy plugin and network configuration together | Test the purchased version and its dependencies | Results distinguish success, rejection, safe retry and review required; unknown external side effects are never blindly replayed |

“Unverified” means that this public-source check did not provide enough evidence. It does not mean the product can never provide that capability. A procurement comparison should fix the exact release, server, dependencies and configuration before running the same tasks.

## KiteMarket's differentiators

KiteMarket's positioning is not to rename features that already exist elsewhere. It connects several workflows that normally need separate checks:

1. **Readable buy-order conditions.** A publisher can express a material set, enchantment range, durability ratio, name/lore rule or exact sample. A supplier sees why each item matches or fails before delivery.
2. **The same rule powers preview and final removal.** The preview does not generate a second “item that looks right”; the actual inventory is checked again and a real item snapshot is stored.
3. **Each trade type keeps a clear meaning.** Fixed-price sales use a per-item unit price and an optional seller-defined minimum purchase quantity. Auctions use a total bid for a whole item or stack and do not show a misleading “remaining x/y” inventory label.
4. **Money and items have explicit destinations.** Proceeds enter the market wallet and goods enter claims. A full inventory leaves claims pending; an uncertain external result becomes a reviewable record instead of an assumption of success.
5. **Both owners and developers can extend it.** Server owners configure titles, items, lore, positions and backgrounds in files. Developers can use the Java SDK or an ItemsAdder-owned theme without purchasing official theme assets.

These are verifiable product design points in the current specification and documentation, not a claim of universal superiority after a same-environment benchmark. See [versions and verified scope](./compatibility) for the actual certification boundary.

## Choose by need

| Primary need | Start here |
| --- | --- |
| In-world player shops, item display and local transactions | [QuickShop-Hikari](https://github.com/QuickShop-Community/QuickShop-Hikari) |
| An open-source centralized market that you can maintain and change | [SweetPlayerMarket](https://github.com/MrXiaoM/SweetPlayerMarket) |
| Fixed-price listings, bulk sales and an established management ecosystem | [zAuctionHouse documentation](https://zauctionhouse.groupez.dev/) |
| Advanced buy orders, pre-delivery matching, shared wallets and reviewable exceptions | KiteMarket [trading](./trading), [wallets](./wallet) and [recovery](./operations) |

## Sources and update boundary

- [SweetPlayerMarket author resource](https://www.minebbs.com/resources/sweetplayermarket.14679/) and [official repository](https://github.com/MrXiaoM/SweetPlayerMarket)
- [QuickShop-Hikari official repository](https://github.com/QuickShop-Community/QuickShop-Hikari), including its README, license and linked documentation
- [zAuctionHouse official repository](https://github.com/GroupeZ-dev/zAuctionHouse), [public documentation](https://zauctionhouse.groupez.dev/) and [Spigot product page](https://www.spigotmc.org/resources/zauctionhouse-1-8-1-21.81494/)
- KiteMarket [trading rules](./trading), [UI development](./ui-development) and [verified scope](./compatibility)

Public materials change with releases. For a purchase or migration decision, record the check date, exact release, dependency versions and the observed test results together.
