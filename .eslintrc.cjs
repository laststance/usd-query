module.exports = {
  extends: [
    'ts-prefixer',
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:vitest/recommended',
  ],
  plugins: ['jsdoc', 'vitest'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-property': 'off',
    'jsdoc/require-returns': 'off',
  },
}
