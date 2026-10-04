# Network license

One KiteMarket license binds to one market network with no limit on that network's server nodes. It is not a separate license per subserver, and unrelated markets may not reuse a binding.

::: info Release preparation
The complete product is **CNY 128 / USD 19.99 as a one-time purchase**, including base-plugin updates and issue support while maintained. Perpetual maintenance is not promised. Third-party economy plugins, ItemsAdder and resources are not included. Runtime downloads and sales are not open yet; see [release status](./download).
:::

Once sales open, buy only through the [KiteMC License Center](https://license.kitemc.com/en/products/kitemarket), using existing payment channels without additional launch channels or discounts. Your key appears under [your licenses](https://license.kitemc.com/en/dashboard/licenses). **Each independent purchase creates an independent license** instead of merging existing markets.

A network uses the persistent UUID in its shared database, with no per-subserver-port fee. Copying configuration into another independent database does not make it the same licensed network. Production configuration supplies the correct product ID, endpoint and production signing public key; fill in your own license key. The public key is not a license key.

## Refresh, offline grace, and expiry

| Situation | Behavior |
|---|---|
| First activation | A successful online verification is required; no prior receipt means no offline grace |
| Normal operation | Refresh every 6 hours after successful verification |
| Temporary license-service outage | Use a valid signed receipt for at most 7 days after the last successful verification |
| Earlier commercial expiry | Commercial expiry wins; no additional 7 days are added |
| Explicit revocation, binding mismatch, or invalid signature | Do not treat as an ordinary network outage |

An invalid license stops new trading and starts controlled wind-down. Queries, permitted cancellations, item claims, and supported withdrawal exits must remain available where safe. License expiry does not delete the database, claim inventory, or history.

A single node's configuration, signature, or binding error prevents local trading admission without clearing other healthy nodes. Network wind-down requires a valid signed status or exhaustion of the saved receipt's validity.

## Reactivating the same network and license

When the saved, verified signed state is `UNBOUND`, a manager can run `/km license reactivate` and confirm it in the menu. Console/RCON uses `km license reactivate confirm`. Ordinary `/km license` only refreshes; restarting or reconnecting does not automatically reclaim a binding.

This entry restores only the original network UUID and original license, with that license's valid key retained in configuration. Both server and client check the original license identity; replacing the key with another license is not same-network recovery. `REVOKED`, `SUSPENDED`, and commercial expiry are not recoverable states through this entry. License or network ownership changes still require the license center's explicit management process.

Reactivation preserves network identity, wallets, claims, and history. Trading reopens only after a valid new signed authorization, and cleared orders do not revive. If a request fails or its response is uncertain, inspect the license state instead of deleting bindings, tokens, or database records to repeat activation.

## Identity and migration

Persist and share the network ID, binding information, and random network token. Do not delete them to retry activation or generate a separate network for every node.

Stop writes on the old nodes before backing up and restoring the complete database and configuration. Preserve the network identity. Use the license center's formal transfer process when a license transfer is needed. Copying only the JAR or editing binding fields is not a migration procedure.

Maintain an accurate system clock and configure the correct endpoint and trusted public key. Never put private keys, complete license keys, or network tokens in public logs, chat, or screenshots.

See [installation](./guide) for the actual fields and [recovery](./operations) for wind-down and uncertain operations.

## IA compatibility and the generic DLC platform

Development and sale of the official Market Stall IA theme DLC have been canceled. The ItemsAdder v4 adapter, configuration themes and Java SDK remain base capabilities. Third parties may freely develop, use, distribute or independently sell their own themes without an official DLC entitlement or its font namespace. See [ItemsAdder integration](./dlc) and [interface development](./ui-development).

The license platform retains generic DLC products, grant sources, lifetime/subscription plans and release capabilities. Canceling this theme does not remove them. Platform DLC belongs to an explicitly selected matching base license without another key or network binding. Refunds withdraw only the corresponding source while retaining other valid sources; marking an order refunded and returning money through the payment provider are separate actions. ArcPass v1 and market base-license v2 remain.

Historical official-theme proofs and settings are not prerequisites for third-party themes and do not affect market money, items or asset exit. The base license still governs the market as described above. See [operations](./operations) for preserving files from historical development builds.
