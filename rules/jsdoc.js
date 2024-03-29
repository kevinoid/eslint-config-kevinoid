// ESLint common configuration rules for JSDoc plugin
// https://github.com/gajus/eslint-plugin-jsdoc

"use strict";

module.exports = {
  "extends": [
    "plugin:jsdoc/recommended-error"
  ],

  "rules": {
    // Allow single- and multi-line blocks, with text on first/last line.
    "jsdoc/multiline-blocks": "off",

    // Check that types in jsdoc comments are defined.
    "jsdoc/no-undefined-types": ["error", {
      // Allow types defined by ECMAScript (and TypeScript) which do not have
      // globally defined names.
      // https://github.com/gajus/eslint-plugin-jsdoc/issues/280#issuecomment-503789555
      // https://262.ecma-international.org/
      // https://github.com/falsandtru/TypeScript/tree/master/src/lib
      "definedTypes": [
        "Generator",
        "Iterable",
        "Iterator",
        "TypedArray"
      ]
    }],

    // Requires a hyphen before the @param description is not used.
    // It seems inconsistent with other tags and doesn't add value for me.
    "jsdoc/require-hyphen-before-param-description": ["error", "never"],

    // Don't require JSDoc comments on classes and functions.
    "jsdoc/require-jsdoc": "off",

    // Require @param for all parameters, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-param": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }],

    // Require @returns, except with @inheritdoc or @private.
    // Note: Would prefer to require for @private if any other tags present.
    "jsdoc/require-returns": ["error", {
      "exemptedBy": ["inheritdoc", "private"]
    }],

    // Don't ensure that a yield is present in the function body
    // It is a common idiom to export a non-generator function which performs
    // argument checking before calling a non-exported generator function.
    // (So argument validation is not deferred until iteration.)
    // Since the JSDoc annotations are on the exported function, this idiom
    // violates this rule.  Disable it.
    "jsdoc/require-yields-check": "off",

    // Prohibit blank lines between JSDoc tags.
    // Ensure there is a single blank line between the description and the
    // first tag.
    "jsdoc/tag-lines": ["error", "never", {
      "startLines": 1
    }]
  },

  // Note: Support Closure Compiler tags (like @template) with mode:closure.
  //
  // Would prefer TypeScript, but can't use mode:typescript without rejecting
  // module: types, which are not supported by TypeScript:
  // https://github.com/jsdoctypeparser/jsdoctypeparser/issues/50#issuecomment-480340239
  // Since JSDoc does not support TypeScript's import types, can't use those:
  // https://github.com/jsdoc/jsdoc/issues/1632
  // https://github.com/jsdoc/jsdoc/issues/1645
  //
  // mode:closure with tagNamePreference for @returns is best compromise:
  // https://github.com/gajus/eslint-plugin-jsdoc/issues/619
  "settings": {
    "jsdoc": {
      "mode": "closure",
      "tagNamePreference": {
        "return": "returns"
      }
    }
  }
};
