import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The client lives in src/client/ (docs/scope.md), alongside src/server/
// (the Colyseus local server, SA-0003) in the same repo (D-28).
export default defineConfig({
  root: 'src/client',
  plugins: [react()],
  build: {
    outDir: '../../dist/client',
    emptyOutDir: true,
  },
})
