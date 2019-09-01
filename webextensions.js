// ESLint configuration for JS run directly in browsers as WebExtensions.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "airbnb-base",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/style",
    "./rules/variables",

    // Plugin rules
    "./rules/promise",
    "./rules/unicorn"
  ],

  "parserOptions": {
    "sourceType": "script"
  },

  "env": {
    "browser": true,
    "webextensions": true
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // since .flatMap() is not available in Edge or Safari
    "unicorn/prefer-flat-map": "off"
  }
};
