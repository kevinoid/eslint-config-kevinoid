// ESLint common configuration rules for Unicorn plugin
// https://github.com/sindresorhus/eslint-plugin-unicorn#rules

"use strict";

const requirePeer = require("../lib/require-peer.js");

const unicorn = requirePeer("eslint-plugin-unicorn");

module.exports = {
  // Based on Unicorn recommended config
  // Note: Not using ESLint "extends" due to unwanted env and parserOptions
  ...unicorn.configs.recommended,

  "rules": {
    ...unicorn.configs.recommended.rules,

    // don't require regex character classes over character sets
    // classes are shorter but less understandable to programmers familiar with
    // other regex dialects (where they are absent or behave differently)
    "unicorn/better-regex": "off",

    // require catch variable name to begin with err
    "unicorn/catch-error-name": ["error", {
      "name": "err",
      "ignore": [
        "^err"
      ]
    }],

    // don't require correct Error subclassing
    // requiring name to be set in the constructor is overly-verbose and adds
    // an unnecessary instance property:
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/90#issuecomment-318929442
    "unicorn/custom-error-definition": "off",

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

    // allow passing a function reference directly to iterator methods
    // if this rule could be limited to required/imported functions, I'd
    // probably enable it.  As is, it has too many false-positives for globals
    // and safe globals (e.g. string.split().map(Number)).
    "unicorn/no-array-callback-reference": "off",

    // allow Array#reduce() and Array#reduceRight()
    // I agree #reduce() can be hard to read, but is useful enough not to warn.
    "unicorn/no-array-reduce": "off",

    // allow the use of hexadecimal escapes
    "unicorn/no-hex-escape": "off",

    // allow nested ternary expressions
    // if they are indented one-expression-per-line, they are clear enough for me
    "unicorn/no-nested-ternary": "off",

    // disallow new Array()
    // Both due to constructor type confusion (mentioned in unicorn docs) and
    // poor performance in JS engines due to sparse/"holey" array type, which
    // is never upgraded to non-holey <https://youtu.be/m9cTaYI95Zc?t=770>
    "unicorn/no-new-array": "error",

    // allow Array destructuring with consecutive ignored values
    "unicorn/no-unreadable-array-destructuring": "off",

    // allow "useless" undefined
    // since `return undefined` is used to consistently return a value:
    // https://eslint.org/docs/rules/consistent-return
    "unicorn/no-useless-undefined": "off",

    // enforce correct digit grouping for numbers with numeric separators
    // do not require nor forbid separators, only enforce correctness when used
    "unicorn/numeric-separators-style": ["error", {
      "onlyIfContainsSeparator": true,
      "number": {
        "minimumDigits": 0
      }
    }],

    // don't require Node#append() instead of Node#appendChild()
    // consistency advantage doesn't outweigh backwards compat
    "unicorn/prefer-dom-node-append": "off",

    // don't require Node#remove() instead of Node#removeChild()
    // consistency advantage doesn't outweigh backwards compat
    "unicorn/prefer-dom-node-remove": "off",

    // don't require .textContent over .innerText
    // these have different behavior and uses
    "unicorn/prefer-dom-node-text-content": "off",

    // don't prefer node: protocol when importing builtin modules
    // TODO: enable once eslint-plugin-node and depcheck support it:
    // https://github.com/mysticatea/eslint-plugin-node/issues/275
    // https://github.com/depcheck/depcheck/pull/635
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1200
    "unicorn/prefer-node-protocol": "off",

    // don't prefer Number static properties over global ones.
    // I don't find these more-verbose and less-compatible versions preferable,
    // with the exception of isFinite/isNaN already caught by airbnb-base.
    "unicorn/prefer-number-properties": "off",

    // don't require .querySelector() over .getElementById() et al.
    // consistency advantage doesn't outweigh perf and backwards compat
    "unicorn/prefer-query-selector": "off",

    // don't prefer Reflect.apply() over Function#apply()
    // although it is less verbose than Function.prototype.apply.call, I don't
    // see the advantage over .apply (since user-provided functions can throw
    // or call other functions without overriding .apply anyway).
    "unicorn/prefer-reflect-apply": "off",

    // don't prefer Set#has() over Array#includes() when checking for existence
    // simplicity+flexibility vs speed trade-off that can be made case-by-case
    "unicorn/prefer-set-has": "off",

    // don't prefer ternary expressions over simple if-else statements
    // either can be clearer, should be decided on case-by-case basis
    "unicorn/prefer-ternary": "off",

    // don't prevent common abbreviations
    "unicorn/prevent-abbreviations": "off"
  }
};
