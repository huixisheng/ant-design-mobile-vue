module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'array-callback-return': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'prefer-destructuring': 0,
    'object-curly-newline': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
