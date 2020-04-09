// ESLint common configuration rules for best practices
// https://eslint.org/docs/rules/#best-practices

"use strict";

const airbnbBestPractices =
  require("eslint-config-airbnb-base/rules/best-practices");

module.exports = {
  "rules": {
    // require curly braces around all control statements, not just multi-line.
    "curly": ["error", "all"],

    // disallow unnecessary parentheses
    // allow unnecessary parentheses where useful for disambiguation
    "no-extra-parens": ["error", "all", {
      "conditionalAssign": false,
      "enforceForArrowConditionals": false,
      "nestedBinaryExpressions": false,
      "returnAssign": false
    }],

    // disallow multiple spaces, except before EOL comments
    // (which can be useful for inline comment alignment)
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],

    // allow reassignment of function parameters
    // simplicity for optional arguments outweighs the perf advantage, usually
    "no-param-reassign": "off",

    // disallow certain object properties
    "no-restricted-properties":
      airbnbBestPractices
        .rules["no-restricted-properties"]
        // remove arguments.callee restriction, which is covered by the
        // built-in no-caller rule, which is easier to disable as needed.
        .filter((restriction) => typeof restriction !== "object"
          || restriction.object !== "arguments"
          || restriction.property !== "callee"),

    // disallow unnecessary use of Function.prototype.{apply,call}
    "no-useless-call": "error",

    // require using Error objects as Promise rejection reason (including empty)
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": false }]
  }
};
