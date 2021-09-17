module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "curly": "warn",
        "eqeqeq": "warn",
        "new-cap": "warn",
        "no-undef": "warn",
        "no-use-before-define": "warn",
        "arrow-parens": "error",
        "eol-last": "error",
        "no-global-assign": "error",
        "no-redeclare": "error",
        "no-undefined": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
