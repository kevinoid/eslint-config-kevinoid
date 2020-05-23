// ESLint common configuration rules for JSDoc plugin
// https://github.com/gajus/eslint-plugin-jsdoc

"use strict";

module.exports = {
  "extends": [
    "plugin:jsdoc/recommended"
  ],

  "rules": {
    // Don't require JSDoc comments on classes and functions.
    "jsdoc/require-jsdoc": "off"
  }
};
