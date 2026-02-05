# Reward Configuration

Rewards are given to players for completing quests and reaching levels. ArcPass supports many reward types.

## File Location

```
plugins/ArcPass/rewards/
├── default.yml     # Default rewards
├── items.yml       # Item rewards
├── economy.yml     # Economy rewards
├── titles.yml      # Title rewards
└── ...
```

## Reward Types

| Type | Description | Dependency |
|------|-------------|------------|
| `ITEM` | Item rewards | None |
| `ECONOMY` | Currency | Vault / CMI |
| `COMMAND` | Execute commands | None |
| `PERMISSION` | Permission nodes | LuckPerms |
| `TITLE` | Titles/prefixes | DeluxeTags / TAB |
| `COSMETIC` | Cosmetics | Custom |
| `EXPERIENCE` | Vanilla XP | None |

## Basic Structure

```yaml
# rewards/items.yml

# Item reward example
item_diamond_10:
  type: ITEM
  display-name: "&bDiamond x10"
  description: "Receive 10 diamonds"
  icon: DIAMOND
  value: "DIAMOND"
  amount: 10

# Economy reward example
economy_1000:
  type: ECONOMY
  display-name: "&6Gold x1000"
  description: "Receive 1000 gold"
  icon: GOLD_BLOCK
  value: "1000"

# Title reward example
title_champion:
  type: TITLE
  display-name: "&bChampion Title"
  description: "Unlock [Champion] prefix"
  icon: NAME_TAG
  value: "&b[Champion] "
  data:
    priority: 60
```

## Item Rewards

### Vanilla Items

```yaml
reward_diamond_sword:
  type: ITEM
  display-name: "&bDiamond Sword"
  icon: DIAMOND_SWORD
  value: "DIAMOND_SWORD"
  amount: 1
```

### Oraxen Items

```yaml
reward_custom_sword:
  type: ITEM
  display-name: "&6Legendary Sword"
  icon: DIAMOND_SWORD
  value: "oraxen:legendary_sword"
  amount: 1
```

### ItemsAdder Items

```yaml
reward_magic_gem:
  type: ITEM
  display-name: "&dMagic Gem"
  icon: EMERALD
  value: "itemsadder:myitems:magic_gem"
  amount: 5
```

## Economy Rewards

```yaml
reward_gold_1000:
  type: ECONOMY
  display-name: "&6Gold x1000"
  description: "Receive 1000 gold"
  icon: GOLD_INGOT
  value: "1000"

reward_points_100:
  type: ECONOMY
  display-name: "&ePoints x100"
  icon: SUNFLOWER
  value: "100"
  data:
    currency: "points"
```

## Command Rewards

```yaml
reward_announce:
  type: COMMAND
  display-name: "&eServer Announcement"
  icon: BOOK
  value: "broadcast &6Congratulations to &e%player%!"

reward_vip_package:
  type: COMMAND
  display-name: "&dVIP Package"
  icon: CHEST
  value: |
    give %player% diamond 64
    eco give %player% 10000
    lp user %player% permission set vip.access true
```

## Permission Rewards

```yaml
reward_fly:
  type: PERMISSION
  display-name: "&bFlight Permission"
  description: "Unlock flying ability"
  icon: FEATHER
  value: "essentials.fly"

reward_temp_vip:
  type: PERMISSION
  display-name: "&e7-Day VIP"
  description: "VIP access for 7 days"
  icon: PAPER
  value: "group.vip"
  data:
    duration: 604800  # seconds

reward_rank_elite:
  type: PERMISSION
  display-name: "&6Elite Rank"
  icon: GOLDEN_HELMET
  value: "group.elite"
  data:
    type: group
```

## Title Rewards

### DeluxeTags

```yaml
reward_title_champion:
  type: TITLE
  display-name: "&6Champion Title"
  description: "Unlock [Champion] title"
  icon: NAME_TAG
  value: "&e[&6Champion&e] "
  data:
    tag-id: "champion"
    description: "Battle pass final reward"
    priority: 100
    auto-equip: true
```

### TAB (Folia Compatible)

```yaml
reward_title_legend:
  type: TITLE
  display-name: "&dLegend Title"
  icon: NAME_TAG
  value: "&5[&dLegend&5] "
  data:
    position: prefix
    persistent: true
```

## Experience Rewards

```yaml
reward_mc_exp_100:
  type: EXPERIENCE
  display-name: "&aXP x100"
  icon: EXPERIENCE_BOTTLE
  value: "100"
```

## Conditional Rewards

```yaml
reward_special:
  type: ITEM
  display-name: "&6Special Reward"
  icon: NETHER_STAR
  value: "NETHER_STAR"
  amount: 1

  conditions:
    - type: permission
      permission: arcpass.reward.special
    - type: inventory_space
      slots: 1
```

## Reward Groups

```yaml
reward_starter_pack:
  type: GROUP
  display-name: "&aStarter Pack"
  description:
    - "&7Contains:"
    - "&7- Diamond Sword x1"
    - "&7- Gold x500"
  icon: CHEST
  rewards:
    - reward_diamond_sword
    - reward_gold_500
```

## Next Steps

<LinkGrid :cols="2">
  <LinkCard icon="ticket" title="Configure Passes" description="Set up tiers and levels" href="./passes" />
  <LinkCard icon="color-swatch" title="Configure GUI" description="Set up interface layout" href="./gui" />
</LinkGrid>
