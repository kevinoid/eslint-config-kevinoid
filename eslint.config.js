"use strict";

const nodejs = require("./nodejs.js");

const ourRules = {
  // Use style consistent with JSON for easier sharing between formats
  "rules": {
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/max-len": "off",
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/quote-props": ["error", "always"],

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
  ourRules,
  // Adjust style to minimize divergence of vendored eslint-config-airbnb-base
  {
    "name": "airbnb-base rules",
    "files": [
      "eslint-config-airbnb-base/**/*.js"
    ],
    "rules": {
      "@stylistic/comma-dangle": "off",
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/quote-props": ["error", "as-needed"],
      "strict": ["error", "never"],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/prefer-spread": "off"
    }
  }
];
