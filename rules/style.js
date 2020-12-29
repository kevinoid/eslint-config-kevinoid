// ESLint common configuration rules for stylistic issues
// https://eslint.org/docs/rules/#stylistic-issues

"use strict";

const airbnbStyle =
  require("eslint-config-airbnb-base/rules/style");

module.exports = {
  "rules": {
    // require camel case names (even for properties and destructuring)
    // Note: options object needed to override airbnb, values set for clarity.
    "camelcase": ["error", {
      "ignoreDestructuring": false,
      "properties": "always"
    }],

    // allow unnamed functions
    "func-names": "off",

    // don't enforce consistent linebreak style
    // Allow developers to develop with native EOL.  VCS manages committed style.
    "linebreak-style": "off",

    // enforce a maximum line length
    // reduce from 100 to 80 chars (conventional terminal width)
    // ignore lines which consist of a single string, URL, or RegExp literal,
    // possibly prefixed with comment opener or suffixed with ";".
    // (Not ESLint ignore props which ignores any lines which contain these.)
    "max-len": ["error", 80, 2, {
      "ignorePattern": "^\\s*((/?\\*|/[/])\\s*)?('[^'\\\\]*(\\\\.[^'\\\\]*)*'|\"[^\"\\\\]*(\\\\.[^\"\\\\]*)*\"|/[^/\\\\]*(\\\\.[^/\\\\]*)*/[gimuy]*|[^:/?#\\s]+:/[/]\\S+);?$"
    }],

    // require a capital letter for constructors and new for capitalized funcs
    // Workaround https://github.com/airbnb/javascript/issues/2200
    "new-cap": ["error", {
      ...airbnbStyle.rules["new-cap"][1],
      "capIsNew": true
    }],

    // allow nested ternary expressions
    // if they are indented one-expression-per-line, they are clear enough for me
    "no-nested-ternary": "off",

    // disallow process.exit()
    // this is disabled locally only when require.main === module
    "no-process-exit": "error",

    // disallow certain syntax forms
    "no-restricted-syntax": airbnbStyle.rules["no-restricted-syntax"]
      // allow for-of statement
      // Although I agree that .every/filter/find/map/some are preferable to
      // loops, there are some idioms which are easier and clearer to express
      // using for...of (e.g. early return, generators, for await...of, await
      // each item).  Performance on-par with alternatives and use is advocated
      // by Mathias Bynens <https://youtu.be/m9cTaYI95Zc?t=959>.
      // Note: Consider disabling when transpiling w/ regenerator-runtime.
      .filter((nrs) => nrs.selector !== "ForOfStatement"),

    // allow multiple variable declarations per block/function and multiple
    // declarators per declaration
    "one-var": "off",

    // require initialized variables to be declared on separate lines
    "one-var-declaration-per-line": ["error", "initializations"],

    // Requires operator at the beginning of the line in multiline statements
    // Airbnb prevents breaks around =, suggesting ().  I don't see the advantage.
    // Break after = looks better to me, so first assigned operand is farther left.
    "operator-linebreak": ["error", "before", {
      "overrides": {
        "=": "after",
        "+=": "after",
        "-=": "after",
        "*=": "after",
        "/=": "after",
        "%=": "after",
        "**=": "after",
        "<<=": "after",
        ">>=": "after",
        ">>>=": "after",
        "&=": "after",
        "|=": "after",
        "^=": "after"
      }
    }],

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",

    // space before function parens only for async arrow (as Node core does)
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
};
