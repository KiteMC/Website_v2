---
title: KiteMarket Downloads
description: Three KiteMarket runtime distributions, two public SDKs, runnable examples, bilingual configuration and SHA-256 verification.
aside: false
---

<script setup>
import ProductDownloadLayout from '@theme/components/download/ProductDownloadLayout.vue';
</script>

<ProductDownloadLayout product="KiteMarket" title="Downloads" description="Choose a server runtime or get the public SDKs, examples and configuration." image="/images/kitemarket/kitemarket-icon.svg">

<ButtonGroup>
  <ActionButton href="./guide" text="Installation Guide" theme="brand" icon="arrow" />
  <ActionButton href="./api" text="Market API" theme="alt" icon="arrow" />
  <ActionButton href="https://github.com/KiteMC/KiteMarket/releases" text="GitHub Releases" theme="alt" icon="external" :external="true" />
</ButtonGroup>

::: info Current status
**1.0.0 runtime downloads and sales are not open yet.** The public repository provides interfaces, example sources, documentation and Issues; core source stays private.
:::

All release files come from [KiteMC/KiteMarket](https://github.com/KiteMC/KiteMarket) on GitHub Releases, using direct GitHub downloads without a GitHub Packages Token. Only public releases appear below; no placeholder download is offered when none exist.

## Available versions

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="KiteMarket" asset-profile="kitemarket" />
</ClientOnly>

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

GitHub Releases also provide `KiteMarket-config-zh_CN-1.0.0.zip`, `KiteMarket-config-en_US-1.0.0.zip` and `SHA256SUMS.txt`. Configuration carries the product information and trusted public key. Fill in your own license, database and actual economy configuration.

Compare downloads against the SHA-256 file, for example:

```powershell
Get-FileHash -Algorithm SHA256 .\KiteMarket-modern-1.0.0.jar
```

For a network holding assets, read [backup, upgrades and rollback](./operations), stop cleanly and back up the full database and configuration first. Public files exclude obfuscation maps, private keys and network credentials.

</ProductDownloadLayout>
