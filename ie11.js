// ESLint configuration for JS run directly in browsers (IE11 or better).
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const {
  "configs": {
    "flat/recommended": promiseConfig
  }
} = require("eslint-plugin-promise");
const globals = require("globals");

// Note: IE11 doesn't support most ES6 features.  Use legacy ruleset.
const commonLegacy = require("./common-legacy.js");
const ie11RestrictedGlobals = require("./rules/ie11-restricted-globals.js");
const ie11RestrictedProperties = require("./rules/ie11-restricted-properties.js");
const ie11RestrictedSyntax = require("./rules/ie11-restricted-syntax.js");
const ie11Unicorn = require("./rules/ie11-unicorn.js");
const rulesPromise = require("./rules/promise.js");

const ie11Config = {
  "name": "eslint-config-kevinoid/ie11",

  "languageOptions": {
    // Note: ES6 features can't be controlled by ecmaFeatures anymore, so
    // ecmaVersion: 6 is required to parse const/let and no-restricted-syntax
    // rule is used to disable syntax not supported by targeted browsers.
    // https://github.com/eslint/espree/issues/307#issuecomment-264954713
    "ecmaVersion": 6,
    "sourceType": "script",
    "globals": {
      // Note: IE11 supports some ES2015 globals.
      // See https://kangax.github.io/compat-table/es6/#ie11
      // Unsupported ES2015 globals are caught by no-restricted-globals rule.
      ...globals.es2015,
      ...globals.browser
    }
  },

  "rules": {
    // ----------------------------------------------------------------
    // Possible Errors <https://eslint.org/docs/rules/#possible-errors>
    // ----------------------------------------------------------------

    // require trailing commas in arrays and objects, not functions, due to
    // lack of support in IE:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Browser_compatibility
    // Note: airbnb-base uses always-multiline, airbnb-base/legacy uses never.
    "@stylistic/comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],

    // ------------------------------------------------------------------
    // Stylistic Issues <https://eslint.org/docs/rules/#stylistic-issues>
    // ------------------------------------------------------------------

    // Allow the use of Math.pow in favor of the ** operator,
    // which is unsupported by IE 11
    "prefer-exponentiation-operator": "off",

    // ----------------------------------------------------------------
    // ECMAScript 6 Rules <https://eslint.org/docs/rules/#ecmascript-6>
    // ----------------------------------------------------------------

    // disallow modifying variables that are declared using const
    "no-const-assign": "error",

    // require let or const instead of var
    "no-var": "error",

    // use const where possible
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }]
  }
};

module.exports = [
  ...commonLegacy,

  promiseConfig,

  // IE-specific rules
  ie11RestrictedGlobals,
  ie11RestrictedProperties,
  ie11RestrictedSyntax,

  // Promise polyfills are common enough to lint
  rulesPromise,

  // IE-specific plugin rules
  ie11Unicorn,

  ie11Config
];
