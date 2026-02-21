# Configuration Overview

ArcPass uses a modular configuration design with different features configured in separate files.

## File Structure

```
plugins/ArcPass/
├── config.yml          # Main config
├── database.yml        # Database config
├── license.yml         # License config
├── lang/               # Language files
│   ├── en_US.yml
│   └── zh_CN.yml
├── passes/             # Pass configs
│   ├── default.yml
│   └── ...
├── quests/             # Quest configs
│   ├── daily/
│   ├── weekly/
│   └── seasonal/
├── rewards/            # Reward configs
│   └── default.yml
└── gui/                # GUI configs
    ├── main-menu.yml
    ├── quests.yml
    └── rewards.yml
```

## Main Configuration Files

### config.yml

```yaml
# Config version (DO NOT MODIFY)
config-version: 1

# Debug mode - enables verbose logging
debug: false

# Locale settings
locale:
  # Default language for new players
  default: en_US
  # Allow players to change their language
  allow-change: true

# Pass settings
pass:
  # Maximum level (1-100 recommended)
  max-level: 100
  # Base experience for level 1
  base-experience: 100
  # Experience multiplier per level (1.1 = 10% increase each level)
  experience-multiplier: 1.1

# Quest settings
quests:
  # Daily quest reset time (24-hour format, server timezone)
  daily-reset-hour: 4
  # Weekly quest reset day (1=Monday, 7=Sunday)
  weekly-reset-day: 1

# Notification settings
notifications:
  # Notify players when they level up
  level-up: true
  # Notify players when they complete a quest
  quest-complete: true
  # Notify players when rewards are available
  rewards-available: true
  # Sound effects
  sounds:
    level-up: ENTITY_PLAYER_LEVELUP
    quest-complete: ENTITY_EXPERIENCE_ORB_PICKUP
    reward-claim: BLOCK_NOTE_BLOCK_PLING

# GUI settings
gui:
  # Update interval for animated elements (ticks)
  update-interval: 20
  # Close GUI when clicking outside
  close-on-outside-click: true

# Performance settings
performance:
  # Data save interval (seconds)
  save-interval: 300
  # Cache expiry time (minutes)
  cache-expiry: 30
```

### database.yml

```yaml
# Config version (DO NOT MODIFY)
config-version: 1

# Storage type: sqlite or mysql
type: sqlite

# SQLite settings (when type: sqlite)
sqlite:
  # Database file name (in plugin folder)
  file: data.db

# MySQL settings (when type: mysql)
mysql:
  host: localhost
  port: 3306
  database: arcpass
  username: root
  password: ""
  # Connection pool size
  pool-size: 10
  # Additional connection properties
  properties:
    useSSL: false
    autoReconnect: true
    allowPublicKeyRetrieval: true
```

## Hot Reload

Most configurations support hot reload:

```
/arcpass admin reload
```

::: warning Note
These changes require a server restart:

- Database type switch
- License key change
:::

## Configuration Validation

ArcPass validates config files on load:

- Syntax errors shown in console
- Invalid values use defaults with warnings
- Missing required configs prevent startup

## Detailed Guides

<LinkGrid :cols="2">
  <LinkCard icon="ticket" title="Pass Configuration" description="Tiers, levels, rewards" href="./passes" />
  <LinkCard icon="clipboard-list" title="Quest Configuration" description="Quest types, objectives" href="./quests" />
  <LinkCard icon="gift" title="Reward Configuration" description="Reward types, values" href="./rewards" />
  <LinkCard icon="trophy" title="Season Configuration" description="Season timing, rules" href="./seasons" />
  <LinkCard icon="color-swatch" title="GUI Configuration" description="Interface layout, items" href="./gui" />
</LinkGrid>

## Example Configurations

The `docs/examples-en/` folder in the plugin directory contains complete configuration examples.
