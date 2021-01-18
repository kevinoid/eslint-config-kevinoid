# [13.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v12.0.0...v13.0.0) (2021-01-18)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from 25.0.1 to 26.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases).
* Bump `eslint-plugin-jsdoc` from 30.7.13 to 31.0.7.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases).


# [12.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v11.0.0...v12.0.0) (2020-12-31)

### BREAKING CHANGES

* Package exports are now defined to prevent importing files other than the
  env-specific exported files.  Other files are not part of the package API
  and may be changed at any time.

### Features

* Bump `eslint-plugin-unicorn` from 21.0.0 to 25.0.1.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases).
* Allow generators for node and webextensions env ([6290fee](https://github.com/kevinoid/eslint-config-kevinoid/commit/6290feea88a561f90a65a18a9b87ab33f829da85))
* Allow/Prefer `for...of` loops ([a6de803](https://github.com/kevinoid/eslint-config-kevinoid/commit/a6de803dcc1cdbf434bcc069ef8eb9188fc390df))
* Disable `unicorn/custom-error-definition` ([bcbb98e](https://github.com/kevinoid/eslint-config-kevinoid/commit/bcbb98ea1429ccfc84ca3d47115b3a2c0a7d652d))
* Disable `unicorn/prefer-ternary` ([e6d6432](https://github.com/kevinoid/eslint-config-kevinoid/commit/e6d64326d30fa610dac31f8a2a9064ce6f95be10))
* Enable `unicorn/prefer-string-trim-start-end` ([cc70995](https://github.com/kevinoid/eslint-config-kevinoid/commit/cc70995fd1bc47825fca5cdbf9254a21ae5ee12c))


# [11.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v10.0.0...v11.0.0) (2020-08-02)

### BREAKING CHANGES

* Lint JSDoc in closure mode to support `@template` (and other) tags along
  with `module:` type syntax. ([3a14edd](https://github.com/kevinoid/eslint-config-kevinoid/commit/3a14edd767ddd56dbead132944de519ede68b6ce))


# [10.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v9.2.0...v10.0.0) (2020-07-31)

### Features

* Bump `eslint-plugin-jsdoc` from 28.7.0 to 29.2.0 ([2f2f8e5](https://github.com/kevinoid/eslint-config-kevinoid/commit/2f2f8e564bff3f0fc9681dbd07d70ab71dd0f62d))

### BREAKING CHANGES

* `eslint-plugin-jsdoc` now adds spaces between union items
  and removes JSDuck support (unions with "/" instead of "|").


# [9.2.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v9.1.0...v9.2.0) (2020-06-14)

### Features

* Disable `promise/no-return-in-finally` ([07efe5c](https://github.com/kevinoid/eslint-config-kevinoid/commit/07efe5cb598c3f9e397bcb6e1dc239b65fbffb10))


# [9.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v9.0.0...v9.1.0) (2020-06-14)

### Features

* Use jsdoc typescript mode ([e46a389](https://github.com/kevinoid/eslint-config-kevinoid/commit/e46a389954152990d82c7e787bebc3f2c7a40dea))


# [9.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v8.0.0...v9.0.0) (2020-06-12)

### BREAKING CHANGES

* [`eslint@^7`](https://github.com/eslint/eslint/releases/tag/v7.0.0)
* [`eslint-config-jsdoc@^27`](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v27.0.0)

### Features

* Don't require `@param`/`@returns` with `@private` ([99bcfe8](https://github.com/kevinoid/eslint-config-kevinoid/commit/99bcfe8f1aff5aaad5f733ec449cff2655ddf617))
* Enable jsdoc rules at error level ([9709f93](https://github.com/kevinoid/eslint-config-kevinoid/commit/9709f934ebf10b310af71aacf15d19400bca355c))
* Enable `no-constant-condition` as error ([5e2f997](https://github.com/kevinoid/eslint-config-kevinoid/commit/5e2f9974b463c53ad42b83afde323cf0ae28d52b))
* Enable `require-hyphen-before-param-description` to forbid hyphen ([89a358c](https://github.com/kevinoid/eslint-config-kevinoid/commit/89a358c7d6bd5fc0a131601d0bae468636ee5a0b))


# [8.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v7.1.1...v8.0.0) (2020-05-23)


### Features

* Add [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
  ([9aba777](https://github.com/kevinoid/eslint-config-kevinoid/commit/9aba777fa609c6b3d9f6526f4a4b362a1a4f6a1c))



## [7.1.1](https://github.com/kevinoid/eslint-config-kevinoid/compare/v7.1.0...v7.1.1) (2020-04-26)


### Bug Fixes

* Fix [`unicorn/catch-error-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md) configuration to use
  `ignore` instead of `caughtErrorsIgnorePattern` for 19.0.0 (as a result of
  [sindresorhus/eslint-plugin-unicorn#661](https://github.com/sindresorhus/eslint-plugin-unicorn/pull/661))
  ([06bf7f6](https://github.com/kevinoid/eslint-config-kevinoid/commit/06bf7f64f66778fdad7c0a78f0e69cdad9f34bee))


# [7.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v7.0.0...v7.1.0) (2020-04-26)


### Features

* Disable [`unicorn/no-fn-reference-in-iterator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md)
  ([898069d](https://github.com/kevinoid/eslint-config-kevinoid/commit/898069d52f24a26e84d028cbb871afc746d629ec))


# [7.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v6.0.1...v7.0.0) (2020-04-26)


### BREAKING CHANGES

* Enable new
  [`unicorn/no-null`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-null.md) rule.
* Remove `XDomainRequest` global for `wsh` environment.


### Dependency Updates

* Update to `eslint-plugin-unicorn@^19.0.0`
  ([5b3c8bf](https://github.com/kevinoid/eslint-config-kevinoid/commit/5b3c8bfe6c0e74033c508412728241c81b638f53))
* Update to `globals@^13.0.0`, which includes WScript non-writable globals.
  ([353f9dc](https://github.com/kevinoid/eslint-config-kevinoid/commit/353f9dcbcad73550b650220fd3414ee641c2aa29))
  ([ddcebcf](https://github.com/kevinoid/eslint-config-kevinoid/commit/ddcebcf3da7f8c6b2476d4baad5796397c762dc2))


## [6.0.1](https://github.com/kevinoid/eslint-config-kevinoid/compare/v6.0.0...v6.0.1) (2020-04-09)


### Bug Fixes

* Remove `arguments.callee` from [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties) since it is already covered by [`no-caller`](https://eslint.org/docs/rules/no-caller) ([8460214](https://github.com/kevinoid/eslint-config-kevinoid/commit/8460214e7320c1f598177b0839e6bd0e019001d4))



# [6.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v5.0.0...v6.0.0) (2020-03-26)


### BREAKING CHANGES

* Set `capIsNew: true` for [`new-cap`](https://eslint.org/docs/rules/new-cap) rule ([15740f2](https://github.com/kevinoid/eslint-config-kevinoid/commit/15740f24de0cc2eeeda988f0bb871e1710265d7e)), see [airbnb/javascript#2200](https://github.com/airbnb/javascript/issues/2200)

### Features

* Update to `eslint-plugin-unicorn@^18.0.0` ([745b8ed](https://github.com/kevinoid/eslint-config-kevinoid/commit/745b8ede01c2e871fdbc93125561bb59c24d5daf)):
  - Not currently enabling new
    [`prefer-number-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md)
    and
    [`prefer-set-has`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md)
    rules.


# [5.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v4.0.0...v5.0.0) (2020-03-10)


### BREAKING CHANGES

* Update `eslint-plugin-unicorn` to `^17.0.0` ([ded9395](https://github.com/kevinoid/eslint-config-kevinoid/commit/ded9395c78c1a0973dae48d4743975ac3039e21b)):
  - Rename `unicorn/regex-shorthand` to `unicorn/better-regex`.


# [4.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v3.0.0...v4.0.0) (2020-02-14)


### BREAKING CHANGES

* Drop support for Node.js 8, require 10 or later (due to
  sindresorhus/eslint-plugin-unicorn@d2ffe2c in
  `eslint-plugin-unicorn@16.0.0`).
* Require lower-case `e` in  number literals (due to
  sindresorhus/eslint-plugin-unicorn#490 in
  `eslint-plugin-unicorn@16.0.0`).
* Enable `unicorn/prefer-trim-start-end` for `node` env.
  ([b9b90c4](https://github.com/kevinoid/eslint-config-kevinoid/commit/b9b90c4a5075b3361799d74e759ede7b6f001527))


### Bug Fixes

* Use `prefer-exponentiation-operator` instead of
  `unicorn/prefer-exponentiation-operator`
  ([8b471c9](https://github.com/kevinoid/eslint-config-kevinoid/commit/8b471c9b564a4b6c50d1829399ae0f9bb9bf96dd))


### Features

* Disable `unicorn/no-for-loop` due to conflicts with `restricted-syntax` from
  `eslint-config-airbnb-base` which prevents iterators/generators due to
  regenerator polyfill overhead
  ([fe93887](https://github.com/kevinoid/eslint-config-kevinoid/commit/fe938875ad31b449038a2eedd5f7c826999c967b))


# [3.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v2.0.0...v3.0.0) (2020-01-26)


### BREAKING CHANGES

* `operator-linebreak` `after` for all assignment operators
  ([7bae3ec](https://github.com/kevinoid/eslint-config-kevinoid/commit/7bae3ec4ea14ac446d380c385e121b833e4b26f5))
* Update
  [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn/)
  to
  [`^15.0.0`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v15.0.0),
  enabling new
  [`prefer-modern-dom-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md)
  rule.
* Update
  [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node/) to
  [`^11.0.0`](https://github.com/mysticatea/eslint-plugin-node/releases/tag/v11.0.0).


### Features

* Enable `ignoreRestSiblings` for
  [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars) rule
  ([a979bf6](https://github.com/kevinoid/eslint-config-kevinoid/commit/a979bf6bef80cb643109b039d9c2290beaf8922f))



## [2.0.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v2.0.0) (2019-11-29)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v1.0.1...v2.0.0)

### BREAKING CHANGES

- Enables new
  [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md)
  rule.
- WSH: pre-defined globals are now non-writable.
- WSH: add `RuntimeObject` to `no-restricted-globals`, since unbound `this` is
  always preferable (see link in error message for details).

### New Features

- Add messages to `no-restricted-globals`.
- Update `globals` to `^12.3.0` for additional WSH globals (`CollectGarbage`,
  `Debug`, `RuntimeObject`).
- Update `eslint-plugin-unicorn` to `^14.0.0`.


## [1.0.1](https://github.com/kevinoid/eslint-config-kevinoid/tree/v1.0.1) (2019-11-17)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v1.0.0...v1.0.1)

- Update `eslint-plugin-unicorn` to `^13.0.0`.

## [1.0.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v1.0.0) (2019-11-11)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.5.0...v1.0.0)

- Add `wsh.js` for Windows Script Host.
- Declare this as the first stable release (by semver conventions).

## [0.5.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.5.0) (2019-11-03)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.4.1...v0.5.0)

- Update `eslint-plugin-unicorn` to ^12.0.2.
  - Enable new [`prefer-string-slice`
    rule](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md).

## [0.4.1](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.4.1) (2019-09-17)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.4.0...v0.4.1)

- Disable `unicorn/no-nested-ternary` rule.

## [0.4.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.4.0) (2019-09-16)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.3.0...v0.4.0)

- Update `eslint-plugin-unicorn` to ^11.0.0.

## [0.3.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.3.0) (2019-09-15)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.2.0...v0.3.0)

- Update `eslint-plugin-node` dependency to 10.

## [0.2.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.2.0) (2019-09-02)
[Full Changelog](https://github.com/kevinoid/eslint-config-kevinoid/compare/v0.1.0...v0.2.0)

- Disable `promise/always-return`
- `allowReject` for `promise/no-return-wrap`
- Enable `prefer-promise-reject-errors` incl. empty
- Disable `node/exports-style`

## [v0.1.0](https://github.com/kevinoid/eslint-config-kevinoid/tree/v0.1.0) (2019-09-01)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
