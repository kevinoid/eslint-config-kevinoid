/**
 * @copyright Copyright 2021 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

/** Import a module in peerDependencies.
 *
 * ESLint configs/plugins must be importable in the project being linted,
 * rather than dependencies of the referencing config, according to
 * https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config
 * https://github.com/eslint/eslint/issues/3458
 * https://github.com/eslint/eslint/discussions/14161
 * (although dependencies usually work because npm flattens them together,
 * as long as there isn't a version conflict).  Since the modules are in
 * peerDependencies rather than dependencies, they may not be importable from
 * this module.
 *
 * Use the technique from https://github.com/jaredhanson/node-parent-require
 * of calling module.require() from ancestor modules, starting from a given
 * module.
 * Note: Depending on parent-require is not reliable, since it starts from
 * its own parent (i.e. the first which called `require('parent-require')`)
 * which may not be this module.
 *
 * Note: Previously this function used require.main.require() under the
 * assumption that require.main is eslint.  This assumption is violated by
 * other tools which load or analyze ESLint configuration (e.g. depcheck).
 *
 * FIXME: This is fragile and ugly.  Will be unnecessary with new ESLint
 * config format: https://github.com/eslint/rfcs/pull/9
 *
 * @param {string} id name or path of peer dependency to import.
 * @returns {*} imported module.
 */
module.exports =
function requirePeer(id) {
  // Note: module.parent was soft-deprecated as
  // https://nodejs.org/api/deprecations.html#DEP0144 by
  // https://github.com/nodejs/node/pull/32217
  // because it is not set by the ESM loader.  However, the ESM loader does
  // not provide an alternative (since it doesn't set require.cache or expose
  // a module object) and attempting import from all parents (the suggested
  // alternative in DEP0144 docs) seems wasteful.
  //
  // Note: Starting from module.parent.parent since module.parent is
  // guaranteed to be in this package (since this module is not exported from
  // this package).
  //
  // FIXME: module.parent.parent may also be in this package (if a module in
  // this package required another which required this one), which could be
  // a problem if dependencies and peerDependencies have a version conflict.
  for (
    let ancestor = module.parent.parent;
    ancestor;
    ancestor = ancestor.parent
  ) {
    try {
      return ancestor.require(id);
    } catch (err) {
      if (err.code !== "MODULE_NOT_FOUND") {
        throw err;
      }
    }
  }

  // If all else fails (e.g. the first module in this package was loaded using
  // the ESM loader, which does not set module.parent) try importing from this
  // module.
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(id);
};
