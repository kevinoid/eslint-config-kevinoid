// ESLint configuration for Node 6 and later.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "airbnb-base",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/style",
    "./rules/variables",

    // Plugin rules
    "./rules/jsdoc",
    "./rules/node",
    "./rules/promise",
    "./rules/unicorn"
  ],

  "parserOptions": {
    // airbnb-base disables generators due to regenerator-runtime overhead.
    // Node.js has supported generators without regenerator since v4.
    "ecmaFeatures": {
      "generators": true
    }
  },

  "rules": {
    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't require .flatMap() over .map().flat()
    // since .flatMap() only became available in Node 11
    "unicorn/prefer-array-flat-map": "off",

    // prefer String#trimStart/trimEnd to trimLeft/trimRight
    "unicorn/prefer-string-trim-start-end": "error"
  }
};
