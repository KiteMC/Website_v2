# License Activation

ArcPass is a paid plugin requiring a valid license for full functionality.

## Purchase a License

### Available Plans

| Plan | Price | Devices | Ports per Device | Best For |
|------|-------|---------|------------------|----------|
| Personal | $7 | 3 | 2 | Personal/small servers |
| Professional | $18 | 10 | 5 | Commercial servers |
| Unlimited | $42 | 50 | 50 | Large networks |

::: tip Note

- **Devices**: Number of "Machine ID + IP + Port" combinations that can be bound
- **Ports per Device**: Number of different ports on the same machine (same machine ID and IP)
- All plans are **one-time purchase**, lifetime access
:::

### Purchase Options

<ButtonGroup>
  <ActionButton
    href="https://license.kitemc.com/products/arcpass"
    text="Purchase Now"
    theme="brand"
    icon="cart"
    :external="true"
  />
  <ActionButton
    href="https://license.kitemc.com/register"
    text="Register Account"
    theme="alt"
    icon="register"
    :external="true"
  />
</ButtonGroup>

After purchase, you can view your key on the <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">License Management Page</InlineLink>.

## Activation Steps

### 1. Edit Configuration

Open `plugins/ArcPass/license.yml`:

```yaml
# ========================================
#       ArcPass License Configuration
# ========================================

# Config version (DO NOT MODIFY)
config-version: 1

# Your license key (obtain from KiteMC)
# Format: XXXX-XXXX-XXXX-XXXX
license-key: ""

# Note: License verification uses local cache (24hr validity)
# with a 7-day grace period for network issues.
# Cache file: plugins/ArcPass/license.cache
```

### 2. Enter Your Key

Replace the empty string with your license key:

```yaml
license-key: "XXXX-XXXX-XXXX-XXXX"
```

### 3. Reload Configuration

Run the command or restart:

```
/arcpass admin reload
```

### 4. Verify Activation

On successful activation, console shows:

```
[ArcPass] License validated successfully!
[ArcPass] Licensed to: YourName
[ArcPass] Plan: Unlimited (50 devices)
[ArcPass] ArcPass v1.0.0 enabled!
```

## License Binding

### Binding Mechanism

ArcPass uses these identifiers for server binding:

- **Machine ID** - Unique hardware identifier
- **IP Address** - Server public IP
- **Port** - Server running port

On first activation, the license binds to the current server.

### Check Binding Status

```
/arcpass admin debug
```

### Unbind/Transfer

All plans support **unlimited transfers**. Follow these steps:

1. Login to <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">KiteMC License Center</InlineLink>
2. Find your ArcPass license on the "My Licenses" page
3. Click "View Details" to enter the license details page
4. Manage bindings in the "Bound Devices" section on the right:
   - Click "Reset Bindings" to clear all bindings
   - Click the delete button next to a device to unbind a single device
   - Click the delete button next to a port to unbind a single port

::: tip
After unbinding, configure the same license key on the new server and start it to automatically complete the binding.
:::

## License Status

### Status Codes

| Status | Description |
|--------|-------------|
| `VALID` | License valid, plugin running |
| `INVALID` | Key invalid or malformed |
| `EXPIRED` | License expired (subscription) |
| `SUSPENDED` | License suspended (TOS violation) |
| `UNBOUND` | Not bound to server |
| `LIMIT_EXCEEDED` | Exceeded binding limit |

### Offline Mode

When license server is unreachable:

- Cached validation continues to work
- Cache validity is 24 hours with a 7-day grace period
- Cache file located at `plugins/ArcPass/license.cache`
- Features limited after grace period expires

## Common Issues

### Validation Failed

1. Check network connectivity
2. Verify key is entered correctly (case-sensitive)
3. Check firewall settings

### Binding Limit Reached

1. Login to <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">License Center</InlineLink> to view current bindings
2. Unbind unused devices/ports on the license details page
3. Or upgrade to a higher plan

### Server Migration

1. Login to <InlineLink href="https://license.kitemc.com/dashboard/licenses" :external="true">License Center</InlineLink>
2. Go to license details and click "Reset Bindings" or delete the device
3. Configure same key on new server
4. Start new server to auto-bind

## Support

Having license issues?

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
    description="Manage licenses and bindings"
    href="https://license.kitemc.com/dashboard/licenses"
    :external="true"
  />
  <LinkCard
    icon="key"
    title="Login"
    description="Login to manage your licenses"
    href="https://license.kitemc.com/login"
    :external="true"
  />
</LinkGrid>
