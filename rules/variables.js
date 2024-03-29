// ESLint common configuration rules for variables
// https://eslint.org/docs/rules/#variables

"use strict";

module.exports = {
  "rules": {
    // disallow shadowing of variables (including builtins and hoisted funcs)
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "all" }],

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": ["error", { "typeof": true }],

    // disallow declaration of variables that are not used in the code
    // allow unused args for documentation, future use, and correct .length
    // allow in object destructuring to omit props from rest property
    "no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }]
  }
};
