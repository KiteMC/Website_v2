# ItemsAdder integration

KiteMarket retains the complete vanilla GUI and ItemsAdder v4 compatibility. Server owners and developers may create configuration themes or Java renderers with their own resources, for private use, free distribution or independent sale, **without an official DLC entitlement**. Shared server flows still handle transactions, actual items, input validation and confirmation.

::: info Official theme canceled
On October 4, 2026, KiteMC canceled development and sale of the official Market Stall IA theme DLC. It will not launch alongside the plugin. This existing route now guides third-party IA integration; archived artwork, releases and acceptance records remain historical material. The license platform retains its generic DLC capability.
:::

## Install your own theme

1. Obtain legitimate ItemsAdder v4 and matching ProtocolLib runtime plugins supported by the target server. See the existing [representative environment](./compatibility). An API JAR alone cannot run the feature.
2. Install the theme's own ItemsAdder namespace following its instructions, and place its KiteMarket declaration in `plugins/KiteMarket/themes/*.yml`. A Java theme also needs its provider plugin. Working configuration and Java examples are described in [interface development](./ui-development).
3. Following the installed IA guide, manually run `/iareload`, wait for completion, then `/iazip` to rebuild and send the pack. KiteMarket does not run third-party rebuild commands for administrators.
4. Register the SHA-1 (40 hexadecimal digits) and UUID of the **actual sent pack containing the theme**. Temporarily enable `gui.itemsadder.diagnostics: true` with `/km reload` to inspect the observed UUID, SHA-1 and URL in `[KITEMARKET_PACK]`. Register them, run `/km reload` again, then disable diagnostics.
5. After successfully loading that pack, players use `/km ui itemsadder example-ia`, or `/km ui auto` once the theme is configured as a default. `/km ui` shows the actual interface and fallback reason.

`example-ia` must identify an installed theme. Replace the pack-identity placeholders below with actual observed values:

```yaml
gui:
  renderer: auto
  auto-order: [itemsadder, vanilla]
  default-themes:
    itemsadder: example-ia
  itemsadder:
    enabled: true
    diagnostics: false
    pack-sha1: "REPLACE_WITH_ACTUAL_40_HEX_SHA1"
    pack-id: "REPLACE_WITH_ACTUAL_SENT_UUID"
```

Use `gui.default-themes: {}` when no IA theme is installed; the old official theme is not selected by default. Third-party declarations may register a separate pack through `requires`; see the developer guide. Invalid candidates preserve the current valid configuration. No official DLC product ID, signature or download endpoint is required.

## Use and fallback

| Player command | Behavior |
|---|---|
| `/km ui auto` | Try ready providers and default themes in the configured order |
| `/km ui vanilla` | Use the complete vanilla GUI without a resource pack |
| `/km ui itemsadder example-ia` | Select an installed independent theme, explaining and falling back when unavailable |
| `/km ui` | Show requested preference, actual interface and theme availability |

Preferences persist per market network and player across nodes. Missing themes or fallback do not overwrite them. Switching preserves publishing drafts and cannot submit a trade twice. Both interfaces share actual items, listing versions, quotes, final inventory checks and operation IDs.

Registered resources, the adapter and **successful loading of the specific pack by this player** must be ready. Sending or accepting is not successful loading. Rejection, failure, discard/removal of that pack or mismatched identity causes fallback; unrelated packs do not erase IA readiness. Disconnects, node changes, removal of all packs and IA reload require confirmation again. Changed content requires a new actual sent UUID and matching digest; a random UUID entered only in KiteMarket or a different digest assigned to a registered UUID is insufficient.

## Development and historical material

The base inventory layout, shared pages and amount input remain. Developers may use their own font images, button-item icons and page configuration. SDK actions and input retain server validation; a theme cannot bypass confirmation or debit funds directly. See [interface development](./ui-development) for working examples, the 34 page keys and lifecycle.

Historical `official.market-stall`/`market-stall` preferences and installation commands remain compatibility material, not a current official product or installation flow. Preserve existing archived artwork, caches and proofs during migration; see [operations](./operations). Canceling the theme does not automatically license historical artwork under MIT or delete market wallets, orders or assets.
