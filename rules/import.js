// ESLint configuration rules for import-x plugin
// https://github.com/un-ts/eslint-plugin-import-x

import airbnbImports from "../eslint-config-airbnb-base/rules/imports.js";

const airbnbImportOptions = airbnbImports.rules["import/order"][1];
const airbnbNoExtraneousOptions =
  airbnbImports.rules["import/no-extraneous-dependencies"][1];

export default {
  "name": "eslint-config-kevinoid/rules/import",

  "rules": {
    // Ensure consistent use of file extension within the import path
    // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
    "import-x/extensions": ["error", "ignorePackages"],

    // Forbid the use of extraneous packages
    "import-x/no-extraneous-dependencies": ["error", {
      ...airbnbNoExtraneousOptions,
      "devDependencies": [
        ...airbnbNoExtraneousOptions.devDependencies,

        // ESLint configuration files are only used during development
        // https://eslint.org/docs/latest/use/configure/configuration-files
        "**/eslint.config.{js,mjs,cjs,ts,mts,cts}"
      ]
    }],

    "import-x/order": [
      "error",
      {
        ...airbnbImportOptions,
        "alphabetize": {
          "order": "asc"
        },
        "groups": [
          ["builtin"],
          ["external", "internal"]
        ],
        "newlines-between": "always",
        "warnOnUnassignedImports": true
      }
    ]
  }
};
