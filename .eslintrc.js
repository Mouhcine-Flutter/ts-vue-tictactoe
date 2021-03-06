module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
};
