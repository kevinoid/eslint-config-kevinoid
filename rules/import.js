// ESLint configuration rules for import plugin
// https://github.com/benmosher/eslint-plugin-import/

"use strict";

const airbnbImports = require("eslint-config-airbnb-base/rules/imports");

const airbnbImportOpts = airbnbImports.rules["import/order"][1];
const airbnbNoUnresolvedOpts = airbnbImports.rules["import/no-unresolved"][1];

module.exports = {
  "rules": {
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": ["error", "ignorePackages"],

    "import/no-unresolved": [
      "error",
      {
        ...airbnbNoUnresolvedOpts,
        "ignore": [
          ...airbnbNoUnresolvedOpts.ignore ?? [],
          // Ignore false positives due to issues with exports
          // https://github.com/import-js/eslint-plugin-import/issues/1810
          "ava"
        ]
      }
    ],

    "import/order": [
      "error",
      {
        ...airbnbImportOpts,
        "alphabetize": {
          "order": "asc"
        },
        "newlines-between": "always",
        "warnOnUnassignedImports": true
      }
    ]
  }
};
