# Versions and certification

This page separates `1.0.0` target coverage from existing real verification records. Runtime downloads are pending; see [release status](./download). Combinations without a complete report remain **not fully verified**. Preparing a release does not let old evidence certify a new JAR, every game version or every economy backend.

| Component | Target or constraint | Status |
|---|---|---|
| Paper / Purpur | Minimum target Minecraft 1.16.5; use the appropriate distribution | Selected Paper 1.21.11 trade and GUI flows tested; other combinations not fully verified |
| Folia | Only actual Folia releases; no claim that Folia 1.16.5 exists | 1.21.11 startup-only record; no player-trading or IA certification |
| legacy / modern / current | Java bytecode targets 11 / 21 / 25; server requirements also apply | Build and live-server verification are separate |
| Same-version network | Matching Minecraft version, market protocol, item profile, and currencies | Selected two-node Paper 1.21.11 flows tested; full certification incomplete |
| MySQL 8 | Shared authoritative ledger | Historical integration and targeted preference evidence retained; validate actual changes only |
| MariaDB 10.11 | Shared authoritative ledger | Separate integration and targeted preference evidence retained; validate actual changes only |
| Vault | Vault API plus an actual economy implementation | Certify each implementation, thread model, and precision |
| PlayerPoints | Integer currency within the backend's balance and amount range | Normal 3.3.5 transfers tested; full backend certification incomplete |
| CoinsEngine | Separate legacy API adapter; no blanket old-version or Folia support | Uncertified |
| ExcellentEconomy | Separate renamed API; certification does not cover CoinsEngine | Uncertified |
| ItemsAdder v4 compatibility | Server-owner or developer resources/themes without official DLC; public SDK targets Java 11, working IA example Java 21, runtime obtained separately | White-frame configuration theme and Java market page opened on pinned Paper 1.21.11 / IA 4.0.16; validate other packs and runtimes separately |
| Legacy Germ / DragonCore values | First-party integration withdrawn; old preferences, settings and SDK extension positions remain readable, with developer-registered providers permitted | Supplied client metadata and server references target 1.12.2, outside the base >=1.16.5 range |

Official requirements for some CoinsEngine and ExcellentEconomy releases exclude Folia. Market platform support does not imply support for every external economy. Players may use a certified Paper gateway running the same Minecraft version for transfers; see the [wallet guide](./wallet).

Proxy protocol translation does not change the item-storage contract. Client connectivity is a network concern; **server nodes sharing one market must run the same Minecraft version**.

Current IA evidence is limited to the representative environment below and does not certify Folia, Legacy, 1.20.5, or 26.x. Unverified nodes or unavailable resources retain the complete vanilla GUI. Theme availability does not block base trading or asset exit, nor third parties developing and validating other themes. Vanilla and IA compatibility remain, without expanding the game-version matrix or repeating unchanged financial tests. Development and sale of the official Market Stall DLC have been canceled; it will not launch with the plugin. Germ/DragonCore integration is also no longer a release gate. See [interface development](./ui-development) and [ItemsAdder integration/fallback](./dlc).

## Pinned IA environment

| Component | Fixed version |
|---|---|
| Paper | Minecraft 1.21.11, build 132 |
| Java | Temurin 21.0.7+6 |
| ItemsAdder | User-provided legitimate 4.0.16 runtime |
| ProtocolLib | Official 5.5.0-SNAPSHOT-583353e |

Fixed file SHA-256:

```text
Paper:       5ffef465eeeb5f2a3c23a24419d97c51afd7dbb4923ff42df9a3f58bba1ccfba
ItemsAdder:  59089d959a62064aa76fe1896e7a685d61a06928d4a9e241da611c84c71687bc
ProtocolLib: bdd7c55799ea625e66992c89f7746be6d25e5adacb6aaf173316bebd493bf834
```

ProtocolLib's movable `dev-build` tag cannot identify a future same-named download as this artifact. This records only the pinned files, does not redistribute third-party plugins, and provides no Folia or other-version certification. KiteMarket JARs, SDK and examples have separate digests; older screenshots cannot automatically certify a new JAR. Archived releases, artwork and acceptance records for the canceled official theme are historical evidence, not an available product or future release commitment.

## What a certification record contains

Record the server distribution and build, Java, KiteMarket build, database version, economy plugins, and currency settings. Validate all three trading modes, concurrency, transfers, claims, restart recovery, and license exit behavior. A successful compile or startup is insufficient.

The download page identifies exact filenames in actual public Releases rather than selecting the first JAR. After runtime publication, verify the artifact's SHA-256. API, sources and Javadoc files are not server plugins.

## Distribution ranges and historical evidence

| Distribution | Minecraft range | Plugin bytecode |
|---|---|---|
| Legacy | 1.16.5–1.20.4 | Java 11 |
| Modern | 1.20.5–1.21.11 | Java 21 |
| Current | Initial target 26.2 | Java 25 |

Plugin bytecode is not the server's Java requirement. Run the JVM required by your actual server build; Legacy's Java 11 bytecode does not mean every legacy server can run on Java 11.

The base version ranges remain, but the earlier version-by-version test plan has been canceled. This phase targets actual changes in one representative environment and retains each historical report's exact artifact and scenario. Untested combinations remain uncertified; startup records do not become complete trading certification.

Development tests on October 1, 2026 used two Paper 1.21.11 build 132 nodes on Java 21. They exercised ordinary fixed-price purchase/claim, partial buy-order fulfillment/cancellation refunds, manual auctions/extensions/settlement, and one advanced-condition flow through a real client. Normal PlayerPoints 3.3.5 deposits and withdrawals also have actual balance evidence. These results cover only that development environment; they do not replace fault recovery, special-item, Purpur, Folia, or other-version certification.

**Startup-only checks** on October 2, 2026 also covered Paper 1.16.5 build 794 (Temurin 16), Folia 1.21.11 build 14 (Java 21), and Paper 26.2 build 129 (Java 25). Each loaded its development distribution, connected to MariaDB, ran diagnostics, and stopped normally. These checks do not certify player transactions, item fidelity, or external economies. The 26.2 server reported a Windows performance-counter environment error; KiteMarket still completed startup and diagnostics.
