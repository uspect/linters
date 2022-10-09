const config = {
    printWidth: 100,

    semi: true,
    useTabs: false,
    singleQuote: true,
    bracketSpacing: true,

    jsxSingleQuote: true,

    tabWidth: 2,
    endOfLine: 'auto',
    trailingComma: 'all',

    arrowParens: 'always',
    htmlWhitespaceSensitivity: 'strict',

    plugins: [
        require.resolve('@prettier/plugin-xml'),
    ],

    overrides: [
        {
            files: ['*.js'],
            options: { parser: 'babel' },
        },
        {
            files: ['*.ts'],
            options: { parser: 'typescript' },
        },
        {
            files: ['*.json', '.prettierrc', '.stylelintrc'],
            options: { parser: 'json' },
        },
        {
            files: ['package.json'],
            options: {
                parser: 'json-stringify',
                plugins: [
                    require('path').resolve(
                        __dirname,
                        'plugins',
                        'prettier-plugin-sort-package'
                    ),
                ],
            },
        },
        {
            // @prettier/plugin-xml
            files: ['*.xml'],
            options: { parser: 'xml' },
        },
        {
            files: ['*.scss'],
            options: { parser: 'scss' },
        },
        {
            files: ['*.html'],
            options: { parser: 'html' },
        },
        {
            files: ['*.svg'],
            options: { parser: 'xml' },
        },
        {
            files: ['*.yml', '*.yaml'],
            options: { parser: 'yaml', tabWidth: 2 },
        },
        {
            files: ['*.md'],
            options: { parser: 'markdown', tabWidth: 2 },
        },
    ]
};

module.exports = config;