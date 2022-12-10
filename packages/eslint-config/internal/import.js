module.exports = {
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    'import/no-commonjs': 'off',
    'import/unambiguous': 'off',
    'import/no-deprecated': 'warn',
    'import/prefer-default-export': 'off',
    'import/default': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
  },
};
