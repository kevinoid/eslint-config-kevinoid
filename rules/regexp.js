// ESLint common configuration rules for Regexp plugin
// https://github.com/ota-meshi/eslint-plugin-regexp#white_check_mark-rules

"use strict";

const requirePeer = require("../lib/require-peer.js");
const warnToError = require("../lib/warn-to-error.js");

const {
  "configs": {
    "all": {
      rules,
      ...regexpConfig
    }
  }
} = requirePeer("eslint-plugin-regexp");

// Configure all rules as error.
const errorRules = warnToError(rules);

module.exports = {
  ...regexpConfig,

  "rules": {
    ...errorRules,

    // Don't require consistent letter case
    // Capitalization of escape sequences is enforced by unicorn/escape-case.
    // I don't want to enforce capitalization for case-insensitive queries,
    // since I often find it preferable to use the common/expected case.
    "regexp/letter-case": "off",

    // Don't allow super-linear worst-case runtime moving across input string
    //
    // Note: Default for ignoreSticky is false, which differs from docs:
    // https://github.com/ota-meshi/eslint-plugin-regexp/issues/629
    "regexp/no-super-linear-move": ["error", {
      "ignoreSticky": true
    }],

    // Don't prefer \d to [0-9].
    // I find 0-9 clearer. (\d matches Unicode digits in some RegEx dialects)
    "regexp/prefer-d": "off",

    // Don't prefer named capture groups.
    // For simple cases and Array destructuring, unnamed is sufficient.
    "regexp/prefer-named-capture-group": "off",

    // Don't prefer replacements with named capture groups.
    // This can be overkill for simple replacements.
    "regexp/prefer-named-replacement": "off",

    // Don't prefer quantifiers over repetition.
    // Sometimes repeating the classes is clearer.
    "regexp/prefer-quantifier": "off",

    // Don't prefer \w to [0-9A-Za-z_].
    // I find [0-9A-Za-z_] clearer. (\w matches Unicode in some RegEx dialects)
    "regexp/prefer-w": "off",

    // Don't require u flag
    // There are enough cases where u is not useful (e.g. literal patterns,
    // ASCII-only case-insensitive patterns) that it is counter-productive.
    "regexp/require-unicode-regexp": "off",

    // Don't require elements of character classes to be sorted.
    // Although this is nice in theory, in practice I find sorting ASCII
    // punctuation before numbers and letters to be more difficult to read.
    // Also, placing - at the start/end to avoid escaping is nice.
    "regexp/sort-character-class-elements": "off",

    // Don't require the i flag to simplify expressions.
    // Sometimes explicit is preferable.  It can also avoid unintentionally
    // matching Unicode characters that case fold into the matched range.
    "regexp/use-ignore-case": "off"
  }
};
