// ESLint WSH no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

module.exports = {
  "name": "eslint-config-kevinoid/rules/wsh-restricted-globals",

  "rules": {
    "no-restricted-globals": [
      "error",

      // Additional globals not supported by JScript
      ...[
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "JSON",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ].map((name) => ({
        name,
        "message": "Not supported by JScript."
      })),

      // WSH globals which are restricted
      {
        "name": "RuntimeObject",
        "message": "Use 'this' to get global object.  https://stackoverflow.com/q/3277182"
      }
    ]
  }
};
