module.exports = {
    rules: {
        'no-undef-init': 'off',
        'init-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',

        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: null,
            },
            {
                selector: "variable",
                format: ["PascalCase", "UPPER_CASE"],
                types: ["boolean"],
                prefix: ["is", "should", "has", "can", "did", "will"],
            },
            {
                selector: "variableLike",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },

            {
                selector: "parameter",
                format: ["camelCase"],
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "forbid",
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: "property",
                modifiers: ["readonly"],
                format: ["PascalCase"],
            },
            {
                selector: "enumMember",
                format: ["UPPER_CASE"],
            },
        ],
    },
};
