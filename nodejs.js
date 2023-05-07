// ESLint configuration for Node 6 and later.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const requirePeer = require("./lib/require-peer.js");
const { "rules": { "no-restricted-properties": noRestrictedProps } } =
  require("./rules/best-practices.js");

const { "configs": { "recommended": { "parserOptions": { sourceType } } } } =
  requirePeer("eslint-plugin-n");

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
    "./rules/n"
  ],

  "parserOptions": {
    // airbnb-base disables generators due to regenerator-runtime overhead.
    // Node.js has supported generators without regenerator since v4.
    "ecmaFeatures": {
      "generators": true
    },
    // It would be preferable to use the version set by eslint-plugin-n
    // (determined based on package.json#engines/node).  Unfortunately, it
    // currently sets ecmaVersion: 2019 unconditionally, which lacks support
    // for widely used language features (e.g. import() and import.meta in
    // 2021, top-level await in 2022).
    "ecmaVersion": 2022
  },

  "env": {
    // Disable es2022 env added by eslint-plugin-unicorn, add es2020 instead.
    // TODO [engine:node@>=15]: Enable es2022 (AggregateError,
    // FinalizationRegistry, WeakRef)
    "es2020": true,
    "es2022": false,
    // Disable node env added by airbnb-base/legacy.
    // globals are set by plugin:node based on package.json#type.
    // Enabling the node env would define CommonJS globals unconditionally.
    "node": false
  },

  "rules": {
    // require 'use strict' in global scope
    // Note: This rule has no effect when sourceType: module
    "strict": ["error", "global"],

    "no-restricted-properties": [
      ...noRestrictedProps,
      // Add process.nextTick() to no-restricted-properties
      // https://nodejs.org/api/process.html#process_when_to_use_queuemicrotask_vs_process_nexttick
      // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1346
      {
        "object": "process",
        "property": "nextTick",
        "message": "Use queueMicrotask() instead."
      }
    ],

    // Reports modules without any exports, or with unused exports
    // https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
    // TODO [eslint-config-airbnb-base@>=16]: Remove if enabled
    "import/no-unused-modules": sourceType === "script" ? "off" : ["error", {
      "missingExports": true,
      "unusedExports": true
    }]
  }
};
