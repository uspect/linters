module.exports = {
  extends: ['eslint-config-airbnb-base', 'plugin:eslint-comments/recommended'],

  parser: '@babel/eslint-parser',

  settings: {
    'import/parser': '@babel/eslint-parser',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },

  plugins: ['@babel'],

  env: { es6: true },

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
    requireConfigFile: false,
  },

  rules: {
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'func-name-matching': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'default-case': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'consistent-return': 'warn',
    'vars-on-top': 'warn',

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': 'error',

    camelcase: [
      'warn',
      {
        allow: ['^UNSAFE_'],
        ignoreDestructuring: false,
        properties: 'never',
      },
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'max-depth': 'off',
    'max-params': 'off',
    'max-classes-per-file': ['error', 4],
    complexity: ['error', 25],
    'max-statements': ['error', 25],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-underscore-dangle': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
    'max-nested-callbacks': ['error', 4],
    'no-bitwise': 'warn',
    'no-useless-escape': 'warn',
    'no-await-in-loop': 'off',

    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
      'off',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
  },

  globals: {
    __static: false,
    webview: false,
    localStorage: false,
    IntervalID: false,
    TimeoutID: false,
    Class: false,
    FileReader: false,
    Event: false,
    HTMLInputElement: false,
    FormData: false,
    HTMLTextAreaElement: false,
    Element: false,
    File: false,
    fetch: false,
    __DEV__: false,
    btoa: false,
    alert: false,
    window: false,
    document: false,
    XMLHttpRequest: false,
    WebSocket: false,
  },
};
