// ESLint WSH no-restricted-properties configuration rules
// https://eslint.org/docs/rules/no-restricted-properties

import ie11NoRestrictedProperties from "./ie11-restricted-properties.js";

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

export default {
  "name": "eslint-config-kevinoid/rules/wsh-restricted-properties",

  "rules": {
    "no-restricted-properties": Array.prototype.concat.apply(
      // Update IE11 messages to WSH
      ie11NoRestrictedProperties
        .rules["no-restricted-properties"]
        .map((property) => (typeof property !== "object" ? property : {
          ...property,
          "message": property.message.replaceAll(/IE(\s*11)?/g, "WSH")
        })),
      // Add WSH-specific restricted properties
      Object.entries(restricted)
        .map(([object, properties]) => Object.keys(properties)
          .map((property) => ({
            object,
            property,
            "message": `${object}.${property} is not supported by WSH`
          })))
    )
  }
};
