# Installation Guide

This page provides detailed instructions for installing ArcPass on different server types.

## Supported Servers

| Server | Supported Versions | Notes |
|--------|-------------------|-------|
| Paper | 1.18 - 1.21+ | Recommended |
| Spigot | 1.18 - 1.21+ | Full support |
| Folia | 1.19 - 1.21+ | Full multi-threaded support |
| Purpur | 1.18 - 1.21+ | Paper-based, full support |
| Bukkit | 1.18 - 1.21+ | Basic features supported |

::: warning Note
CraftBukkit and versions below 1.18 are not supported.
:::

## Installation Steps

### 1. Download the Plugin

Get the latest version from:
<LinkGrid :cols="2">
  <LinkCard icon="download" title="GitHub Releases" description="Download from GitHub" href="https://github.com/KiteMC/ArcPass/releases" :external="true" />
  <LinkCard icon="shopping-cart" title="KiteMC Website" description="Purchase and download" href="https://license.kitemc.com/products/arcpass" :external="true" />
</LinkGrid>

### 2. Place the File

Put the downloaded `ArcPass-x.x.x.jar` in your server's `plugins` folder:

```
your-server/
├── plugins/
│   ├── ArcPass-1.0.0.jar    ← Place here
│   └── ... other plugins
├── server.jar
└── ...
```

### 3. Start the Server

On first startup, the plugin will:

1. Detect server type (Paper/Spigot/Folia)
2. Generate default configuration files
3. Create database (SQLite by default)
4. Wait for license activation

### 4. Check Startup Logs

On successful startup, you'll see logs like:

```
[ArcPass] Loading ArcPass v1.0.0
[ArcPass] Detected platform: PAPER
[ArcPass] Loading configuration files...
[ArcPass] Initializing database (SQLite)...
[ArcPass] Waiting for license validation...
[ArcPass] License validation required. Please configure license.yml
```

## Generated File Structure

```
plugins/ArcPass/
├── config.yml              # Main config
├── database.yml            # Database config
├── license.yml             # License config
├── lang/
│   ├── en_US.yml          # English
│   └── zh_CN.yml          # Chinese
├── passes/
│   └── default.yml        # Default pass
├── quests/
│   ├── daily/             # Daily quests
│   ├── weekly/            # Weekly quests
│   └── seasonal/          # Seasonal quests
├── rewards/
│   └── default.yml        # Default rewards
└── gui/
    ├── main-menu.yml      # Main menu
    ├── quests.yml         # Quests GUI
    └── rewards.yml        # Rewards GUI
```

## Folia Server Notes

ArcPass fully supports Folia's regionalized multi-threading:

- All scheduler calls use Folia-compatible APIs
- Database operations run asynchronously
- GUI operations execute on correct region threads

No additional configuration needed - the plugin auto-detects and adapts to Folia.

## Troubleshooting

### Plugin Not Loading

Check:

1. JAR filename is correct (don't rename it)
2. Java version is 17+
3. Console for error messages

### Config Files Not Generated

1. Ensure plugins folder has write permissions
2. Check disk space
3. Try manually creating `plugins/ArcPass` folder

### Dependency Plugin Issues

Ensure compatible versions:

| Plugin | Recommended Version |
|--------|-------------------|
| Vault | 1.7.3+ |
| PlaceholderAPI | 2.11.0+ |
| LuckPerms | 5.4+ |

## Next Steps

After installation:
<LinkGrid :cols="2">
  <LinkCard icon="key" title="Activate License" description="Configure license key" href="./license" />
  <LinkCard icon="cog" title="View Requirements" description="See full requirements" href="./requirements" />
</LinkGrid>
