# Season Configuration

The season system manages periodic pass resets and special events.

## Season Concepts

- Each season has independent start and end times
- Player progress can optionally reset at season end
- Different seasons can have different quests and rewards
- Supports permanent seasons (runs indefinitely)

## Season Management

### Starting a Season

**Command:**

```
/arcpass admin season start <season_name>
```

**GUI:**

1. Run `/arcpass admin`
2. Click "Start Season"
3. Enter season name in chat
4. Confirm to start

### Ending a Season

```
/arcpass admin season end
```

### View Season Info

```
/arcpass admin season info
```

## Season Configuration

Configure season behavior in `config.yml`:

```yaml
seasons:
  on-end:
    reset-level: true
    reset-experience: true
    reset-quests: true
    keep-purchased-tiers: true
    keep-claimed-rewards: false

  auto:
    enabled: false
    duration-days: 90
    notify-before-end: [7, 3, 1]
```

## Seasonal Quests

Create season-exclusive quests in `quests/seasonal/`:

```yaml
chapter_1:
  type: seasonal
  display-name: "&6Chapter 1: New Beginnings"
  description:
    - "&7Complete the tutorial quests"
  icon: BOOK
  experience-reward: 100
  objectives:
    - type: block_break
      block: OAK_LOG
      amount: 10

chapter_2:
  type: seasonal
  display-name: "&6Chapter 2: Underground"
  requires:
    - chapter_1
  icon: IRON_PICKAXE
  experience-reward: 150
  objectives:
    - type: block_break
      block: IRON_ORE
      amount: 30
```

## Season Rewards

### End-of-Season Rewards

```yaml
seasons:
  end-rewards:
    10:
      - reward_season_badge_bronze
    50:
      - reward_season_badge_silver
    100:
      - reward_season_badge_gold
      - reward_season_title
```

### Leaderboard Rewards

```yaml
seasons:
  leaderboard-rewards:
    1:
      - reward_champion_title
      - reward_exclusive_item
    2-3:
      - reward_top3_title
    4-10:
      - reward_top10_badge
```

## Season Data

### Data Storage

Season data stored in database:

- Current season info
- Historical season records
- Player season progress

### Data Migration

```yaml
seasons:
  data:
    archive-history: true
    max-history: 10
```

## Season Notifications

### Start Notification

```yaml
seasons:
  notifications:
    start:
      broadcast: true
      title:
        enabled: true
        title: "&6New Season Started!"
        subtitle: "&e%season_name%"
```

### End Notification

```yaml
seasons:
  notifications:
    end:
      broadcast: true
      title:
        enabled: true
        title: "&cSeason Ended"
        subtitle: "&7Thanks for participating"
      warnings:
        - days: 7
          message: "&eSeason ends in 7 days!"
        - days: 1
          message: "&cSeason ends tomorrow!"
```

## Permanent Season

For no season resets:

```yaml
seasons:
  permanent:
    enabled: true
```

## API Integration

### Season Events

```java
@EventHandler
public void onSeasonStart(SeasonStartEvent event) {
    Season season = event.getSeason();
    // Handle season start
}

@EventHandler
public void onSeasonEnd(SeasonEndEvent event) {
    Season season = event.getSeason();
    // Handle season end
}
```

## Example: 90-Day Season

```yaml
seasons:
  auto:
    enabled: true
    duration-days: 90
    notify-before-end: [30, 14, 7, 3, 1]

  on-end:
    reset-level: true
    reset-experience: true
    reset-quests: true
    keep-purchased-tiers: true

  end-rewards:
    25:
      - reward_bronze_badge
    50:
      - reward_silver_badge
    75:
      - reward_gold_badge
    100:
      - reward_platinum_badge
      - reward_season_exclusive
```

## Next Steps

<LinkGrid :cols="2">
  <LinkCard icon="color-swatch" title="Configure GUI" description="Set up interface layout" href="./gui" />
  <LinkCard icon="terminal" title="View Commands" description="Commands and permissions" href="../commands/" />
</LinkGrid>
