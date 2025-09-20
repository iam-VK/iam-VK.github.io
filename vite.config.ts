import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages configuration
  base: '/iam-VK.github.io/',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  server: {
    host: true,
  },
})
