// ESLint IE 11 no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

const assert = require("assert");
const airbnbVariables =
  require("eslint-config-airbnb-base/rules/variables");

module.exports = {
  "rules": {
    "no-restricted-globals": [
      "error",

      // Airbnb restricted globals with IE-specific exceptions
      ...airbnbVariables
        .rules["no-restricted-globals"]
        .slice(1)
        .filter((restriction) => {
          // restriction can be string or object with .name property
          // see https://eslint.org/docs/rules/no-restricted-globals#options
          const name = restriction.name || restriction;
          assert.strictEqual(typeof name, "string");
          return true  // for consistent formatting below
            // Allow globally since not supported on Number
            && name !== "isFinite"
            // Allow globally since not supported on Number
            && name !== "isNaN";
        }),

      // Add globals not supported by IE 11
      ...[
        "Promise",
        "Proxy",
        "Reflect",
        "Symbol",
        "WeakSet"
      ].map((name) => ({
        name,
        "message": "Not supported by IE."
      }))
    ]
  }
};
