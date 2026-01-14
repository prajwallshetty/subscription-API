import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    extends: [js.configs.recommended],
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    },
  },
]);
