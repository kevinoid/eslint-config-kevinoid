// ESLint IE 11 regexp configuration rules

"use strict";

module.exports = {
  "name": "eslint-config-kevinoid/rules/ie11-regexp",

  "rules": {
    // Don't prefer/require features not supported by IE 11
    "regexp/prefer-lookaround": "off",
    "regexp/prefer-named-backreference": "off",
    "regexp/prefer-result-array-groups": "off"
  }
};
