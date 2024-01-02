import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Sesuaikan dengan dependensi Anda
  },
  build: {
    chunkSizeWarningLimit: 16000000000000,
  },
});
