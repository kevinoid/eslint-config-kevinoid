// ESLint common configuration rules for stylistic issues
// https://eslint.org/docs/rules/#stylistic-issues

"use strict";

const airbnbStyle =
  require("../eslint-config-airbnb-base/rules/style.js");

const indentOptions = airbnbStyle.rules.indent[2];

module.exports = {
  "name": "eslint-config-kevinoid/rules/style",

  "rules": {
    // enforce line breaks after opening and before closing array brackets
    "@stylistic/array-bracket-newline": ["error", "consistent"],

    // enforce line breaks between array elements
    "@stylistic/array-element-newline": ["error", "consistent"],

    // require camel case names (even for properties and destructuring)
    // Note: options object needed to override airbnb, values set for clarity.
    "camelcase": ["error", {
      "ignoreDestructuring": false,
      "properties": "always"
    }],

    // allow unnamed functions
    "func-names": "off",

    // require specific indentation of nested blocks and statements
    "@stylistic/indent": ["error", 2, {
      ...indentOptions,
      "ignoredNodes": [
        ...indentOptions.ignoredNodes,
        // Allow top-level CommonJS exports to be unindented so exporting doesn't
        // change indentation of function body.
        "Program > ExpressionStatement > AssignmentExpression[left.type=MemberExpression] > FunctionExpression"
      ]
    }],

    // don't enforce consistent linebreak style
    // Allow developers to develop with native EOL.  VCS manages committed style.
    "@stylistic/linebreak-style": "off",

    // Require logical assignment logical operator shorthand
    // TODO [eslint-config-airbnb-base@>=16]: Remove if enabled
    "logical-assignment-operators": ["error", "always", {
      "enforceForIfStatements": true
    }],

    // enforce a maximum line length
    // reduce from 100 to 80 chars (conventional terminal width)
    // ignore lines which consist of a single string, URL, or RegExp literal,
    // possibly prefixed with comment opener or suffixed with ";" or ",".
    // (Not ESLint ignore props which ignores any lines which contain these.)
    "@stylistic/max-len": ["error", 80, 2, {
      "ignorePattern": "^\\s*((/?\\*|/[/])\\s*)?('[^'\\\\]*(\\\\.[^'\\\\]*)*'|\"[^\"\\\\]*(\\\\.[^\"\\\\]*)*\"|/[^/\\\\]*(\\\\.[^/\\\\]*)*/[gimuy]*|[^:/?#\\s]+:/[/]\\S+)[,;]?$"
    }],

    // require a capital letter for constructors and new for capitalized funcs
    // Workaround https://github.com/airbnb/javascript/issues/2200
    "new-cap": ["error", {
      ...airbnbStyle.rules["new-cap"][1],
      "capIsNew": true
    }],

    // allow use of the continue statement
    // although I agree that it can make code harder to follow, like early
    // return, it can also avoid a rightward march for checking several
    // error/skip conditions.
    "no-continue": "off",

    // allow nested ternary expressions
    // if they are indented one-expression-per-line, they are clear enough for me
    "no-nested-ternary": "off",

    // disallow certain syntax forms
    "no-restricted-syntax": airbnbStyle.rules["no-restricted-syntax"]
      // allow for-of statement
      // Although I agree that .every/filter/find/map/some are preferable to
      // loops, there are some idioms which are easier and clearer to express
      // using for...of (e.g. early return, generators, for await...of, await
      // each item).  Performance on-par with alternatives and use is advocated
      // by Mathias Bynens <https://youtu.be/m9cTaYI95Zc?t=959>.
      // Note: Consider disabling when transpiling w/ regenerator-runtime.
      .filter((nrs) => nrs.selector !== "ForOfStatement")
      // allow labeled statements
      // this is better handled by the no-labels rule
      .filter((nrs) => nrs.selector !== "LabeledStatement"),

    // allow multiple variable declarations per block/function and multiple
    // declarators per declaration
    "one-var": "off",

    // require initialized variables to be declared on separate lines
    "@stylistic/one-var-declaration-per-line": ["error", "initializations"],

    // Requires operator at the beginning of the line in multiline statements
    // Airbnb prevents breaks around =, suggesting ().  I don't see the advantage.
    // Break after = looks better to me, so first assigned operand is farther left.
    "@stylistic/operator-linebreak": ["error", "before", {
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

    // requires or disallows blank lines between 2 given kinds of statements
    "@stylistic/padding-line-between-statements": [
      "error",
      // Require blank lines after all directive prologues,
      // like lines-around-directive rule enabled by airbnb-base
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "any", "prev": "directive", "next": "directive" }
    ],

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",

    // space before function parens only for async arrow (as Node core does)
    "@stylistic/space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }]
  }
};
