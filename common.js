// ESLint configuration common to all configurations
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const js = require("@eslint/js");
const {
  "configs": {
    "customize": stylisticCustomize
  }
} = require("@stylistic/eslint-plugin");
const {
  "flatConfigs": {
    "recommended": {
      // eslint-plugin-import sets { ecmaVersion: 2018, sourceType: module } to
      // ensure import is parsed.  Skip in favor of default ecmaVersion.
      "languageOptions": importLanguageOptions,
      ...importRecommended
    }
  }
} = require("eslint-plugin-import");
const {
  "configs": {
    "flat/recommended-error": jsdocConfig
  }
} = require("eslint-plugin-jsdoc");
const {
  "configs": {
    "flat/recommended": promiseConfig
  }
} = require("eslint-plugin-promise");
const {
  "configs": {
    "flat/all": regexpConfig
  }
} = require("eslint-plugin-regexp");
const {
  "configs": {
    "flat/recommended": unicornConfig
  }
} = require("eslint-plugin-unicorn");

// Vendor airbnb-base to avoid peerDep conflicts with eslint@^9
// https://github.com/airbnb/javascript/issues/2961
const airbnbBestPractices = require("./eslint-config-airbnb-base/rules/best-practices.js");
const airbnbErrors = require("./eslint-config-airbnb-base/rules/errors.js");
const airbnbEs6 = require("./eslint-config-airbnb-base/rules/es6.js");
const airbnbImports = require("./eslint-config-airbnb-base/rules/imports.js");
const airbnbNode = require("./eslint-config-airbnb-base/rules/node.js");
const airbnbStrict = require("./eslint-config-airbnb-base/rules/strict.js");
const airbnbStyle = require("./eslint-config-airbnb-base/rules/style.js");
const airbnbVariables = require("./eslint-config-airbnb-base/rules/variables.js");
const rulesToStylistic = require("./lib/rules-to-stylistic.js");
const warnToError = require("./lib/warn-to-error.js");
const rulesBestPractices = require("./rules/best-practices.js");
const rulesEs6 = require("./rules/es6.js");
const rulesJsdoc = require("./rules/jsdoc.js");
const rulesPossibleErrors = require("./rules/possible-errors.js");
const rulesPromise = require("./rules/promise.js");
const rulesRegexp = require("./rules/regexp.js");
const rulesStyle = require("./rules/style.js");
const rulesUnicorn = require("./rules/unicorn.js");
const rulesVariables = require("./rules/variables.js");

// Customized stylistic default configuration
// https://eslint.style/guide/config-presets#configuration-factory
const stylisticConfig = stylisticCustomize({ "semi": true });

module.exports = [
  {
    "name": "ESLint recommended",
    ...js.configs.recommended
  },

  {
    "name": "@stylistic/eslint-plugin",
    ...stylisticConfig
  },

  // Include eslint-plugin-import required by eslint-config-airbnb-base
  {
    "name": "eslint-plugin-import/config/flat/recommended",
    ...importRecommended
  },

  {
    "name": "eslint-config-airbnb-base",
    // Include just rules to avoid undesirable settings and need for FlatCompat
    "rules": rulesToStylistic({
      // Note: Order from
      // https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/index.js
      ...airbnbBestPractices.rules,
      ...airbnbErrors.rules,
      ...airbnbNode.rules,
      ...airbnbStyle.rules,
      ...airbnbVariables.rules,
      ...airbnbEs6.rules,
      ...airbnbImports.rules,
      ...airbnbStrict.rules
    })
  },

  jsdocConfig,

  promiseConfig,

  {
    ...regexpConfig,
    "rules": warnToError(regexpConfig.rules)
  },

  unicornConfig,

  // ESLint built-in rules
  rulesEs6,
  rulesBestPractices,
  rulesPossibleErrors,
  rulesStyle,
  rulesVariables,

  // Plugin rules
  rulesJsdoc,
  rulesPromise,
  rulesRegexp,
  rulesUnicorn
];
