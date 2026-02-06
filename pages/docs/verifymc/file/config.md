# Configuration File

This document provides detailed explanations for all configuration options in `config.yml`.

::: tip Apply changes
After editing `config.yml`, run `/vmc reload` to apply changes without restarting the server.
You can also find an English example `config.yml` in the VerifyMC GitHub repository ([KiteMC/VerifyMC](https://github.com/KiteMC/VerifyMC)).
:::

## General Settings

```yaml
# Global language setting. Affects plugin messages and web UI. (e.g., 'zh', 'en')
language: zh

# Enable detailed console logs for troubleshooting.
debug: false
```

## Web Server

```yaml
# The port for the web interface.
web_port: 8080

# The server name displayed on the web interface.
web_server_prefix: '[ Server Name ]'
```

## Verification & Whitelist

```yaml
# Supported authentication methods. Options: 'email' (email verification), 'captcha' (graphical captcha).
# You can use multiple methods, e.g.: [email, captcha]
#
# [IMPORTANT] Configuring the captcha: section below does NOT enable captcha!
# To enable captcha, you MUST add 'captcha' to this list:
#   Captcha only: auth_methods: [captcha]
#   Both email and captcha: auth_methods: [email, captcha]
auth_methods:
  - email

# Maximum number of game accounts that can be linked to a single email address.
max_accounts_per_email: 2

# Whitelist mode: 'bukkit' (syncs with server's whitelist.json) or 'plugin' (uses internal database).
whitelist_mode: plugin

# Registration URL displayed to non-whitelisted players when in 'plugin' mode.
web_register_url: https://domain.com/
```

## Registration

```yaml
# If true, new user registrations are automatically approved.
# If false, they require manual admin approval.
register:
  auto_approve: false
```

## User & Security

```yaml
# A regular expression to validate player names.
username_regex: "^[a-zA-Z0-9_-]{3,16}$"

# If false, usernames that only differ by case (e.g., "Player" and "player") are treated as the same.
username_case_sensitive: false

# A list of IP addresses that can join the server without being whitelisted.
whitelist_bypass_ips:
  - 127.0.0.1

# The password for accessing the admin panel on the web interface.
admin:
  password: your_custom_password
```

## User Notification

```yaml
# Send email notification to users when admin reviews their application.
user_notification:
  # Whether to enable user notification feature
  enabled: true
  # Whether to send notification when application is approved
  on_approve: true
  # Whether to send notification when application is rejected
  on_reject: true
```

## Frontend (UI)

```yaml
frontend:
  # The visual theme for the web interface. Options: 'glassx'.
  theme: glassx

  # URL for the logo. Can be a web link or a local file path (e.g., '/logo.png').
  logo_url: /logo.png

  # A message to display on the homepage.
  announcement: Welcome to our server!
```

## Email (SMTP)

```yaml
smtp:
  host: smtp.gmail.com
  port: 587
  username: your_email@gmail.com
  password: your_app_password
  from: your_email@gmail.com
  enable_ssl: true

# Subject (title) of the verification code email
email_subject: VerifyMC Verification Code
```

### Common SMTP Configurations

| Provider | Host | Port | SSL |
|----------|------|------|-----|
| Gmail | smtp.gmail.com | 587 | true |
| QQ Mail | smtp.qq.com | 587 | true |
| Outlook | smtp.office365.com | 587 | true |
| 163 Mail | smtp.163.com | 465 | true |

## Sync Settings (for Bukkit Mode)

```yaml
# If true, automatically syncs changes from whitelist.json to the plugin's database.
whitelist_json_sync: true

# If true, automatically adds approved users to whitelist.json and removes banned/deleted users.
auto_sync_whitelist: true

# If 'bukkit' mode is disabled, this setting (if true) cleans players from whitelist.json.
auto_cleanup_whitelist: true
```

## Auto Update & Backup

```yaml
# If true, automatically adds new settings to your config.yml on plugin updates.
auto_update_config: true

# If true, automatically updates the language files.
auto_update_i18n: true

# If true, automatically updates the email templates.
auto_update_email: true

# If true, automatically updates theme files.
auto_update_static: true

# If true, creates a full backup of the plugin data folder before any auto-updates.
backup_on_update: true
```

## Email Registration Restrictions

```yaml
# Enable email domain whitelist
enable_email_domain_whitelist: true

# Enable email alias limit (e.g. forbid user+xxx@gmail.com)
enable_email_alias_limit: false

# Email domain whitelist. Leave empty to use default mainstream domains
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
```

## Storage & Data Migration

```yaml
storage:
  # Storage type, options: data (local file), mysql (external database)
  type: data

  # Whether to automatically migrate data when switching storage.type
  auto_migrate_on_switch: false

  mysql:
    host: localhost
    port: 3306
    database: verifymc
    user: root
    password: yourpassword
```

## AuthMe Integration

```yaml
authme:
  # Whether to enable AuthMe integration functionality
  enabled: true

  # Whether to require password input during web registration
  require_password: true

  # Whether to automatically register to AuthMe when approval is granted
  auto_register: false

  # Whether to automatically unregister from AuthMe when user is deleted
  auto_unregister: false

  # Password regex pattern
  password_regex: "^[a-zA-Z0-9_]{3,16}$"
```

## Captcha Configuration

```yaml
# Captcha can be used as an alternative or supplement to email verification
# Add 'captcha' to auth_methods to enable: auth_methods: [captcha]
captcha:
  # Captcha type: math (math expression) or text (random characters)
  type: math

  # Length of text captcha (ignored for math type)
  length: 4

  # Captcha expiration time in seconds
  expire_seconds: 300
```

## Bedrock Player Support

```yaml
# For Geyser/Floodgate bedrock players
bedrock:
  # Whether to enable bedrock player support
  enabled: false

  # Prefix for bedrock players (commonly "." for Floodgate)
  prefix: "."

  # Regex for bedrock usernames
  username_regex: "^\\.[a-zA-Z0-9_\\s]{3,16}$"
```

## Questionnaire Configuration

```yaml
# Detailed questions are configured in questionnaire.yml
questionnaire:
  # Whether to enable questionnaire feature
  enabled: false

  # Minimum score to pass
  pass_score: 60

  # Auto-approve users who pass the questionnaire
  auto_approve_on_pass: false
```

## Discord Integration (OAuth2)

```yaml
# Requires creating a Discord application at https://discord.com/developers/applications
discord:
  # Whether to enable Discord integration
  enabled: false

  # Discord application client ID
  client_id: ""

  # Discord application client secret
  client_secret: ""

  # OAuth2 redirect URI
  redirect_uri: "https://yourdomain.com/api/discord/callback"

  # Optional: require users to be in specific guild/server
  guild_id: ""

  # Whether Discord linking is required for registration
  required: false
```

---

## Full Configuration Example

```yaml
language: zh
debug: false
web_port: 8080
web_server_prefix: '[ Server Name ]'

auth_methods:
  - email

max_accounts_per_email: 2
whitelist_mode: plugin
web_register_url: https://domain.com/

register:
  auto_approve: false

username_regex: "^[a-zA-Z0-9_-]{3,16}$"
username_case_sensitive: false

whitelist_bypass_ips:
  - 127.0.0.1

admin:
  password: your_custom_password

user_notification:
  enabled: true
  on_approve: true
  on_reject: true

frontend:
  theme: glassx
  logo_url: /logo.png
  announcement: Welcome!

smtp:
  host: smtp.qq.com
  port: 587
  username: your_email@qq.com
  password: your_password
  from: your_email@qq.com
  enable_ssl: true

email_subject: VerifyMC Verification Code

storage:
  type: data
  auto_migrate_on_switch: false
  mysql:
    host: localhost
    port: 3306
    database: verifymc
    user: root
    password: yourpassword

authme:
  enabled: true
  require_password: true
  auto_register: false
  auto_unregister: false
  password_regex: "^[a-zA-Z0-9_]{3,16}$"

captcha:
  type: math
  length: 4
  expire_seconds: 300

bedrock:
  enabled: false
  prefix: "."
  username_regex: "^\\.[a-zA-Z0-9_\\s]{3,16}$"

questionnaire:
  enabled: false
  pass_score: 60
  auto_approve_on_pass: false

discord:
  enabled: false
  client_id: ""
  client_secret: ""
  redirect_uri: "https://yourdomain.com/api/discord/callback"
  guild_id: ""
  required: false
```
