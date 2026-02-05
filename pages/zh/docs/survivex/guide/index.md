# SurviveX 服务端介绍

## 核心功能

- **基于 Leaves 1.21.4 核心版本**，运行环境需 Java 21+，提供丰富功能
- **基础功能** - Ess(含 home、tpa 等基础插件)、TAB、RTP、MOTD、登录、经济、领地、菜单、皮肤、权限、跨版本、占位符、预加载、世界管理、箱子商店、睡觉时间管理、种子保护、反X射线、数据分析
- **进阶功能** - 职业、更多附魔
- **安全功能** - VerifyMC 白名单管理（网页注册、自动/手动审核、封禁系统、多主题界面、邮件验证、MySQL支持）

::: tip 重要提示
若基础插件使用 `CMI` 插件, 请进行以下操作:

1. 将 `CMI` 插件上传至 `plugins` 目录下
2. 将 `plugins` 目录下的 `EssentialsX.jar` 重命名为 `EssentialsX.jar[disabled]`
3. 将 `plugins` 目录下的 `CMIEInjector.jar[disabled]` 重命名为 `CMIEInjector.jar`
4. 将 `plugins\PlayerMenu\menu` 目录下的 `home_select.yml[disabled]` 重命名为 `home_select.yml`(需覆盖原文件)
:::

### 环境搭建

- **核心版本**：Leaves 1.21.4
- **运行环境**：Java 21+

### 插件生态

| 插件类型 | 插件名称及版本 |
|----------|---------------|
| Paper 插件 | ExcellentEnchants (5.2.1), MiniMOTD (2.2.0), nightcore (2.8.0) |
| Bukkit 插件 | AntiPopup (12.1), AntiSeedCracker (1.2.1), AuthMe (5.6.0-bCUSTOM), BanItem (3.7), BetterRTP (3.6.13), CMILib (1.5.6.6), Chunky (1.4.40), CommandAPI (10.1.2), Essentials (2.21.2), Jobs (5.2.6.3), LuckPerms (5.5.10), Orebfuscator (5.5.4), PlaceholderAPI (2.11.6), Plan (5.6 build 2965), PlayerDataRollback (2.1.6-GA), PlayerMenu (1.6.6), ProtocolLib (5.4.0), QuickShop-Hikari (6.2.0.10), Residence (6.0.0.1), SkinsRestorer (15.8.0), TAB (5.2.5), Vault (1.7.3-b131), VerifyMC (1.2.1), ViaVersion (5.4.2), WorldManager (1.4.1) |

### 快速启动

```bash
# 启动（服务器需 Java21 环境）
./start.sh
```

::: tip Windows 用户
若使用 Windows 系统, 请重命名为 `start.bat` 后启动
:::

## 许可证

[GPLv3 License](https://github.com/KiteMC/SurviveX/blob/ver/1.21.5/LICENSE) © 2025 [KiteMC](https://github.com/KiteMC/SurviveX)

## Star History

::: tip 支持我们
如果本项目对您有帮助，或者您关注本项目的未来发展，请给项目 Star，谢谢

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=KiteMC/SurviveX&type=Date)](https://www.star-history.com/#KiteMC/SurviveX&Date)

</div>

:::

## 截图展示

### 主界面

![主界面](/images/survivex/guide/x2.png)

### 传送菜单

![传送菜单](/images/survivex/guide/x4.png)

### 更多附魔

![更多附魔](/images/survivex/guide/x3.png)

### 职业系统

![职业](/images/survivex/guide/x5.png)

### 皮肤菜单

![皮肤菜单](/images/survivex/guide/x6.png)

### 家管理

![家管理](/images/survivex/guide/x7.png)

### 自动调整睡觉所需时间

![自动调整睡觉所需时间](/images/survivex/guide/x8.png)

### 详细文档

> [VerifyMC 完整文档](https://kitemc.com/zh/docs/verifymc/)

---

## 下载地址

**[Github仓库](https://github.com/KiteMC/SurviveX)**

**[Github代理下载地址](https://gh-proxy.com/github.com/KiteMC/SurviveX/archive/refs/heads/ver/1.21.5.zip)**
