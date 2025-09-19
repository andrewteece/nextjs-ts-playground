/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  plugins: ["testing-library", "jest-dom"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@next/next/no-img-element": "off",
  },
  overrides: [
    {
      files: ["**/*.{test,spec}.{ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:jest-dom/recommended"],
    },
  ],
  ignorePatterns: ["node_modules/", ".next/", "out/", "dist/", "coverage/"],
};
