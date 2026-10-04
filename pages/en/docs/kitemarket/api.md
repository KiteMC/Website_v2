---
title: KiteMarket Market API Quick Start
description: Independent Java 11/MIT read-only market SDK with immutable DTOs, asynchronous registration and safe trade notifications.
---

# Market API quick start

`KiteMarket-API` is an independent Java 11/MIT SDK without a dependency on the proprietary `market-core`. It exposes read-only queries and post-commit notifications, not transaction writes. The `1.0.0` runtime release is still pending; see [downloads](./download) for public interfaces and examples.

## Reference the SDK

Obtain the matching `KiteMarket-API-1.0.0.jar` and put it in your project's `libs/`. The public [KiteMC/KiteMarket](https://github.com/KiteMC/KiteMarket) repository provides interface sources, Javadoc and runnable examples without requiring a GitHub Packages Token.

```kotlin
dependencies {
    compileOnly(files("libs/KiteMarket-API-1.0.0.jar"))
    compileOnly("com.destroystokyo.paper:paper-api:1.16.5-R0.1-SNAPSHOT")
}
tasks.withType<JavaCompile>().configureEach {
    options.release.set(11)
}
```

Add `depend: [KiteMarket]` to `plugin.yml`. If your plugin also works without the market, use `softdepend`, but load classes referencing the API only after confirming the host exists.

**Do not bundle, shade or relocate the SDK.** KiteMarket supplies the unique runtime interface classes; duplicate copies can prevent service lookup. The SDK JAR is not a server plugin.

## Wait for registration, then query asynchronously

```java
import com.kitemc.market.api.KiteMarketApi;

KiteMarketApi api = getServer().getServicesManager().load(KiteMarketApi.class);
if (api == null) return; // Database not ready: wait for ServiceRegisterEvent.

api.orders(null, null, "", 0, 36).whenComplete((orders, failure) -> {
    if (!isEnabled()
        || getServer().getServicesManager().load(KiteMarketApi.class) != api) return;
    if (failure != null) {
        getLogger().warning("Market query unavailable");
        return;
    }
    orders.forEach(order -> getLogger().info(
        order.getId() + " " +
        order.getCurrency().display(order.getUnitPrice()).toPlainString()));
});
```

`depend` guarantees load order, not a connected database. Reacquire the service on `ServiceRegisterEvent` and discard results from unloaded or replaced services. The runnable `examples/api-java` project in the public repository handles delayed registration, failures and bounded recent-event deduplication without adding player commands.

Queries return `CompletableFuture`. Never `get()` or `join()` on the main, Folia region or entity thread. Callbacks do not promise a player scheduling context; GUI updates, player messages and inventory access need separate appropriate scheduling. Report failures as unavailable rather than inventing zero balances or empty markets.

## Queries and results

| Method | Result |
|---|---|
| `networkId()` | Persistent market-network UUID |
| `currencies()` | Currency IDs and fixed precision |
| `orders(type, owner, search, offset, limit)` | Order page; optional type, null owner means open orders, an explicit owner includes their terminal orders |
| `order(id)` | One order; missing orders complete exceptionally |
| `wallets(player)` | Available and reserved balances |
| `assets(player)` | Available claim IDs, quantities and item summaries |
| `history(player, offset, limit)` | Allowlisted audit summaries for that player |

Pagination requires `offset >= 0` and `1 <= limit <= 100`, with at most 256 search characters. History pagination follows stored audit rows; unknown internal kinds become `OTHER` instead of exposing raw records.

Amounts use `long` integer minor units. At `CurrencyView.getPrecision() == 2`, `128` means `1.28`; format with `currency.display(amount).toPlainString()`. Timestamps are Unix milliseconds and tax rates are basis points.

Standalone DTOs live under `com.kitemc.market.api.model`: `CurrencyView`, `OrderView`, `WalletView`, `ClaimAssetView`, `HistoryEntry`, `TradeSummary`, `ItemSummary` and enums. Fields and nested lists, sets and maps are immutable. Optional order samples expose only material, name, lore, enchantments and durability; they cannot recreate or claim assets.

Results exclude raw audit JSON, serialized item bytes, exact-sample fingerprints, license credentials, execution tokens and recovery evidence. Missing historical amounts remain `null` rather than becoming zero. `RECORDED` does not prove an external side effect succeeded; `PENDING_REVIEW` needs investigation. The development `match(ItemRule, ItemSnapshot)` signature is not public.

## Post-commit notifications

```java
import com.kitemc.market.api.MarketCommittedEvent;
import com.kitemc.market.api.model.TradeSummary;
import org.bukkit.event.EventHandler;

@EventHandler
public void onTrade(MarketCommittedEvent event) {
    String deduplicationKey = event.getNetworkId() + ":" + event.getEventId();
    TradeSummary trade = event.getTrade();
    // Deduplicate first; the runnable example includes a bounded recent cache.
    getLogger().info(deduplicationKey + " " + event.getTopic()
        + " net=" + trade.getCurrency().display(trade.getNetIncome()).toPlainString());
}
```

`MarketCommittedEvent` is asynchronous and non-cancellable, reporting committed `BUY`, `SUPPLY` and `AUCTION_WON` only. `getTrade()` exposes order/operation IDs, type, item and income recipients, quantity, currency, gross, tax and net income. There is no raw `getPayload()`.

Node polling can delay or miss a notification, historical entries before startup are not replayed, and multiple nodes may see the same event. Deduplicate by **network UUID plus event ID**; IDs need not be consecutive. Persist your own long-term deduplication when required. Notifications are not evidence for issuing replacement money or items; re-query authoritative state after downtime.

## Extending the player interface?

Use the separate [UI SDK](./ui-development) to receive current page snapshots and return registered host actions. KiteMarket still owns permissions, quotes, final inventory checks and confirmation. Neither SDK permits arbitrary currency creation, item removal, confirmation bypass or remote transaction writes.

Configuration themes and Java IA renderers require no official DLC. Third parties may use, freely distribute or independently sell their own themes. Real IA example adapter code targets Java 21, independently of the two Java 11 SDKs.
