# Antigravity Google Account Switcher (`antigravity-gswitch`)

A public plugin for the **Google Antigravity CLI (`agy`)** designed to manage multiple Google account profiles and seamlessly swap between them when you encounter Vertex AI API quota limits.

## Features

- **Multi-Profile Storage**: Save tokens for multiple Google accounts locally.
- **Auto-Save Token Refreshes**: Before switching accounts, the plugin updates the saved credentials for the current account to preserve refreshed access tokens.
- **Fast Switch**: Swaps out active CLI tokens (`antigravity-oauth-token`), active credentials (`oauth_creds.json`), and system account configurations (`google_accounts.json`) instantly.
- **Zero Dependencies**: Pure Vanilla Node.js implementation for maximum security, compatibility, and startup performance.

## Files Structure

```
antigravity-gswitch/
├── plugin.json          # Antigravity CLI plugin manifest
├── mcp_config.json      # Model Context Protocol configuration
├── index.js             # Stdio-based JSON-RPC MCP server
├── install.js           # Post-install script for absolute path resolution
├── README.md
├── LICENSE
└── skills/
    └── gswitch/
        └── SKILL.md     # Agent instructions (in Vietnamese)
```

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com billythekidz/antigravity-gswitch.git
   ```
2. Validate the plugin with `agy`:
   ```bash
   agy plugin validate /path/to/antigravity-gswitch
   ```
3. Install the plugin:
   ```bash
   agy plugin install /path/to/antigravity-gswitch
   ```
4. Run the post-install script to configure the absolute paths in `mcp_config.json` inside the staged directory:
   ```bash
   node ~/.gemini/config/plugins/antigravity-gswitch/install.js
   ```
5. Verify that the plugin is listed:
   ```bash
   agy plugin list
   ```

## Usage

You can invoke the switching commands from within the `agy` interactive terminal session:

### 1. Save Active Account
Save the current Google account as a profile:
```
gswitch_add_current_account
```

### 2. Prepare Login for a New Account
Prepare the session files for a fresh browser authentication:
```
gswitch_prepare_login
```
After executing this, exit/restart `agy` or issue a query, and standard Google login will trigger. Once completed, run `gswitch_add_current_account` again to save it.

### 3. List Accounts
Show all saved accounts and see which one is active:
```
gswitch_list_accounts
```

### 4. Switch Account
Switch to another saved email:
```
gswitch_switch_account email="user2@gmail.com"
```

## License

MIT License.
