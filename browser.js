// ESLint configuration for JS run directly in (modern) browsers.
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  "baseDirectory": __dirname,
  "resolvePluginsRelativeTo": __dirname,
  "recommendedConfig": js.configs.recommended,
  "allConfig": js.configs.all
});

module.exports = compat.config({
  "extends": "./common",

  "parserOptions": {
    "sourceType": "script",
    // airbnb-base disables generators due to regenerator-runtime overhead.
    // Modern browsers support generators without regenerator, so allow.
    "ecmaFeatures": {
      "generators": true
    }
  },

  "env": {
    "browser": true,
    // Disable node env added by airbnb-base/legacy
    "node": false
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't prefer modules
    "unicorn/prefer-module": "off"
  }
});
