# Interfaces, themes, and third-party development

KiteMarket's interface coverage is **the complete vanilla GUI plus ItemsAdder v4 compatibility**. Third-party developers may freely create, modify, use, distribute, or independently sell their own configuration or Java interfaces **without an official DLC entitlement**. Development and sale of the official Market Stall IA theme have been canceled; the IA adapter and public SDK remain.

::: info Version and downloads
This page covers the `1.0.0` public UI SDK. Runtime downloads are pending. Interface source and examples are available through the [public repository](https://github.com/KiteMC/KiteMarket); see [downloads](./download) for filenames and release status. The pinned Paper 1.21.11 / Java 21 / ItemsAdder 4.0.16 combination has real openings of community configuration and Java examples; the [recorded scope](./compatibility) does not certify other versions or Folia.
:::

## Quick start

For vanilla appearance changes, use [file configuration](./guide#customize-the-vanilla-gui) without writing a plugin. A built-in IA renderer only needs your resources and theme declaration; use Java only for custom rendering logic.

1. Get the `examples/ui/themes/example-ia` configuration example from the public repository, or the Java IA example in `KiteMarket-Examples-1.0.0.zip` once released.
2. Follow [IA integration](./dlc) to install your namespace and theme, rebuild the pack and register its actual UUID and SHA-1.
3. Java providers also require their JAR in `plugins/` and a normal restart. Configuration-only themes use `/km reload`.
4. After the player successfully applies the pack, use `/km ui itemsadder example-ia`; the Java example theme is `example-ia-java`. Confirmation buttons act on the real market, so develop with isolated characters and orders.

Reference `KiteMarket-UI-API-1.0.0.jar` with `compileOnly`, never bundling or relocating the SDK. Runnable source is in the public `examples/ui-java` project, without proprietary core dependencies:

```kotlin
dependencies {
    compileOnly(files("libs/KiteMarket-UI-API-1.0.0.jar"))
    compileOnly("com.destroystokyo.paper:paper-api:1.16.5-R0.1-SNAPSHOT")
    compileOnly("beer.devs:itemsadder-api:4.0.18-beta-10")
}
tasks.withType<JavaCompile>().configureEach {
    options.release.set(21) // IA adapter code; the public SDK stays on Java 11.
}
```

## Player selection and server defaults

`/km ui` displays the requested preference, actual interface, theme, and fallback reason. Select a backend and optional theme with:

```text
/km ui auto
/km ui vanilla
/km ui itemsadder example-ia
```

Selection stores a preference. Without an actual provider, ready client, or resources, vanilla remains available with an explanation. “Choose a theme” in the settings lists registered themes with their backend and availability reason and can restore the server default. Preferences persist across the market network. Switching retains drafts and cannot submit a trade twice.

For example:

```yaml
gui:
  renderer: auto
  auto-order: [itemsadder, vanilla]
  default-themes:
    itemsadder: example-ia
```

Player buttons, command help and completion show only auto/vanilla/itemsadder. Old `germ`/`dragoncore` preferences, settings and SDK enums remain readable as existing extension positions. Developers may register, maintain and validate their own actual providers. Without a matching registered provider, the interface reports `UI_BACKEND_RETIRED`, falls back and retains the saved preference.

## Own theme declarations

Place declarations in `plugins/KiteMarket/themes/*.yml` and validate/load them with `/km reload`; an invalid candidate retains the active catalog. IDs use lowercase letters, digits, dots, underscores, and hyphens, up to 96 characters, beginning with a letter or digit. `official.*` and the historical `km_market_stall` namespace remain reserved. Third parties should use their own IDs and namespaces without impersonating the old official identifiers.

```yaml
schema: 1
id: example-ia
backend: itemsadder
provider: kitemarket.itemsadder
requires: {}
resources:
  font-image: km_example:market
config:
  title-offset: 8
  texture-offset: -8
pages:
  '*': {}
  supply:
    font-image: km_example:market
    title-offset: 8
  result:
    state-font-images:
      SUCCESS: km_example:market
```

This is KiteMarket's common theme format, not a vendor-native configuration. `provider` is the stable ID of an actually registered implementation; omitting it does not create an SDK bridge. `pages.'*'` supplies defaults for shared pages, including `themes`; a specific **template ID** overrides font and title/background offsets. The table below distinguishes page IDs from template IDs: `supply-preview` uses the `supply` template. Actual items, amounts, results and actions remain server-owned.

`state-font-images` selects artwork from the server's `result.status`: `SUCCESS`, `PENDING`, `FAILED` and `UNCONFIRMED` describe completion, review required, refusal and an unconfirmed outcome. These presentation values are distinct from ledger operation states. A page mapping takes precedence over a resource-level state mapping; absent mappings use the page/general background. An exact page declaration is used when present, otherwise `*`; omitted font/offset fields use `resources`/`config` defaults.

The built-in ItemsAdder provider is `kitemarket.itemsadder`. Third-party themes may reference their own registered font IDs, such as `km_example:market`, without using `km_market_stall` or obtaining an official DLC lease. `requires: {}` omits pack fields and inherits node defaults. For a separate pack, add its actual lowercase SHA-1 (40 digits) and sent UUID as `requires.pack-sha1` and `pack-id`. **Empty strings fail theme validation.** Missing valid identity or an unsuccessfully applied pack falls back. Updated content requires a new actual sent UUID; a registered UUID cannot be assigned a different digest.

Readiness uses public ProtocolLib observations of actual UUID, SHA-1 and URL, correlated with IA's public send event; it does not call internal obfuscated classes or treat a send event alone as readiness. Temporarily enable `gui.itemsadder.diagnostics: true` to inspect `[KITEMARKET_PACK]`, then disable it after registering identity. Failure, discard or removal revokes only that pack, leaving unrelated loaded IA state intact. Disconnects, node changes, removal of every pack or IA reload require confirmation again. Native status messages carry no send generation, so delayed responses to a repeated UUID with identical content cannot be distinguished by the protocol; changed content must use a fresh actual UUID.

## Resources and provider implementations

- **ItemsAdder**: Maintain your own namespace, manually rebuild and send the pack, and register its actual SHA-1 and Minecraft pack UUID. Sending a pack does not mean it has loaded. Market items remain actual ItemStacks; font images decorate standard inventories.
- **Java extensions**: Register your own provider through the public SDK and maintain its actual engine, resources and thread compatibility. Legacy Germ/DragonCore enums preserve extension positions; no first-party vendor bridge is supplied.

Providers render and capture input; the shared server controller handles transactions. Callbacks must use server-registered action/input identifiers, never client-supplied amounts, identities, or stale pages. Closing pages, expiry, and repeated confirmations retain the shared session safeguards.

The public `KiteMarket-UI-API` module targets Java 11 under its own MIT License. Reference it with `compileOnly`, never bundling a second SDK. Implement `com.kitemc.market.api.ui.UiProvider`, obtain `KiteMarketUiApi` through Bukkit's ServicesManager, and call `api.register(owningPlugin, provider)`. Close the returned handle on plugin disable. `UiPage.token()/pageVersion()` and `UiPrompt.token()` describe page/field identity; `UiPage.actions()` and opening parameters supply opaque action identifiers. Return interactions only through `UiCallbacks.action(token)`, `input(raw)`, and `closed()`; the bound callback validates and schedules them again. Registration does not check official DLC ownership.

`UiProvider.update(...)` defaults to `open(...)`. A native interface may update in place only if it replaces the page identity, every action token and all callbacks, including close handling. After a genuine vendor event changes client/resource readiness, update the provider's own state and call `api.changed(owningPlugin)` for re-evaluation. Only enabled owners with a live registration may notify; the method itself is not proof that resources are ready.

An IA adapter can call the read-only `api.itemsAdderUnavailable(player, page, theme)` in the player's scheduling context to reuse the host's observed font registry, actual sent UUID/SHA-1 and matching successful load. Only `null` means the page resource is ready; other values describe a fallback reason. This check neither sends packs, changes preferences, evaluates official DLC rights nor grants trading authority. Its default returns `IA_READINESS_UNSUPPORTED` for existing service implementations and does not treat unknown state as readiness. Calling it requires a KiteMarket version shipping this method; do not bundle a replacement SDK into a provider.

Public `examples/ui/` contains the minimal white-frame configuration theme, and `examples/ui-java/` contains a real Java IA adapter. The latter targets Java 21 with a compile-only public vendor API and the real `TexturedInventoryWrapper`. It registers `example.itemsadder` to render actual market pages and registered actions; it never invents balances or transaction outcomes. The public SDK remains Java 11. Do not install this example on Java 11 Legacy or unverified Folia nodes.

The IA adapter fills the protected inventory returned by `TexturedInventoryWrapper.getInternal()`, registers the replacement holder, actions and callbacks, then calls the public `showInventory(player)` to display the font title. Opening only the internal inventory through Bukkit leaves IA's placeholder title. Retain this order and whole-view protection so a previous close is handled separately from the new page.

The release's `KiteMarket-Examples-1.0.0.zip` combines query and IA examples, including runnable JARs, themes, MIT resources, bilingual instructions and source/build files. Install the IA example JAR, place `theme.yml` in `plugins/KiteMarket/themes/example-ia-java.yml`, and copy `itemsadder/` into `plugins/ItemsAdder/contents/km_example/`. Rebuild/send the pack using the installed IA instructions, register its identity and select `/km ui itemsadder example-ia-java`. Before the runtime release, read the public source without treating successful compilation as a running market. Updates, stale closes, repeated clicks and chat input retain the shared safeguards.

The configuration and Java examples use separate MIT licenses and can be modified for commercial interfaces without an official DLC; **the license does not include historical official-theme artwork**. Canceling the product does not make its artwork open source. Their real publishing pages have been opened on the pinned environment, which does not certify other packs or every page. Legacy Germ/DragonCore declarations are format references rather than first-party vendor integrations. Source, compilation and registration do not replace actual client acceptance.

### Custom IA functional icons

Existing functional buttons may use your own registered IA items. `resources.item-icons` maps vanilla `Material` defaults; `pages.<template>.slot-icons` overrides **physical slots** on that template. Actual `subject()` trade items are never replaced:

```yaml
resources:
  font-image: my_theme:market
  item-icons:
    BOOK: my_theme:book_button
pages:
  '*': {}
  browse:
    slot-icons:
      '49': my_theme:back_button
```

`UiItemIcons.resolve(page, theme)` returns read-only bindings, creating no actions or readiness proof. Obtain and clone registered items through the real IA API, preserving host names, lore, quantities and actions. Missing icons report `IA_RESOURCES_PENDING` and fall back. Exact templates do not merge with `'*'`. Resources cannot substitute trade subjects, wallet amounts or transaction rules.

## Pages, actions and lifecycle

`UiPage.key()` identifies the logical page; `UiPage.template()` selects theme configuration. Vanilla `menus` uses page IDs, while IA `pages` uses template IDs. The complete 34 pages and their main actions follow; “Same” means the template equals the page ID:

| Page ID | Template ID | Main actions |
|---|---|---|
| `home` | Same | Trading entrances, create, wallet, claims, history |
| `browse` | `browse` / `orders` | Search, filters, pagination, details; personal orders use `orders` |
| `browse-filters` | Same | Type, currency, material, sort and search |
| `order` | `detail` | Purchase, supply, bid and cancellation confirmation |
| `details` | Same | Long text and conditions |
| `editor` | Wizard templates below | Type, item/conditions, quantity, price and duration |
| `confirm` | `confirm` / `wizard-confirm` | Final confirmation and return |
| `preview` | Same | Inventory matching against the draft rule |
| `supply-preview` | `supply` | Protect slots, quantity, maximum, refresh and confirm |
| `number` | Same | Increments, presets, maximum and custom input |
| `materials` | Same | Multi-select, filter and main-hand import |
| `durability` | Same | Range, presets, import and clear |
| `text-condition` | Same | Exact/contains, chat input, import and clear |
| `enchantments` | Same | Selection, import and extra-enchantment option |
| `enchantment-range` | Same | Minimum/maximum and removal |
| `insufficient` | Same | Required funds and deposit entrance |
| `wallet` / `wallet-currency` | `wallet` | Balances and transfer confirmation |
| `assets` | `claims` | View and claim assets |
| `history` / `receipt` | `history` | Pagination and read-only receipts |
| `admin` / `admin-player` | Same | Review queue and player audit entrances |
| `admin-wallet` / `admin-assets` | Same | Read-only player balances and all asset states |
| `admin-orders` / `admin-player-history` | Same | Read-only player orders and history |
| `resolve-source` | `resolve` | Source-quiescence declaration and confirmation |
| `doctor` | Same | Node, database, licensing and transfer diagnostics |
| `inspect` / `evidence` | `inspect` | Structured evidence and permitted review entrances |
| `ui` / `themes` | Same | Backend, theme or server-default selection |
| `result` | Same | Status, receipt, wallet, claims and continue browsing |

Wizard templates follow the step: `wizard-type`, `wizard-item`, `wizard-terms` (buy order), `wizard-sale-terms`, `wizard-auction-terms`, then `wizard-confirm`.

The current `page.actions()` slot-to-opaque-token map is the action list. Entries without a token are informational. Never fabricate action strings or reuse a previous page's tokens. Every open/update replaces identity, tokens and callbacks. Input returns through `UiCallbacks.input(raw)` and closure through `closed()`. Returning `false` from `prompt()` retains the host's validated chat input and drafts.

| Method | Lifecycle contract |
|---|---|
| `register(owner, provider)` | Enabled owning plugin; returns an idempotent unregister handle |
| `unavailable(...)` | Readiness only: `null` is ready, otherwise a reason code |
| `open(...)` / `update(...)` | Render cloned snapshots in the player context and replace all bindings |
| `isOpen(...)` / `close(...)` | Identify and close only your current view |
| `prompt(...)` | Native input, or `false` for host chat input |
| `changed(owner)` | Recheck after genuine resource changes; no trading authority |

Registration can wait for database initialization. If lookup is null, listen for `ServiceRegisterEvent`; discard old registrations and views when replaced. Unregister on owner disable; the host handles safe fallback. Never manipulate player inventories from Folia's global thread. The example does not claim Folia certification.

## Troubleshooting

| Symptom | Check |
|---|---|
| Theme absent | `themes/*.yml`, unique ID and a valid candidate reload |
| `UI_PROVIDER_UNAVAILABLE` | Matching registered provider ID and enabled owner |
| `IA_PACK_NOT_REGISTERED` | Actual observed pack UUID and SHA-1, not random values |
| `IA_PACK_NOT_APPLIED` | Matching successful load rather than send/accept only |
| `IA_RESOURCES_PENDING` | Registered font/icon IDs and completed pack rebuild |
| Placeholder title | Use IA `showInventory(player)`, not only the internal Bukkit inventory |
| Rejected action / stale page | Replace all tokens and callbacks; reopen instead of replaying |
| Reload retains old theme | Read the exact field path in logs; invalid candidates never replace valid configuration |

## Installation and scope

After creating or obtaining a third-party theme, follow [ItemsAdder integration](./dlc) to install its resources and register the actual pack identity. No official DLC product ID, signature or entitlement is needed. The plugin does not supply a commercial IA theme by default; unavailable themes retain the vanilla interface. The base plugin still follows [network licensing](./license) for trading and asset exit.

[Compatibility](./compatibility) records evidence for the base plugin, providers, and individual themes separately. Public SDKs and provider registration do not replace actual runtime acceptance.
