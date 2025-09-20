import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages configuration - using root since /docs is served as root
  base: '/',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  server: {
    host: true,
  },
})
