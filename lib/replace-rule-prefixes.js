/**
 * @copyright Copyright 2026 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

/** Replace given rule name prefixes with replacements.
 *
 * @param {!object} rules ESLint rules configuration object.
 * @param {!Object<string,string>} prefixReplacements Map from old to new
 * prefixes.
 * @returns {!object} A copy of {@link rules} with where each rule prefix
 * in {@link prefixReplacements} replaced by the value in {@link
 * prefixReplacements}.
 */
export default function replaceRulePrefixes(rules, prefixReplacements) {
  return Object.fromEntries(
    Object.entries(rules).map((entry) => {
      const [ruleName, setting] = entry;
      const slashIndex = ruleName.indexOf("/");
      if (slashIndex === -1) {
        // No prefix to replace.  Keep as-is.
        return entry;
      }

      const prefix = ruleName.slice(0, slashIndex);
      const newPrefix = prefixReplacements[prefix];
      if (newPrefix === undefined) {
        // Prefix not in prefixReplacements.  Keep as-is.
        return entry;
      }

      const unprefixedRuleName = ruleName.slice(slashIndex + 1);
      const newRuleName = newPrefix === null ? unprefixedRuleName
        : `${newPrefix}/${unprefixedRuleName}`;
      return [newRuleName, setting];
    })
  );
}
