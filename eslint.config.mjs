import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused variables error
      "@typescript-eslint/no-unused-vars": "off",
      
      // Disable no-img-element warning
      "@next/next/no-img-element": "off",
      
      // Disable var instead of let/const error
      "no-var": "off",
      
      // Disable explicit any type error
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable unescaped entities error
      "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;