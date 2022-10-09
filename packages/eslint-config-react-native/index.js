module.exports = {
  extends: ['@uspect/eslint-config-react'],

  plugins: ['react-native', 'react-native-globals'],

  rules: {
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'off',
    'newline-per-chained-call': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'warn',
  },
};
