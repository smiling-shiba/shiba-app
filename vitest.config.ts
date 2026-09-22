import { defineConfig } from 'vitest/config'

// environment: 'node', not 'jsdom': no component-rendering tests yet, and a
// DOM testing library (@testing-library/react, jsdom/happy-dom) is a new-package
// decision to make once there is a real component worth rendering (SA-0002+).
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
})
