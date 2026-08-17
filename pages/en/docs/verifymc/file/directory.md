# Plugin Directory Structure

This page provides a detailed overview of the VerifyMC plugin's directory structure and the purpose of each file.

---

## Directory Overview

```
/plugins/VerifyMC/
├── config.yml                 # Main configuration file
├── config_help_en.yml         # English configuration help
├── config_help_zh.yml         # Chinese configuration help
├── questionnaire.yml          # Questionnaire config (optional)
│
├── email/                     # Email templates directory
│   ├── verify_code_en.html    # English verification code email
│   ├── verify_code_zh.html    # Chinese verification code email
│   ├── review_approved_en.html  # English approval email
│   ├── review_approved_zh.html  # Chinese approval email
│   ├── review_rejected_en.html  # English rejection email
│   └── review_rejected_zh.html  # Chinese rejection email
│
├── static/                    # Frontend static resources
│   └── glassx/                # GlassX theme (default)
│       ├── index.html         # Main page entry
│       ├── css/               # Stylesheet files
│       │   ├── index-*.css
│       │   ├── Login-*.css
│       │   ├── Register-*.css
│       │   └── ...
│       └── js/                # JavaScript files
│           ├── index-*.js
│           ├── api-*.js
│           ├── vendor-*.js
│           └── ...
│
├── i18n/                      # Internationalization files
│   ├── messages_en.properties        # English messages
│   ├── messages_en.properties.backup # English messages backup
│   ├── messages_zh.properties        # Chinese messages
│   └── messages_zh.properties.backup # Chinese messages backup
│
├── data/                      # Data storage directory
│   ├── users.json             # User data
│   └── audits.json            # Audit records
│
└── backup/                    # Backup directory
    └── [timestamp]/           # Timestamped backups
        └── [backup files]
```

---

## Detailed Description

### Configuration Files

| File | Description |
|------|-------------|
| `config.yml` | Main plugin configuration file with all configurable options |
| `config_help_en.yml` | English configuration help document with detailed explanations |
| `config_help_zh.yml` | Chinese configuration help document with detailed explanations |
| `questionnaire.yml` | Questionnaire configuration for custom registration questions |

### Email Templates (`email/`)

The plugin uses HTML templates for sending emails, supporting custom styles and content.

| File | Description |
|------|-------------|
| `verify_code_*.html` | Verification code email template |
| `review_approved_*.html` | Approval notification email template |
| `review_rejected_*.html` | Rejection notification email template |

::: tip
Email templates support variable substitution, such as `{code}`, `{username}`, `{reason}`, etc.
:::

### Frontend Resources (`static/`)

The plugin includes a modern web management panel built with Vue.js.

- **GlassX Theme**: Default glassmorphism-style theme
- `index.html`: Web panel entry file
- `css/`: Compiled stylesheet files
- `js/`: Compiled JavaScript files

::: warning
It's not recommended to directly modify files in the `static/` directory as these are compiled frontend resources. For customization, please refer to the frontend development documentation.
:::

### Internationalization (`i18n/`)

The plugin supports multiple languages using Java Properties format.

| File | Description |
|------|-------------|
| `messages_en.properties` | English message file |
| `messages_zh.properties` | Chinese message file |
| `*.backup` | Automatic backups of message files |

### Data Storage (`data/`)

The plugin uses JSON files for data storage:

| File | Description |
|------|-------------|
| `users.json` | Stores all user registration information and status |
| `audits.json` | Stores audit history records |

::: danger Warning
Do not directly edit files in the `data/` directory while the server is running, as this may cause data loss or corruption.
:::

### Backups (`backup/`)

The plugin automatically backs up important data, with backup files organized by timestamp.

---

## First Launch

On first launch, the plugin will automatically generate:
1. `config.yml` - Default configuration
2. `email/` - Email templates
3. `static/` - Frontend resources
4. `i18n/` - Language files
5. `data/` - Empty data directory

---

## Related Links

- [Configuration Guide](./config.md)
- [FAQ](../question/)
