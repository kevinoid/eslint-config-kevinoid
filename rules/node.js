// ESLint common configuration rules for Node plugin
// https://github.com/mysticatea/eslint-plugin-node#-rules

"use strict";

module.exports = {
  "extends": [
    "plugin:node/recommended"
  ],

  "rules": {
    // enforce consistent module.exports or exports
    "node/exports-style": "error",

    // require file extensions in import declarations
    // https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
    "node/file-extension-in-import": "error"
  }
};
