// ESLint configuration for Node 6 and later.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const eslintRequire = require("./lib/eslint-require.js");

const { "configs": { "recommended": { "parserOptions": { sourceType } } } } =
  eslintRequire("eslint-plugin-node");

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
    },
    // It would be preferable to use the version set by eslint-plugin-node
    // (determined based on package.json#engines/node).  Unfortunately, it
    // currently sets ecmaVersion: 2019 unconditionally, which lacks support
    // for widely used language features (e.g. import() and import.meta).
    //
    // ecmaVersion 2021 might be preferable for numeric separators, but would
    // accept optional chaining (?.) and nullish coalescing (??) without error,
    // which are only supported on node>=14:
    // https://github.com/mysticatea/eslint-plugin-node/issues/266
    // https://github.com/mysticatea/eslint-plugin-node/issues/267
    "ecmaVersion": 2020
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

    // Reports modules without any exports, or with unused exports
    // https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
    // TODO [eslint-config-airbnb-base@>=15]: Remove if enabled
    "import/no-unused-modules": sourceType === "script" ? "off" : ["error", {
      "missingExports": true,
      "unusedExports": true
    }],

    // don't require .flatMap() over .map().flat()
    // TODO [engine:node@>=11]: Enable this rule
    "unicorn/prefer-array-flat-map": "off"
  }
};
