const path = require("path");
const pluginPkg = require (path.join(__dirname, "../package.json"));
const pluginId = pluginPkg.name.replace(/^strapi-plugin-/i, "");
module.exports = pluginId