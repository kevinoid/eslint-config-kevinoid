// ESLint IE 11 no-restricted-syntax configuration rules
// https://eslint.org/docs/rules/no-restricted-syntax

"use strict";

const airbnbStyle =
  require("eslint-config-airbnb-base/rules/style");

module.exports = {
  "rules": {
    "no-restricted-syntax":
      airbnbStyle
        .rules["no-restricted-syntax"]
        .concat([
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
            "selector": "FunctionDeclaration[generator=true], FunctionExpression[generator=true], YieldExpression",
            "message": "IE11 does not support generators."
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
          }
        ])
  }
};
