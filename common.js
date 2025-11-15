// ESLint configuration common to all configurations
// <https://eslint.org/docs/user-guide/configuring>

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";

// Vendor airbnb-base to avoid peerDep conflicts with eslint@^9
// https://github.com/airbnb/javascript/issues/2961
import airbnbBestPractices from "./eslint-config-airbnb-base/rules/best-practices.js";
import airbnbErrors from "./eslint-config-airbnb-base/rules/errors.js";
import airbnbEs6 from "./eslint-config-airbnb-base/rules/es6.js";
import airbnbImports from "./eslint-config-airbnb-base/rules/imports.js";
import airbnbNode from "./eslint-config-airbnb-base/rules/node.js";
import airbnbStrict from "./eslint-config-airbnb-base/rules/strict.js";
import airbnbStyle from "./eslint-config-airbnb-base/rules/style.js";
import airbnbVariables from "./eslint-config-airbnb-base/rules/variables.js";
import rulesToReplacements from "./lib/rules-to-replacements.js";
import warnToError from "./lib/warn-to-error.js";
import rulesBestPractices from "./rules/best-practices.js";
import rulesEs6 from "./rules/es6.js";
import rulesJsdoc from "./rules/jsdoc.js";
import rulesPossibleErrors from "./rules/possible-errors.js";
import rulesPromise from "./rules/promise.js";
import rulesRegexp from "./rules/regexp.js";
import rulesStyle from "./rules/style.js";
import rulesUnicorn from "./rules/unicorn.js";
import rulesVariables from "./rules/variables.js";

const airbnbRules = rulesToReplacements(
  {
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
  },
  {
    "@stylistic/eslint-plugin": "@stylistic",
    "eslint-plugin-n": "n"
  }
);
// remove undesirable deprecated rules
delete airbnbRules["no-return-await"];
delete airbnbRules["prefer-reflect"];
delete airbnbRules["import/imports-first"];

const {
  // eslint-plugin-import sets { ecmaVersion as 2018, sourceType as module } to
  // ensure import is parsed.  Skip in favor of default ecmaVersion.
  "languageOptions": importLanguageOptions,
  ...importRecommended
} = importPlugin.flatConfigs.recommended;

// Customized stylistic default configuration
// https://eslint.style/guide/config-presets#configuration-factory
const stylisticCustomized = stylistic.configs.customize({ "semi": true });

export default [
  {
    "name": "ESLint recommended",
    ...js.configs.recommended
  },

  {
    "name": "@stylistic/eslint-plugin",
    ...stylisticCustomized
  },

  // Include eslint-plugin-import required by eslint-config-airbnb-base
  {
    "name": "eslint-plugin-import/config/flat/recommended",
    ...importRecommended
  },

  {
    "name": "eslint-config-airbnb-base",
    // Include just rules to avoid undesirable settings and need for FlatCompat
    "rules": airbnbRules
  },

  jsdoc.configs["flat/recommended-error"],

  promise.configs["flat/recommended"],

  {
    ...regexp.configs["flat/all"],
    "rules": warnToError(regexp.configs["flat/all"].rules)
  },

  unicorn.configs["flat/recommended"],

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
