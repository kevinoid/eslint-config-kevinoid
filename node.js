// ESLint configuration for Node 6 and later.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "airbnb-base",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/style",
    "./rules/variables"
  ],

  "parserOptions": {
    "sourceType": "script"
  },

  "rules": {
    // require 'use strict' in global scope
    "strict": ["error", "global"]
  }
};
