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
# ArcPass 主配置文件

# 调试模式
debug: false

# 语言设置
language:
  # 默认语言
  default: "zh_CN"
  # 使用玩家客户端语言
  use-client-locale: true

# 数据保存
data:
  # 自动保存间隔（分钟）
  auto-save-interval: 5
  # 玩家退出时保存
  save-on-quit: true

# 通知设置
notifications:
  # 升级通知
  level-up:
    enabled: true
    sound: "ENTITY_PLAYER_LEVELUP"
    title: true
  # 任务完成通知
  quest-complete:
    enabled: true
    sound: "ENTITY_EXPERIENCE_ORB_PICKUP"
  # 奖励可领取通知
  reward-available:
    enabled: true
    action-bar: true
```

### database.yml

```yaml
# 数据库配置

# 数据库类型：sqlite 或 mysql
type: sqlite

# SQLite 配置
sqlite:
  file: "data.db"

# MySQL 配置
mysql:
  host: localhost
  port: 3306
  database: arcpass
  username: root
  password: ""
  # 连接池设置
  pool:
    maximum-pool-size: 10
    minimum-idle: 5
    connection-timeout: 30000
    idle-timeout: 600000
    max-lifetime: 1800000
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
