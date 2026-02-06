# Frequently Asked Questions

## Web Interface & Access

### How do I access the VerifyMC homepage?
The web interface runs on **port 8080** by default. You can access it at:
```
http://your-server-ip:8080
```

**Special Configurations:**
- **No Public IP / NAT Traversal**: If your server doesn't have a public IP or uses NAT traversal (e.g., frp, ngrok), you need to expose port 8080 to an external port for access.
- **Recommended**: Keep internal and external ports consistent for easier configuration.
- **Configure in `config.yml`**:
  ```yaml
  web_port: 8080
  web_register_url: https://your-domain.com/
  ```

### The admin panel won't load
1. Ensure the web server port (default: 8080) is open in your firewall
2. Check if another application is using the same port
3. Verify the plugin loaded correctly by checking the console
4. Make sure `web_port` in `config.yml` is correctly set

---

## Discord Integration

### How do I configure Discord server binding?
1. **Create a Discord Application** at [Discord Developer Portal](https://discord.com/developers/applications)
2. **Get your credentials**:
   - Copy the **Client ID**
   - Generate and copy the **Client Secret** from OAuth2 settings
3. **Set up OAuth2 Redirect**:
   - Add redirect URI: `https://your-domain.com/api/discord/callback`
4. **Configure in `config.yml`**:
   ```yaml
   discord:
     enabled: true
     client_id: "your-client-id"
     client_secret: "your-client-secret"
     redirect_uri: "https://your-domain.com/api/discord/callback"
     guild_id: "your-server-id"  # Optional: require users to join specific server
     required: false  # Set to true to require Discord linking
   ```
5. Restart the plugin with `/vmc reload`

---

## Email Configuration (SMTP)

### How do I configure SMTP for email verification?
1. **Enable SMTP** in your email provider (Gmail, QQ Mail, Outlook, etc.)
2. **For Gmail**:
   - Enable 2-Factor Authentication
   - Generate an App Password at [Google App Passwords](https://myaccount.google.com/apppasswords)
3. **For QQ Mail**:
   - Enable SMTP service in Settings > Accounts
   - Use the authorization code as password

**Configure in `config.yml`**:
```yaml
smtp:
  host: smtp.gmail.com      # smtp.qq.com for QQ Mail
  port: 587                 # or 465 for SSL
  username: your-email@gmail.com
  password: your-app-password
  from: your-email@gmail.com
  enable_ssl: true
email_subject: "VerifyMC Verification Code"
```

### I don't have an email server, what can I do?
Use **Captcha mode** as an alternative to email verification:
```yaml
auth_methods:
  - captcha  # Use captcha instead of email
# Or use both:
# auth_methods:
#   - email
#   - captcha

captcha:
  type: math      # 'math' or 'text'
  length: 4       # For text captcha
  expire_seconds: 300
```

### Players can't register / Email not sending
1. Check your SMTP configuration in `config.yml`
2. Verify your email provider allows SMTP access
3. Check the server console for detailed error messages
4. Enable debug mode: `debug: true` in config
5. Check email domain whitelist settings

---

## Proxy Plugin Configuration

### How do I configure the VerifyMC-Proxy plugin?
1. **Download** `verifymc-proxy-*.jar` from the download page
2. **Place it** in your proxy's `plugins` folder (BungeeCord/Velocity)
3. **Configure `config.yml`** in the proxy plugin folder:
   ```yaml
   # Backend server URL (where main VerifyMC plugin runs)
   backend_url: "http://your-backend-server-ip:8080"

   # Registration URL shown in kick message
   register_url: "https://your-domain.com/"

   # Kick message for unregistered players
   kick_message: "&c[ VerifyMC ]\n&7Please visit &a{url} &7to register"

   # Language setting (zh or en)
   language: en

   # Cache settings
   cache:
     enabled: true
     expire_seconds: 60
   ```
4. **Restart** your proxy server

### Which proxy platforms are supported?
- **Velocity**: 3.4.0+ (recommended)
- **BungeeCord/Waterfall**: 1.21+
- **Velocity-CTD** and other Velocity forks are supported since v1.2.6

---

## Installation & Compatibility

### Which Minecraft versions are supported?
VerifyMC supports Minecraft **1.8.x to 1.21.x**.

### Does VerifyMC work with Geyser/Floodgate (Bedrock Edition)?
Yes! Configure bedrock support in `config.yml`:
```yaml
bedrock:
  enabled: true
  prefix: "."
  username_regex: "^\\.[a-zA-Z0-9_\\s]{3,16}$"
```

---

## Plugin Updates

### How do I update the plugin?
1. Download the latest version from the download page
2. Stop your server
3. Replace the old JAR file with the new one
4. Start the server
5. Check console for any config migrations

### Will my data be preserved after updating?
Yes, all user data is preserved during updates. The plugin automatically migrates configurations when needed and creates backups.

---

## Troubleshooting

### "No injectable constructor" error on Velocity
Update to VerifyMC-Proxy v1.2.6 or later, which uses `com.google.inject.Inject` for better compatibility with Velocity forks.

### Version number showing incorrectly
This issue was fixed in v1.2.6. Please update to the latest version.

---

> For more configuration options, see the [Configuration Documentation](/docs/verifymc/file/config).
