module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/hooks',
    'prettier/react',
  ],

  settings: {
    react: {
      version: 'detect',
    },

    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  env: {
    browser: true,
  },

  plugins: ['react', 'react-hooks'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        'react/prop-types': [
          'error',
          { ignore: [], customValidators: [], skipUndeclared: false },
        ],
      },
    },
  ],

  rules: {
    'react/no-unsafe': ['warn', { checkAliases: true }],
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    'react/prop-types': 'warn',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/destructuring-assignment': 'off',
    'react/jsx-key': 'error',
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],
    'react/require-default-props': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/state-in-constructor': 'off',

    'react/sort-comp': [
      'off',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'componentDidCatch',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: true,
        reservedFirst: false,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],

    'react/jsx-boolean-value': ['off', 'never', { always: [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-no-bind': [
      'off',
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
    'react/jsx-uses-vars': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-render-return-value': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-danger-with-children': 'error',
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/void-dom-elements-no-children': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'error',
    'react/no-typos': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/jsx-no-literals': ['off', { noStrings: true }],
    'react/sort-prop-types': [
      'off',
      { ignoreCase: true, callbacksLast: false, requiredFirst: true },
    ],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-will-update-set-state': 'off',
    'react/no-set-state': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/forbid-elements': ['off', { forbid: [] }],
    'react/jsx-space-before-closing': ['off', 'always'],
    'react/no-array-index-key': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'jsx-quotes': [2, 'prefer-single'],

    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    'react/no-multi-comp': ['off', { ignoreStateless: true }],
  },
};
