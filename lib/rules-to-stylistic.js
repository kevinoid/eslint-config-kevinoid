/**
 * @copyright Copyright 2025 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

const stylisticPlugin = require("@stylistic/eslint-plugin");

/** Map rules to @stylistic equivalents.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @returns {!object} A copy of {@param rules} with deprecated rules replaced
 * by "@stylistic/" equivalents.
 */
module.exports = function rulesToStylistic(rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([ruleName, setting]) => [
      Object.hasOwn(stylisticPlugin.rules, ruleName) ? `@stylistic/${ruleName}`
        : ruleName,
      setting
    ])
  );
};
