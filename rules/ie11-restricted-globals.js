// ESLint IE 11 no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

const airbnbVariables =
  require("eslint-config-airbnb-base/rules/variables");

module.exports = {
  "rules": {
    "no-restricted-globals": airbnbVariables
      .rules["no-restricted-globals"]
      // Remove IE-specific allowed globals
      .filter((name) => !{
        // Allow globally since not supported on Number
        "isFinite": true,
        // Allow globally since not supported on Number
        "isNaN": true
      }[name])
      // Add globals not supported by IE 11
      .concat([
        "Promise",
        "Proxy",
        "Reflect",
        "Symbol",
        "WeakSet"
      ])
  }
};
