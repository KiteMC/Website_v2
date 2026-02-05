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
# ArcPass Main Configuration

# Debug mode
debug: false

# Language settings
language:
  default: "en_US"
  use-client-locale: true

# Data saving
data:
  auto-save-interval: 5
  save-on-quit: true

# Notifications
notifications:
  level-up:
    enabled: true
    sound: "ENTITY_PLAYER_LEVELUP"
    title: true
  quest-complete:
    enabled: true
    sound: "ENTITY_EXPERIENCE_ORB_PICKUP"
  reward-available:
    enabled: true
    action-bar: true
```

### database.yml

```yaml
# Database Configuration

type: sqlite

sqlite:
  file: "data.db"

mysql:
  host: localhost
  port: 3306
  database: arcpass
  username: root
  password: ""
  pool:
    maximum-pool-size: 10
    minimum-idle: 5
    connection-timeout: 30000
    idle-timeout: 600000
    max-lifetime: 1800000
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
