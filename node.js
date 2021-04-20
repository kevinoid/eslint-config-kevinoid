// ESLint configuration for Node 6 and later.
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
    "./rules/import",
    "./rules/jsdoc",
    "./rules/promise",
    "./rules/unicorn",

    // extend node plugin last because it sets parserOptions based on type
    // field from nearest ancestor package.json to process.cwd().
    "./rules/node"
  ],

  "parserOptions": {
    // airbnb-base disables generators due to regenerator-runtime overhead.
    // Node.js has supported generators without regenerator since v4.
    "ecmaFeatures": {
      "generators": true
    }
  },

  "env": {
    // Disable node env added by airbnb-base/legacy.
    // globals are set by plugin:node based on package.json#type.
    // Enabling the node env would define CommonJS globals unconditionally.
    "node": false
  },

  "rules": {
    // require 'use strict' in global scope
    // Note: This rule has no effect when sourceType: module
    "strict": ["error", "global"],

    // don't require .flatMap() over .map().flat()
    // TODO [engine:node@>=11]: Enable this rule
    "unicorn/prefer-array-flat-map": "off"
  }
};
