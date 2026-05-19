// ESLint configuration for currently supported versions of Node.js.
// <https://eslint.org/docs/user-guide/configuring>

import nPlugin from "eslint-plugin-n";

import common from "./common.js";
import bestPractices from "./rules/best-practices.js";
import importConfigs from "./rules/import.js";
import n from "./rules/n.js";

const noRestrictedProps = bestPractices.rules["no-restricted-properties"];
const nConfig = nPlugin.configs["flat/recommended"];
const { sourceType } = nConfig.languageOptions;

const nodeConfig = {
  "name": "eslint-config-kevinoid/nodejs",

  "languageOptions": {
    // Note: eslint-plugin-n >= 16 sets ecmaVersion to 2021:
    // https://github.com/eslint-community/eslint-plugin-n/pull/96
    // It would be preferable to set from package.json#engines/node:
    // https://github.com/eslint-community/eslint-plugin-n/issues/42#issuecomment-1267139576
    // Until then, set based on supported LTS version
    // Although Node.js 20 doesn't support much of ES2025, it does support
    // import attributes, required to lint use of eslint-plugin-unicorn@58.0.0
    // https://github.com/import-js/eslint-plugin-import/issues/3171
    // TODO [engine:node@>=21]: Bump based on https://node.green/
    "ecmaVersion": 2025,
    "parserOptions": {
      "ecmaFeatures": {
        // Note: ESLint forces globalReturn: false for sourceType: module
        "globalReturn": sourceType === "commonjs" || sourceType === "script"
      }
    },
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
      "unusedExports": true,
      "ignoreExports": [
        // ESLint configuration files are not expected to be imported
        // https://eslint.org/docs/latest/use/configure/configuration-files
        "**/eslint.config.{js,mjs,cjs,ts,mts,cts}"
      ]
    }]
  }
};

export default [
  ...common,

  nConfig,

  importConfigs,

  // extend node plugin last because it sets languageOptions based on type
  // field from nearest ancestor package.json to process.cwd().
  n,

  nodeConfig
];
