// ESLint configuration for JScript 5.8 (ES3) run in Windows Script Host
// (i.e. cscript or wscript)
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

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
    // Disable environments added by airbnb-base/legacy
    "browser": false,
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

    // allow the use of Math.pow in favor of the ** operator,
    // which is unsupported by WSH
    "prefer-exponentiation-operator": "off",

    // ---------------------------------------------------------------------------
    // Unicorn Rules <https://github.com/sindresorhus/eslint-plugin-unicorn#rules>
    // ---------------------------------------------------------------------------
    // don't require Array.isArray() instead of instanceof Array
    // since WSH doesn't support Array.isArray()
    "unicorn/no-instanceof-array": "off"
  }
};
