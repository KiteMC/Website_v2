# Shared wallet and transfers

Market funds and economy-plugin funds are separate balances. A deposit debits the external backend and credits the market; a withdrawal does the reverse. Purchases, bids, and fulfillment settle inside the market ledger instead of calling each node's economy plugin for every trade.

| Provider | Configuration and certification |
|---|---|
| `vault` | Requires an actual Economy implementation and its configured name; Vault alone is not an economy |
| `playerpoints` | Scale must be 0; amounts and resulting balances must fit the backend's integer range |
| `coinsengine` | Uses the legacy CoinsEngine API and native currency ID; an ExcellentEconomy shim is not a replacement |
| `excellenteconomy` | Separate renamed API adapter with its own native currency ID and scale |

Each currency has a stable ID, scale, native mapping, and transfer gateway. Changing an active currency's scale or provider requires migration and reconciliation; it is not a normal rename. There is no automatic currency exchange.

<ScreenshotPlaceholder src="/images/kitemarket/screenshot-wallet.png" caption="Market wallet" description="Real gameplay screenshot coming later: available and reserved currency balances, deposit and withdrawal entrances." />

## Gateway node

Assign a `gateway` to each currency, matching the target node's `network.node-id`. **Players must switch to that node to deposit or withdraw.** There is no automatic remote RPC forwarding. Another node returns `GATEWAY_NODE`; market funds and internal trading remain shared.

A Folia node without a certified economy backend can still participate in internal trading, while a compatible Paper node on the same Minecraft version handles transfers. Gateway downtime pauses transfers for that currency; other nodes must not start debiting it directly.

## Enabling an adapter

`certified-versions` must contain the target plugin versions you have actually validated. An empty list blocks transfers. For `vault`, list the Vault version itself, pin the actual Economy service name with `vault-provider`, and independently test that economy implementation. This is an operator allowlist; **entering a version does not create official KiteMC certification**. Folia providers are blocked by default unless verified; do not set `certified-folia: true` merely to bypass checks.

Test deposits, withdrawals, insufficient funds, precision and amount limits, backend cancellation/failure, disconnects, restarts, and concurrent external changes. See the [configuration example](./guide) and [certification matrix](./compatibility).

## Failure and UNKNOWN

A rejected external call is handled according to its operation state, including release of reservations where appropriate. An uncertain result becomes `UNKNOWN` and must not be called again automatically. Administrators need external evidence and market operation records; the player's current balance alone does not prove a historical transfer.

Some backends update memory before asynchronously persisting it. API success is not a cross-system commit. Internal market transactions do not guarantee automatic recovery of external transfers across every process crash. Keep untested backend combinations disabled.
