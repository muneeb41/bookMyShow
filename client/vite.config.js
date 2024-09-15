import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all API calls to localhost:8080
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'jsdom',  // For testing DOM-related code or React components
    globals: true,         // Enables global test APIs like `describe`, `it`, `expect`
    include: ['src/test/**/*.test.jsx'], // Adjust to your actual test file path
  },
});

