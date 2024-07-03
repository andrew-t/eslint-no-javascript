import eslintPluginExample from "./index.js";

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
        plugins: {"example": eslintPluginExample},
        rules: {
            "example/no-javascript": "error"
        }
    }
];
