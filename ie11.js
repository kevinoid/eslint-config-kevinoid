// ESLint configuration for JS run directly in browsers (IE11 or better).
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    // Note: IE11 doesn't support most ES6 features.  Use legacy ruleset.
    "airbnb-base/legacy",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/style",
    "./rules/variables",

    // IE-specific rules
    "./rules/ie11-restricted-globals",
    "./rules/ie11-restricted-properties",
    "./rules/ie11-restricted-syntax",

    // Plugin rules
    "./rules/jsdoc",
    "./rules/promise",
    "./rules/unicorn",

    // IE-specific plugin rules
    "./rules/ie11-unicorn"
  ],

  "parserOptions": {
    // Note: ES6 features can't be controlled by ecmaFeatures anymore, so
    // ecmaVersion: 6 is required to parse const/let and no-restricted-syntax
    // rule is used to disable syntax not supported by targeted browsers.
    // https://github.com/eslint/espree/issues/307#issuecomment-264954713
    "ecmaVersion": 6,
    "sourceType": "script"
  },

  "env": {
    "browser": true,
    // Disable es2022 enabled by unicorn, since IE11 doesn't support even most
    // ES6 globals.  See https://kangax.github.io/compat-table/es6/#ie11
    "es2022": false,
    // Disable node env enabled by airbnb-base/legacy
    "node": false
  },

  "rules": {
    // ----------------------------------------------------------------
    // Possible Errors <https://eslint.org/docs/rules/#possible-errors>
    // ----------------------------------------------------------------

    // require trailing commas in arrays and objects, not functions, due to
    // lack of support in IE:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Browser_compatibility
    // Note: airbnb-base uses always-multiline, airbnb-base/legacy uses never.
    "comma-dangle": ["error", {
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
