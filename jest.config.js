const path = require('path');
const setupFile = path.resolve(__dirname, 'register-context.js');

module.exports = {
  setupFiles: [setupFile],
  moduleFileExtensions: ["js", "json", "jsx", "node", "scss", "html"],
  moduleNameMapper: { "\\.(css|scss)$": "identity-obj-proxy" }
};