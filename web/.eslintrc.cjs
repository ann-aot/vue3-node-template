module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser'
  },
};
