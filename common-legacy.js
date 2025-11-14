// ESLint configuration common to all legacy configurations
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const { FlatCompat } = require("@eslint/eslintrc");
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

const warnToError = require("./lib/warn-to-error.js");
const rulesBestPractices = require("./rules/best-practices.js");
const rulesJsdoc = require("./rules/jsdoc.js");
const rulesPossibleErrors = require("./rules/possible-errors.js");
const rulesRegexp = require("./rules/regexp.js");
const rulesStyle = require("./rules/style.js");
const rulesUnicorn = require("./rules/unicorn.js");
const rulesVariables = require("./rules/variables.js");

const compat = new FlatCompat({
  "baseDirectory": __dirname,
  "resolvePluginsRelativeTo": __dirname
});

module.exports = [
  {
    "name": "ESLint recommended",
    ...js.configs.recommended
  },

  // Vendor airbnb-base to avoid peerDep conflicts with eslint@^9
  // https://github.com/airbnb/javascript/issues/2961
  ...compat.extends("./eslint-config-airbnb-base/legacy"),

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
