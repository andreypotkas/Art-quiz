module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-expressions': 'off',
    'import/no-cycle': 'off',
    'comma-dangle': 'off',
  },
};
