import noJs from "eslint-no-javascript";

export default [
    {
        files: ["**/*.js"],
        ignores: ["eslint.config.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
            parserOptions: {
                ecmaVersion: 10,
                sourceType: "module"
            },
            sourceType: "module"
        },
        plugins: {"eslint-no-javascript": noJs},
        rules: {
            "eslint-no-javascript/no-javascript": "error"
        }
    }
];
