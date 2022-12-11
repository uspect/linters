module.exports = {
  extends: [
    './internal/base',
    './internal/sort-class-members',
    './internal/import',
    './internal/promise',
    './internal/errors',
    './internal/test-files',
    './internal/best-practice',
    './internal/typescript',
    // './internal/prettier',
    './internal/variables',
  ],

  env: {
    browser: true,
    node: true,
  },
};
