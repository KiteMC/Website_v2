---
aside: false
---

<script setup>
import DownloadPage from '@theme/components/download/DownloadPage.vue';
</script>

# 下载

获取 ArcPass 的最新版本和历史版本。

## 版本要求

| 要求 | 版本 |
|------|------|
| Minecraft | 1.18 - 1.21+ |
| Java | 17+ |
| Paper/Spigot | 1.18+ |
| Folia | 1.19+ |

## 下载

<ClientOnly>
  <DownloadPage owner="KiteMC" repo="ArcPass" :show-proxy="false" />
</ClientOnly>

## 购买许可证

ArcPass 是付费插件，需要有效许可证才能使用。

| 版本 | 价格 | 设备数量 | 单机端口数 |
|------|------|---------|-----------|
| 标准版 | ¥68 | 5 | 3 |
| 专业版 | ¥198 | 25 | 15 |

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="立即购买"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/dashboard/licenses"
    text="查看许可证"
    theme="alt"
    icon="login"
    :external="true"
  />
</ButtonGroup>

## API 依赖

如果您是开发者，需要 API 依赖：

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

详细信息请参阅 <InlineLink href="./developer/">开发者文档</InlineLink>。

## 反馈与支持

<LinkGrid :cols="2">
  <LinkCard
    icon="bug"
    title="Bug 反馈"
    description="在 GitHub 提交问题"
    href="https://github.com/KiteMC/ArcPass/issues"
    :external="true"
  />
  <LinkCard
    icon="light-bulb"
    title="功能建议"
    description="在 GitHub 讨论区提出"
    href="https://github.com/KiteMC/ArcPass/discussions"
    :external="true"
  />
  <LinkCard
    icon="chat"
    title="Discord 社区"
    description="获取技术支持"
    href="https://discord.com/invite/TCn9v88V"
    :external="true"
  />
  <LinkCard
    icon="mail"
    title="邮件支持"
    description="starry_cbz@outlook.com"
    href="mailto:starry_cbz@outlook.com"
    :external="true"
  />
</LinkGrid>
