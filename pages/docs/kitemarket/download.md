---
title: KiteMarket 下载
description: KiteMarket 三种服务器运行包、两个公开 SDK、可运行示例、双语配置与 SHA-256 校验说明。
aside: false
---

<script setup>
import ProductDownloadLayout from '@theme/components/download/ProductDownloadLayout.vue';
</script>

<ProductDownloadLayout product="KiteMarket" title="下载" description="选择适合服务器的运行包，或获取公开 SDK、示例和配置。" image="/images/kitemarket/kitemarket-icon.svg">

<ButtonGroup>
  <ActionButton href="./guide" text="安装指南" theme="brand" icon="arrow" />
  <ActionButton href="./api" text="市场 API" theme="alt" icon="arrow" />
  <ActionButton href="https://license.kitemc.com/products/kitemarket" text="购买许可证" theme="alt" icon="cart" :external="true" />
  <ActionButton href="https://github.com/KiteMC/KiteMarket/releases" text="GitHub Releases" theme="alt" icon="external" :external="true" />
</ButtonGroup>

全部发行文件由 [KiteMC/KiteMarket](https://github.com/KiteMC/KiteMarket) 的 GitHub Releases 提供，使用 GitHub 直接下载，不要求 GitHub Packages Token。下方仅展示已经公开的版本；没有 Release 时不会显示占位下载。

## 版本列表

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="KiteMarket" asset-profile="kitemarket" />
</ClientOnly>

## 服主：按服务器选择一份运行包

| 运行包 | 目标 Minecraft 范围 | 插件字节码 | 1.0.0 文件名 |
|---|---|---|---|
| Legacy | 1.16.5–1.20.4 | Java 11 | `KiteMarket-legacy-1.0.0.jar` |
| Modern | 1.20.5–1.21.11 | Java 21 | `KiteMarket-modern-1.0.0.jar` |
| Current | 26.2 | Java 25 | `KiteMarket-current-1.0.0.jar` |

只向 `plugins/` 放入对应范围的一份主插件 JAR。服务器 JVM 仍须满足核心要求，Legacy 字节码不是所有旧版服务器都能使用 Java 11 的保证。IA 运行插件和经济后端需自行准备。

目标范围不等于全部实测通过。[兼容说明](./compatibility)区分代表组合、仅启动记录和未验证组合；[安装指南](./guide)提供正式默认配置使用方法。

## 开发者：SDK、源码与示例

| 用途 | 文件名 |
|---|---|
| 只读市场查询与成交通知 | `KiteMarket-API-1.0.0.jar` |
| 市场 API 源码 / Javadoc | `KiteMarket-API-1.0.0-sources.jar` / `KiteMarket-API-1.0.0-javadoc.jar` |
| 页面与主题呈现接口 | `KiteMarket-UI-API-1.0.0.jar` |
| UI API 源码 / Javadoc | `KiteMarket-UI-API-1.0.0-sources.jar` / `KiteMarket-UI-API-1.0.0-javadoc.jar` |
| 可运行查询及 IA 扩展示例 | `KiteMarket-Examples-1.0.0.zip` |

两个 SDK 均为 Java 11／MIT。第三方插件使用 `compileOnly`，**不将 SDK 打包或重定位**，也不把 API、sources、Javadoc JAR 放入服务器 `plugins/`。服务由主插件提供；它们不能代替主插件授权。见[市场 API 入门](./api)与[界面 SDK](./ui-development)。

## 配置与校验

配置与校验文件使用 `KiteMarket-config-zh_CN-1.0.0.zip`、`KiteMarket-config-en_US-1.0.0.zip` 和 `SHA256SUMS.txt`，与对应版本一起列在 GitHub Release 中。配置包含正式产品信息与可信公钥；仅填写自己的许可证、数据库和实际经济后端。

下载后按校验文件核对 SHA-256，例如：

```powershell
Get-FileHash -Algorithm SHA256 .\KiteMarket-modern-1.0.0.jar
```

有资产的网络升级前先阅读[备份、升级与回滚](./operations)，正常停服并备份完整数据库和配置。公开文件不含混淆映射、私钥或网络凭据。

</ProductDownloadLayout>
