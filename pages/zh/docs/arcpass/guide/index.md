# 快速入门

本指南将帮助您在 5 分钟内完成 ArcPass 的安装和基本配置。

## 前置要求

在开始之前，请确保您的服务器满足以下要求：

| 要求 | 最低版本 |
|------|----------|
| Minecraft 服务端 | Paper 1.18+ / Spigot 1.18+ / Folia 1.20+ |
| Java | 17 或更高版本 |
| 许可证 | 有效的 ArcPass 许可证密钥 |

### 可选依赖

| 插件 | 用途 |
|------|------|
| Vault | 经济系统支持 |
| PlaceholderAPI | 变量占位符支持 |
| LuckPerms | 权限奖励支持 |

## 步骤 1：安装插件

1. 从 <InlineLink href="../download">下载页面</InlineLink> 获取最新版本的 `ArcPass-x.x.x.jar`
2. 将 JAR 文件放入服务器的 `plugins` 文件夹
3. 重启服务器

首次启动时，插件会生成默认配置文件：

```
plugins/ArcPass/
├── config.yml          # 主配置
├── database.yml        # 数据库配置
├── license.yml         # 许可证配置
├── lang/               # 语言文件
├── passes/             # 通行证配置
├── quests/             # 任务配置
├── rewards/            # 奖励配置
└── gui/                # GUI 配置
```

## 步骤 2：激活许可证

编辑 `plugins/ArcPass/license.yml`：

```yaml
# 许可证密钥（从 KiteMC 购买后获取）
license-key: "YOUR-LICENSE-KEY-HERE"

# 是否显示许可证状态信息
show-status: true
```

保存文件后，执行 `/arcpass admin reload` 或重启服务器。

::: tip 如何获取许可证？
访问 <InlineLink href="https://license.kitemc.com/products/arcpass" :external="true">KiteMC 许可证中心</InlineLink> 购买许可证。购买后，您可以在 <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">许可证管理页面</InlineLink> 查看您的密钥。
:::

## 步骤 3：基本配置

### 3.1 语言设置

编辑 `config.yml`，设置默认语言：

```yaml
locale:
  # 新玩家的默认语言
  default: zh_CN
  # 是否允许玩家更改语言
  allow-change: true
```

### 3.2 数据库配置

默认使用 SQLite，无需额外配置。如需使用 MySQL：

```yaml
# database.yml
type: mysql
mysql:
  host: localhost
  port: 3306
  database: arcpass
  username: root
  password: your_password
```

## 步骤 4：开启赛季

ArcPass 需要一个活动的赛季才能正常工作。

### 方式一：使用命令

```
/arcpass admin season start 第一赛季
```

### 方式二：使用管理界面

1. 执行 `/arcpass admin` 打开管理面板
2. 点击「开启赛季」按钮
3. 在聊天框输入赛季名称
4. 确认开启

## 步骤 5：测试功能

现在您可以测试 ArcPass 的基本功能：

| 命令 | 说明 |
|------|------|
| `/arcpass` | 打开通行证主界面 |
| `/arcpass quests` | 查看当前任务 |
| `/arcpass level` | 查看等级和经验 |
| `/arcpass admin` | 打开管理面板（需要权限） |

## 下一步

恭喜！您已经完成了 ArcPass 的基本配置。接下来您可以：

<LinkGrid :cols="2">
  <LinkCard
    icon="ticket"
    title="配置通行证等级和奖励"
    description="自定义通行证档位和等级奖励"
    href="../config/passes"
  />
  <LinkCard
    icon="clipboard-list"
    title="设置任务系统"
    description="配置日常、周常和赛季任务"
    href="../config/quests"
  />
  <LinkCard
    icon="color-swatch"
    title="自定义 GUI 界面"
    description="美化您的通行证界面"
    href="../config/gui"
  />
  <LinkCard
    icon="puzzle"
    title="集成第三方插件"
    description="连接 Vault、LuckPerms 等插件"
    href="../integrations/"
  />
</LinkGrid>

## 遇到问题？

<LinkGrid :cols="2">
  <LinkCard
    icon="question-mark-circle"
    title="常见问题"
    description="查看 FAQ 解决常见问题"
    href="../faq/"
  />
  <LinkCard
    icon="chat"
    title="Discord 社区"
    description="加入社区获取帮助"
    href="https://discord.gg/dcsBw5Z5ZT"
    :external="true"
  />
</LinkGrid>
