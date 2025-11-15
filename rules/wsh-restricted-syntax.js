// ESLint WSH no-restricted-syntax configuration rules
// https://eslint.org/docs/rules/no-restricted-syntax

import airbnbStyle from "../eslint-config-airbnb-base/rules/style.js";

// Syntax selectors which are restricted in airbnb-base, should not be in WSH
const unrestricted = {
  // WSH doesn't have Object.keys, so for-in is the only choice
  "ForInStatement": true,
  // WSH only supports ES3.  No need to check for for-of statements
  "ForOfStatement": true
};

export default {
  "name": "eslint-config-kevinoid/rules/wsh-restricted-syntax",

  "rules": {
    "no-restricted-syntax":
      airbnbStyle
        .rules["no-restricted-syntax"]
        .filter(
          (rule) => typeof rule !== "object" || !unrestricted[rule.selector]
        )
  }
};
