import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                myCustomGlobal: "readonly",
            },
        },
        plugins: {
            jsdoc: jsdoc,
        },
        rules: {
            indent: ["error", 2],
            "no-unused-vars": "warn",
            //"jsdoc/require-description": "error",
            //"jsdoc/check-values": "error",
        },
    },
];
