// ESLint configuration common to all legacy configurations
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    "eslint:recommended",

    // Vendor airbnb-base to avoid peerDep conflicts with eslint@^9
    // https://github.com/airbnb/javascript/issues/2961
    "./eslint-config-airbnb-base/legacy",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/style",
    "./rules/variables",

    // Plugin rules
    "./rules/jsdoc",
    "./rules/regexp",
    "./rules/unicorn"
  ]
};
