# Quest Configuration

The quest system is the primary way players earn experience, supporting various quest types and triggers.

## File Location

```
plugins/ArcPass/quests/
├── daily/          # Daily quests (reset daily)
│   ├── mining.yml
│   ├── combat.yml
│   └── ...
├── weekly/         # Weekly quests (reset weekly)
│   ├── boss_hunt.yml
│   └── ...
└── seasonal/       # Seasonal quests (reset per season)
    ├── main_story.yml
    └── ...
```

## Quest Types

| Type | Description | Reset Cycle |
|------|-------------|-------------|
| `daily` | Daily quests | Daily at 00:00 |
| `weekly` | Weekly quests | Monday 00:00 |
| `seasonal` | Seasonal quests | Season end |
| `story` | Story quests | Never |
| `challenge` | Challenge quests | Never |

## Basic Structure

```yaml
# quests/daily/mining.yml

# Quest display name
display-name: "&6Miner's Daily"

# Quest description
description: "&7Mine various ores and become a mining star!"

# Quest icon
icon: IRON_PICKAXE

# Quest category
category: mining

# Priority (for sorting)
priority: 1

# Experience earned on completion
experience: 100

# Quest objectives
objectives:
  mine_stone:
    type: break
    target: STONE,COBBLESTONE,DEEPSLATE,COBBLED_DEEPSLATE
    amount: 100
    description: "Mine 100 stone/deepslate"

  mine_coal:
    type: break
    target: COAL_ORE,DEEPSLATE_COAL_ORE
    amount: 15
    description: "Mine 15 coal ore"

  mine_iron:
    type: break
    target: IRON_ORE,DEEPSLATE_IRON_ORE
    amount: 10
    description: "Mine 10 iron ore"

# Prerequisites
conditions: []

# Additional rewards
rewards:
  - "economy_100"
```

## Objective Types

### Block Related

```yaml
objectives:
  - type: block_break
    block: DIAMOND_ORE
    amount: 10

  - type: block_place
    block: COBBLESTONE
    amount: 100
```

### Kill Related

```yaml
objectives:
  - type: kill
    entity: ZOMBIE
    amount: 50

  - type: player_kill
    amount: 10

  - type: mythicmobs_kill
    mob: SkeletonKing
    amount: 1
```

### Item Related

```yaml
objectives:
  - type: craft
    item: DIAMOND_SWORD
    amount: 1

  - type: enchant
    item: DIAMOND_PICKAXE
    amount: 1

  - type: fish
    item: COD
    amount: 20
```

### Other Activities

```yaml
objectives:
  - type: walk
    amount: 1000  # blocks

  - type: jump
    amount: 100

  - type: playtime
    amount: 60  # minutes

  - type: chat
    amount: 10
```

### Jobs Reborn

```yaml
objectives:
  - type: jobs_exp
    job: Miner
    amount: 1000
```

### Custom Events

```yaml
objectives:
  - type: custom
    event: my_custom_event
    amount: 1
```

## Quest Conditions

```yaml
mine_deep:
  display-name: "&bDeep Miner"

  requires:
    - mine_stone_100
    - mine_iron_50

  conditions:
    - type: level
      min: 10

    - type: permission
      permission: arcpass.quest.deep_mining

    - type: world
      worlds:
        - world
        - world_nether
```

## Multi-Objective Quests

```yaml
explorer_challenge:
  display-name: "&6Explorer Challenge"
  type: challenge
  experience-reward: 500

  objectives:
    - id: visit_nether
      type: world_visit
      world: world_nether
      amount: 1
      description: "&7Visit the Nether"

    - id: visit_end
      type: world_visit
      world: world_the_end
      amount: 1
      description: "&7Visit the End"

    - id: kill_dragon
      type: kill
      entity: ENDER_DRAGON
      amount: 1
      description: "&7Slay the Ender Dragon"
```

## Progress Display

```yaml
objectives:
  - type: block_break
    block: STONE
    amount: 100
    progress-format: "&7Stone mined: &e%current%&7/&e%required%"
```

## Quest Rewards

```yaml
special_task:
  experience-reward: 100

  rewards:
    - type: item
      item: DIAMOND
      amount: 5
    - type: money
      amount: 1000
    - type: command
      command: "say %player% completed a special task!"
```

## Example: Daily Combat Quests

```yaml
# quests/daily/combat.yml

kill_zombies:
  type: daily
  display-name: "&cUndead Hunter"
  description:
    - "&7Slay 30 zombies"
    - "&7Reward: &e+30 XP"
  icon: ROTTEN_FLESH
  experience-reward: 30
  objectives:
    - type: kill
      entity: ZOMBIE
      amount: 30

kill_skeletons:
  type: daily
  display-name: "&cBone Collector"
  description:
    - "&7Slay 20 skeletons"
    - "&7Reward: &e+25 XP"
  icon: BONE
  experience-reward: 25
  objectives:
    - type: kill
      entity: SKELETON
      amount: 20
```

## Next Steps

<LinkGrid :cols="2">
  <LinkCard icon="gift" title="Configure Rewards" description="Set up reward types and values" href="./rewards" />
  <LinkCard icon="trophy" title="Configure Seasons" description="Set up season timing and rules" href="./seasons" />
</LinkGrid>
