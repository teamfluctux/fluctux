import globals from "globals";
import tseslint from "typescript-eslint";
import js from "@eslint/js"; 

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,     
  ...tseslint.configs.recommended,
];
