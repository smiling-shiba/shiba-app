// No DOM here on purpose (see vitest.config.ts): this only proves the module
// loads and exports the right shape, catching import/build errors without
// needing a DOM testing library yet.
import { describe, expect, it } from 'vitest'
import App from '../src/client/App.tsx'

describe('App', () => {
  it('is a component', () => {
    expect(typeof App).toBe('function')
  })
})
