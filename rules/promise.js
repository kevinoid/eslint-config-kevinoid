// ESLint common configuration rules for Promises
// https://github.com/xjamundx/eslint-plugin-promise#rules

"use strict";

module.exports = {
  "extends": [
    "plugin:promise/recommended"
  ],

  "rules": {
    // Allow nested then() or catch()
    // e.g. for use with closures where it may be unavoidable
    "promise/no-nesting": "off",

    // Allow using promises inside of callbacks
    // e.g. when writing a Promise wrapper for cb API is inconvenient
    "promise/no-promise-in-callback": "off",

    // Avoid calling cb() inside of a then() (use nodeify instead)
    "promise/no-callback-in-promise": "error",

    // Disallow return statements in finally()
    "promise/no-return-in-finally": "error",

    // Ensures the proper number of arguments are passed to Promise functions
    "promise/valid-params": "error"
  }
};
