// ESLint IE 11 unicorn configuration rules

"use strict";

module.exports = {
  "rules": {
    // allow use of a for loop that can be replaced with a for-of loop.
    // since IE 11 doesn't support for-of loops
    "unicorn/no-for-loop": "off",

    // don't require .flatMap() over .map().flat()
    // since IE 11 doesn't support .flatMap()
    "unicorn/prefer-flat-map": "off",

    // don't prefer .includes() over .indexOf() when checking for existence
    // since IE 11 doesn't support .includes()
    "unicorn/prefer-includes": "off",

    // don't require String#startsWith() & String#endsWith() over alternatives
    // since IE 11 doesn't support startsWith/endsWith
    "unicorn/prefer-starts-ends-with": "off"
  }
};
