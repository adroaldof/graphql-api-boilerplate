module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'jest'],
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  env: {
    node: true,
    'jest/globals': true,
  },
  rules: {
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
  },
};
