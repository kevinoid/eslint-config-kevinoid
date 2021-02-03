// ESLint common configuration rules related to possible errors
// https://eslint.org/docs/rules/#possible-errors

"use strict";

module.exports = {
  "rules": {
    // disallow constant expressions in conditions
    "no-constant-condition": "error",

    // disallow duplicate conditions in if-else-if chains
    // TODO [eslint-config-airbnb-base@>=15]: Remove if enabled
    "no-dupe-else-if": "error",

    // disallow assigning to imported bindings
    // TODO [eslint-config-airbnb-base@>=15]: Remove if enabled
    "no-import-assign": "error",

    // allow function or variable declarations in nested blocks
    // This is permitted in ES6 and accepted in all pre-ES6 engines I use.
    // As with vars-on-top rule, prefer declarations in scope of use for
    // ease of editing and comprehensibility.
    "no-inner-declarations": "off"
  }
};
