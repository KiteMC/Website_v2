# 第三方插件集成

ArcPass 支持与多种流行插件集成，扩展功能和玩法。

## 集成概览

| 插件 | 功能 | Folia 支持 |
|------|------|-----------|
| Vault | 经济系统 | ✅ |
| CMI | 经济系统（直接） | ✅ |
| LuckPerms | 权限奖励 | ✅ |
| PlaceholderAPI | 变量占位符 | ✅ |
| DeluxeTags | 称号奖励 | ❌ |
| TAB | 称号奖励 | ✅ |
| MythicMobs | 自定义怪物任务 | ✅ |
| Jobs Reborn | 职业任务 | ✅ |
| Oraxen | 自定义物品奖励 | ✅ |
| ItemsAdder | 自定义物品奖励 | ✅ |

## 经济系统

### Vault

Vault 是最常用的经济系统桥接插件。

**安装要求：**

- Vault 1.7.3+
- 任意 Vault 兼容的经济插件（如 EssentialsX）

**用途：**

- 经济奖励（给予金币）
- 购买通行证档位

**配置示例：**

```yaml
# rewards/economy.yml
reward_gold_1000:
  type: ECONOMY
  display-name: "&6金币 x1000"
  value: "1000"
```

### CMI

CMI 是一款功能全面的服务器管理插件，ArcPass 支持直接使用 CMI 经济。

**安装要求：**

- CMI 9.0+

CMI 经济优先于 Vault，如果同时安装，将使用 CMI。

## 权限系统

### LuckPerms

LuckPerms 是最流行的权限管理插件。

**安装要求：**

- LuckPerms 5.4+

**功能：**

- 权限奖励
- 权限组奖励
- 前缀/后缀设置
- 临时权限

**配置示例：**

```yaml
# 永久权限奖励
reward_fly:
  type: PERMISSION
  display-name: "&b飞行权限"
  value: "essentials.fly"

# 临时权限（7天）
reward_temp_vip:
  type: PERMISSION
  display-name: "&e7天VIP"
  value: "group.vip"
  data:
    duration: 604800

# 权限组
reward_rank_elite:
  type: PERMISSION
  display-name: "&6晋升精英"
  value: "group.elite"
  data:
    type: group
```

## 称号系统

### DeluxeTags

DeluxeTags 是一款称号管理插件。

::: warning
DeluxeTags 不支持 Folia。如果您使用 Folia 服务端，请使用 TAB 替代。
:::

**安装要求：**

- DeluxeTags 1.8+
- LuckPerms（推荐）

**配置示例：**

```yaml
reward_title_champion:
  type: TITLE
  display-name: "&6冠军称号"
  value: "&e[&6冠军&e] "
  data:
    tag-id: "champion"
    description: "战斗通行证最终奖励"
    priority: 100
    auto-equip: true
```

### TAB

TAB 是一款支持 Folia 的名牌/Tab 列表管理插件。

**安装要求：**

- TAB 4.0+

**配置示例：**

```yaml
reward_title_legend:
  type: TITLE
  display-name: "&d传奇称号"
  value: "&5[&d传奇&5] "
  data:
    position: prefix  # prefix 或 suffix
    persistent: true
```

### 称号优先级

ArcPass 按以下顺序尝试发放称号奖励：

1. **DeluxeTags** - 如果可用且非 Folia
2. **TAB** - 如果可用
3. **LuckPerms** - 作为前缀/后缀回退

## 任务触发器

### MythicMobs

MythicMobs 是一款自定义怪物插件，可创建击杀 MythicMobs 怪物的任务。

**安装要求：**

- MythicMobs 5.0+

**任务配置：**

```yaml
# quests/daily/mythic.yml
kill_dragon_boss:
  type: daily
  display-name: "&c击杀龙王"
  objectives:
    - type: mythicmobs_kill
      mob: DragonBoss  # MythicMobs 怪物 ID
      amount: 1
```

也可以使用通用格式：

```yaml
objectives:
  - type: kill
    entity: "mythicmob:DragonBoss"
    amount: 1
```

### Jobs Reborn

Jobs Reborn 是一款职业系统插件。

**安装要求：**

- Jobs Reborn 5.0+

**任务配置：**

```yaml
# quests/weekly/jobs.yml
miner_exp_1000:
  type: weekly
  display-name: "&e矿工经验"
  description:
    - "&7获得 1000 矿工职业经验"
  objectives:
    - type: jobs_exp
      job: Miner
      amount: 1000
```

## 自定义物品

### Oraxen

Oraxen 是一款自定义物品和资源包插件。

**安装要求：**

- Oraxen 1.150+

**物品格式：**

```
oraxen:<物品ID>
```

**配置示例：**

```yaml
reward_custom_sword:
  type: ITEM
  display-name: "&6传说之剑"
  icon: DIAMOND_SWORD
  value: "oraxen:legendary_sword"
  amount: 1
```

### ItemsAdder

ItemsAdder 是另一款自定义物品插件。

**安装要求：**

- ItemsAdder 3.5+

**物品格式：**

```
itemsadder:<命名空间>:<物品ID>
```

**配置示例：**

```yaml
reward_magic_gem:
  type: ITEM
  display-name: "&d魔法宝石"
  icon: EMERALD
  value: "itemsadder:myitems:magic_gem"
  amount: 5
```

## PlaceholderAPI

PlaceholderAPI 让您可以在其他插件中使用 ArcPass 的数据。

**安装要求：**

- PlaceholderAPI 2.11.0+

详细的变量列表请查看 <InlineLink href="../placeholders/">PlaceholderAPI 文档</InlineLink>。

## 检测集成状态

启动服务器后，查看控制台日志确认集成状态：

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

## 故障排除

### 经济奖励不生效

1. 确认 Vault 和经济插件已安装
2. 检查经济插件是否正常工作
3. 查看控制台是否有错误信息

### 称号奖励不生效

1. 确认 DeluxeTags 或 TAB 已安装
2. 对于 Folia，必须使用 TAB
3. 检查 LuckPerms 是否正确配置

### MythicMobs 任务不触发

1. 确认 MythicMobs 版本兼容
2. 检查怪物 ID 是否正确（区分大小写）
3. 确保玩家是击杀者

### 自定义物品不显示

1. 确认 Oraxen/ItemsAdder 版本兼容
2. 检查物品 ID 格式是否正确
3. 确保物品在对应插件中已定义
