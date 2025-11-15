// ESLint common configuration rules for N plugin
// https://github.com/weiran-zsd/eslint-plugin-node#-rules

"use strict";

module.exports = {
  "name": "eslint-config-kevinoid/rules/n",

  "rules": {
    // require file extensions in import declarations
    // https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
    "n/file-extension-in-import": "error",

    // require error handling in callbacks
    // with error argument named err, error, errSomething, or errorSomething
    "n/handle-callback-err": ["error", "^err(or)?([A-Z0-9]|$)"],

    // disallow require calls to be mixed with regular variable declarations
    "n/no-mixed-requires": "error",

    // disallow unsupported Node.js built-ins, allow experimental
    "n/no-unsupported-features/node-builtins": ["error", {
      "allowExperimental": true
    }]
  }
};
