// ESLint IE 11 no-restricted-properties configuration rules
// https://eslint.org/docs/rules/no-restricted-properties

"use strict";

const bestPractices = require("./best-practices");

const allowed = {
  "Math": {
    // Allow Math.pow since exponentiation operator is not supported
    "pow": true
  },
  "window": {
    // Allow on window since not supported on Number
    "isFinite": true,
    // Allow on window since not supported on Number
    "isNaN": true
  }
};
allowed.global = allowed.window;
allowed.self = allowed.window;

const restricted = {
  "Array": {
    "from": true,
    "of": true
  },
  "Math": {
    "acosh": true,
    "asinh": true,
    "atanh": true,
    "cbrt": true,
    "clz32": true,
    "cosh": true,
    "expm1": true,
    "fround": true,
    "hypot": true,
    "imul": true,
    "log10": true,
    "log1p": true,
    "log2": true,
    "sign": true,
    "sinh": true,
    "tanh": true,
    "trunc": true
  },
  "Number": {
    "isFinite": true,
    "isInteger": true,
    "isNaN": true,
    "isSafeInteger": true,
    "parseFloat": true,
    "parseInt": true,
    "EPSILON": true,
    "MIN_SAFE_INTEGER": true,
    "MAX_SAFE_INTEGER": true
  },
  "Object": {
    "assign": true,
    "fromEntries": true,
    "getOwnPropertyDescriptors": true,
    "getOwnPropertySymbols": true,
    "entries": true,
    "is": true,
    "values": true
  },
  "String": {
    "fromCodePoint": true,
    "raw": true
  }
};

module.exports = {
  "rules": {
    "no-restricted-properties": Array.prototype.concat.apply(
      bestPractices
        .rules["no-restricted-properties"]
        // Remove IE-specific allowed properties
        .filter((restriction) => typeof restriction !== "object"
          || !allowed[restriction.object]
          || !allowed[restriction.object][restriction.property]),
      // Add IE-specific restricted properties
      Object.keys(restricted)
        .map((object) => Object.keys(restricted[object])
          .map((property) => ({
            object,
            property,
            "message": `${object}.${property} is not supported by IE`
          })))
    )
  }
};
