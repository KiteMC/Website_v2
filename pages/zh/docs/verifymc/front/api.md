# 后端 API

## API 参考文档

## 用户注册与验证

### 发送邮箱验证码
- **接口**：`POST /api/send_code`
- **用途**：向指定邮箱发送注册验证码，防止恶意注册。
- **权限**：所有用户（无需登录）
- **请求头**：`Content-Type: application/json`
- **请求参数**：
  | 字段      | 类型   | 必填 | 说明           | 示例                |
  |-----------|--------|------|----------------|---------------------|
  | email     | string | 是   | 用户邮箱       | user@example.com    |
  | language  | string | 否   | 语言（zh/en）  | zh                  |
- **请求体示例**：
  ```json
  { "email": "user@example.com", "language": "zh" }
  ```
- **返回值**：
  | 字段    | 类型    | 说明         |
  |---------|---------|--------------|
  | success | boolean | 是否成功     |
  | msg     | string  | 提示信息     |
- **成功示例**：
  ```json
  { "success": true, "msg": "验证码已发送" }
  ```
- **失败示例**：
  ```json
  { "success": false, "msg": "邮箱格式不正确或已被注册" }
  ```
- **注意事项**：
  - 邮箱每日/每分钟发送次数有限制，防止滥用。
  - 邮箱格式需符合 RFC 标准。

### 注册
- **接口**：`POST /api/register`
- **用途**：用户提交邮箱验证码和信息进行注册。
- **权限**：所有用户
- **请求头**：`Content-Type: application/json`
- **请求参数**：
  | 字段      | 类型   | 必填 | 说明           |
  |-----------|--------|------|----------------|
  | email     | string | 是   | 用户邮箱       |
  | code      | string | 是   | 邮箱验证码     |
  | uuid      | string | 是   | 玩家 UUID      |
  | username  | string | 是   | 玩家名         |
  | language  | string | 否   | 语言           |
- **请求体示例**：
  ```json
  { "email": "user@example.com", "code": "123456", "uuid": "玩家UUID", "username": "玩家名", "language": "zh" }
  ```
- **返回值**：
  | 字段    | 类型    | 说明         |
  |---------|---------|--------------|
  | success | boolean | 是否成功     |
  | msg     | string  | 提示信息     |
- **成功示例**：
  ```json
  { "success": true, "msg": "注册成功" }
  ```
- **失败示例**：
  ```json
  { "success": false, "msg": "验证码错误或已过期" }
  ```
- **注意事项**：
  - 验证码有效期一般为 5 分钟。
  - 用户名、邮箱唯一。
  - 注册后可能需要管理员审核。

## 管理员与审核

### 管理员登录
- **接口**：`POST /api/admin-login`
- **用途**：管理员登录后台。
- **权限**：所有用户
- **请求头**：`Content-Type: application/json`
- **请求参数**：
  | 字段      | 类型   | 必填 | 说明           |
  |-----------|--------|------|----------------|
  | password  | string | 是   | 后台管理密码   |
  | language  | string | 否   | 语言           |
- **请求体示例**：
  ```json
  { "password": "your_admin_password", "language": "zh" }
  ```
- **返回值**：
  | 字段    | 类型    | 说明         |
  |---------|---------|--------------|
  | success | boolean | 是否成功     |
  | token   | string  | JWT 认证令牌 |
  | message | string  | 提示信息     |
- **成功示例**：
  ```json
  { "success": true, "token": "JWT_TOKEN", "message": "登录成功" }
  ```
- **失败示例**：
  ```json
  { "success": false, "message": "密码错误" }
  ```
- **注意事项**：
  - 后续所有需要管理员权限的接口，需在请求头加 `Authorization: Bearer <token>`。

### 获取待审核用户列表
- **接口**：`GET /api/pending-list?language=zh`
- **用途**：获取所有待审核用户信息。
- **权限**：需管理员登录（需带 token）
- **请求头**：`Authorization: Bearer <token>`

### 审核用户
- **接口**：`POST /api/review`
- **用途**：管理员审核用户（通过/拒绝）。
- **权限**：需管理员登录
- **请求头**：`Authorization: Bearer <token>`, `Content-Type: application/json`
- **请求参数**：
  | 字段      | 类型   | 必填 | 说明           |
  |-----------|--------|------|----------------|
  | uuid      | string | 是   | 玩家 UUID      |
  | action    | string | 是   | 操作类型（approve/reject）|
  | reason    | string | 否   | 拒绝原因       |
  | language  | string | 否   | 语言           |

## 其他接口

### 健康检查
- **接口**：`GET /api/ping`
- **用途**：健康检查接口，用于验证 API 是否可用。
- **权限**：所有用户
- **返回值**：
  ```json
  { "msg": "pong" }
  ```

### 获取配置
- **接口**：`GET /api/config`
- **用途**：获取前端、登录、公告等配置信息。
- **权限**：所有用户

### 重载配置
- **接口**：`POST /api/reload-config`
- **用途**：重载插件配置，如果需要会切换主题。
- **权限**：需管理员登录（需带 token）

### 获取所有用户
- **接口**：`GET /api/all-users`
- **用途**：获取所有非待审核用户（已通过、已拒绝、已封禁）。
- **权限**：需管理员登录（需带 token）

### 删除用户
- **接口**：`POST /api/delete-user`
- **用途**：从系统中删除用户。
- **权限**：需管理员登录

### 封禁用户
- **接口**：`POST /api/ban-user`
- **用途**：封禁用户（将状态改为 banned）。
- **权限**：需管理员登录

### 解封用户
- **接口**：`POST /api/unban-user`
- **用途**：解封用户（将状态从 banned 改为 approved）。
- **权限**：需管理员登录

## 代理插件 API

### 检查白名单状态
- **接口**：`GET /api/whitelist-check?username={username}`
- **用途**：检查玩家是否已通过审核可以加入服务器。
- **权限**：需要 API 密钥（在代理插件中配置）
- **返回值**：
  ```json
  { "success": true, "approved": true, "status": "approved" }
  ```

---

> 更多接口和参数详见源码或前端 `src/services/api.ts`。
