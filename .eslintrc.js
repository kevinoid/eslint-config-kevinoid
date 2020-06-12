"use strict";

module.exports = {
  "extends": "./node",

  // Use style consistent with JSON for easier sharing between formats
  "rules": {
    "comma-dangle": ["error", "never"],
    "max-len": "off",
    "quotes": ["error", "double"],
    "quote-props": ["error", "always"]
  }
};
