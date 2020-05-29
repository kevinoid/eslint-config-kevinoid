// ESLint common configuration rules for JSDoc plugin
// https://github.com/gajus/eslint-plugin-jsdoc

"use strict";

module.exports = {
  "extends": [
    "plugin:jsdoc/recommended"
  ],

  "rules": {
    // Don't require JSDoc comments on classes and functions.
    "jsdoc/require-jsdoc": "off",

    // Require @param for all parameters, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-param": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }],

    // Require @returns, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-returns": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }]
  }
};
