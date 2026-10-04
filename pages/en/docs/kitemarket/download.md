---
title: KiteMarket Downloads and Release Status
description: Three KiteMarket runtime distributions, two public SDKs, runnable examples, bilingual configuration and SHA-256 verification.
---

# Downloads and release status

::: info Current status
`1.0.0` is being prepared. **Runtime plugin downloads and sales are not open yet.** Local test builds or unreleased candidates are not offered as production downloads. The public repository contains interfaces, examples, documentation and Issues; core source stays private.
:::

Public repository: [KiteMC/KiteMarket](https://github.com/KiteMC/KiteMarket). The list below only shows actual public GitHub Release assets, with an empty state before release. SDK assets can be downloaded directly without requiring a GitHub Token for Packages.

## Server owners: choose exactly one runtime

| Distribution | Target Minecraft range | Plugin bytecode | 1.0.0 filename |
|---|---|---|---|
| Legacy | 1.16.5–1.20.4 | Java 11 | `KiteMarket-legacy-1.0.0.jar` |
| Modern | 1.20.5–1.21.11 | Java 21 | `KiteMarket-modern-1.0.0.jar` |
| Current | 26.2 | Java 25 | `KiteMarket-current-1.0.0.jar` |

Install only the matching main-plugin JAR in `plugins/`. The server JVM must still meet the server software's own requirements; Legacy bytecode does not mean every older server can run on Java 11. Prepare the actual IA plugin and economy backends separately.

Intended coverage is not certification of every combination. [Compatibility](./compatibility) separates representative tests, startup records and unverified combinations. [Installation](./guide) explains the production defaults.

## Developers: SDKs, sources and examples

| Purpose | Filename |
|---|---|
| Read-only market queries and trade notifications | `KiteMarket-API-1.0.0.jar` |
| Market API sources / Javadoc | `KiteMarket-API-1.0.0-sources.jar` / `KiteMarket-API-1.0.0-javadoc.jar` |
| Page and theme rendering interfaces | `KiteMarket-UI-API-1.0.0.jar` |
| UI API sources / Javadoc | `KiteMarket-UI-API-1.0.0-sources.jar` / `KiteMarket-UI-API-1.0.0-javadoc.jar` |
| Runnable query and IA extension examples | `KiteMarket-Examples-1.0.0.zip` |

Both SDKs target Java 11 with MIT licenses. Use `compileOnly`: **do not bundle or relocate the SDKs**, and do not put API, sources or Javadoc JARs in the server's `plugins/`. The host plugin supplies the services; SDKs do not replace its license. See [market API quick start](./api) and the [UI SDK](./ui-development).

## Configuration and integrity

The release will also include `KiteMarket-config-zh_CN-1.0.0.zip`, `KiteMarket-config-en_US-1.0.0.zip` and `SHA256SUMS.txt`. Configuration carries the real product information and trusted public key. Fill in your own license, database and actual economy configuration rather than copying isolated test credentials.

Compare downloads against the SHA-256 file, for example:

```powershell
Get-FileHash -Algorithm SHA256 .\KiteMarket-modern-1.0.0.jar
```

For a network holding assets, read [backup, upgrades and rollback](./operations), stop cleanly and back up the full database and configuration first. Public files exclude obfuscation maps, private keys, network credentials and historical commercial-theme artwork.

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="KiteMarket" asset-profile="kitemarket" />
</ClientOnly>
