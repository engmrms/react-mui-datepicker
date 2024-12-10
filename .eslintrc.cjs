module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react'],
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
    rules: {
        'no-undef': 0,
        'react/prop-types': 'off', // Add this line
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
}
