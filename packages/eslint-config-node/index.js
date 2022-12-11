module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
  },

  env: {
    node: true,
  },

  rules: {
    indent: ['error', 4],
    'no-console': 'warn',
    'arrow-body-style': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'],
    'func-names': 'off',
    'no-param-reassign': 'warn',
    eqeqeq: 'warn',
    radix: 'warn',
    'no-return-await': 'warn',
    'import/order': 'warn',
    'global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'handle-callback-err': 'off',
    'no-mixed-requires': ['off', false],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'callback-return': 'off',
  },
};
