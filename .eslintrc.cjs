module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'vitest'],
  extends: ['eslint-config-prettier'],
  settings: {
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
  rules: {
    // TypeScript rules
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],
    // Import rules
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    // Prettier (eslint-plugin-prettier v5 compatible)
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    // General rules
    eqeqeq: ['error', 'always'],
    'prefer-const': 'warn',
    // Vitest recommended rules
    'vitest/expect-expect': 'error',
    'vitest/no-identical-title': 'error',
    'vitest/no-commented-out-tests': 'error',
    'vitest/valid-title': 'error',
    'vitest/valid-expect': 'error',
    'vitest/valid-describe-callback': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
    'vitest/no-import-node-test': 'error',
  },
}
