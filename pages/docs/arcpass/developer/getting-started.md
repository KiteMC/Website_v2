# API Getting Started

This guide covers how to integrate ArcPass API into your plugin.

## Add Dependency

### Maven

```xml
<repositories>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/KiteMC/ArcPass</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.kitemc</groupId>
        <artifactId>arcpass-api</artifactId>
        <version>1.3.1</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

### Gradle (Kotlin DSL)

```kotlin
repositories {
    maven("https://maven.pkg.github.com/KiteMC/ArcPass")
}

dependencies {
    compileOnly("com.kitemc:arcpass-api:1.3.1")
}
```

### Gradle (Groovy)

```groovy
repositories {
    maven { url = "https://maven.pkg.github.com/KiteMC/ArcPass" }
}

dependencies {
    compileOnly 'com.kitemc:arcpass-api:1.3.1'
}
```

## Configure plugin.yml

Add ArcPass as soft dependency:

```yaml
name: MyPlugin
version: 1.0.0
main: com.example.myplugin.MyPlugin
softdepend:
  - ArcPass
```

## Get API Instance

### Check Availability

```java
import com.kitemc.arcpass.api.ArcPassAPI;
import com.kitemc.arcpass.api.ArcPassProvider;
import org.bukkit.plugin.java.JavaPlugin;

public class MyPlugin extends JavaPlugin {

    private ArcPassAPI arcPassAPI;

    @Override
    public void onEnable() {
        if (getServer().getPluginManager().getPlugin("ArcPass") != null) {
            arcPassAPI = ArcPassProvider.get();
            getLogger().info("ArcPass API loaded!");
        } else {
            getLogger().warning("ArcPass not installed");
        }
    }

    public boolean isArcPassAvailable() {
        return arcPassAPI != null;
    }

    public ArcPassAPI getArcPassAPI() {
        return arcPassAPI;
    }
}
```

### Delayed Access (Recommended)

```java
@Override
public void onEnable() {
    getServer().getScheduler().runTaskLater(this, () -> {
        if (getServer().getPluginManager().getPlugin("ArcPass") != null) {
            arcPassAPI = ArcPassProvider.get();
            initializeArcPassFeatures();
        }
    }, 1L);
}

private void initializeArcPassFeatures() {
    getLogger().info("ArcPass version: " + arcPassAPI.getVersion());
}
```

## Basic Operations

### Get Player Data

```java
public void showPlayerInfo(Player player) {
    if (!isArcPassAvailable()) return;

    arcPassAPI.getPlayerData(player.getUniqueId())
        .thenAccept(optionalData -> {
            if (optionalData.isEmpty()) {
                player.sendMessage("§cCouldn't get pass data");
                return;
            }

            PlayerData data = optionalData.get();

            Bukkit.getScheduler().runTask(plugin, () -> {
                player.sendMessage("§6=== Pass Info ===");
                player.sendMessage("§7Level: §e" + data.getLevel());
                player.sendMessage("§7XP: §e" + data.getTotalExperience());
                player.sendMessage("§7Tiers: §e" + String.join(", ", data.getUnlockedTiers()));
            });
        })
        .exceptionally(ex -> {
            getLogger().warning("Failed to get data: " + ex.getMessage());
            return null;
        });
}
```

### Use Cached Data

```java
public int getPlayerLevel(Player player) {
    if (!isArcPassAvailable()) return 0;

    PlayerData data = arcPassAPI.getPlayerDataIfCached(player.getUniqueId());
    return data != null ? data.getLevel() : 0;
}
```

::: warning
Cached data may be null. Always check before use.
:::

### Give Experience

```java
public void giveExperience(Player player, long amount) {
    if (!isArcPassAvailable()) return;

    arcPassAPI.addExperience(player.getUniqueId(), amount)
        .thenAccept(newTotal -> {
            Bukkit.getScheduler().runTask(plugin, () -> {
                player.sendMessage("§aGained " + amount + " pass XP!");
                player.sendMessage("§7Total XP: §e" + newTotal);
            });
        });
}
```

### Trigger Custom Quest Event

```java
public void onCustomAction(Player player, String actionType) {
    if (!isArcPassAvailable()) return;

    arcPassAPI.triggerCustomEvent(
        player.getUniqueId(),
        "my_action",
        actionType
    );
}
```

Corresponding quest config:

```yaml
custom_task:
  type: daily
  display-name: "&eCustom Task"
  objectives:
    - type: custom
      event: my_action
      amount: 10
```

### Query Pass Info

```java
public void showPassInfo(Player player) {
    if (!isArcPassAvailable()) return;

    Pass defaultPass = arcPassAPI.getDefaultPass();
    player.sendMessage("§6Current Pass: §e" + defaultPass.getDisplayName());
    player.sendMessage("§7Max Level: §e" + defaultPass.getMaxLevel());

    player.sendMessage("§7Available Tiers:");
    for (PassTier tier : defaultPass.getTiers()) {
        String status = tier.isFree() ? "§aFree" : "§e$" + tier.getPrice();
        player.sendMessage("  §7- " + tier.getDisplayName() + " " + status);
    }
}
```

### Query Season Info

```java
public void showSeasonInfo(Player player) {
    if (!isArcPassAvailable()) return;

    Optional<Season> seasonOpt = arcPassAPI.getCurrentSeason();

    if (seasonOpt.isEmpty()) {
        player.sendMessage("§cNo active season");
        return;
    }

    Season season = seasonOpt.get();
    player.sendMessage("§6Current Season: §e" + season.getDisplayName());
    player.sendMessage("§7Status: §e" + season.getStatus());

    long remaining = season.getTimeRemainingSeconds();
    if (remaining > 0) {
        long days = remaining / 86400;
        long hours = (remaining % 86400) / 3600;
        player.sendMessage("§7Remaining: §e" + days + "d " + hours + "h");
    }
}
```

## Error Handling

### Handle CompletableFuture Exceptions

```java
arcPassAPI.getPlayerData(playerId)
    .thenAccept(data -> {
        // Normal processing
    })
    .exceptionally(ex -> {
        getLogger().severe("API call failed: " + ex.getMessage());
        ex.printStackTrace();

        Player player = Bukkit.getPlayer(playerId);
        if (player != null) {
            player.sendMessage("§cOperation failed, please retry");
        }

        return null;
    });
```

### Timeout Handling

```java
import java.util.concurrent.TimeUnit;

arcPassAPI.getPlayerData(playerId)
    .orTimeout(5, TimeUnit.SECONDS)
    .thenAccept(data -> {
        // Process data
    })
    .exceptionally(ex -> {
        if (ex.getCause() instanceof java.util.concurrent.TimeoutException) {
            getLogger().warning("Data fetch timeout");
        }
        return null;
    });
```

## Next Steps

<LinkGrid :cols="2">
  <LinkCard icon="lightning-bolt" title="Event System" description="Listen to ArcPass events" href="./events" />
  <LinkCard icon="code" title="Code Examples" description="More practical examples" href="./examples" />
</LinkGrid>
