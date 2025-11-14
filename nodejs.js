// ESLint configuration for currently supported versions of Node.js.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const {
  "configs": {
    "flat/recommended": nConfig
  }
} = require("eslint-plugin-n");

const common = require("./common.js");
const { "rules": { "no-restricted-properties": noRestrictedProps } } =
  require("./rules/best-practices.js");
const importConfigs = require("./rules/import.js");
const n = require("./rules/n.js");

const { sourceType } = nConfig.languageOptions;

const nodeConfig = {
  "languageOptions": {
    // Note: eslint-plugin-n >= 16 sets ecmaVersion to 2021:
    // https://github.com/eslint-community/eslint-plugin-n/pull/96
    // It would be preferable to set from package.json#engines/node:
    // https://github.com/eslint-community/eslint-plugin-n/issues/42#issuecomment-1267139576
    // Until then, set based on supported LTS version (Node 20 supports ES2023)
    // TODO [engine:node@>=21]: Bump based on https://node.green/
    "ecmaVersion": 2023,
    sourceType
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
    "import/no-unused-modules": sourceType !== "module" ? "off" : ["error", {
      "missingExports": true,
      "unusedExports": true
    }]
  }
};

module.exports = [
  ...common,

  nConfig,

  importConfigs,

  // extend node plugin last because it sets languageOptions based on type
  // field from nearest ancestor package.json to process.cwd().
  n,

  nodeConfig
];
