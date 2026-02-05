---
aside: false
---

<script setup>
import DownloadPage from '@theme/components/download/DownloadPage.vue';
</script>

# Download

Get the latest and previous versions of ArcPass.

## Requirements

| Requirement | Version |
|-------------|---------|
| Minecraft | 1.18 - 1.21+ |
| Java | 17+ |
| Paper/Spigot | 1.18+ |
| Folia | 1.19+ |

## Download

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="ArcPass" :show-proxy="false" />
</ClientOnly>

## Purchase License

ArcPass is a paid plugin requiring a valid license.

| Plan | Price | Devices | Ports/Device |
|------|-------|---------|--------------|
| Personal | $7 | 3 | 2 |
| Professional | $18 | 10 | 5 |
| Unlimited | $42 | 50 | 50 |

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="Purchase Now"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/dashboard/licenses"
    text="View Licenses"
    theme="alt"
    icon="login"
    :external="true"
  />
</ButtonGroup>

## API Dependency

For developers needing the API:

**Maven**

```xml
<dependency>
    <groupId>com.kitemc</groupId>
    <artifactId>arcpass-api</artifactId>
    <version>1.0.0</version>
    <scope>provided</scope>
</dependency>
```

**Gradle**

```kotlin
compileOnly("com.kitemc:arcpass-api:1.0.0")
```

See <InlineLink href="./developer/">Developer Documentation</InlineLink> for details.

## Feedback & Support

<LinkGrid :cols="2">
  <LinkCard
    icon="bug"
    title="Bug Reports"
    description="Submit issues on GitHub"
    href="https://github.com/KiteMC/ArcPass/issues"
    :external="true"
  />
  <LinkCard
    icon="light-bulb"
    title="Feature Requests"
    description="Propose on GitHub Discussions"
    href="https://github.com/KiteMC/ArcPass/discussions"
    :external="true"
  />
  <LinkCard
    icon="chat"
    title="Discord Community"
    description="Get technical support"
    href="https://discord.com/invite/TCn9v88V"
    :external="true"
  />
  <LinkCard
    icon="mail"
    title="Email Support"
    description="starry_cbz@outlook.com"
    href="mailto:starry_cbz@outlook.com"
    :external="true"
  />
</LinkGrid>
