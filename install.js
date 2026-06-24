const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'mcp_config.json');

if (fs.existsSync(configPath)) {
  let content = fs.readFileSync(configPath, 'utf8');
  // Replace the placeholder with the absolute directory path of the plugin
  content = content.replace(/PLACEHOLDER_PATH/g, __dirname.replace(/\\/g, '/'));
  fs.writeFileSync(configPath, content, 'utf8');
  console.log(`[gswitch] Successfully configured absolute paths in mcp_config.json pointing to: ${__dirname}`);
} else {
  console.error('[gswitch] mcp_config.json not found in plugin directory');
  process.exit(1);
}
