// ESLint WSH no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

const ie11RestrictedGlobals = require("./ie11-restricted-globals.js");

module.exports = {
  "rules": {
    "no-restricted-globals": ie11RestrictedGlobals
      .rules["no-restricted-globals"]
      // Add globals not supported by WSH
      .concat([
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "JSON",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ])
  }
};
