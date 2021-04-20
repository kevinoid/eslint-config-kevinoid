// ESLint configuration rules for import plugin
// https://github.com/benmosher/eslint-plugin-import/

"use strict";

module.exports = {
  "rules": {
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": ["error", "ignorePackages"]
  }
};
