import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/webpack';
import path from 'path'; // tambahkan baris ini

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 16000000000000,
    rollupOptions: {
      plugins: [
        svgr(), // Enable SVG handling
      ],
    },
  },
})
