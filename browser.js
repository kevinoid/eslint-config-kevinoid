// ESLint configuration for JS run directly in (modern) browsers.
// <https://eslint.org/docs/user-guide/configuring>

import noUnsanitized from "eslint-plugin-no-unsanitized";
import globals from "globals";

import common from "./common.js";
import { removePluginRules } from "./lib/remove-plugin-rules.js";

const commonNoN = removePluginRules(common, "n");

export default [...commonNoN, noUnsanitized.configs.recommended, {
  "name": "eslint-config-kevinoid/browser",

  "languageOptions": {
    "sourceType": "script",
    "globals": {
      ...globals.browser
    }
  },

  "rules": {
    // allow console (which is always supported and conventional for logging)
    "no-console": "off",

    // require 'use strict' in global scope
    "strict": ["error", "global"],

    // don't prefer modules
    "unicorn/prefer-module": "off"
  }
}];
