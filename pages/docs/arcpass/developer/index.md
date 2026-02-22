# Developer API

ArcPass provides a complete API for third-party plugin integration.

## API Overview

The ArcPass API module (`arcpass-api`) is open source under the MIT License.

### Features

- Get and modify player data
- Query passes, quests, rewards
- Manage season system
- Listen to events
- Trigger custom quest progress

### Documentation

<LinkGrid :cols="3">
  <LinkCard icon="rocket" title="Getting Started" description="Add dependency and basic usage" href="./getting-started" />
  <LinkCard icon="lightning-bolt" title="Event System" description="Listen to ArcPass events" href="./events" />
  <LinkCard icon="code" title="Code Examples" description="Common scenario examples" href="./examples" />
</LinkGrid>

## Quick Start

### Add Dependency

**Maven**

```xml
<repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/KiteMC/ArcPass</url>
</repository>

<dependency>
    <groupId>com.kitemc</groupId>
    <artifactId>arcpass-api</artifactId>
    <version>1.3.0</version>
    <scope>provided</scope>
</dependency>
```

**Gradle (Kotlin DSL)**

```kotlin
repositories {
    maven {
        url = uri("https://maven.pkg.github.com/KiteMC/ArcPass")
    }
}

dependencies {
    compileOnly("com.kitemc:arcpass-api:1.3.0")
}
```

### Get API Instance

```java
import com.kitemc.arcpass.api.ArcPassAPI;
import com.kitemc.arcpass.api.ArcPassProvider;

ArcPassAPI api = ArcPassProvider.get();
```

### Basic Example

```java
// Get player level
api.getPlayerData(player.getUniqueId())
    .thenAccept(optionalData -> {
        optionalData.ifPresent(data -> {
            int level = data.getLevel();
            long exp = data.getTotalExperience();
            player.sendMessage("Your level: " + level);
        });
    });

// Give experience
api.addExperience(player.getUniqueId(), 100)
    .thenAccept(newTotal -> {
        player.sendMessage("Gained 100 XP! Total: " + newTotal);
    });
```

## API Interface

### ArcPassAPI

Main API interface:

```java
public interface ArcPassAPI {
    // Player data
    CompletableFuture<Optional<PlayerData>> getPlayerData(UUID playerId);
    PlayerData getPlayerDataIfCached(UUID playerId);
    CompletableFuture<Long> addExperience(UUID playerId, long amount);
    CompletableFuture<Boolean> claimReward(UUID playerId, int level, String tierId);

    // Pass system
    Collection<Pass> getPasses();
    Optional<Pass> getPass(String passId);
    Pass getDefaultPass();

    // Quest system
    Collection<Quest> getActiveQuests(UUID playerId);
    CompletableFuture<Boolean> completeQuest(UUID playerId, String questId);
    void triggerCustomEvent(UUID playerId, String eventId, Object data);

    // Season system
    Optional<Season> getCurrentSeason();
    CompletableFuture<Boolean> startNewSeason(String seasonId);
    CompletableFuture<Boolean> endSeason();

    // Utilities
    void reload();
    String getVersion();
}
```

## Data Models

### PlayerData

```java
public interface PlayerData {
    UUID getPlayerId();
    int getLevel();
    long getTotalExperience();
    long getCurrentLevelExperience();
    long getExperienceToNextLevel();
    Set<String> getUnlockedTiers();
    boolean hasTier(String tierId);
    Set<String> getCompletedQuests();
    boolean hasCompletedQuest(String questId);
    Set<String> getClaimedRewards();
    boolean hasClaimedReward(int level, String tierId);
}
```

### Pass

```java
public interface Pass {
    String getId();
    String getDisplayName();
    List<String> getDescription();
    int getMaxLevel();
    long getExperienceForLevel(int level);
    Collection<PassTier> getTiers();
    Optional<PassTier> getTier(String tierId);
    Optional<PassLevel> getLevel(int level);
}
```

### Quest

```java
public interface Quest {
    String getId();
    String getDisplayName();
    String getDescription();
    QuestType getType();
    int getExperienceReward();
    List<QuestObjective> getObjectives();
    List<QuestCondition> getConditions();
}
```

### Season

```java
public interface Season {
    String getId();
    String getDisplayName();
    int getSeasonNumber();
    SeasonStatus getStatus();
    long getStartTime();
    long getEndTime();
    long getTimeRemainingSeconds();
    boolean isActive();
}
```

## Async Operations

ArcPass API uses `CompletableFuture` for async operations:

```java
api.getPlayerData(playerId)
    .thenAccept(data -> {
        // Process data on async thread
    })
    .exceptionally(ex -> {
        plugin.getLogger().warning("Failed: " + ex.getMessage());
        return null;
    });

// If main thread needed
api.getPlayerData(playerId)
    .thenAccept(data -> {
        Bukkit.getScheduler().runTask(plugin, () -> {
            // Update UI on main thread
        });
    });
```

## Thread Safety

- API methods can be called from any thread
- Returned data objects are immutable or thread-safe
- CompletableFuture callbacks may execute on any thread

## Next Steps

<LinkGrid :cols="3">
  <LinkCard icon="rocket" title="Detailed Getting Started" description="Complete tutorial" href="./getting-started" />
  <LinkCard icon="lightning-bolt" title="Event System" description="Event handling" href="./events" />
  <LinkCard icon="code" title="Code Examples" description="Practical code samples" href="./examples" />
</LinkGrid>
