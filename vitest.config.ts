import { defineConfig } from 'vitest/config'

// environment: 'node', not jsdom/happy-dom: no component-rendering tests yet, and
// Phaser needs a real canvas/WebGL context to even import (SA-0002) -- no fake DOM
// provides that -- so App.test.ts mocks createGame instead. A DOM testing library
// (@testing-library/react, jsdom/happy-dom) is a separate call for once there's a
// real component worth rendering.
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
})
