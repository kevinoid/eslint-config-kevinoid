// ESLint configuration for JS run directly in (modern) browsers.
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
    // Modern browsers support generators without regenerator, so allow.
    "ecmaFeatures": {
      "generators": true
    }
  },

  "env": {
    "browser": true,
    // Disable node env added by airbnb-base/legacy
    "node": false
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't prefer modules
    "unicorn/prefer-module": "off"
  }
};
