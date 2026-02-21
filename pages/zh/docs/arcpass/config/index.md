# 配置概述

ArcPass 采用模块化配置设计，不同功能的配置分散在多个文件中，便于管理和维护。

## 配置文件结构

```
plugins/ArcPass/
├── config.yml          # 主配置
├── database.yml        # 数据库配置
├── license.yml         # 许可证配置
├── lang/               # 语言文件
│   ├── en_US.yml
│   └── zh_CN.yml
├── passes/             # 通行证配置
│   ├── default.yml
│   └── ...
├── quests/             # 任务配置
│   ├── daily/          # 日常任务
│   ├── weekly/         # 周常任务
│   └── seasonal/       # 赛季任务
├── rewards/            # 奖励配置
│   └── default.yml
└── gui/                # GUI 配置
    ├── main-menu.yml
    ├── quests.yml
    └── rewards.yml
```

## 主配置文件

### config.yml

```yaml
# 配置版本（请勿修改）
config-version: 1

# 调试模式 - 启用详细日志输出
debug: false

# 语言设置
locale:
  # 新玩家的默认语言
  default: zh_CN
  # 是否允许玩家更改语言
  allow-change: true

# 通行证设置
pass:
  # 最高等级（建议 1-100）
  max-level: 100
  # 1 级所需的基础经验值
  base-experience: 100
  # 每级经验倍率（1.1 = 每级增加 10%）
  experience-multiplier: 1.1

# 任务设置
quests:
  # 日常任务重置时间（24 小时制，服务器时区）
  daily-reset-hour: 4
  # 周常任务重置日（1=周一，7=周日）
  weekly-reset-day: 1

# 通知设置
notifications:
  # 升级时通知玩家
  level-up: true
  # 完成任务时通知玩家
  quest-complete: true
  # 有可领取奖励时通知玩家
  rewards-available: true
  # 音效
  sounds:
    level-up: ENTITY_PLAYER_LEVELUP
    quest-complete: ENTITY_EXPERIENCE_ORB_PICKUP
    reward-claim: BLOCK_NOTE_BLOCK_PLING

# GUI 设置
gui:
  # 动画元素更新间隔（tick）
  update-interval: 20
  # 点击外部区域时关闭 GUI
  close-on-outside-click: true

# 性能设置
performance:
  # 数据保存间隔（秒）
  save-interval: 300
  # 缓存过期时间（分钟）
  cache-expiry: 30
```

### database.yml

```yaml
# 配置版本（请勿修改）
config-version: 1

# 数据库类型：sqlite 或 mysql
type: sqlite

# SQLite 设置（当 type 为 sqlite 时使用）
sqlite:
  # 数据库文件名（在插件文件夹内）
  file: data.db

# MySQL 设置（当 type 为 mysql 时使用）
mysql:
  host: localhost
  port: 3306
  database: arcpass
  username: root
  password: ""
  # 连接池大小
  pool-size: 10
  # 额外连接属性
  properties:
    useSSL: false
    autoReconnect: true
    allowPublicKeyRetrieval: true
```

## 配置热重载

大部分配置支持热重载，无需重启服务器：

```
/arcpass admin reload
```

::: warning 注意
以下配置修改后需要重启服务器：

- 数据库类型切换
- 许可证密钥更改
:::

## 配置验证

ArcPass 会在加载时验证配置文件：

- 格式错误会在控制台显示详细信息
- 无效值会使用默认值并警告
- 缺失的必要配置会阻止插件启动

## 详细配置指南

<LinkGrid :cols="2">
  <LinkCard icon="ticket" title="通行证配置" description="等级、档位、奖励设置" href="./passes" />
  <LinkCard icon="clipboard-list" title="任务配置" description="任务类型、目标、条件" href="./quests" />
  <LinkCard icon="gift" title="奖励配置" description="奖励类型、数值设置" href="./rewards" />
  <LinkCard icon="trophy" title="赛季配置" description="赛季时间、规则设置" href="./seasons" />
  <LinkCard icon="color-swatch" title="GUI 配置" description="界面布局、物品设置" href="./gui" />
</LinkGrid>

## 配置示例

插件安装目录下的 `docs/examples-zh/` 文件夹包含完整的配置示例，可以作为参考。
