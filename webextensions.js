// ESLint configuration for JS run directly in browsers as WebExtensions.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "airbnb-base",

    // ESLint built-in rules
    "./rules/es6",
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/style",
    "./rules/variables",

    // Plugin rules
    "./rules/jsdoc",
    "./rules/promise",
    "./rules/regexp",
    "./rules/unicorn"
  ],

  "parserOptions": {
    "sourceType": "script",
    // airbnb-base disables generators due to regenerator-runtime overhead.
    // The current and LTS versions of WebExtension browsers support generators
    // without regenerator, so this is not a concern.
    "ecmaFeatures": {
      "generators": true
    }
  },

  "env": {
    "browser": true,
    // Disable node env added by airbnb-base/legacy
    "node": false,
    "webextensions": true
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
};
