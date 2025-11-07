"use strict";

const nodejs = require("./nodejs.js");

const ourRules = {
  // Use style consistent with JSON for easier sharing between formats
  "rules": {
    "comma-dangle": ["error", "never"],
    "max-len": "off",
    "quotes": ["error", "double"],
    "quote-props": ["error", "always"],

    // Imports from this file should be devDependencies
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "eslint.config.js"
      ]
    }],

    // ESLint Shareable Configs must be CommonJS
    // (Until RFC 9 is implemented)
    // https://github.com/eslint/eslint/issues/13440
    // https://github.com/eslint/eslint/issues/13481
    "unicorn/prefer-module": "off"
  }
};

module.exports = [
  {
    "ignores": [
      "coverage/",
      "doc/"
    ]
  },
  ...nodejs,
  ourRules
];
