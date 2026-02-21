# 许可证激活

ArcPass 是付费插件，需要有效的许可证才能使用全部功能。

## 购买许可证

### 可用版本

| 版本 | 价格 | 设备数量 | 单机端口数 | 适用场景 |
|------|------|---------|-----------|---------|
| 个人版 | ¥48 | 3 台 | 2 端口 | 个人/小型服务器 |
| 专业版 | ¥128 | 10 台 | 5 端口 | 商业服务器 |
| 无限版 | ¥298 | 50 台 | 50 端口 | 大型网络/开服商 |

::: tip 说明

- **设备数量**：可绑定的「机器码 + IP + 端口」组合数量
- **单机端口数**：同一台机器（相同机器码和 IP）上可运行的不同端口数量
- 所有版本均为**永久买断**，一次购买，终身使用
:::

### 购买渠道

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="立即购买"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/register"
    text="注册账户"
    theme="alt"
    icon="register"
    :external="true"
  />
</ButtonGroup>

购买成功后，您可以在 <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">许可证管理页面</InlineLink> 查看您的密钥。

## 激活步骤

### 1. 编辑配置文件

打开 `plugins/ArcPass/license.yml`：

```yaml
# ========================================
#       ArcPass 许可证配置
# ========================================

# 配置版本（请勿修改）
config-version: 1

# 您的许可证密钥（从 KiteMC 获取）
# 格式: XXXX-XXXX-XXXX-XXXX
license-key: ""

# 说明: 许可证验证使用本地缓存（24小时有效）
# 网络问题时有 7 天宽限期
# 缓存文件: plugins/ArcPass/license.cache
```

### 2. 填写密钥

将空字符串替换为您收到的许可证密钥：

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX"
```

### 3. 重载配置

执行命令或重启服务器：

```
/arcpass admin reload
```

### 4. 验证激活

成功激活后，控制台会显示：

```
[ArcPass] License validated successfully!
[ArcPass] Licensed to: YourName
[ArcPass] Plan: Unlimited (50 devices)
[ArcPass] ArcPass v1.0.0 enabled!
```

## 许可证绑定

### 绑定机制

ArcPass 使用以下信息进行服务器绑定：

- **机器码** - 服务器硬件唯一标识
- **IP 地址** - 服务器公网 IP
- **端口** - 服务器运行端口

首次激活时，许可证会自动绑定到当前服务器。

### 查看绑定状态

```
/arcpass admin debug
```

### 解绑/换绑

所有版本均支持**无限次换绑**，操作步骤如下：

1. 登录 <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">KiteMC 许可证中心</InlineLink>
2. 在「我的许可证」页面找到您的 ArcPass 许可证
3. 点击「查看详情」进入许可证详情页
4. 在右侧「绑定设备」区域进行管理：
   - 点击「重置绑定」可清除所有绑定
   - 点击设备旁的删除按钮可解绑单个设备
   - 点击端口旁的删除按钮可解绑单个端口

::: tip 提示
解绑后，在新服务器上配置相同的许可证密钥并启动即可自动完成绑定。
:::

## 许可证状态

### 状态说明

| 状态 | 说明 |
|------|------|
| `VALID` | 许可证有效，插件正常运行 |
| `INVALID` | 密钥无效或格式错误 |
| `EXPIRED` | 许可证已过期（订阅制） |
| `SUSPENDED` | 许可证被暂停（违规使用） |
| `UNBOUND` | 未绑定服务器 |
| `LIMIT_EXCEEDED` | 超出绑定数量限制 |

### 离线模式

当无法连接许可证服务器时：

- 如果本地有缓存的验证结果，插件将继续运行
- 缓存有效期为 24 小时，并有 7 天宽限期
- 缓存文件位于 `plugins/ArcPass/license.cache`
- 超过宽限期后，插件功能将受限

## 常见问题

### 许可证验证失败

1. 检查网络连接是否正常
2. 确认密钥输入正确（注意大小写）
3. 检查服务器防火墙设置

### 绑定数量已满

1. 登录 <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">许可证中心</InlineLink> 查看当前绑定
2. 在许可证详情页解除不再使用的设备/端口绑定
3. 或升级到更高版本的许可证

### 更换服务器

1. 登录 <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">许可证中心</InlineLink>
2. 进入许可证详情页，点击「重置绑定」或删除对应设备
3. 在新服务器配置相同的许可证密钥
4. 启动新服务器自动完成绑定

## 技术支持

遇到许可证问题？

<LinkGrid :cols="2">
  <LinkCard
    icon="chat"
    title="Discord 社区"
    description="加入社区获取实时帮助"
    href="https://discord.gg/dcsBw5Z5ZT"
    :external="true"
  />
  <LinkCard
    icon="mail"
    title="邮件支持"
    description="starry_cbz@outlook.com"
    href="mailto:starry_cbz@outlook.com"
    :external="true"
  />
  <LinkCard
    icon="ticket"
    title="许可证中心"
    description="管理许可证和绑定"
    href="https://license.kitemc.com/dashboard/licenses"
    :external="true"
  />
  <LinkCard
    icon="key"
    title="登录账户"
    description="登录管理您的许可证"
    href="https://license.kitemc.com/login"
    :external="true"
  />
</LinkGrid>
