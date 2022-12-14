module.exports = {
  extends: ['plugin:@typescript-eslint/eslint-recommended'],

  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
      ],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      files: ['*.ts', '*.tsx'],

      parserOptions: {
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        sourceType: 'module',
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },

      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'class-methods-use-this': 'off',
        '@typescript-eslint/member-ordering': [
          'off',
          {
            default: [
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'constructor',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
            ],
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              String: { message: 'Use string instead', fixWith: 'string' },
              Boolean: { message: 'Use boolean instead', fixWith: 'boolean' },
              Number: { message: 'Use number instead', fixWith: 'number' },
              Object: {
                message: 'Use Record<string, any> instead',
                fixWith: 'Record<string, any>',
              },
              object: {
                message: 'Use Record<string, any> instead',
                fixWith: 'Record<string, any>',
              },
            },
            extendDefaults: false,
          },
        ],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowWithDecorator: true,
            allowStaticOnly: true,
          },
        ],
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',

        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            types: ['boolean'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
          },
          {
            selector: 'variableLike',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'property',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
        ],

        '@typescript-eslint/ban-ts-comment': 'warn',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-namespace': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: true,
            classes: true,
            variables: true,
            enums: true,
            typedefs: true,
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'consistent-return': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn'],
        'import/no-duplicates': 'off',

        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
};
