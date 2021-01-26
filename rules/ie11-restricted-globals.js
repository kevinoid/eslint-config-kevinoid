// ESLint IE 11 no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

const assert = require("assert");
const airbnbVariables =
  require("eslint-config-airbnb-base/rules/variables");

module.exports = {
  "rules": {
    "no-restricted-globals": airbnbVariables
      .rules["no-restricted-globals"]
      // Remove IE-specific allowed globals
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
      })
      // Add globals not supported by IE 11
      .concat([
        "Promise",
        "Proxy",
        "Reflect",
        "Symbol",
        "WeakSet"
      ].map((name) => ({
        name,
        "message": "Not supported by IE."
      })))
  }
};
