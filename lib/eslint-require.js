/**
 * @copyright Copyright 2021 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

"use strict";

/** Require a module loadable by eslint when using this module (i.e. a
 * peerDependency of this module).
 *
 * This is necessary for loading ESLint configs/plugins which must be loadable
 * in the project being linted per
 * https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config
 * and may not be reachable from this module (since they are not a dependency
 * of this module, but a peerDependency).
 *
 * Similar to https://github.com/jaredhanson/node-parent-require, except that
 * it avoids using module.parent, which is deprecated
 * https://nodejs.org/api/deprecations.html#DEP0144
 * and attempts to load from the eslint module specifically to avoid depending
 * on the sequence of modules which load this one.
 *
 * @param {string} id module name or path loadable by eslint.
 * @returns {*} exported module content.
 */
module.exports =
function eslintRequire(id) {
  // Assume eslint is the entrypoint (i.e. main module).
  //
  // Note: Identifying the "eslint" is surprisingly tricky, since module.id
  // and module.filename are absolute paths (except when module.id is "." for
  // the main module) and we can't use require.resolve() for the same reason
  // we can't use require().
  // - Could look for module.filename.endsWith("/eslint/bin/eslint.js")
  //   but internal path to bin is not part of the API and may change.
  // - Could look for module.exports.ESLint (or anything else in the API
  //   https://eslint.org/docs/developer-guide/nodejs-api)
  //
  // This is good enough for now, and very simple and fast.
  // Reconsider as needed.
  return require.main.require(id);
};
