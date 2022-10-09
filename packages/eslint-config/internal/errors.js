module.exports = {
    rules: {
        'for-direction': 'error',
        'getter-return': ['error', { allowImplicit: true }],
        'no-compare-neg-zero': 'off',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'error',
        'no-constant-condition': 'warn',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'off',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'warn',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'off',
        'valid-typeof': ['error', { requireStringLiterals: true }],
        'valid-jsdoc': 'off',
        'no-await-in-loop': 'off',
        'no-extra-parens': [
            'off', 'all', {
                conditionalAssign: true,
                nestedBinaryExpressions: false,
                enforceForArrowConditionals: false,
            },
        ],
        'no-prototype-builtins': 'off',
    },
};
