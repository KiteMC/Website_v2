# VerifyMC

## Introduction

**VerifyMC** is an ultra-lightweight, powerful whitelist management plugin for Minecraft servers. It supports web-based registration, auto/manual review, banning, theme switching, AuthMe integration, and high customizability, helping you secure and manage your server community with ease.

---

## Key Features

1. **Web Registration & Review** - Players can submit whitelist applications via a web page; admins can review, ban, and manage users online
2. **Auto/Manual Review** - Supports both automatic approval and manual admin review to fit different server needs
3. **Ban System** - Ban problematic players to keep your server safe
4. **GlassX Theme** - Beautiful glassmorphism design with smooth animations and modern UI
5. **Email Verification & Domain Whitelist** - Integrated SMTP email verification, supports email domain whitelist and alias limit
6. **Self-hosted CAPTCHA** - Built-in graphical CAPTCHA (math/text), no external services required
7. **Discord Integration** - OAuth2 Discord account linking with optional/required mode
8. **Registration Questionnaire** - Customizable questionnaire system with multi-language support
9. **User Notifications** - Automatic email notifications for whitelist approval/rejection
10. **Multi-language Support** - Both web UI and plugin messages support English and Chinese
11. **Highly Customizable** - Set max accounts per email, player ID regex, whitelist bypass IPs, and more
12. **Lightweight** - Plugin jar is under 6MB, integrates multiple features, and runs efficiently
13. **Auto Update & Backup** - Config files auto-upgrade, with full backup before each update
14. **Flexible Whitelist Modes** - Supports Bukkit native whitelist sync, plugin self-management, and MySQL storage
15. **MySQL & Data File Storage** - Easily switch between local file and MySQL storage; supports automatic migration
16. **Audit Log Multi-Storage** - Audit logs can be stored in file or MySQL
17. **Custom Internationalization** - Auto-loads any messages_xx.properties file; users can add any language
18. **AuthMe Integration** - Seamless integration with AuthMe plugin for password management and auto-registration
19. **Bedrock Support** - Geyser/Floodgate player prefix support for cross-platform servers
20. **Proxy Support** - BungeeCord/Velocity proxy plugin for network-level whitelist enforcement
21. **LLM Essay Scoring** - AI-powered auto-scoring for text questionnaire answers via DeepSeek/Google, with circuit breaker and concurrency control

---

## Screenshots (GlassX Theme)

### Home Page

![Home GlassX](/images/verifymc/docs/screenshot-home-glassx.png)

### Registration Page

![Registration GlassX](/images/verifymc/docs/screenshot-register-glassx.png)

### Admin Panel

![Admin GlassX](/images/verifymc/docs/screenshot-admin-glassx.png)

---

## Tech Stack

- Java (Bukkit/Spigot/Paper/Folia plugin)
- Frontend: Vue3 + Tailwind CSS (custom themes supported)
- WebSocket real-time communication
- Email service: SMTP

---

## Installation & Configuration

1. Download the latest `VerifyMC.jar` and place it in your server's `plugins` directory.
2. Start the server to auto-generate config files, then edit `config.yml` as needed (see full example below).
3. Restart the server and visit `http://your_server_ip:8080` to access the admin panel.

```yaml
language: en
debug: false
web_port: 8080
web_server_prefix: '[ Name ]'
auth_methods:
  - email
max_accounts_per_email: 2
whitelist_mode: plugin
web_register_url: https://domain.com/
register:
  auto_approve: false
username_regex: "^[a-zA-Z0-9_-]{3,16}$"
username_case_sensitive: false
admin:
  password: your_custom_password
user_notification:
  enabled: true
  on_approve: true
  on_reject: true
frontend:
  theme: glassx
  logo_url: /logo.png
  announcement: Welcome to [ Name ]!
smtp:
  host: smtp.qq.com
  port: 587
  username: your_email@qq.com
  password: your_email_password
  from: your_email@qq.com
  enable_ssl: true
email_subject: VerifyMC Verification Code
auto_update_resources: true
enable_email_domain_whitelist: true
enable_email_alias_limit: false
email_domain_whitelist:
  - gmail.com
  - 163.com
  - 126.com
  - qq.com
  - outlook.com
  - hotmail.com
  - icloud.com
  - yahoo.com
  - foxmail.com
storage: data
mysql:
    host: localhost
    port: 3306
    database: verifymc
    user: root
    password: yourpassword
authme:
  enabled: true
  require_password: true
  password_regex: "^[a-zA-Z0-9_]{8,26}$"
  database:
    type: sqlite
    table: authme
    sync_interval_seconds: 30
    mysql:
      host: 127.0.0.1
      port: 3306
      database: authme
      user: root
      password: yourpassword
    sqlite:
      path: plugins/AuthMe/authme.db
    columns:
      mySQLColumnName: username
      mySQLRealName: realname
      mySQLColumnPassword: password
      mySQLColumnEmail: email
captcha:
  type: math
  length: 4
  expire_seconds: 300
bedrock:
  enabled: false
  prefix: "."
  username_regex: "^[a-zA-Z0-9._-]{3,15}$"
questionnaire:
  enabled: false
  pass_score: 60
  rate_limit:
    window_ms: 300000
    ip:
      max: 20
    uuid:
      max: 8
    email:
      max: 6
llm:
  enabled: true
  provider: deepseek
  api_base: https://api.deepseek.com/v1
  api_key: ""
  model: deepseek-chat
  timeout: 10000
  retry: 1
  max_concurrency: 4
  acquire_timeout: 1500
  retry_backoff_base: 300
  retry_backoff_max: 5000
  input_max_length: 2000
  circuit_breaker:
    failure_threshold: 5
    open_ms: 30000
  system_prompt: |
    You are a fair Minecraft whitelist questionnaire grader.
    Score strictly based on the question, candidate answer, and scoring rule.
    Return JSON only.
  scoring_rule: |
    Evaluate primarily:
    1) Relevance to the question
    2) Completeness and level of detail
    3) Understanding of server rules and community norms
  score_format: '{"score": number, "reason": string, "confidence": number}'
discord:
  enabled: false
  client_id: ""
  client_secret: ""
  redirect_uri: "https://yourdomain.com/api/discord/callback"
  guild_id: ""
  required: false
```

---

## Official Community

- **QQ Group**: 1041540576 ([Join](https://qm.qq.com/q/F7zuhZ7Mze))
- **Discord**: [https://discord.gg/dcsBw5Z5ZT](https://discord.gg/dcsBw5Z5ZT)

---

> If you like this project, please Star, share, and give us feedback!
