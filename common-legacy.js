// ESLint configuration common to all legacy configurations
// <https://eslint.org/docs/user-guide/configuring>

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import { configs as regexpConfigs } from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";

// Vendor airbnb-base to avoid peerDep conflicts with eslint@^9
// https://github.com/airbnb/javascript/issues/2961
import airbnbLegacy from "./eslint-config-airbnb-base/legacy.js";
import airbnbBestPractices from "./eslint-config-airbnb-base/rules/best-practices.js";
import airbnbErrors from "./eslint-config-airbnb-base/rules/errors.js";
import airbnbNode from "./eslint-config-airbnb-base/rules/node.js";
import airbnbStyle from "./eslint-config-airbnb-base/rules/style.js";
import airbnbVariables from "./eslint-config-airbnb-base/rules/variables.js";
import { rulesRemovePlugin } from "./lib/remove-plugin-rules.js";
import rulesToReplacements from "./lib/rules-to-replacements.js";
import warnToError from "./lib/warn-to-error.js";
import rulesBestPractices from "./rules/best-practices.js";
import rulesJsdoc from "./rules/jsdoc.js";
import rulesPossibleErrors from "./rules/possible-errors.js";
import rulesRegexp from "./rules/regexp.js";
import rulesStyle from "./rules/style.js";
import rulesUnicorn from "./rules/unicorn.js";
import rulesVariables from "./rules/variables.js";

const airbnbLegacyRules = rulesToReplacements(
  {
    // Note: Order from
    // https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.4/packages/eslint-config-airbnb-base/legacy.js
    ...airbnbBestPractices.rules,
    ...airbnbErrors.rules,
    ...airbnbNode.rules,
    ...airbnbStyle.rules,
    ...airbnbVariables.rules,
    ...airbnbLegacy.rules
  },
  {
    "@stylistic/eslint-plugin": "@stylistic",
    "eslint-plugin-n": "n"
  }
);
// Remove rules for eslint-plugin-n which isn't used by legacy configs
const airbnbRules = rulesRemovePlugin(airbnbLegacyRules, "n");
// remove undesirable deprecated rules
delete airbnbRules["no-return-await"];
delete airbnbRules["prefer-reflect"];
delete airbnbRules["import/imports-first"];

// Customized stylistic default configuration
// https://eslint.style/guide/config-presets#configuration-factory
const stylisticCustomized = stylistic.configs.customize({ "semi": true });

const {
  // eslint-plugin-unicorn sets globals.builtins, which are not necessarily
  // supported in legacy environments
  "languageOptions": unicornLanguageOptions,
  ...unicornConfig
} = unicorn.configs["flat/recommended"];

export default [
  {
    "name": "ESLint recommended",
    ...js.configs.recommended
  },

  {
    "name": "@stylistic/eslint-plugin",
    ...stylisticCustomized
  },

  {
    "name": "eslint-config-airbnb-base/legacy",
    // Include just rules to avoid undesirable settings and need for FlatCompat
    "rules": airbnbRules
  },

  jsdoc.configs["flat/recommended-error"],

  {
    ...regexpConfigs["flat/all"],
    "rules": warnToError(regexpConfigs["flat/all"].rules)
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
