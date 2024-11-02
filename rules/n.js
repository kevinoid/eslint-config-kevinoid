// ESLint common configuration rules for N plugin
// https://github.com/weiran-zsd/eslint-plugin-node#-rules

"use strict";

module.exports = {
  "extends": [
    "plugin:n/recommended"
  ],

  "rules": {
    // require file extensions in import declarations
    // https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
    "n/file-extension-in-import": "error",

    // allow process.exit()
    // this rule is redundant with the built-in no-process-exit rule
    "n/no-process-exit": "off",

    // disallow unsupported Node.js built-ins
    // Ignore fetch experimental warning on Node.js >=18 <21
    "n/no-unsupported-features/node-builtins": ["error", {
      "ignores": [
        "fetch"
      ]
    }]
  }
};
