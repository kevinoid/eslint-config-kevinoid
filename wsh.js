// ESLint configuration for JScript 5.8 (ES3) run in Windows Script Host
// (i.e. cscript or wscript)
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const airbnbStyle =
  require("eslint-config-airbnb-base/rules/style");
const globals = require("globals");

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "airbnb-base/legacy",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/style",
    "./rules/variables",

    // WSH-specific rules
    "./rules/wsh-restricted-globals",
    "./rules/wsh-restricted-properties",
    "./rules/wsh-restricted-syntax",

    // Plugin rules
    "./rules/jsdoc",
    "./rules/regexp",
    "./rules/unicorn",

    // WSH-specific plugin rules
    "./rules/ie11-unicorn"
  ],

  // Note: ESLint always includes ES5 globals
  // Unsupported ones are disallowed by no-restricted-globals rule
  // https://github.com/eslint/eslint/issues/2657
  // https://github.com/eslint/eslint/issues/4085#issuecomment-146938022
  "globals": globals.wsh,

  "parserOptions": {
    "ecmaVersion": 3,
    "sourceType": "script"
  },

  "env": {
    // Disable browser env added by airbnb-base/legacy
    "browser": false,
    // Disable es2022 env added by unicorn
    "es2022": false,
    // Disable node env added by airbnb-base/legacy
    "node": false
  },

  "rules": {
    // --------------------------------------------------------------
    // Best Practices <https://eslint.org/docs/rules/#best-practices>
    // --------------------------------------------------------------

    // disallow creation of functions within loops
    // Since WSH does not support const/let or block scoping, functions declared
    // in loops have same scope as outside.  Forbid them to avoid confusion.
    "no-loop-func": "error",

    // ----------------------------------------------------------------
    // Strict Mode <https://eslint.org/docs/rules/#strict-mode>
    // ----------------------------------------------------------------

    // allow, but don't require 'use strict'
    // it has no effect in WSH, but may be beneficial if script has other uses
    "strict": "off",

    // ------------------------------------------------------------------
    // Stylistic Issues <https://eslint.org/docs/rules/#stylistic-issues>
    // ------------------------------------------------------------------

    // require a capital letter for constructors, but do not require capitalized
    // functions be called with new operator since many built-in WSH functions
    // are capitalized.
    "new-cap": ["error", {
      ...airbnbStyle.rules["new-cap"][1],
      "capIsNew": false
    }],

    // allow the use of Math.pow in favor of the ** operator,
    // which is unsupported by WSH
    "prefer-exponentiation-operator": "off",

    // ----------------------------------------------------------
    // JSDoc Rules <https://github.com/gajus/eslint-plugin-jsdoc>
    // ----------------------------------------------------------

    // don't check that types in jsdoc comments are defined.
    // although this would be nice, I'm not aware of type definitions for the
    // WSH built-in types, which makes this warning too noisy in many projects.
    "jsdoc/no-undefined-types": "off",

    // ---------------------------------------------------------------------------
    // Unicorn Rules <https://github.com/sindresorhus/eslint-plugin-unicorn#rules>
    // ---------------------------------------------------------------------------
    // don't require Array.isArray() instead of instanceof Array
    // since WSH doesn't support Array.isArray()
    "unicorn/no-instanceof-array": "off"
  }
};
