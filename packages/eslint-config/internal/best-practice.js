module.exports = {
    rules: {
        'class-methods-use-this': ['off', { exceptMethods: [] }],
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': ['off', { commentPattern: '^no default$' }],
        'dot-notation': ['error', { allowKeywords: true }],
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'guard-for-in': 'off',
        'no-alert': 'warn',
        'no-else-return': ['off', { allowElseIf: true }],
        'no-empty-function': [
            'off', {
                allow: [
                    'arrowFunctions',
                    'functions',
                    'methods',
                ],
            },
        ],
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': ['error', { exceptions: [] }],
        'no-implicit-coercion': ['error', { boolean: true, number: true, string: true, allow: [] }],
        'no-implied-eval': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': ['error', { ignoreEOLComments: false }],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error', {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc',
                    'e',
                    'ctx',
                    'req',
                    'request',
                    'res',
                    'response',
                    '$scope',
                ],
            },
        ],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': [
            'error', {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            }, {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
        radix: 'error',
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
        yoda: 'error',
        'no-case-declarations': 'off',
        'no-div-regex': 'off',
        'no-eq-null': 'off',
        'no-native-reassign': 'off',
        'no-implicit-globals': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': [
            'off', {
                ignore: [],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false,
            },
        ],
        'no-unmodified-loop-condition': 'off',
        'no-useless-call': 'off',
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
        'require-await': 'off',
        'vars-on-top': 'off',
        'accessor-pairs': 'off',
        complexity: ['off', 11],
    },
};
