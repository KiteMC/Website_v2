# Plugin Commands

## Main Command

```
/vmc [subcommand] [arguments...]
```

## Subcommand List

| Subcommand | Permission         | Description                              | Example Usage                            |
|------------|-------------------|------------------------------------------|------------------------------------------|
| help       | everyone          | Show help information                    | `/vmc help`                              |
| reload     | verifymc.admin    | Reload plugin config and resources       | `/vmc reload`                            |
| add        | verifymc.admin    | Add player to whitelist (supports email) | `/vmc add <player> <email>`              |
| remove     | verifymc.admin    | Remove player from whitelist             | `/vmc remove <player>`                   |
| port       | everyone          | Show current Web admin panel port        | `/vmc port`                              |

---

## Command Details

### `/vmc help`

- Shows all available subcommands and their descriptions.

### `/vmc reload`

- Reloads the plugin config and resource files.
- Requires `verifymc.admin` permission.

### `/vmc add <player> <email>`

- Adds the specified player to the whitelist and binds the email.
- Requires `verifymc.admin` permission.
- Example: `/vmc add Steve steve@example.com`

### `/vmc remove <player>`

- Removes the specified player from the whitelist.
- Requires `verifymc.admin` permission.
- Example: `/vmc remove Steve`

### `/vmc port`

- Shows the current port of the Web admin panel.
- Available to everyone.

## Permission Notes

::: tip Default permissions

- **verifymc.use**: Allows use of VerifyMC's basic features (default: everyone).
- **verifymc.admin**: Required for admin commands (reload, add, remove). Default: OP only.
:::
