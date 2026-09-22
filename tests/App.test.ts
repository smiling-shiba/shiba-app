// No DOM rendering here on purpose: this only proves the module loads and
// exports the right shape, catching import/build errors without needing a DOM
// testing library yet. Phaser itself needs a real canvas/WebGL context to even
// import (SA-0002) -- no fake DOM (jsdom, happy-dom) provides that -- so
// createGame is mocked rather than pulling real Phaser into this test.
import { describe, expect, it, vi } from 'vitest'

vi.mock('../src/client/game/createGame.ts', () => ({
  createGame: vi.fn(),
}))

import App from '../src/client/App.tsx'

describe('App', () => {
  it('is a component', () => {
    expect(typeof App).toBe('function')
  })
})
