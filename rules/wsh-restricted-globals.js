// ESLint WSH no-restricted-globals configuration rules
// https://eslint.org/docs/rules/no-restricted-globals

export default {
  "name": "eslint-config-kevinoid/rules/wsh-restricted-globals",

  "rules": {
    "no-restricted-globals": [
      "error",

      // ESLint allows properties of Object.prototype as global variables
      // https://github.com/eslint/eslint/issues/10757
      ...Object.getOwnPropertyNames(Object.prototype).map((name) => ({
        name,
        "message": "JScript global object does not inherit from Object.prototype."
      })),

      // WSH globals which are restricted
      {
        "name": "RuntimeObject",
        "message": "Use 'this' to get global object.  https://stackoverflow.com/q/3277182"
      }
    ]
  }
};
