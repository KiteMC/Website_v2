# System Requirements

This page lists all requirements and dependencies for running ArcPass.

## Minimum Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Minecraft Version | 1.18 | 1.20+ |
| Java Version | 17 | 21 |
| Server Software | Spigot | Paper / Folia |
| RAM | 2GB | 4GB+ |
| Storage | 50MB | 100MB+ |

## Server Compatibility

### Fully Supported

| Server | Version Range | Notes |
|--------|---------------|-------|
| Paper | 1.18 - 1.21+ | Recommended, best performance |
| Folia | 1.19 - 1.21+ | Recommended for large servers |
| Purpur | 1.18 - 1.21+ | Paper-based |
| Spigot | 1.18 - 1.21+ | Standard support |

### Partial Support

| Server | Notes |
|--------|-------|
| Bukkit | Basic features work, some advanced features limited |
| Modded (Forge/Fabric) | Not supported |

### Not Supported

- CraftBukkit
- Versions below 1.18
- Bedrock servers

## Java Version

### Java 17 (Minimum)

ArcPass is compiled with Java 17 features. Java 17+ is required.

### Java 21 (Recommended)

We recommend Java 21 LTS:

- Better performance
- Lower memory usage
- Long-term support

### Check Java Version

```bash
java -version
```

Expected output:

```
openjdk version "21.0.1" 2023-10-17
OpenJDK Runtime Environment (build 21.0.1+12)
OpenJDK 64-Bit Server VM (build 21.0.1+12, mixed mode, sharing)
```

## Plugin Dependencies

### Required

None. ArcPass can run standalone.

### Optional Dependencies

These plugins enhance ArcPass functionality:

#### Economy

| Plugin | Version | Purpose |
|--------|---------|---------|
| Vault | 1.7.3+ | Economy bridge |
| CMI | 9.0+ | Direct economy support |

Required for economy rewards and tier purchases.

#### Permissions

| Plugin | Version | Purpose |
|--------|---------|---------|
| LuckPerms | 5.4+ | Permission rewards, prefix/suffix |

Required for permission and group rewards.

#### Placeholders

| Plugin | Version | Purpose |
|--------|---------|---------|
| PlaceholderAPI | 2.11.0+ | Placeholder variables |

Required for displaying ArcPass data in scoreboards, chat plugins, etc.

#### Title Systems

| Plugin | Version | Purpose | Folia |
|--------|---------|---------|-------|
| DeluxeTags | 1.8+ | Title rewards | ❌ |
| TAB | 4.0+ | Title rewards (alternative) | ✅ |

::: tip
Use TAB instead of DeluxeTags if running Folia.
:::

#### Quest Triggers

| Plugin | Version | Purpose |
|--------|---------|---------|
| MythicMobs | 5.0+ | Custom mob kill quests |
| Jobs Reborn | 5.0+ | Job experience quests |

#### Custom Items

| Plugin | Version | Purpose |
|--------|---------|---------|
| Oraxen | 1.150+ | Custom item rewards |
| ItemsAdder | 3.5+ | Custom item rewards |

## Database

### SQLite (Default)

- No additional setup
- Suitable for small servers
- Data stored in `plugins/ArcPass/data.db`

### MySQL

- Recommended for medium/large servers
- Supports multi-server data sharing
- Requires MySQL 5.7+ or MariaDB 10.2+

## Network Requirements

### License Validation

- Connects to `license.kitemc.com`
- Port: 443 (HTTPS)
- Results cached after initial validation

### Firewall Settings

Ensure server can access:

```
license.kitemc.com:443
```

## Performance Recommendations

### Small Servers (< 50 players)

- Use SQLite database
- Default configuration is fine

### Medium Servers (50-200 players)

- Use MySQL database
- Increase cache sizes

### Large Servers (200+ players)

- Use MySQL database
- Consider Folia server
- Optimize connection pool

```yaml
# database.yml
mysql:
  pool:
    maximum-pool-size: 10
    minimum-idle: 5
```

## Next Steps

After confirming requirements:
<LinkGrid :cols="2">
  <LinkCard icon="download" title="Install Plugin" description="Download and install guide" href="./installation" />
  <LinkCard icon="key" title="Activate License" description="Configure license key" href="./license" />
</LinkGrid>
