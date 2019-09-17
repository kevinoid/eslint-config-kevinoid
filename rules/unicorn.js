// ESLint common configuration rules for Unicorn plugin
// https://github.com/sindresorhus/eslint-plugin-unicorn#rules

"use strict";

// Note: eslint-plugin-unicorn is a peerDependency, since it must be loadable
// in the project being linted per
// https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config
// Require from parent module in case it is not reachable from this module
// See https://github.com/jaredhanson/node-parent-require
const unicorn = module.parent.require("eslint-plugin-unicorn");

module.exports = {
  // Based on Unicorn recommended config
  // Note: Not using ESLint "extends" due to unwanted env and parserOptions
  ...unicorn.configs.recommended,

  "rules": {
    ...unicorn.configs.recommended.rules,

    // require catch variable name to begin with err (or _ for ignored)
    "unicorn/catch-error-name": ["error", {
      "name": "err",
      "caughtErrorsIgnorePattern": "^(_|err)"
    }],

    // require correct Error subclassing
    "unicorn/custom-error-definition": "error",

    // check expiration conditions in TODO comments
    // allow TODO without conditions, which I use for various purposes
    "unicorn/expiring-todo-comments": [
      "error",
      {
        "allowWarningComments": true
      }
    ],

    // don't require explicitly comparing the length property of a value
    // checking truthyness can be convenient when checking if Array-like
    "unicorn/explicit-length-check": "off",

    // don't require a case style for filenames
    // currently overly restrictive:
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/343
    // https://github.com/sindresorhus/eslint-plugin-unicorn/pull/346
    "unicorn/filename-case": "off",

    // allow specifying rules to disable in eslint-disable comments
    // which is useful to minimize diff for adopted code
    "unicorn/no-abusive-eslint-disable": "off",

    // allow the use of hexadecimal escapes
    "unicorn/no-hex-escape": "off",

    // allow nested ternary expressions
    // if they are indented one-expression-per-line, they are clear enough for me
    "unicorn/no-nested-ternary": "off",

    // allow Array destructuring with consecutive ignored values
    "unicorn/no-unreadable-array-destructuring": "off",

    // don't require Node#append() instead of Node#appendChild()
    // consistency advantage doesn't outweigh backwards compat
    "unicorn/prefer-node-append": "off",

    // don't require Node#remove() instead of Node#removeChild()
    // consistency advantage doesn't outweigh backwards compat
    "unicorn/prefer-node-remove": "off",

    // don't require .querySelector() over .getElementById() et al.
    // consistency advantage doesn't outweigh perf and backwards compat
    "unicorn/prefer-query-selector": "off",

    // don't prefer Reflect.apply() over Function#apply()
    // although it is less verbose than Function.prototype.apply.call, I don't
    // see the advantage over .apply (since user-provided functions can throw
    // or call other functions without overriding .apply anyway).
    "unicorn/prefer-reflect-apply": "off",

    // don't require .textContent over .innerText
    // these have different behavior and uses
    "unicorn/prefer-text-content": "off",

    // don't prevent common abbreviations
    "unicorn/prevent-abbreviations": "off",

    // don't require regex character classes over character sets
    // classes are shorter but less understandable to programmers familiar with
    // other regex dialects (where they are absent or behave differently)
    "unicorn/regex-shorthand": "off"
  }
};

// Remove env and parserOptions settings
// (Which are undesirable in most configurations and conflict with better
// settings from node plugin for Node configuration.)
delete module.exports.env;
delete module.exports.parserOptions;
