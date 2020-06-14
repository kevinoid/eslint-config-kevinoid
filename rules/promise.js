// ESLint common configuration rules for Promises
// https://github.com/xjamundx/eslint-plugin-promise#rules

"use strict";

module.exports = {
  "extends": [
    "plugin:promise/recommended"
  ],

  "rules": {
    // Don't require return inside then() functions
    // Promises can be used for sequencing functions with no return value
    "promise/always-return": "off",

    // Allow nested then() or catch()
    // e.g. for use with closures where it may be unavoidable
    "promise/no-nesting": "off",

    // Allow using promises inside of callbacks
    // e.g. when writing a Promise wrapper for cb API is inconvenient
    "promise/no-promise-in-callback": "off",

    // Avoid wrapping values in Promise.resolve when not needed
    // Both Promise.reject and throw have their uses, I have no strong pref
    // See xjamundx/eslint-plugin-promise#50 for discussion
    "promise/no-return-wrap": ["error", { "allowReject": true }],

    // Avoid calling cb() inside of a then() (use nodeify instead)
    "promise/no-callback-in-promise": "error",

    // Allow return statements in finally()
    // Want to disallow returning non-Promise.  Promise is necessary for async.
    "promise/no-return-in-finally": "off",

    // Ensures the proper number of arguments are passed to Promise functions
    "promise/valid-params": "error"
  }
};
