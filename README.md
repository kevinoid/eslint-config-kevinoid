@kevinoid's ESLint Config
=========================

[![Build Status](https://img.shields.io/github/actions/workflow/status/kevinoid/eslint-config-kevinoid/node.js.yml?branch=main&style=flat&label=build)](https://github.com/kevinoid/eslint-config-kevinoid/actions?query=branch%3Amain)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/@kevinoid%2Feslint-config.svg?style=flat)](https://libraries.io/npm/@kevinoid%2Feslint-config)
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
| `@kevinoid/eslint-config/browser`       | Modern browsers                          |
| `@kevinoid/eslint-config/ie11`          | Browsers including Internet Explorer 11. |
| `@kevinoid/eslint-config/nodejs`        | Node 6 and later.                        |
| `@kevinoid/eslint-config/webextensions` | [Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) |
| `@kevinoid/eslint-config/wsh`           | [JScript 5.8](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/scripting-articles/hbxc2t98(v=vs.84)) in [Windows Script Host](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc738350(v=ws.10)) |

Add the chosen configuration to
[`extends`](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
in `.eslintrc`, for example:

```json
{
  "extends": "@kevinoid/eslint-config/nodejs"
}
```

or `eslintConfig` in `package.json`, for example:

```json
{
  "name": "packagename",
  "version": "1.0.0",
  ...
  "eslintConfig": {
    "extends": "@kevinoid/eslint-config/nodejs"
  }
}
```


## License

This project is available under the terms of the [MIT License](LICENSE.txt).
See the [summary at TLDRLegal](https://tldrlegal.com/license/mit-license).

The [template](https://github.com/kevinoid/node-project-template) upon which
this project is based is available under the terms of
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/).
