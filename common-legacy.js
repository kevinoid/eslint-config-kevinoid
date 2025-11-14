// ESLint configuration common to all legacy configurations
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const js = require("@eslint/js");
const {
  "configs": {
    "flat/recommended-error": jsdocConfig
  }
} = require("eslint-plugin-jsdoc");
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
const airbnbLegacy = require("./eslint-config-airbnb-base/legacy.js");
const airbnbBestPractices = require("./eslint-config-airbnb-base/rules/best-practices.js");
const airbnbErrors = require("./eslint-config-airbnb-base/rules/errors.js");
const airbnbNode = require("./eslint-config-airbnb-base/rules/node.js");
const airbnbStyle = require("./eslint-config-airbnb-base/rules/style.js");
const airbnbVariables = require("./eslint-config-airbnb-base/rules/variables.js");
const warnToError = require("./lib/warn-to-error.js");
const rulesBestPractices = require("./rules/best-practices.js");
const rulesJsdoc = require("./rules/jsdoc.js");
const rulesPossibleErrors = require("./rules/possible-errors.js");
const rulesRegexp = require("./rules/regexp.js");
const rulesStyle = require("./rules/style.js");
const rulesUnicorn = require("./rules/unicorn.js");
const rulesVariables = require("./rules/variables.js");

module.exports = [
  {
    "name": "ESLint recommended",
    ...js.configs.recommended
  },

  {
    "name": "eslint-config-airbnb-base/legacy",
    // Include just rules to avoid undesirable settings and need for FlatCompat
    "rules": {
      // Note: Order from
      // https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/legacy.js
      ...airbnbBestPractices.rules,
      ...airbnbErrors.rules,
      ...airbnbNode.rules,
      ...airbnbStyle.rules,
      ...airbnbVariables.rules,
      ...airbnbLegacy.rules
    }
  },

  jsdocConfig,

  {
    ...regexpConfig,
    "rules": warnToError(regexpConfig.rules)
  },

  unicornConfig,

  // ESLint built-in rules
  rulesBestPractices,
  rulesPossibleErrors,
  rulesStyle,
  rulesVariables,

  // Plugin rules
  rulesJsdoc,
  rulesRegexp,
  rulesUnicorn
];
