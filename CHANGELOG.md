# [35.2.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v35.1.0...v35.2.0) (2026-09-07)

### Features

* Disable [`prefer-continue`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-continue.md).
* Configure [`single-line-block-comment-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/single-line-block-comment-style.md) for `single-line`.
* Exclude metavariable names from [`consistent-boolean-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-boolean-name.md).


# [35.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v35.0.0...v35.1.0) (2026-09-07)

### Features

* Disable [`unicorn/name-replacements`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/name-replacements.md).


# [35.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v34.0.0...v35.0.0) (2026-09-07)

### BREAKING CHANGES

* Drop support for Node.js &lt;22.13 (require `^22.22.2 || >=24.15.0`).
* Support (and require) ESLint 10.
* Replace `eslint-plugin-import` with `import-plugin-import-x`.
  - Disable
    [`import/no-unused-modules`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md),
    which is a no-op on ESLint 10.
* Bump `eslint-plugin-unicorn` from ^64.0.0 to ^74.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases).
  Enable new rules:
  - [`better-dom-traversing`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-dom-traversing.md)
  - [`class-reference-in-static-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/class-reference-in-static-methods.md)
  - [`consistent-boolean-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-boolean-name.md)
  - [`consistent-class-member-order`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-class-member-order.md)
  - [`consistent-compound-words`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-compound-words.md)
  - [`consistent-conditional-object-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-conditional-object-spread.md)
  - [`consistent-export-decorator-position`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-export-decorator-position.md)
  - [`consistent-json-file-read`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-json-file-read.md)
  - [`consistent-optional-chaining`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-optional-chaining.md)
  - [`consistent-tuple-labels`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-tuple-labels.md)
  - [`default-export-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/default-export-style.md)
  - [`explicit-timer-delay`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-timer-delay.md)
  - [`logical-assignment-operators`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/logical-assignment-operators.md)
  - [`max-nested-calls`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md)
  - [`no-accidental-bitwise-operator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accidental-bitwise-operator.md)
  - [`no-array-concat-in-loop`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-concat-in-loop.md)
  - [`no-array-fill-with-reference-type`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-fill-with-reference-type.md)
  - [`no-array-from-fill`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-from-fill.md)
  - [`no-array-sort-for-min-max`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort-for-min-max.md)
  - [`no-array-splice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-splice.md)
  - [`no-async-promise-finally`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-async-promise-finally.md)
  - [`no-blob-to-file`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-blob-to-file.md)
  - [`no-boolean-sort-comparator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-boolean-sort-comparator.md)
  - [`no-break-in-nested-loop`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-break-in-nested-loop.md)
  - [`no-canvas-to-image`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-canvas-to-image.md)
  - [`no-chained-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-chained-comparison.md)
  - [`no-collection-bracket-access`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-collection-bracket-access.md)
  - [`no-computed-property-existence-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-computed-property-existence-check.md)
  - [`no-confusing-array-splice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-splice.md)
  - [`no-confusing-array-with`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-with.md)
  - [`no-constant-zero-expression`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-constant-zero-expression.md)
  - [`no-declarations-before-early-exit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-declarations-before-early-exit.md)
  - [`no-double-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-double-comparison.md)
  - [`no-duplicate-if-branches`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-if-branches.md)
  - [`no-duplicate-logical-operands`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-logical-operands.md)
  - [`no-duplicate-loops`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-loops.md)
  - [`no-duplicate-set-values`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-set-values.md)
  - [`no-error-property-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-error-property-assignment.md)
  - [`no-exports-in-scripts`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-exports-in-scripts.md)
  - [`no-global-object-property-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-global-object-property-assignment.md)
  - [`no-impossible-length-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-impossible-length-comparison.md)
  - [`no-incorrect-query-selector`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-query-selector.md)
  - [`no-incorrect-template-string-interpolation`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-template-string-interpolation.md)
  - [`no-invalid-argument-count`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-argument-count.md)
  - [`no-invalid-character-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-character-comparison.md)
  - [`no-invalid-well-known-symbol-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-well-known-symbol-methods.md)
  - [`no-late-current-target-access`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-current-target-access.md)
  - [`no-late-event-control`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-event-control.md)
  - [`no-loop-iterable-mutation`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-loop-iterable-mutation.md)
  - [`no-mismatched-map-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-mismatched-map-key.md)
  - [`no-misrefactored-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-misrefactored-assignment.md)
  - [`no-multiple-promise-resolver-calls`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-multiple-promise-resolver-calls.md)
  - [`no-negated-array-predicate`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-array-predicate.md)
  - [`no-negated-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-comparison.md)
  - [`no-non-function-verb-prefix`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-non-function-verb-prefix.md)
  - [`no-nonstandard-builtin-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nonstandard-builtin-properties.md)
  - [`no-object-methods-with-collections`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-methods-with-collections.md)
  - [`no-optional-chaining-on-undeclared-variable`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-optional-chaining-on-undeclared-variable.md)
  - [`no-redundant-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-redundant-comparison.md)
  - [`no-return-array-push`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-return-array-push.md)
  - [`no-selector-as-dom-name`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-selector-as-dom-name.md)
  - [`no-shorthand-property-overrides`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-shorthand-property-overrides.md)
  - [`no-subtraction-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-subtraction-comparison.md)
  - [`no-this-outside-of-class`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-outside-of-class.md)
  - [`no-top-level-assignment-in-function`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-assignment-in-function.md)
  - [`no-top-level-side-effects`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-side-effects.md)
  - [`no-transition-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-transition-all.md)
  - [`no-uncalled-method`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-uncalled-method.md)
  - [`no-undeclared-class-members`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-undeclared-class-members.md)
  - [`no-unnecessary-boolean-comparison`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-boolean-comparison.md)
  - [`no-unnecessary-fetch-options`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-fetch-options.md)
  - [`no-unnecessary-global-this`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-global-this.md)
  - [`no-unnecessary-nested-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-nested-ternary.md)
  - [`no-unnecessary-splice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-splice.md)
  - [`no-unnecessary-string-trim`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-string-trim.md)
  - [`no-unreadable-for-of-expression`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-for-of-expression.md)
  - [`no-unreadable-object-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-object-destructuring.md)
  - [`no-unsafe-buffer-conversion`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-buffer-conversion.md)
  - [`no-unsafe-promise-all-settled-values`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-promise-all-settled-values.md)
  - [`no-unsafe-property-key`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-property-key.md)
  - [`no-unsafe-sqlite-interpolation`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-sqlite-interpolation.md)
  - [`no-unsafe-string-replacement`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-string-replacement.md)
  - [`no-unused-array-method-return`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-array-method-return.md)
  - [`no-useless-boolean-cast`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-boolean-cast.md)
  - [`no-useless-coercion`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-coercion.md)
  - [`no-useless-compound-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-compound-assignment.md)
  - [`no-useless-concat`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-concat.md)
  - [`no-useless-continue`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-continue.md)
  - [`no-useless-delete-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-delete-check.md)
  - [`no-useless-else`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-else.md)
  - [`no-useless-logical-operand`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-logical-operand.md)
  - [`no-useless-override`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-override.md)
  - [`no-useless-re-export`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-re-export.md)
  - [`no-useless-recursion`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-recursion.md)
  - [`no-useless-template-literals`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-template-literals.md)
  - [`no-xor-as-exponentiation`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-xor-as-exponentiation.md)
  - [`operator-assignment`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/operator-assignment.md)
  - [`prefer-abort-signal-any`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-any.md)
  - [`prefer-abort-signal-timeout`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-timeout.md)
  - [`prefer-add-event-listener-options`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener-options.md)
  - [`prefer-aggregate-error`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-aggregate-error.md)
  - [`prefer-array-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)
  - [`prefer-array-from-async`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-async.md)
  - [`prefer-array-from-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-map.md)
  - [`prefer-array-from-range`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-range.md)
  - [`prefer-array-iterable-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-iterable-methods.md)
  - [`prefer-array-last-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-last-methods.md)
  - [`prefer-array-slice`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-slice.md)
  - [`prefer-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-await.md)
  - [`prefer-block-statement-over-iife`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-block-statement-over-iife.md)
  - [`prefer-boolean-return`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-boolean-return.md)
  - [`prefer-continue`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-continue.md)
  - [`prefer-direct-iteration`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-direct-iteration.md)
  - [`prefer-dom-node-html-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-html-methods.md)
  - [`prefer-dom-node-replace-children`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-replace-children.md)
  - [`prefer-early-return`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-early-return.md)
  - [`prefer-else-if`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-else-if.md)
  - [`prefer-flat-math-min-max`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-flat-math-min-max.md)
  - [`prefer-get-or-insert-computed`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-get-or-insert-computed.md)
  - [`prefer-global-number-constants`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-number-constants.md)
  - [`prefer-group-by`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-group-by.md)
  - [`prefer-has-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-has-check.md)
  - [`prefer-hoisting-branch-code`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-hoisting-branch-code.md)
  - [`prefer-https`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md)
  - [`prefer-identifier-import-export-specifiers`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-identifier-import-export-specifiers.md)
  - [`prefer-iterable-in-constructor`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterable-in-constructor.md)
  - [`prefer-iterator-helpers`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-helpers.md)
  - [`prefer-iterator-to-array-at-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array-at-end.md)
  - [`prefer-iterator-to-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array.md)
  - [`prefer-location-assign`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-location-assign.md)
  - [`prefer-map-from-entries`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-map-from-entries.md)
  - [`prefer-math-abs`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-abs.md)
  - [`prefer-math-constants`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-constants.md)
  - [`prefer-minimal-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-minimal-ternary.md)
  - [`prefer-number-coercion`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-coercion.md)
  - [`prefer-number-is-safe-integer`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-is-safe-integer.md)
  - [`prefer-object-define-properties`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-define-properties.md)
  - [`prefer-object-destructuring-defaults`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-destructuring-defaults.md)
  - [`prefer-object-iterable-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-iterable-methods.md)
  - [`prefer-observer-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-observer-apis.md)
  - [`prefer-path2d`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-path2d.md)
  - [`prefer-private-class-fields`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-private-class-fields.md)
  - [`prefer-promise-try`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-try.md)
  - [`prefer-promise-with-resolvers`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-with-resolvers.md)
  - [`prefer-queue-microtask`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-queue-microtask.md)
  - [`prefer-regexp-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-escape.md)
  - [`prefer-scoped-selector`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-scoped-selector.md)
  - [`prefer-set-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-methods.md)
  - [`prefer-simple-sort-comparator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-sort-comparator.md)
  - [`prefer-simplified-conditions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simplified-conditions.md)
  - [`prefer-single-array-predicate`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-array-predicate.md)
  - [`prefer-single-object-destructuring`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-object-destructuring.md)
  - [`prefer-single-replace`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-replace.md)
  - [`prefer-smaller-scope`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-smaller-scope.md)
  - [`prefer-split-limit`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md)
  - [`prefer-string-match-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-match-all.md)
  - [`prefer-string-pad-start-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-pad-start-end.md)
  - [`prefer-string-repeat`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-repeat.md)
  - [`prefer-temporal`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-temporal.md)
  - [`prefer-then-catch`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-then-catch.md)
  - [`prefer-toggle-attribute`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-toggle-attribute.md)
  - [`prefer-type-literal-last`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-literal-last.md)
  - [`prefer-uint8array-base64`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-uint8array-base64.md)
  - [`prefer-unary-minus`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unary-minus.md)
  - [`prefer-unicode-code-point-escapes`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unicode-code-point-escapes.md)
  - [`prefer-url-can-parse`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-can-parse.md)
  - [`prefer-url-href`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-href.md)
  - [`prefer-url-search-parameters`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-search-parameters.md)
  - [`prefer-while-loop-condition`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-while-loop-condition.md)
  - [`require-array-sort-compare`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-sort-compare.md)
  - [`require-css-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-css-escape.md)
  - [`require-passive-events`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-passive-events.md)
  - [`require-proxy-trap-boolean-return`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-proxy-trap-boolean-return.md)
  - [`single-line-block-comment-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/single-line-block-comment-style.md)
* Bump `eslint-plugin-jsdoc` from ^62.5.4 to ^64.2.1.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases).
  - Enable new rule [`normalize-see-links`](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/normalize-see-links.md).


# [34.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v33.3.0...v34.0.0) (2026-05-19)

### BREAKING CHANGES

* Switch to ESLint [Flat Configuration
  Files](https://eslint.org/docs/latest/use/configure/configuration-files).
* Support (and require) ESLint 9.
* Convert this package to a native ECMAScript module.
* Drop support for Node.js 21 and &lt;20.19.
* Enable rules recommended in ESLint 10
  - [`no-unassigned-vars`](https://eslint.org/docs/latest/rules/no-unassigned-vars)
  - [`no-useless-assignment`](https://eslint.org/docs/latest/rules/no-useless-assignment)
  - [`preserve-caught-error`](https://eslint.org/docs/latest/rules/preserve-caught-error)
* Enable [`n/no-sync`](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md) rule.
* Enable [`n/handle-callback-err`](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md) rule.
* Enable [`n/no-mixed-requires`](https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md) rule
* Disable built-in rules deprecated in favor of
  [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
  alternatives.
* Use [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized/).
* Use [@stylistic](https://eslint.style/) rules instead of deprecated ESLint
  formatting rules.
* Bump `eslint-plugin-unicorn` from ^56.0.0 to ^64.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases).
  - Enable new rule [`consistent-template-literal-escape`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md).
  - Enable new rule [`no-useless-iterator-to-array`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md).
  - Enable new rule [`prefer-simple-condition-first`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md).
  - Enable new rule [`switch-case-break-position`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md).
  - Enable new rule [`isolated-functions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md).
* Bump `eslint-plugin-jsdoc` from ^50.0.0 to ^62.5.4.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases).
* Bump `eslint-plugin-n` from ^17.1.0 to ^18.0.1.  See [Release
  Notes](https://github.com/eslint-community/eslint-plugin-n/releases).
* Bump `eslint-plugin-promise` from ^6.0.0 to ^7.0.0.  See [Release
  Notes](https://github.com/eslint-community/eslint-plugin-promise/releases).
* Bump `eslint-plugin-regexp` from ^2.10.0 to ^3.1.0.  See [Release
  Notes](https://github.com/ota-meshi/eslint-plugin-regexp/releases).

### Features

* Extend `eslint:recommended` ([a9716bd](https://github.com/kevinoid/eslint-config-kevinoid/commit/a9716bd6556dc8ab7a186cac2abd29da7afe1eab))
* Configure `eslint.config.js` to use `devDependencies` ([31a1095](https://github.com/kevinoid/eslint-config-kevinoid/commit/31a1095f5ea01f4f4ec6716511b309bc68e14153))
* Disable `jsdoc/reject-any-type` ([f93341b](https://github.com/kevinoid/eslint-config-kevinoid/commit/f93341b0eaf3c3977bf2bc287cd735b972fac29f))
* Implement trusted publishing from GitHub ([43f1675](https://github.com/kevinoid/eslint-config-kevinoid/commit/43f1675261b4c2789621493539a7abb0ad13701b))
* Added names to configuration objects to aid debugging ([86d70f4](https://github.com/kevinoid/eslint-config-kevinoid/commit/86d70f4b4c3ff639a8490e0569419fa48aeea456))
* **ie11:** Add es2015 globals ([488ed35](https://github.com/kevinoid/eslint-config-kevinoid/commit/488ed3563099171b537f3b1964098165d993b4c8))
* **ie11:** disable unsupported regexp features ([0532c9d](https://github.com/kevinoid/eslint-config-kevinoid/commit/0532c9d900fd7fcc120cee3227dcf4a64cc914db))
* **nodejs:** Bump `ecmaVersion` to 2025 ([e18c19b](https://github.com/kevinoid/eslint-config-kevinoid/commit/e18c19b81007435eec2442379d6ea61a85652a73))
* **nodejs:** `no-unused-modules` ignore eslint.config.js ([94a2900](https://github.com/kevinoid/eslint-config-kevinoid/commit/94a290028b178ff12b5725086c46d56a61725c5b))
* **nodejs:** set `globalReturn` based on `sourceType` ([7e6027e](https://github.com/kevinoid/eslint-config-kevinoid/commit/7e6027e9d0940b0052ed9b3454d22c8cee21c2e1))
* **wsh:** add Object.prototype to no-restricted-globals ([b518ce9](https://github.com/kevinoid/eslint-config-kevinoid/commit/b518ce91a5b4ba90ea6af07c83a68f3a34096cf4))
* **wsh:** define ES5 and WSH globals ([783bf31](https://github.com/kevinoid/eslint-config-kevinoid/commit/783bf31ca20a24cfaa0aaae344aefec698157904))

### Bug Fixes

* Change inline [@param](https://github.com/param) to [@link](https://github.com/link) ([74186fd](https://github.com/kevinoid/eslint-config-kevinoid/commit/74186fdc140191f196fc6305eb9d7d059c6f6548))
* Disable `import/no-unused-modules` for non-module ([2c87bea](https://github.com/kevinoid/eslint-config-kevinoid/commit/2c87beacd57a5ad38ad3ae00e152f9207c9c8ae8))
* `no-extra-parens` `enforceForArrowConditionals` ([5b51273](https://github.com/kevinoid/eslint-config-kevinoid/commit/5b512733da13a5f5a512040efd0532281113c29d))
* Skip unicorn `languageOptions` in `common-legacy` ([e795a43](https://github.com/kevinoid/eslint-config-kevinoid/commit/e795a4384979e7c558f0ca7aa58c2b8acd986010))
* **wsh:** don't use ie11 `no-restricted-globals` ([aeb3038](https://github.com/kevinoid/eslint-config-kevinoid/commit/aeb3038d26d6864bf2394a6c0081d1419a6f4eb3))


# [33.3.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v33.2.0...v33.3.0) (2024-12-03)

### Features

* New `@kevinoid/eslint-config/browser` configuration for modern browsers.


# [33.2.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v33.1.0...v33.2.0) (2024-11-02)

### Features

* Configure `n/no-unsupported-features/node-builtins` to allow experimental features
  ([aa803d8](https://github.com/kevinoid/eslint-config-kevinoid/commit/aa803d86d264c8ab30c21bbd9c9821d7ce10fef6))
* Configure `n/no-unsupported-features/node-builtins` to stop ignoring
  `fetch`, which is now allowed as an experimental feature
  ([aa803d8](https://github.com/kevinoid/eslint-config-kevinoid/commit/aa803d86d264c8ab30c21bbd9c9821d7ce10fef6))


# [33.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v33.0.0...v33.1.0) (2024-11-02)

### Features

* Configure `n/no-unsupported-features/node-builtins` to ignore `fetch`, due to
  unnecessary warnings about experimental status on Node.js 18-20
  ([6555383](https://github.com/kevinoid/eslint-config-kevinoid/commit/655538336b1a99cb682c235624799fdaef23e608))


# [33.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v32.0.0...v33.0.0) (2024-10-31)

### BREAKING CHANGES

* Require Node.js `^18.18.0 || ^20.9.0 || >=21.1.0` for ESLint 9 and plugins ([57c8eca](https://github.com/kevinoid/eslint-config-kevinoid/commit/57c8eca20891f86c2b4b3da0a3cd457f14c630d8))
* Enable [`no-object-constructor`](https://eslint.org/docs/latest/rules/no-object-constructor) rule ([dcc73f3](https://github.com/kevinoid/eslint-config-kevinoid/commit/dcc73f3de94f5b08f7aa9c3e4e40e4973ec208d0))
* Enable [`no-constant-binary-expression`](https://eslint.org/docs/latest/rules/no-constant-binary-expression) rule ([566df02](https://github.com/kevinoid/eslint-config-kevinoid/commit/566df0245564eac291408b321ad7a00d19edce93))
* Bump `eslint-plugin-unicorn` from ^48.0.0 to ^56.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases).
  - Enable new rule [`prefer-global-this`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md)
  - Enable new rule [`prefer-math-min-max`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md)
  - Enable new rule [`consistent-existence-index-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md)
  - Enable new rule: [`no-length-as-slice-end`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-length-as-slice-end.md)
  - Disable [`better-regex`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md), which is no longer recommended.
* Bump `eslint-plugin-jsdoc` from ^46.0.0 to ^50.0.0.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases).
* Bump `eslint-plugin-n` from ^16.0.0 to ^17.1.0.  See [Release
  Notes](https://github.com/eslint-community/eslint-plugin-n/releases).
* Bump `eslint-plugin-promise` from ^6.0.0 to ^7.0.0.  See [Release
  Notes](https://github.com/eslint-community/eslint-plugin-promise/releases).

### Features

- Bump `globals` from ^13.0.0 to ^15.0.0.  See [Release
  Notes](https://github.com/sindresorhus/globals/releases).


# [32.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v31.1.0...v32.0.0) (2023-10-20)

### BREAKING CHANGES

* Drop support for Node.js &lt;18.

### Features

* Bump `eslint-plugin-regexp` from ^1.15.0 to ^2.0.0.  See [Release
  Notes](https://github.com/ota-meshi/eslint-plugin-regexp/releases/tag/v2.0.0).
* Enable [`prefer-object-has-own`](https://eslint.org/docs/latest/rules/prefer-object-has-own) ([e743137](https://github.com/kevinoid/eslint-config-kevinoid/commit/e74313792d899e5e85c9c6f12bb80d539c69d462))
* Enable [`unicorn/prefer-at`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md) ([294d4ea](https://github.com/kevinoid/eslint-config-kevinoid/commit/294d4eaa045989e85e130abd0748fcd1ed918db3))
* Re-enable `node` env for `fetch` global ([3779eec](https://github.com/kevinoid/eslint-config-kevinoid/commit/3779eec0e1897ce32c414d49056647bb124f3755))


# [31.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v31.0.0...v31.1.0) (2023-10-01)

### Features

* Enable [`ignoreSticky`](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html#ignoresticky-boolean) for [`regexp/no-super-linear-move`](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html) ([99b5de6](https://github.com/kevinoid/eslint-config-kevinoid/commit/99b5de6b18fcbd9ebfa54bef878060eac5521870))


# [31.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v30.0.0...v31.0.0) (2023-09-06)

### Features

* Group `builtin` imports separately before others in the import order ([c1aaec3](https://github.com/kevinoid/eslint-config-kevinoid/commit/c1aaec3977448173e4f585f784772492b8eb5f23))


# [30.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v29.0.0...v30.0.0) (2023-08-17)

### BREAKING CHANGES

* Use [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) to check `RegExp`s. ([554ec3b](https://github.com/kevinoid/eslint-config-kevinoid/commit/554ec3bc8d6c97e48092ab0354f83baa523842fc))
* Bump `eslint-plugin-jsdoc` from ^43.0.0 to ^46.0.0.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases).
* Bump `eslint-plugin-n` from ^15.0.0 to ^16.0.0.  See [Release
  Notes](https://github.com/eslint-community/eslint-plugin-n/releases/tag/16.0.0).
* Bump `eslint-plugin-unicorn` from ^47.0.0 to ^48.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v48.0.0).
* Enforce import ordering and newlines ([9e9cd45](https://github.com/kevinoid/eslint-config-kevinoid/commit/9e9cd45666250927911164927363a19570321208))

### Features

* Extend `plugin:jsdoc/recommended-error` rather than converting `warn` to `error` ([6a316b9](https://github.com/kevinoid/eslint-config-kevinoid/commit/6a316b9c224d32426af9bcce415f5f0fbf53960d))


# [29.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v28.1.0...v29.0.0) (2023-05-07)

### BREAKING CHANGES

* Drop support for Node.js &lt;16.
* Enable
[`logical-assignment-operators`](https://eslint.org/docs/latest/rules/logical-assignment-operators).
* Require eslint@^8.27.0 and enable new rules
  - Enable new
    [`no-empty-static-block`](https://eslint.org/docs/latest/rules/no-empty-static-block).
  - Enable new
    [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor).
* Bump `eslint-plugin-unicorn` from ^44.0.0 to ^47.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases)
  - Enable new
    [`unicorn/no-typeof-undefined`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md).
  - Enable new
    [`unicorn/prefer-set-size`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md).
  - Enable new
    [`unicorn/prefer-blob-reading-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md).
  - Enable
    [`unicorn/prefer-event-target`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md).
  - Enable
    [`unicorn/prefer-string-replace-all`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md).
* Bump `eslint-plugin-jsdoc` from ^39.9.1 to ^43.0.0.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases)
  - [`jsdoc/newline-after-description`](https://github.com/gajus/eslint-plugin-jsdoc/tree/v41.1.2#user-content-eslint-plugin-jsdoc-rules-newline-after-description)
    was replaced by
    [`jsdoc/tag-lines`](https://github.com/gajus/eslint-plugin-jsdoc/blob/v43.2.0/docs/rules/tag-lines.md).

### Bug Fixes

* Rename `node.js` to `nodejs.js` to avoid inadvertent invocation on Windows.
  Continue to export `/node` and `/node.js` from this package for compatibility.
  ([f313889](https://github.com/kevinoid/eslint-config-kevinoid/commit/f3138894656d6089ef254753a8c8e0555faa635f))


# [28.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v28.0.0...v28.1.0) (2022-10-23)


### Features

* Disable `n/no-process-exit`
  ([5bd1dc8](https://github.com/kevinoid/eslint-config-kevinoid/commit/5bd1dc876296837d3ccc39a49af51034d6b256b0))
  which is already checked by the built-in `no-process-exit` rule.



# [28.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v27.1.1...v28.0.0) (2022-10-23)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from ^43.0.0 to ^44.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v44.0.0)
  - Enable new
    [`no-unnecessary-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md)
    rule
  - Enable new
    [`switch-case-braces`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md)
    rule to avoid unnecessary braces.

### Features

* Support Node.js >16 ([9fe3e66](https://github.com/kevinoid/eslint-config-kevinoid/commit/9fe3e66b61cd03f988a1e9f2f5b9551465353158))
* Disable `unicorn/prefer-module` for webextensions ([831eabb](https://github.com/kevinoid/eslint-config-kevinoid/commit/831eabb60b580f054b21d9d9cf6c4073c06f7174))
* Enable `unicorn/prefer-array-flat-map` in webextensions ([bcb9dce](https://github.com/kevinoid/eslint-config-kevinoid/commit/bcb9dce55eff7ee552a14973a9f94e3c628499eb))
* Ignore `import/no-unresolved` false-positives ([c10642a](https://github.com/kevinoid/eslint-config-kevinoid/commit/c10642a20135afe50ee25a7ce4374c9f6bcf97bc))



## [27.1.1](https://github.com/kevinoid/eslint-config-kevinoid/compare/v27.1.0...v27.1.1) (2022-08-24)


### Features

* Support Node.js >16 ([353e13a](https://github.com/kevinoid/eslint-config-kevinoid/commit/353e13acd72c799fd174b025147ac985e2cc8a60))



# [27.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v27.0.0...v27.1.0) (2022-07-03)

### Features

* Bump `parserOptions.ecmaVersion` to 2022
  ([7e1978d](https://github.com/kevinoid/eslint-config-kevinoid/commit/7e1978d3e0681e5007bf078616bc7942acadc0d2))


# [27.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v26.0.0...v27.0.0) (2022-07-03)

### BREAKING CHANGES

* Drop support for Node.js less than 14.18.
* Switch from
  [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node),
  to
  [eslint-plugin-n](https://github.com/weiran-zsd/eslint-plugin-node)
  (as [done by xo](https://github.com/xojs/xo/pull/660)).
* Bump `eslint-plugin-unicorn` from ^42.0.0 to ^43.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v43.0.0)
  - Enable new
    [`prefer-logical-operator-over-ternary`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md)
    rule
  - Enable new
    [`prefer-event-target`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md)
    rule.
  - Enable
    [`prefer-top-level-await`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md)
    rule.
* Update to
  [`eslint-plugin-unicorn@^43.0.0`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v33.0.0)
* Enable
  [`unicorn/prefer-node-protocol`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)


# [26.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v25.0.0...v26.0.0) (2022-05-05)

### BREAKING CHANGES

* Drop support for Node.js 12.  Require Node.js 14.14 or later.

### Features

* use parserOptions.ecmaVersion 2021 ([14611b2](https://github.com/kevinoid/eslint-config-kevinoid/commit/14611b25acd029d455e95832d2340277390da1fc))



# [25.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v24.0.0...v25.0.0) (2022-04-01)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from ^40.1.0 to ^42.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases):
  - Enable new rule
    [`text-encoding-identifier-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md).
  - Enable `es2020` env (but not `es2022` as eslint-plugin-unicorn does).
  - Enable new rule
    [`no-useless-switch-case`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md)
  - Enable new rule
    [`prefer-modern-math-apis`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md)
    (except ie11 and wsh envs, which lack these APIs)
  - Enable new rule
    [`no-unreadable-iife`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md)
  - Enable new rule
    [`prefer-native-coercion-functions`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md)
* Bump `eslint-plugin-jsdoc` from ^37.9.7 to ^38.0.3.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases)
  - `jsdoc/match-description` regular expressions now need to take account
    for trailing whitespace.

### Bug Fixes

* disable `capIsNew` `new-cap` option for WSH ([2e40bf5](https://github.com/kevinoid/eslint-config-kevinoid/commit/2e40bf50d17f65292e31eba80093bfa40eae0c66))
* disable `jsdoc/no-undefined-types` for WSH ([3d9c51d](https://github.com/kevinoid/eslint-config-kevinoid/commit/3d9c51dd8fe19087cd6ff7f02abf76b68076520c))


# [24.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v23.0.0...v24.0.0) (2022-01-03)

### BREAKING CHANGES

* Require ESLint 8.
* Enable
  [`array-bracket-newline`](https://eslint.org/docs/rules/array-bracket-newline)
  and
  [`array-element-newline`](https://eslint.org/docs/rules/array-element-newline)
  for consistent newlines in arrays.  (To match
  [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)
  and
  [`function-call-argument-newline`](https://eslint.org/docs/rules/function-call-argument-newline)
  for functions).
* Enable
  [`no-unused-private-class-members`](https://eslint.org/docs/rules/no-unused-private-class-members).
* Include `typeof` expressions in
  [`no-undef`](https://eslint.org/docs/rules/no-undef).


# [23.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v22.0.0...v23.0.0) (2021-09-15)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from ^35.0.0 to ^36.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v36.0.0):
  - Enable new rule
    [`no-useless-fallback-in-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md).
  - Enable new rule
    [`no-invalid-remove-event-listener`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md).


# [22.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v21.0.0...v22.0.0) (2021-08-04)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from ^34.0.0 to ^35.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v35.0.0):
  - Enable new rule [`prefer-object-from-entries`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md).
  - Enable new rule [`no-useless-length-check`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md).
  - Enable new rule [`no-useless-spread`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md).
* Bump `eslint-plugin-jsdoc` from ^35.0.0 to ^36.0.2.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v35.0.0).
* Require Node.js ^12.20 || ^14.14 || ^16, for eslint-plugin-jsdoc@^36.


# [21.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v20.0.0...v21.0.0) (2021-06-29)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from 33.0.1 to 34.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v34.0.0):
  - Enable new rule [`no-array-method-this-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md).
  - Enable new rule [`require-post-message-target-origin`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md).
* Disallow [`process.nextTick`](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) in [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties) in favor of [`queueMicrotask`](https://nodejs.org/api/globals.html#globals_queuemicrotask_callback) as [recommended by the Node.js API docs](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) ([a01b279](https://github.com/kevinoid/eslint-config-kevinoid/commit/a01b279d971e4460719a76f0e42fe94d8efebd1c))

### Bug Fixes

* Allow `LabeledStatement` in [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax) rule, since it is already disallowed by [`no-labels`](https://eslint.org/docs/rules/no-labels) ([9cfe4ff](https://github.com/kevinoid/eslint-config-kevinoid/commit/9cfe4ff69484433d29b405c77526e5c8f291a3b0))

### Features

* Disable [`no-continue`](https://eslint.org/docs/rules/no-continue) rule ([280ab85](https://github.com/kevinoid/eslint-config-kevinoid/commit/280ab85296d7090e3cd82745df83e99ec3e01f9b))


# [20.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v19.0.1...v20.0.0) (2021-06-07)

### BREAKING CHANGES

* Enable additional `eslint-plugin-unicorn` rules:
  - [`prefer-prototype-methods`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md).
  - [`require-number-to-fixed-digits-argument`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md)
  - [`require-array-join-separator`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md)

### Dependency Updates

* Update to
  [`eslint-plugin-unicorn@^33.0.0`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v33.0.0)

### Bug Fixes

* Match trailing comma in `max-len` `ignorePattern`
  ([aeb7825](https://github.com/kevinoid/eslint-config-kevinoid/commit/aeb78256d67c447928fba491257b61d7ccf511db))


## [19.0.1](https://github.com/kevinoid/eslint-config-kevinoid/compare/v19.0.0...v19.0.1) (2021-05-29)

### Bug Fixes

* Improve code for importing peer dependencies to fix issues when
  `require.main` is not `eslint`.
  ([d898698](https://github.com/kevinoid/eslint-config-kevinoid/commit/d89869855b7685f0437942804c8baa28a10ba15a))


# [19.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v18.0.1...v19.0.0) (2021-05-29)

### Dependency Updates

* Update to
  [`eslint-plugin-jsdoc@^35.0.0`](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v35.0.0)


## [18.0.1](https://github.com/kevinoid/eslint-config-kevinoid/compare/v18.0.0...v18.0.1) (2021-05-16)

### Features

* Configure `definedTypes` for the
  [`jsdoc/no-undefined-types`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
  rule for ECMAScript/TypeScript types which do not have a matching name in
  the global scope (e.g. `Generator`, `Iterator`, etc.).


# [18.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v17.1.0...v18.0.0) (2021-05-14)

### BREAKING CHANGES

* Drop support for Node.js 10.  Require Node.js 12 or later.
* Enable additional `eslint-plugin-unicorn` rules:
  - [`unicorn/no-document-cookie`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md)
  - [`unicorn/numeric-separators-style`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/numeric-separators-style.md)
  - [`unicorn/prefer-array-flat`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md)
  - [`unicorn/prefer-array-flat-map`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat-map.md)

### Dependency Updates

* Update to
  [`eslint-plugin-unicorn@^32.0.0`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v32.0.0)
* Update to
  [`eslint-plugin-jsdoc@^34.0.0`](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v34.0.0)


# [17.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v17.0.0...v17.1.0) (2021-05-06)

### Features

* Disable `unicorn/prefer-node-protocol` until `node:` is supported by
  `eslint-plugin-node`.
* Configure `parserOptions.ecmaVersion: 2020`, since `ecmaVersion: 2019` set
  by `plugin:node/recommended` lacks support for `import()` and
  `import.meta.url`, while `ecmaVersion: 2021` would not warn about `?.` and
  `??` on Node.js versions which don't support them.


# [17.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v16.0.0...v17.0.0) (2021-04-30)

### BREAKING CHANGES

* Enable `unicorn/prefer-module` and `unicorn/prefer-node-protocol` rules.
* Enable `import/no-unused-modules` rule for ESM packages.
* Disable `node` env for node to avoid defining globals which are only
  available in CommonJS modules.
* `parserOptions` for node are now set by `plugin:node/recommended` based
  on `package.json#type`.
* Enable `import/extensions` rule.

### Features

* Allow `eslint-plugin-node` to set `parserOptions` based on
  `package.json#type`.


# [16.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v15.0.0...v16.0.0) (2021-03-29)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from 28.0.0 to 29.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v29.0.0).
* Bump `eslint-plugin-jsdoc` from 31.6.1 to 32.0.0.  See [Release
  Notes](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v32.0.0).

### Features

* Don't `prefer-destructuring` for Array assignment ([488c10a](https://github.com/kevinoid/eslint-config-kevinoid/commit/488c10a2117b72012cea2dfa3b22b81483971658))
* Use `env` and `parserOptions` from `eslint-plugin-unicorn`, unless
  overridden.
* Use `parserOptions` `ecmaVersion: 2020` and `sourceType: script` for `node`.


# [15.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v14.1.0...v15.0.0) (2021-02-10)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from 27.0.0 to 28.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v28.0.0).
* Enable several rules marked for next major version of `airbnb-base` (since
  this package already depends on the requisite version of ESLint):
  - Enable [`default-case-last`](https://eslint.org/docs/rules/default-case-last).
  - Enable [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs).
  - Enable [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return).
  - Enable [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if).
  - Enable [`no-import-assign`](https://eslint.org/docs/rules/no-import-assign).
  - Enable [`no-loss-of-precision`](https://eslint.org/docs/rules/no-loss-of-precision).
  - Enable [`no-nonoctal-decimal-escape`](https://eslint.org/docs/rules/no-nonoctal-decimal-escape).
  - Enable [`no-promise-executor-return`](https://eslint.org/docs/rules/no-promise-executor-return).
  - Enable [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return).
  - Enable [`no-unreachable-loop`](https://eslint.org/docs/rules/no-unreachable-loop).
  - Enable [`no-unsafe-optional-chaining`](https://eslint.org/docs/rules/no-unsafe-optional-chaining).
  - Enable [`no-useless-backreference`](https://eslint.org/docs/rules/no-useless-backreference).
  - Enable [`prefer-regex-literals`](https://eslint.org/docs/rules/prefer-regex-literals).

### Features

* No prefer-exponentiation-operator for WSH ([9fb35a3](https://github.com/kevinoid/eslint-config-kevinoid/commit/9fb35a3660bf08640422974b7c54359a1c65fe33))
* Disable no-inner-declarations rule ([08493af](https://github.com/kevinoid/eslint-config-kevinoid/commit/08493afefc495a3917d33a335ebeaede68839a55))
* Disable no-loop-func for all but WSH ([2cb6e6a](https://github.com/kevinoid/eslint-config-kevinoid/commit/2cb6e6a9d992fb2a4d5d076587b738719a0226c3))
* Disable vars-on-top everywhere ([da5cd4c](https://github.com/kevinoid/eslint-config-kevinoid/commit/da5cd4c0e9a73ab5a300058aaa154896d50f60b2))


# [14.1.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v14.0.0...v14.1.0) (2021-02-01)

### Features

* Export `package.json` for [depcheck](https://github.com/depcheck/depcheck).


# [14.0.0](https://github.com/kevinoid/eslint-config-kevinoid/compare/v13.0.0...v14.0.0) (2021-01-26)

### BREAKING CHANGES

* Bump `eslint-plugin-unicorn` from 26.0.0 to 27.0.0.  See [Release
  Notes](https://github.com/sindresorhus/eslint-plugin-unicorn/releases/tag/v27.0.0).

### Features

* Disable [`jsdoc/require-yields-check`](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-yields-check)
  which conflicts with a common parameter checking idiom.

### Bug Fixes

* Handle `object` in `no-restricted-globals` config to fix IE-specific
  overrides of Airbnb configuration. ([04d9ef9](https://github.com/kevinoid/eslint-config-kevinoid/commit/04d9ef994f433aa6739205eb42e383c626e271df))
* Disable [`unicorn/no-array-for-each`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md)
  for IE, which lacks support for `for-of`.


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
