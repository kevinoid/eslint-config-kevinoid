/**
 * @copyright Copyright 2025 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

const n = require("eslint-plugin-n");

/** Map rules to eslint-plugin-n equivalents.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @returns {!object} A copy of {@param rules} with deprecated rules replaced
 * by "n/" equivalents.
 */
module.exports = function rulesToN(rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([ruleName, setting]) => [
      Object.hasOwn(n.rules, ruleName) ? `n/${ruleName}` : ruleName,
      setting
    ])
  );
};
