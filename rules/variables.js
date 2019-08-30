// ESLint common configuration rules for variables
// https://eslint.org/docs/rules/#variables

"use strict";

module.exports = {
  "rules": {
    // disallow shadowing of variables (including builtins and hoisted funcs)
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "all" }],

    // disallow declaration of variables that are not used in the code
    // allow unused args for documentation, future use, and correct .length
    "no-unused-vars": ["error", { "args": "none" }]
  }
};
