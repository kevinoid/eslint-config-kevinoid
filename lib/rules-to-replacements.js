/**
 * @copyright Copyright 2025 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

const requirePeer = require("./require-peer.js");

const { builtinRules } = requirePeer("eslint/use-at-your-own-risk");

/** Map rules to their replacements.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @param {!Object<string,string>} pluginToPrefix Map plugin name to rule
 * prefix.
 * @returns {!object} A copy of {@link rules} with where each deprecated rule
 * name is replaced by its replacement.  If the replacement is already
 * configured, the deprecated rule is removed.
 */
module.exports =
function rulesToReplacements(rules, pluginToPrefix) {
  return Object.fromEntries(
    Object.entries(rules).map((entry) => {
      const [ruleName, setting] = entry;

      // Check find replacement using additional deprecated metadata:
      // https://github.com/eslint/rfcs/blob/main/designs/2024-deprecated-rule-metadata/README.md
      // https://github.com/eslint/eslint/pull/19238
      const replacedBy = builtinRules.get(ruleName)?.meta?.deprecated?.replacedBy?.[0];
      if (!replacedBy) {
        return entry;
      }

      const pluginName = replacedBy.plugin?.name;
      const pluginPrefix = pluginName && pluginToPrefix[pluginName];
      const replacementName = replacedBy.rule.name;
      const prefixedReplacement =
        pluginPrefix ? `${pluginPrefix}/${replacementName}` : replacementName;
      if (prefixedReplacement in rules) {
        // Don't overwrite configuration of replacement rule
        return undefined;
      }

      return [prefixedReplacement, setting];
    })
      // Remove undefined for replacement rules already configured
      .filter(Boolean)
  );
};
