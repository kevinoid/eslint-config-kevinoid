/**
 * @copyright Copyright 2025 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

/** Remove rules for a given plugin name.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @param {string} pluginName Name of the plugin to remove.
 * @returns {!object} A copy of {@param rules} with rules for
 * {@param pluginName} removed.
 */
module.exports.rulesRemovePlugin =
function rulesRemovePlugin(rules, pluginName) {
  const pluginPrefix = `${pluginName}/`;
  return Object.fromEntries(
    Object.entries(rules)
      .filter(([ruleName, setting]) => !ruleName.startsWith(pluginPrefix))
  );
};

/** Remove rules for a given plugin name from all configurations.
 *
 * @param {!object} configs ESLint configuration object(s).
 * @param {string} pluginName Name of the plugin to remove.
 * @returns {!object} A copy of {@param configs} with rules for
 * {@param pluginName} removed from each configuration object.
 */
module.exports.removePluginRules =
function removePluginRules(configs, pluginName) {
  function removeRules(config) {
    const { rules } = config;

    if (typeof rules !== "object" || rules === null) {
      return config;
    }

    return {
      ...config,
      "rules": module.exports.rulesRemovePlugin(rules, pluginName)
    };
  }

  if (typeof configs[Symbol.iterator] === "function") {
    return Array.from(configs, removeRules);
  }

  return removeRules(configs);
};
