// ESLint IE 11 unicorn configuration rules

"use strict";

module.exports = {
  "rules": {
    // allow use of a for loop that can be replaced with a for-of loop.
    // since IE 11 doesn't support for-of loops.
    "unicorn/no-for-loop": "off",

    // don't prefer for-of over Array#forEach()
    // since IE 11 doesn't support for-of loops.
    "unicorn/no-array-for-each": "off",

    // don't prefer Array#flat() over legacy techniques to flatten arrays
    // since IE 11 doesn't support .flat()
    "unicorn/prefer-array-flat": "off",

    // don't require .flatMap() over .map().flat()
    // since IE 11 doesn't support .flatMap()
    "unicorn/prefer-array-flat-map": "off",

    // don't prefer default parameters over reassignment
    // since IE 11 doesn't support default parameters
    "unicorn/prefer-default-parameters": "off",

    // don't prefer .includes() over .indexOf() when checking for existence
    // since IE 11 doesn't support .includes()
    "unicorn/prefer-includes": "off",

    // don't enforce the use of Math.trunc() instead of bitwise operators
    // since IE 11 doesn't provide Math.trunc()
    "unicorn/prefer-math-trunc": "off",

    // don't prefer omitting the catch binding parameter
    // since IE 11 doesn't support optional catch binding
    "unicorn/prefer-optional-catch-binding": "off",

    // don't require String#startsWith() & String#endsWith() over alternatives
    // since IE 11 doesn't support startsWith/endsWith
    "unicorn/prefer-string-starts-ends-with": "off"
  }
};
