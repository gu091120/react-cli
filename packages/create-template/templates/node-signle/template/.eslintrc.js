module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {},
};
