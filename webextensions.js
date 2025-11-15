// ESLint configuration for JS run directly in browsers as WebExtensions.
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
  "name": "eslint-config-kevinoid/webextensions",

  "languageOptions": {
    "sourceType": "script",
    "globals": {
      ...globals.browser,
      ...globals.webextensions
    }
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't prefer modules, which are not well supported in WebExtensions
    // https://stackoverflow.com/q/48104433
    "unicorn/prefer-module": "off"
  }
}];
