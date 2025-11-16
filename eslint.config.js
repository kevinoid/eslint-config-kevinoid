import nodejs from "./nodejs.js";
import packageConfig from "./package.json" with { "type": "json" };

const noUnusedModulesOpts = nodejs.at(-1).rules["import/no-unused-modules"][1];

const ourRules = {
  // Use style consistent with JSON for easier sharing between formats
  "rules": {
    "@stylistic/comma-dangle": ["error", "never"],
    "@stylistic/max-len": "off",
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/quote-props": ["error", "always"],

    "import/no-unused-modules": ["error", {
      ...noUnusedModulesOpts,
      "ignoreExports": [
        ...noUnusedModulesOpts.ignoreExports,

        // Don't report unused exports from package exports
        // https://github.com/import-js/eslint-plugin-import/issues/2525
        ...new Set(Object.values(packageConfig.exports))
      ]
    }],

    // ESLint Shareable Configs must be CommonJS
    // (Until RFC 9 is implemented)
    // https://github.com/eslint/eslint/issues/13440
    // https://github.com/eslint/eslint/issues/13481
    "unicorn/prefer-module": "off"
  }
};

export default [
  {
    "ignores": [
      "coverage/",
      "doc/"
    ]
  },
  ...nodejs,
  ourRules,
  // Adjust style to minimize divergence of vendored eslint-config-airbnb-base
  {
    "name": "airbnb-base rules",
    "files": [
      "eslint-config-airbnb-base/**/*.js"
    ],
    "rules": {
      "@stylistic/comma-dangle": "off",
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/quote-props": ["error", "as-needed"],
      "strict": ["error", "never"],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/prefer-spread": "off"
    }
  }
];
