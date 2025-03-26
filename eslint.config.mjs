import globals from "globals";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";

export default [js.configs.recommended, {
    rules: {
        "no-var": "error",
        "no-use-before-define": "error",
        "no-useless-assignment": "error",
        "no-duplicate-imports": "error",
        "no-console": "warn"
    },
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.jquery,
            ...globals.node
        },

        parser: babelParser,
        ecmaVersion: 6,
        sourceType: "module",

        parserOptions: {
            requireConfigFile: false,
        },
    },
}];
