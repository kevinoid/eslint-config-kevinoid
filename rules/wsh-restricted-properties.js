// ESLint WSH no-restricted-properties configuration rules
// https://eslint.org/docs/rules/no-restricted-properties

"use strict";

const ie11NoRestrictedProperties = require("./ie11-restricted-properties.js");

const restricted = {
  "Array": {
    "isArray": true
  },
  "Object": {
    "create": true,
    "defineProperties": true,
    "defineProperty": true,
    "freeze": true,
    "getOwnPropertyDescriptor": true,
    "getOwnPropertyNames": true,
    "getPrototypeOf": true,
    "isExtensible": true,
    "isFrozen": true,
    "isSealed": true,
    "keys": true,
    "preventExtensions": true,
    "seal": true
  }
};

module.exports = {
  "rules": {
    "no-restricted-properties": Array.prototype.concat.apply(
      // Update IE11 messages to WSH
      ie11NoRestrictedProperties
        .rules["no-restricted-properties"]
        .map((prop) => (typeof prop !== "object" ? prop : {
          ...prop,
          "message": prop.message.replaceAll(/IE(\s*11)?/g, "WSH")
        })),
      // Add WSH-specific restricted properties
      Object.keys(restricted)
        .map((object) => Object.keys(restricted[object])
          .map((property) => ({
            object,
            property,
            "message": `${object}.${property} is not supported by WSH`
          })))
    )
  }
};
