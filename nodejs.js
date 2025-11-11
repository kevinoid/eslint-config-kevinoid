// ESLint configuration for currently supported versions of Node.js.
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
    "./rules/regexp",
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
    // Note: eslint-plugin-n >= 16 sets ecmaVersion to 2021:
    // https://github.com/eslint-community/eslint-plugin-n/pull/96
    // It would be preferable to set from package.json#engines/node:
    // https://github.com/eslint-community/eslint-plugin-n/issues/42#issuecomment-1267139576
    // Until then, set based on supported LTS version (Node 20 supports ES2023)
    // TODO [engine:node@>=21]: Bump based on https://node.green/
    "ecmaVersion": 2023
  },

  "env": {
    // Disable node env added by airbnb-base/legacy.
    // globals are set by plugin:node based on package.json#type.
    // Enabling the node env would define CommonJS globals unconditionally.
    //
    // FIXME: eslint-plugin-n does not keep up with recent globals, like fetch:
    // https://github.com/eslint-community/eslint-plugin-n/issues/35
    // Leave node enabled until eslint-plugin-n is updated.
    // "node": false
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
