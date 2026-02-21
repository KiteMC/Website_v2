# FAQ

This page answers common questions about ArcPass.

## Installation Issues

### Plugin Not Loading

**Symptom**: No ArcPass logs on server startup

**Solutions**:

1. Confirm JAR file is in `plugins` folder
2. Check Java version is 17+
3. Check server log for errors
4. Confirm using Paper/Spigot 1.18+ or Folia 1.19+

### Config Files Not Generated

**Symptom**: `plugins/ArcPass` folder is empty or missing

**Solutions**:

1. Check folder write permissions
2. Check console for permission errors
3. Manually create `plugins/ArcPass` folder and restart

### Plugin Conflicts

**Symptom**: Other plugins error after installing ArcPass

**Solutions**:

1. Check for duplicate dependency libraries
2. Try updating conflicting plugins
3. Check error logs for specifics
4. Report to Discord community

## License Issues

### Validation Failed

**Symptom**: Console shows `License validation failed`

**Causes and Solutions**:

1. **Invalid key**
   - Check key in `license.yml` is correct
   - Mind case sensitivity

2. **Network issues**
   - Confirm server can reach `license.kitemc.com`
   - Check firewall settings

3. **Binding limit reached**
   - Login to dashboard and unbind unused servers
   - Or upgrade license plan

4. **License expired**
   - Check license validity
   - Renew or purchase new license

### Can't Use After Server Migration

**Symptom**: License invalid after moving servers

**Solution**:

1. Login to <InlineLink href="https://license.kitemc.com/login" :external="true">KiteMC License Center</InlineLink>
2. Find your license
3. Unbind original server
4. Reactivate on new server

### Binding Failed

**Symptom**: `LIMIT_EXCEEDED` or `BINDING_FAILED`

**Solutions**:

1. Check current binding count
2. Unbind unused servers
3. Verify server IP and port

## Feature Issues

### Experience Not Increasing

**Causes**:

1. No active season
2. Quest config error
3. Player lacks permission

**Solutions**:

1. Use `/arcpass admin season start` to start season
2. Check quest config files for syntax errors
3. Confirm player has `arcpass.use` permission

### Can't Claim Rewards

**Causes**:

1. Level too low
2. Missing required tier
3. Already claimed

**Check**:

```
/arcpass admin lookup <player>
```

### GUI Won't Open

**Causes**:

1. Plugin not fully initialized
2. License not activated
3. GUI config error

**Solutions**:

1. Wait for plugin to fully load
2. Check license status
3. Check `gui/*.yml` files for syntax errors

### Quest Progress Not Updating

**Causes**:

1. Quest type configured incorrectly
2. Target parameters don't match
3. Quest conditions not met

**Troubleshoot**:

1. Verify quest type spelling
2. Check target parameters (block/entity names)
3. Enable debug mode:

   ```
   /arcpass admin debug toggle
   ```

## Compatibility Issues

### Folia Server Issues

**Q: Does ArcPass support Folia?**

A: Yes, fully supported. ArcPass auto-detects Folia and uses compatible schedulers.

**Q: Some features don't work on Folia?**

A: Check if third-party plugins support Folia:

- DeluxeTags doesn't support Folia - use TAB instead
- Some economy plugins may be incompatible

### PlaceholderAPI Variables Not Showing

**Causes**:

1. PlaceholderAPI not installed
2. Expansion not registered
3. Variable name typo

**Solutions**:

1. Install PlaceholderAPI 2.11.0+
2. Restart server
3. Test with `/papi parse me %arcpass_level%`
4. Check variable names (case-sensitive)

### Economy Plugin Not Working

**Symptom**: Tier purchase or economy rewards fail

**Solutions**:

1. Confirm Vault or CMI is installed
2. Confirm economy plugin (e.g., EssentialsX) works
3. Test: `/eco give <player> 100`

### MythicMobs/Jobs Quest Not Triggering

**Causes**:

1. Incompatible plugin version
2. Wrong ID configuration
3. Event not firing properly

**Solutions**:

1. Update to recommended versions
2. Check IDs (case-sensitive)
3. Enable debug mode to confirm events

## Performance Issues

### Server Lag

**Causes**:

1. Slow database operations
2. Frequent leaderboard calculations
3. Too many online players

**Optimizations**:

1. Use MySQL instead of SQLite
2. Increase cache times
3. Optimize connection pool

```yaml
# database.yml
mysql:
  pool:
    maximum-pool-size: 10
    minimum-idle: 5
```

### High Memory Usage

**Solutions**:

1. Check player data cache settings
2. Reduce unnecessary quest types
3. Periodically clean old data

## Configuration Issues

### YAML Syntax Errors

**Symptom**: Config files fail to load

**Common Errors**:

1. Using tabs instead of spaces for indent
2. Unescaped special characters
3. Missing space after colons

**Suggestions**:

- Use a YAML-aware editor (VSCode + YAML plugin)
- Use online YAML validators

### Garbled Chinese/Unicode

**Solutions**:

1. Ensure config files are saved as UTF-8
2. Convert encoding in Notepad++ or VSCode
3. Regenerate config files

## Getting Help

If these solutions don't work:

1. **View detailed logs**

   ```
   /arcpass admin debug toggle
   ```

2. **Export diagnostics**

   ```
   /arcpass admin debug
   ```

3. **Contact support**

<LinkGrid :cols="2">
  <LinkCard
    icon="chat"
    title="Discord Community"
    description="Get real-time help from our community"
    href="https://discord.gg/dcsBw5Z5ZT"
    :external="true"
  />
  <LinkCard
    icon="mail"
    title="Email Support"
    description="starry_cbz@outlook.com"
    href="mailto:starry_cbz@outlook.com"
    :external="true"
  />
  <LinkCard
    icon="ticket"
    title="License Center"
    description="View license status and tickets"
    href="https://license.kitemc.com/dashboard/licenses"
    :external="true"
  />
  <LinkCard
    icon="bug"
    title="GitHub Issues"
    description="Submit bug reports"
    href="https://github.com/KiteMC/ArcPass/issues"
    :external="true"
  />
</LinkGrid>

When submitting issues, please provide:

- Server type and version
- ArcPass version
- Error log screenshots
- Relevant config files
