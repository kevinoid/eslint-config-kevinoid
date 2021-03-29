// ESLint common configuration rules for ES6
// https://eslint.org/docs/rules/#ecmascript-6

"use strict";

const airbnbES6 =
  require("eslint-config-airbnb-base/rules/es6");

const airbnbPreferDestructuring = airbnbES6.rules["prefer-destructuring"];

module.exports = {
  "rules": {
    // Prefer destructuring, but not for array assignments
    // since I don't usually find `[,x] = a` preferable to `x = a[1]`
    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": [
      "error",
      {
        ...airbnbPreferDestructuring[1],
        "AssignmentExpression": {
          ...airbnbPreferDestructuring[1].AssignmentExpression,
          "array": false
        }
      },
      airbnbPreferDestructuring[2]
    ]
  }
};
