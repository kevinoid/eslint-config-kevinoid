// ESLint configuration for JS run directly in browsers (IE11 or better).
// <https://eslint.org/docs/user-guide/configuring>

"use strict";

module.exports = {
  // Based on Airbnb with changes to match Node core and my prefs.
  "extends": [
    // Note: IE11 doesn't support most ES6 features.  Use legacy ruleset.
    "airbnb-base/legacy",

    // ESLint built-in rules
    "./rules/best-practices",
    "./rules/style",
    "./rules/variables",

    // IE-specific rules
    "./rules/ie11-restricted-globals",
    "./rules/ie11-restricted-properties"
  ],

  "parserOptions": {
    // Note: ES6 features can't be controlled by ecmaFeatures anymore, so
    // ecmaVersion: 6 is required to parse const/let and no-restricted-syntax
    // rule is used to disable syntax not supported by targeted browsers.
    // https://github.com/eslint/espree/issues/307#issuecomment-264954713
    "ecmaVersion": 6,
    "sourceType": "script"
  },

  "env": {
    "browser": true,
    // Note: Not enabling ES6 env since IE11 doesn't support most ES6 globals.
    // See https://kangax.github.io/compat-table/es6/#ie11
    "node": false
  },

  "rules": {
    // ----------------------------------------------------------------
    // Possible Errors <https://eslint.org/docs/rules/#possible-errors>
    // ----------------------------------------------------------------

    // require trailing commas in arrays and objects, not functions, due to
    // lack of support in IE:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Browser_compatibility
    // Note: airbnb-base uses always-multiline, airbnb-base/legacy uses never.
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],


    // ------------------------------------------------------------------
    // Stylistic Issues <https://eslint.org/docs/rules/#stylistic-issues>
    // ------------------------------------------------------------------

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ArrayPattern, ObjectPattern",
        "message": "IE11 does not support destructuring."
      },
      {
        "selector": "ArrowFunctionExpression",
        "message": "IE11 does not support arrow functions."
      },
      {
        "selector": "AssignmentPattern",
        "message": "IE11 does not support default parameters."
      },
      {
        "selector": "ClassDeclaration, ClassExpression",
        "message": "IE11 does not support classes."
      },
      {
        "selector": "ExportAllDeclaration, ExportDefaultDeclaration, ExportNamedDeclaration, ExportSpecifier, ImportDeclaration, ImportDefaultSpecifier, ImportNamespaceSpecifier, ImportSpecifier",
        "message": "IE11 does not support modules."
      },
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "FunctionDeclaration[generator=true], FunctionExpression[generator=true], YieldExpression",
        "message": "IE11 does not support generators."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "Literal[raw=/^0[bo]/]",
        "message": "IE11 does not support binary or octal literals."
      },
      {
        "selector": "Literal[raw=/^([^\\\\]|\\\\.)*\\\\u\\{/]",
        "message": "IE11 does not support unicode escapes with braces."
      },
      {
        "selector": "Property[computed=true]",
        "message": "IE11 does not support computed properties."
      },
      {
        "selector": "Property[method=true]",
        "message": "IE11 does not support method properties."
      },
      {
        "selector": "Property[shorthand=true]",
        "message": "IE11 does not support shorthand properties."
      },
      {
        "selector": "Literal[regex.flags=/[uy]/]",
        "message": "IE11 does not support u or y RegExp flags."
      },
      {
        "selector": "RestElement",
        "message": "IE11 does not support rest parameters."
      },
      {
        "selector": "SpreadElement",
        "message": "IE11 does not support spread."
      },
      {
        "selector": "TemplateElement, TemplateLiteral, TaggedTemplateExpression",
        "message": "IE11 does not support template literals."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],

    //// ECMAScript 6 Rules <https://eslint.org/docs/rules/#ecmascript-6>
    // disallow modifying variables that are declared using const
    "no-const-assign": "error",

    // require let or const instead of var
    "no-var": "error",

    // use const where possible
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }]
  }
};
