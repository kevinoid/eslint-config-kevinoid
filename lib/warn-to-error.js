/**
 * @copyright Copyright 2023 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

/** Gets a rule configuration with warning switched to error.
 *
 * @private
 */
function ruleWarnToError(ruleConfig) {
  if (ruleConfig === "warn") {
    return "error";
  }

  if (Array.isArray(ruleConfig) && ruleConfig[0] === "warn") {
    ruleConfig = [...ruleConfig];
    ruleConfig[0] = "error";
    return ruleConfig;
  }

  return ruleConfig;
}

/** Gets a rules configuration with warn configurations changed to error.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @returns {!object} {@param rules} with "warn" replaced by "error".
 */
module.exports =
function warnToError(rules) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([ruleName, ruleValue]) => [ruleName, ruleWarnToError(ruleValue)])
  );
};
