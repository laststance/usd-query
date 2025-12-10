import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      exclude: ['lib'],
      include: ['src'],
      provider: 'istanbul',
      reporter: ['html', 'lcov'],
    },
    environment: 'jsdom',
    exclude: ['lib', 'node_modules'],
    globals: true,
    setupFiles: ['console-fail-test/setup'],
  },
})
