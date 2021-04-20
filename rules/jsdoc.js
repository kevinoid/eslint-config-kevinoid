// ESLint common configuration rules for JSDoc plugin
// https://github.com/gajus/eslint-plugin-jsdoc

"use strict";

const eslintRequire = require("../lib/eslint-require.js");

const jsdoc = eslintRequire("eslint-plugin-jsdoc");

/** Gets a rule configuration with warning switched to error.
 *
 * @private
 */
function ruleWarnToError(ruleConfig) {
  if (ruleConfig === "warn") {
    return "error";
  }

  if (Array.isArray(ruleConfig) && ruleConfig[0] === "warn") {
    ruleConfig = [...ruleConfig];
    ruleConfig[0] = "error";
    return ruleConfig;
  }

  return ruleConfig;
}

/** Gets a rules configuration with warnings switched to errors.
 *
 * @private
 */
function rulesWarnToError(rules) {
  return Object.keys(rules).reduce((newRules, ruleName) => {
    newRules[ruleName] = ruleWarnToError(rules[ruleName]);
    return newRules;
  }, {});
}

module.exports = {
  ...jsdoc.configs.recommended,

  "rules": {
    // jsdoc recommends many rules at warning level.
    // Warnings are not particularly useful for me.  Switch to error.
    ...rulesWarnToError(jsdoc.configs.recommended.rules),

    // Requires a hyphen before the @param description is not used.
    // It seems inconsistent with other tags and doesn't add value for me.
    "jsdoc/require-hyphen-before-param-description": ["error", "never"],

    // Don't require JSDoc comments on classes and functions.
    "jsdoc/require-jsdoc": "off",

    // Require @param for all parameters, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-param": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }],

    // Require @returns, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-returns": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }],

    // Don't ensure that a yield is present in the function body
    // It is a common idiom to export a non-generator function which performs
    // argument checking before calling a non-exported generator function.
    // (So argument validation is not deferred until iteration.)
    // Since the JSDoc annotations are on the exported function, this idiom
    // violates this rule.  Disable it.
    "jsdoc/require-yields-check": "off"
  },

  // Note: Support Closure Compiler tags (like @template) with mode:closure.
  //
  // Would prefer TypeScript, but can't use mode:typescript without rejecting
  // module: types, which are not supported by TypeScript:
  // https://github.com/jsdoctypeparser/jsdoctypeparser/issues/50#issuecomment-480340239
  // Since JSDoc does not support TypeScript's import types, can't use those:
  // https://github.com/jsdoc/jsdoc/issues/1632
  // https://github.com/jsdoc/jsdoc/issues/1645
  //
  // mode:closure with tagNamePreference for @returns is best compromise:
  // https://github.com/gajus/eslint-plugin-jsdoc/issues/619
  "settings": {
    "jsdoc": {
      "mode": "closure",
      "tagNamePreference": {
        "return": "returns"
      }
    }
  }
};
