@kevinoid's ESLint Config
=========================

[![Build Status](https://img.shields.io/travis/kevinoid/eslint-config-kevinoid/master.svg?style=flat&label=build+on+linux)](https://travis-ci.org/kevinoid/eslint-config-kevinoid)
[![Dependency Status](https://img.shields.io/david/kevinoid/eslint-config-kevinoid.svg?style=flat)](https://david-dm.org/kevinoid/eslint-config-kevinoid)
[![Supported Node Version](https://img.shields.io/node/v/@kevinoid/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@kevinoid/eslint-config)
[![Version on NPM](https://img.shields.io/npm/v/@kevinoid/eslint-config.svg?style=flat)](https://www.npmjs.com/package/@kevinoid/eslint-config)

An [ESLint shareable
configs](https://eslint.org/docs/developer-guide/shareable-configs) for
[@kevinoid](https://github.com/kevinoid/)'s preferred style (based on
[Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
style).


## Installation

Before using any configuration from this package, it must be installed, either
globally or locally, which can be done using the following steps:

1.  Install `peerDependencies` (and transitive `peerDependencies`) for
    `@kevinoid/eslint-config`.  This can be done using `npx install-peerdeps
    --dev @kevinoid/eslint-config`,
    [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps) or
    manually based on the output from `npm info @kevinoid/eslint-config
    peerDependencies`.
2.  Install this package (e.g. `npm install @kevinoid/eslint-config`).


## Usage

This package includes configurations for several different environments:

| Name                                    | Description                              |
| --------------------------------------- | ---------------------------------------- |
| `@kevinoid/eslint-config/ie11`          | Browsers including Internet Explorer 11. |
| `@kevinoid/eslint-config/node`          | Node 6 and later.                        |
| `@kevinoid/eslint-config/webextensions` | [Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) |
| `@kevinoid/eslint-config/wsh`           | [JScript 5.8](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/hbxc2t98(v=vs.84)) in [Windows Script Host](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc738350(v=ws.10)) |

Add the chosen configuration to
[`extends`](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
in `.eslintrc`, for example:

```json
{
  "extends": "@kevinoid/eslint-config/node"
}
```

or `eslintConfig` in `package.json`, for example:

```json
{
  "name": "packagename",
  "version": "1.0.0",
  ...
  "eslintConfig": {
    "extends": "@kevinoid/eslint-config/node"
  }
}
```


## License

This package is available under the terms of the
[MIT License](https://opensource.org/licenses/MIT).
