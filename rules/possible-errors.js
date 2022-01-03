// ESLint common configuration rules related to possible errors
// https://eslint.org/docs/rules/#possible-errors

"use strict";

module.exports = {
  "rules": {
    // disallow constant expressions in conditions
    "no-constant-condition": "error",

    // allow function or variable declarations in nested blocks
    // This is permitted in ES6 and accepted in all pre-ES6 engines I use.
    // As with vars-on-top rule, prefer declarations in scope of use for
    // ease of editing and comprehensibility.
    "no-inner-declarations": "off",

    // disallow unused private class members
    "no-unused-private-class-members": "error"
  }
};
