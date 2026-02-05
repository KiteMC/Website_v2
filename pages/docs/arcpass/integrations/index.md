# Third-Party Integrations

ArcPass supports integration with many popular plugins to extend functionality.

## Integration Overview

| Plugin | Function | Folia Support |
|--------|----------|---------------|
| Vault | Economy system | ✅ |
| CMI | Economy (direct) | ✅ |
| LuckPerms | Permission rewards | ✅ |
| PlaceholderAPI | Placeholder variables | ✅ |
| DeluxeTags | Title rewards | ❌ |
| TAB | Title rewards | ✅ |
| MythicMobs | Custom mob quests | ✅ |
| Jobs Reborn | Job quests | ✅ |
| Oraxen | Custom item rewards | ✅ |
| ItemsAdder | Custom item rewards | ✅ |

## Economy System

### Vault

Vault is the most common economy bridge plugin.

**Requirements:**

- Vault 1.7.3+
- Any Vault-compatible economy plugin (e.g., EssentialsX)

**Uses:**

- Economy rewards
- Tier purchases

**Example:**

```yaml
reward_gold_1000:
  type: ECONOMY
  display-name: "&6Gold x1000"
  value: "1000"
```

### CMI

CMI is a comprehensive server management plugin. ArcPass supports CMI economy directly.

**Requirements:**

- CMI 9.0+

CMI economy takes priority over Vault when both are installed.

## Permission System

### LuckPerms

LuckPerms is the most popular permission plugin.

**Requirements:**

- LuckPerms 5.4+

**Features:**

- Permission rewards
- Group rewards
- Prefix/suffix
- Temporary permissions

**Examples:**

```yaml
# Permanent permission
reward_fly:
  type: PERMISSION
  display-name: "&bFlight"
  value: "essentials.fly"

# Temporary (7 days)
reward_temp_vip:
  type: PERMISSION
  display-name: "&e7-Day VIP"
  value: "group.vip"
  data:
    duration: 604800

# Group
reward_rank_elite:
  type: PERMISSION
  display-name: "&6Elite Rank"
  value: "group.elite"
  data:
    type: group
```

## Title System

### DeluxeTags

DeluxeTags is a title management plugin.

::: warning
DeluxeTags does not support Folia. Use TAB instead on Folia servers.
:::

**Requirements:**

- DeluxeTags 1.8+
- LuckPerms (recommended)

**Example:**

```yaml
reward_title_champion:
  type: TITLE
  display-name: "&6Champion Title"
  value: "&e[&6Champion&e] "
  data:
    tag-id: "champion"
    priority: 100
    auto-equip: true
```

### TAB

TAB is a Folia-compatible nametag/tablist plugin.

**Requirements:**

- TAB 4.0+

**Example:**

```yaml
reward_title_legend:
  type: TITLE
  display-name: "&dLegend Title"
  value: "&5[&dLegend&5] "
  data:
    position: prefix
    persistent: true
```

### Title Priority

ArcPass tries to grant titles in this order:

1. **DeluxeTags** - If available and not Folia
2. **TAB** - If available
3. **LuckPerms** - As prefix/suffix fallback

## Quest Triggers

### MythicMobs

MythicMobs allows custom mob kill quests.

**Requirements:**

- MythicMobs 5.0+

**Quest Config:**

```yaml
kill_dragon_boss:
  type: daily
  display-name: "&cSlay the Dragon"
  objectives:
    - type: mythicmobs_kill
      mob: DragonBoss
      amount: 1
```

### Jobs Reborn

Jobs Reborn enables job experience quests.

**Requirements:**

- Jobs Reborn 5.0+

**Quest Config:**

```yaml
miner_exp_1000:
  type: weekly
  display-name: "&eMiner Experience"
  objectives:
    - type: jobs_exp
      job: Miner
      amount: 1000
```

## Custom Items

### Oraxen

Oraxen provides custom items and resource packs.

**Requirements:**

- Oraxen 1.150+

**Item Format:**

```
oraxen:<item_id>
```

**Example:**

```yaml
reward_custom_sword:
  type: ITEM
  display-name: "&6Legendary Sword"
  value: "oraxen:legendary_sword"
  amount: 1
```

### ItemsAdder

ItemsAdder is another custom item plugin.

**Requirements:**

- ItemsAdder 3.5+

**Item Format:**

```
itemsadder:<namespace>:<item_id>
```

**Example:**

```yaml
reward_magic_gem:
  type: ITEM
  display-name: "&dMagic Gem"
  value: "itemsadder:myitems:magic_gem"
  amount: 5
```

## PlaceholderAPI

PlaceholderAPI lets you use ArcPass data in other plugins.

**Requirements:**

- PlaceholderAPI 2.11.0+

See <InlineLink href="../placeholders/">PlaceholderAPI Documentation</InlineLink> for full variable list.

## Check Integration Status

On startup, console shows integration status:

```
[ArcPass] Vault economy hook enabled.
[ArcPass] LuckPerms permission hook enabled.
[ArcPass] PlaceholderAPI expansion registered.
[ArcPass] TAB integration enabled!
[ArcPass] MythicMobs integration enabled!
[ArcPass] Jobs Reborn integration enabled!
[ArcPass] Oraxen integration enabled!
[ArcPass] ItemsAdder integration enabled!
```

## Troubleshooting

### Economy Rewards Not Working

1. Confirm Vault or CMI is installed
2. Confirm economy plugin works
3. Test: `/eco give <player> 100`

### Title Rewards Not Working

1. Confirm DeluxeTags or TAB is installed
2. Use TAB on Folia
3. Check LuckPerms configuration

### MythicMobs Quest Not Triggering

1. Confirm compatible version
2. Check mob ID (case-sensitive)
3. Ensure player is the killer

### Custom Items Not Showing

1. Confirm compatible plugin version
2. Check item ID format
3. Ensure item exists in the plugin
