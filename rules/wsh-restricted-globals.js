// ESLint WSH no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

"use strict";

const ie11RestrictedGlobals = require("./ie11-restricted-globals.js");

const notSupported = "Not supported by JScript.";

module.exports = {
  "rules": {
    "no-restricted-globals": ie11RestrictedGlobals
      .rules["no-restricted-globals"]
      // Adjust "Not supported by IE" messages for JScript
      .map((restriction) => {
        const { message } = restriction;
        return message && message.startsWith("Not supported")
          ? { ...restriction, "message": notSupported }
          : restriction;
      })
      // Additional globals not supported by JScript
      .concat([
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
        "message": notSupported
      })))
      // WSH globals which are restricted
      .concat({
        "name": "RuntimeObject",
        "message": "Use 'this' to get global object.  https://stackoverflow.com/q/3277182"
      })
  }
};
