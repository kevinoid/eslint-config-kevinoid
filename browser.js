// ESLint configuration for JS run directly in (modern) browsers.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const {
  "configs": {
    "recommended": nounsanitizedConfig
  }
} = require("eslint-plugin-no-unsanitized");
const globals = require("globals");

const common = require("./common.js");
const { removePluginRules } = require("./lib/remove-plugin-rules.js");

const commonNoN = removePluginRules(common, "n");

module.exports = [...commonNoN, nounsanitizedConfig, {
  "name": "eslint-config-kevinoid/browser",

  "languageOptions": {
    "sourceType": "script",
    "globals": {
      ...globals.browser
    }
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't prefer modules
    "unicorn/prefer-module": "off"
  }
}];
