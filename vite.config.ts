import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/configuration/',
  build: {
    outDir: 'dist/configuration',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        configuration: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})