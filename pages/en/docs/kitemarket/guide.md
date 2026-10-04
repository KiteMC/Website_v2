# Installation and configuration

This guide covers the `1.0.0` configuration. Runtime downloads are pending; see [release status](./download). Once a production download is available, follow these steps without obtaining proprietary source or building the plugin yourself.

## 1. Prepare the environment

Prepare a [target server and Java runtime](./compatibility), MySQL 8 or MariaDB 10.11, and real network-license credentials. A market network shares one database, Minecraft version, currency definition, and item profile. Node IDs must be unique.

Place one appropriate KiteMarket distribution JAR in `plugins/`; do not install multiple distributions together. Start once to generate `plugins/KiteMarket/config.yml`, then stop before editing.

## 2. Network and database

These `config.yml` fields must match your actual deployment. Secrets below are placeholders:

```yaml
language: en_US

network:
  name: survival
  node-id: survival-1
  item-profile: default

database:
  url: "jdbc:mysql://127.0.0.1:3306/kitemarket"
  username: "kitemarket"
  password: "REPLACE_ME"

market:
  order-limit: 10
  maximum-quantity: 1000000
  maximum-duration-seconds: 604800
  tax-bps: 0
```

Create a dedicated database with the required permissions. An unavailable database, mismatched network definition, or incomplete initialization must prevent trading. Changing the network, currencies, or database requires a planned stop rather than routine hot reload.

`language` accepts `zh_CN`, `en_US`, or `auto`; language files are in `plugins/KiteMarket/lang/`. `tax-bps` uses basis points, so 100 is 1%. Fees are deducted from the recipient's income, with no listing fee. `market.taxes.<buy/sell/auction>.<currency-id>` overrides that type's `default`, then falls back to `market.tax-bps`. Values range from 0 to 9999 basis points. Orders retain the fee settings captured at creation.

## 3. Currencies

For example, an integer PlayerPoints currency:

```yaml
currencies:
  points:
    provider: playerpoints
    scale: 0
    native-id: ""
    gateway: survival-1
    maximum: 2147483647
    certified-versions: []
    certified-folia: false
```

`maximum` is in minor units and must fit the backend's safe range. Keep `certified-versions` empty until you have tested a specific version in isolation; an empty list disables transfers. This allowlist is not an official certification report.

Providers are `vault`, `playerpoints`, `coinsengine`, and `excellenteconomy`. Vault requires `vault-provider` to match the actual Economy service name; the latter two need their native currency ID. Do not copy unverified version numbers or expose the same external currency twice. See [wallets](./wallet) for gateway and recovery behavior.

## 4. Network license

```yaml
license:
  key: "REPLACE_WITH_LICENSE_KEY"
```

Production defaults provide the product and trust information below. Server owners **do not need to look up or enter the product ID or public key**:

| Setting | Default |
|---|---|
| `license.endpoint` | `https://license.kitemc.com` |
| `license.product-id` | `57ef7c59-7c76-4192-abeb-4c4d7ac0a00f` |
| `license.public-key` | Bundled KiteMC production RSA public key, retaining the existing trust system |

Retain these values and supply your own key; never substitute a product name or private key. The client appends `/api/v2/license/activate` or `/api/v2/license/heartbeat` to the service root. Remote endpoints require HTTPS and first activation requires online verification. Sales for this product are not open yet.

## 5. Restart and check the deployment

Restart and verify plugin initialization, database, sessions, and licensing. With isolated test players, exercise a deposit, fixed-price purchase, buy-order fulfillment, auction, withdrawal, and item claim. Then test concurrent operations on two nodes. Validate every enabled provider; a loaded JAR does not prove transfers work.

Restart fully after changing network, database, currency, license, or quantity/duration limits. `/km reload` validates and updates presentation settings and new-order fees; invalid candidates leave current settings intact. Server `/reload` and hot plugin unloading are unsupported. See [commands](./commands) and [operations](./operations).

## 6. Menu configuration

The default vanilla interface uses a warm 54-slot layout: tools at the top, 36 list entries in the middle, and paging/back controls below. No resource pack is needed. New settings:

```yaml
gui:
  renderer: auto
  auto-order: [itemsadder, vanilla]
  default-themes: {}
  allow-player-switch: true
  sounds:
    enabled: true
  vanilla:
    layout: auto
  itemsadder:
    enabled: true
    diagnostics: false
    pack-sha1: ""
    pack-id: ""
```

Current renderer choices are `auto/vanilla/itemsadder`; vanilla layouts are `auto/warm/legacy`. `auto-order` selects the attempt order, defaulting to ItemsAdder, then vanilla; `default-themes` names backend defaults. Boolean fields require YAML `true/false`, not strings. Vanilla layout `auto` selects the compatibility layout when legacy home positions differ from defaults or a page defines `slots`/`buttons.slot`. Changing only titles, icons, names, Lore, backgrounds or switch controls does not select that layout. Explicit `warm` conflicts with custom placement and is rejected. Use `gui.sounds.enabled: false` to disable sounds.

Players open `/km ui` or choose `/km ui <auto|vanilla|itemsadder> [theme-id]`. This selects a backend and installed theme; it is not a style editor. Server owners customize appearance through `config.yml` only, without an in-game style editor. Preferences are shared through the same network's database; no saved row means `AUTO`. `allow-player-switch: false` disables choices and uses the server preference. No IA theme is selected by default; after installing your own theme, put its ID in `gui.default-themes.itemsadder`. Register the actual pack's SHA-1 and UUID; a player must successfully load that specific pack. See [ItemsAdder integration](./dlc) for the steps. The official Market Stall DLC has been canceled and is no longer an installation step or default theme.

Install a legitimate IA runtime and ProtocolLib separately; see the [pinned environment and checksums](./compatibility). Follow the actual IA guide to install a theme, wait for `/iareload` to finish, then run `/iazip`. Temporarily enable `gui.itemsadder.diagnostics: true` with `/km reload` to read the actual sent UUID, SHA-1 and URL from `[KITEMARKET_PACK]`. Register that identity in the fields above, run `/km reload` again, and disable diagnostics afterward. Sending or accepting is not successful loading. Updated pack content requires a fresh actual sent UUID and matching digest; entering a random UUID only in KiteMarket cannot establish readiness.

Third-party interfaces may be freely developed and sold without an official DLC entitlement. Place independent themes in `plugins/KiteMarket/themes/*.yml`, using their own resources and a registered provider; see [interface development](./ui-development). Old `germ`/`dragoncore` preferences, settings and SDK extension positions remain readable, but first-party integration has been withdrawn. Without a developer-registered actual provider they report `UI_BACKEND_RETIRED`, fall back and retain the saved preference. An unavailable pack or theme never triggers market wind-down.

### Customize the vanilla GUI

`menus` in `plugins/KiteMarket/config.yml` customizes all 34 pages, including `ui`, `themes` and `result`. No resource pack or IA is required. Edit the file, run `/km reload`, then reopen the page. Reload validates a candidate first; invalid settings preserve the previous working configuration. Appearance and placement do not change existing actions, permissions, trading rules or assets, and cannot add trading buttons.

Merge this example into the existing `menus` section without duplicating the root key. Omitted fields retain their defaults:

```yaml
menus:
  home:
    title:
      zh_CN: '&6交易集市'
      en_US: '&6Marketplace'
    background: BROWN_STAINED_GLASS_PANE
    buttons:
      '32':
        material: NAME_TAG
        name:
          zh_CN: '&6我的挂单'
          en_US: '&6My orders'
        lore:
          zh_CN:
            - '{default}'
            - '&8点击查看自己的订单。'
          en_US:
            - '{default}'
            - '&8View your own orders.'
```

| Field | Meaning |
|---|---|
| `menus.<page>.title` | Title string or a text map with `zh_CN`/`en_US` |
| `background` | Vanilla `Material` available on the current server; decorates only empty top/bottom slots in the new layout; `AIR` disables it |
| `buttons.<source-slot>.material` | Vanilla item icon for a functional control |
| `buttons.<source-slot>.name` | Control name as a string or bilingual text map |
| `buttons.<source-slot>.lore` | Additional market help as a text list or bilingual list map |
| `buttons.<source-slot>.slot` | That control's target slot |
| `slots`/`icons` | Existing placement/icon syntax; keys remain source slots |
| `switch.slot`/`switch.material` | Final physical slot/icon for the automatic interface switch |
| `switch.name`/`switch.lore` | Automatic switch name/help using the same text formats as buttons |

Menu slots are `0..53`, excluding the player's inventory. `buttons`, `slots` and `icons` use **source slots**, not the final visible position after the new layout remaps them. List sources `0..35` become physical `9..44`, so additional help for the first product uses `buttons.'0'`. Home source `32` is “My orders” and `34` is “History”. Placement changes must swap both sides rather than moving only one:

```yaml
gui:
  vanilla:
    layout: auto
menus:
  home:
    buttons:
      '32':
        slot: 34
      '34':
        slot: 32
```

`buttons.slot` and `slots` share one placement mechanism; do not configure a source twice. Existing syntax may instead use `slots: {'32': 34, '34': 32}`. Custom placement requires `gui.vanilla.layout: auto` to select the compatibility layout, where source and physical slots match; do not simultaneously force `warm`. Legacy `gui.home-slots` remains readable. Automatic `switch.slot` defaults to physical `8` on applicable pages/layouts. When a product or control occupies it, the switch is omitted without replacing that entry; `/km ui` remains available.

Titles and names accept a shared string or bilingual text map; Lore accepts a shared list or bilingual list map. `&`/`§` support vanilla colors and formatting. Generated names default to gold and Lore to gray, with italics disabled unless explicitly requested. `{default}` preserves original title/name text; a Lore line containing **only** `'{default}'` expands the default market help. Omitting `lore` preserves help; `lore: []` clears only additional help. `${field-name}` reads an existing read-only page field, such as `${wizard.step}`; missing fields display `—` without executing scripts. Raw money fields use minor units, so prefer `{default}` to retain formatted amounts and asset destinations.

Functional controls may change material and name. Products, samples, selected inventory items and claim assets retain their actual material, name, enchantments and original Lore; `material`/`name` cannot disguise them as another item. Only their placement and additional market help can change, without altering inventories, escrow snapshots or transaction subjects.

All configurable page IDs:

```text
home, browse, browse-filters, order, details, editor, confirm, preview,
supply-preview, number, materials, durability, text-condition, enchantments,
enchantment-range, insufficient, wallet, wallet-currency, assets, history,
receipt, admin, admin-player, admin-wallet, admin-assets, admin-orders,
admin-player-history, resolve-source, doctor, inspect, evidence, ui, themes, result
```

Use page IDs rather than titles, translation keys or IA template aliases; for example, use `assets`/`confirm` for `claims`/`wizard-confirm`. Text entries are limited to 512 characters and Lore lists to 64 lines. Materials must exist on the current server. Unknown settings, invalid slots and incomplete swaps invalidate a candidate; `command`, `action`, scripts and expressions are not style settings. On failure, fix the field path identified by the response and logs. If changes are missing, reopen the page and check source slots, layout and whether a third-party theme uses its own template. These settings do not install or download IA resources.

## 7. bStats basic metrics

KiteMarket enables standard bStats basic metrics by default under plugin ID **34434**. The legacy, modern, and current distributions share this ID; it is not a network license ID.

KiteMarket adds no custom player, transaction, license, or database metrics. It does not submit transaction records, player identities, license keys, network tokens, database connections, or credentials as custom statistics.

To disable metrics for KiteMarket only, set this in `plugins/KiteMarket/config.yml`:

```yaml
metrics:
  enabled: false
```

The default is `true`. Alternatively, set the global `enabled` value to `false` in `plugins/bStats/config.yml` to disable bStats collection for plugins that honor that server-wide setting. Either disabled switch prevents the corresponding collection. Restart fully after changing it. Metrics settings do not change trading features or license rules.

## 8. Runtime, configuration and SDKs

Choose **one** matching Legacy, Modern or Current JAR on the [download page](./download). Initial filenames are `KiteMarket-legacy-1.0.0.jar`, `KiteMarket-modern-1.0.0.jar` and `KiteMarket-current-1.0.0.jar`. API, sources and Javadoc JARs are not server plugins. Runtime release downloads are still pending; candidates are not offered as production builds.

Chinese and English configuration packages are labeled `zh_CN` and `en_US`. Retain their production product ID, license endpoint and trusted public key, filling in your license, database and economy configuration. Back up and merge changes into an existing configuration rather than overwriting its network, database or currency identity.

Verify files using `SHA256SUMS.txt` and record the installed version. Isolated test signing keys and credentials are not production configuration. The public repository also provides SDKs and runnable examples; see [market API](./api), [interface development](./ui-development), and the [compatibility scope](./compatibility).
