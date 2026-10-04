# Recovery and safe migration

For money or item incidents, first record the operation ID, player UUID, node, time, order ID, and error code. Pause affected writes and investigate before submitting the same request again.

## Common states

| Symptom | Action |
|---|---|
| Expired view or changed price/quantity | Reopen the order; do not bypass revision checks |
| `INVENTORY_FULL` | Make room before claiming; do not issue duplicate items in the world |
| `GATEWAY_NODE` | Switch to the currency's configured transfer node |
| `UNCERTIFIED_PROVIDER_VERSION` | Verify and test the actual plugin build before adding it to the allowlist |
| `PROVIDER_API_INCOMPATIBLE` | Disable transfers and verify the provider/build; do not substitute another adapter |
| `UI_BACKEND_RETIRED` | A legacy Germ/DragonCore preference or theme lacks a developer-registered actual provider; retain its preference and use vanilla, or choose vanilla/IA through `/km ui` |
| `IA_PACK_NOT_REGISTERED` / `IA_PACK_NOT_APPLIED` | Verify the actual sent UUID/SHA-1 and the player's successful load; temporarily enable `gui.itemsadder.diagnostics` if needed. An unrelated pack or accepted-only status is insufficient |
| Historical build reports `DLC_NAMESPACE_CHANGED` / `DLC_INSTALLED_PACKAGE_INVALID` | The official theme has been canceled. Retain the old namespace and backup without deleting files to bypass checks. Choose vanilla or your own IA theme; historical files do not block community themes or market assets |
| `UNKNOWN` | Stop replaying; inspect the operation and external evidence before reconciliation |
| `EXECUTION_IN_FLIGHT` | The source node is active and execution has not confirmed completion; refunds/redelivery are blocked until a real return receipt or source-node recovery |
| `SOURCE_QUIESCENCE_REQUIRED` | An offline source does not prove a stopped call; confirm that the source is stopped and external requests are no longer pending before the separate declaration |
| `EXECUTION_WINDOW_EXPIRED` | The execution permit's start window passed without starting a new item/economy effect; inspect the operation before confirming another request |
| Database unavailable | Restore it before reopening; nodes must not trade independently |
| `NODE_ALREADY_RUNNING` | Check duplicate node IDs; a short lease wait after stopping is not asset loss |
| `NODE_FENCED` | This node lost its write lease; inspect duplicate nodes and old processes before restarting, without automatically reclaiming identity |
| `UNVERIFIED_SPECIAL_ITEM` / `UNVERIFIED_ITEM_DATA` | The type or property is not admitted for new trades. Exact samples cannot bypass admission; existing escrowed assets retain their exit path |
| `PROTOCOL_UPGRADE_REQUIRES_EXIT` | Complete the authorized exit process with the old build before upgrading the protocol |
| `PROTOCOL_UPGRADE_NOT_QUIESCENT` | Check live node leases, open orders, frozen funds, unresolved operations, and escrowed/delivering items; do not delete records to bypass the checks |
| License exit mode | Preserve queries and asset exits; verify receipts, expiry, and network binding |

## Reconciling UNKNOWN

1. Use `/km inspect <operation-id>` to inspect the player, amounts/items, source node, session, and execution stage. Check item summaries and this operation's administrative before/after records, and retain relevant external evidence.
2. Determine whether execution never occurred, occurred successfully, or remains uncertain. `UNKNOWN` is neither failure nor permission to debit again.
3. Use an [administrative command](./commands) to record the confirmed outcome and a reason. Leave uncertain cases unresolved instead of editing wallet values to hide differences.
4. Verify reservations, claims, and audit records before reporting the result to the player.

`PREPARED` is still preparing or executing. It can be inspected and refreshed, but cannot be reconciled early. An execution permit, a returned call, and the final ledger state are shown separately; a return receipt alone does not prove a sufficiently certain external outcome. A timed-out economy call is not submitted again. Its late return only adds evidence and preserves `UNKNOWN`, without automatically crediting funds, refunding, or redelivering.

If execution has not confirmed completion and its source node is active, `EXECUTION_IN_FLIGHT` blocks reconciliation, including a failure decision that would release assets. An offline source with no completion receipt requires a separate declaration: the source has been stopped and external economy requests have been verified no longer pending. Explicitly selecting the declaration and confirming the result records it and the reason in the audit. An expired lease, the player's current balance, or elapsed time cannot replace that verification.

Use `/km admin <player-UUID-or-online-name>` to cross-check the same player's wallets, all asset states, orders, and history. Offline players require a complete UUID; names resolve only players online on this server. This is a read-only audit entry with no proxy claims, balance editing, or general currency issuance. Evidence pages show interpretable fields and identify missing older details instead of treating raw serialized data as a conclusion.

## Backup and migration

Stop market writes on every old node before migration and account for pending operations. Back up the complete database and `plugins/KiteMarket/` configuration. Preserve network identity, currencies, wallets, orders, escrowed items, and operation records together.
The interface update adds separate InnoDB tables `km_ui_preferences` and `km_ui_theme_selections`, both keyed by network and player UUID, with the mode or theme ID and database update time. No preference row means `AUTO`; no theme row uses the selected backend's server default. Startup creates both through the existing migration entry without changing the financial schema version, protocol 3, or snapshot format 2. Fixed backup, restore, and scoped-cleanup lists must include both tables. Historical `official.market-stall`/`market-stall` selections remain readable but are no longer a default theme or release capability.

Validate the restored environment in isolation, then add nodes gradually. Match the Minecraft version, market protocol, item profile, and currency definitions; keep node IDs unique. Ensure old nodes cannot keep writing before opening the new network.

The current database schema is version 1; startup validates it and requires InnoDB. Before upgrading, inventory unfinished orders, claim assets, and `PREPARED`/`UNKNOWN` operations, then back up and test in an isolated database. There is no defined automatic downgrade between schema versions. Do not bypass version checks with an older JAR or partial restore.
Replacing an interface development build requires a normal full-network stop, complete backup, and matching builds. It does not require a protocol upgrade or clearing existing assets. New settings default to the warm layout, old custom slots select the compatible layout, and invalid candidates leave active settings intact. Vanilla and ItemsAdder v4 compatibility remain, with automatic selection defaulting to IA, then vanilla, and no default IA theme. Germ/DragonCore integration has been withdrawn; old preferences, settings and SDK extension positions remain readable without rewriting saved choices. Community interfaces need no official DLC; development and sale of the official Market Stall theme have been canceled. Live checks exist for the pinned environment; see [compatibility](./compatibility) for the recorded scope.

Historical development builds use `km_dlc_proofs` for independent network DLC proof generations, sequences and signatures; include the table in full `km_*` backup/restoration when it exists. Retain any installed encrypted DLC/proof caches and `plugins/ItemsAdder/contents/km_market_stall/` as historical or rollback material rather than automatically deleting them because the product was canceled. Key caches are private operational data, not public downloads.

Community themes load from `plugins/KiteMarket/themes/` without the historical official install endpoint; retain their declarations and resources during migration. `/km ui` explains the actual interface and fallback. After rebuilding changes the content, register a new actual sent UUID and matching SHA-1 and run `/km reload`; assigning a different digest to a registered UUID is rejected. Theme or historical DLC state never cancels orders, releases reserved market funds, or blocks community themes. See [ItemsAdder integration](./dlc) and [interface development](./ui-development).

Historical official installation used signed byte checks and optional PNG pixel digests. Preserve the matching builds, namespace and private caches for rollback; optimized installations are not automatically compatible with older loaders. This is no longer a new official-theme release flow and third-party themes need not adopt it.

Do not restore only order tables, roll back a single node's configuration independently, or connect cloned test servers to production data. Currency-scale or provider changes need a dedicated reconciliation migration. Cross-Minecraft-version conversion is outside v1.

## Upgrading protocol 1 or 2 to protocol 3

`1.0.0` uses market protocol `3`. Historical builds containing the admission fix use protocol `2`; earlier builds use protocol `1`. The build determines the protocol. Do not mix nodes or switch it through a reload. Database schema version remains `1`, and licensing still uses HTTP v2. These versions and the item snapshot format are checked separately. A new market does not need the migration field.

For an existing protocol 1 or 2 market:

1. Inspect wallets, claims, open orders, and `PREPARED` / `UNKNOWN` operations with the old build. Reconcile uncertain effects before issuing items or refunds.
2. Enter `EXIT_ONLY` through the verified license exit process. Wait until unfinished orders, auctions, frozen funds, and escrow are cleared. Available wallet balances and claimable items may remain.
3. Stop every node normally. Back up all `km_*` data, each node's `plugins/KiteMarket/`, and the old JAR, verify restoration, and wait for every node lease to expire.
4. Explicitly set `network.upgrade-from-protocol: '2'` on the first node; use `'1'` if the actual old protocol is 1. Replace all nodes with protocol 3 builds. Keep the Minecraft version, currencies, `network.name`, and `network.item-profile` identical. The source protocol must be accurate; the field cannot also change the currency or item environment.
5. Start one node first. The upgrade requires an exact old identity match, `EXIT_ONLY`, no live node lease, open order, frozen funds, unresolved operation, or item in `ESCROW` / `DELIVERING`. Identity changes, invalidation of every old node epoch and session, and the `PROTOCOL_UPGRADE` audit commit in one database transaction. An old process with an expired lease cannot heartbeat again or acquire a session. The network UUID, license binding, wallets, original item snapshots, and history are preserved.
6. Verify the UUID, balances, claims, and license, remove the temporary upgrade field, then start the remaining new nodes. Restored authorization can reopen the market; cleared orders do not revive.

When a check fails, preserve and investigate the records. Do not edit identity hashes or node leases to bypass it. Old builds are rejected by an upgraded network. Protocol 3 has no automatic downgrade. Rollback requires stopping the whole network, accounting for asset changes since the upgrade, and restoring a complete database snapshot with matching configuration/JARs. Do not attach an old JAR to a database that has processed new trades.

### Original snapshots and attribute comparison

New item snapshots use format `2`. `data` retains the original bytes produced by the server, and `rawDigest` checks their integrity independently. The comparison `fingerprint` ignores quantity. Existing format `1` snapshots are not automatically rewritten and retain their original digest checks and asset exit path.

Comparison ignores only typed-NBT compound field order and the order of vanilla enchantment entries with unique string `id` values in the legacy root `tag.Enchantments` / `tag.StoredEnchantments`. Names, Lore, other lists (including PDC lists), data types, numeric values, strings, and array contents still participate. Corrupted, ambiguous, or over-budget data is rejected without falling back to looser matching.

Comparison does not rewrite escrowed items; claiming still restores the original snapshot. Raw-byte integrity and attribute equivalence are separate checks. Players cannot provide custom NBT expressions. Historical [certification records](./compatibility) retain exact artifacts and scenarios; this phase does not repeat unchanged item or full trading tests.

### Narrower admission and existing assets

New trades currently admit tested base `UNSPECIFIC` and enchanted-book `ENCHANTED` types and verified property keys. Potions, books, skulls, maps, special armor, and other unverified types are explicitly rejected. Exact samples cannot bypass admission. Verified data such as PDC that advanced conditions cannot interpret still requires an exact sample.

Admission limits new samples, listings, supplies, and escrow deposits. Existing items retain restoration, cancellation returns, license exits, and claims, with snapshot-format, digest, and source-version checks. A narrower allowlist must not destroy or permanently lock old assets. Type admission does not certify an entire game version, network, or economy combination; see [certification](./compatibility) for the actual scope.

## Minimum validation

Use isolated test players and small test balances to exercise all three trading modes, simultaneous actions on two nodes, transfers, full-inventory claims, and restart recovery. Remove test assets afterward and retain useful acceptance records. See [certification](./compatibility) for platform coverage.

That checklist applies when enabling a new environment or changing related features. IA compatibility changes receive targeted checks for affected pages, drafts, input, resource packs and community-theme fallback, without repeating unchanged financial tests or a game-version matrix and without resetting existing player assets. Official-theme and release acceptance work has been canceled.

## Read-only developer API

`com.kitemc.market.api.KiteMarketApi` is registered through Bukkit `ServicesManager` after database initialization succeeds. Its independent Java 11/MIT SDK exposes immutable allowlisted summaries of network identity, currency precision, orders, wallets, claim assets and history. It provides no public rule-matching, currency creation, remote transfers or general trading writes. See [market API quick start](./api).

Queries return `CompletableFuture`; do not call `join()` or `get()` on the game thread or a Folia entity thread. Raw audit JSON, item bytes, execution tokens, licenses and recovery evidence are excluded; returned lists and nested objects are immutable. Schedule player, inventory, and menu work on the correct player context.

`MarketCommittedEvent` only reports committed purchases, supplies and auction wins. It is asynchronous and non-cancellable, carrying `TradeSummary` rather than raw JSON. Deduplicate using network ID and event ID, and schedule player work on its Entity Scheduler. Notifications can be delayed; historical entries from before startup are not replayed. This is not exactly-once or reliable catch-up delivery; query authoritative state.
