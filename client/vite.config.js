import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all API calls to localhost:8080
      '/api': {
        target: 'https://bookmyshow-5off.onrender.com',
        changeOrigin: true,
      },
    },
  },
   build: {
    // Increase the chunk size warning limit
    chunkSizeWarningLimit: 1000, // Set this to a value greater than your largest chunk
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console logs
        drop_debugger: true, // Removes debugger statements
        pure_funcs: ['eval'], // Tries to avoid eval
      },
    },
    // Prevent eval warnings by ignoring eval warnings globally (optional)
    rollupOptions: {
      output: {
        // Add additional Rollup options if needed
      },
      onwarn(warning, warn) {
        // Suppress eval warnings
        if (warning.code === 'EVAL') return;
        warn(warning); // Display other warnings as usual
      },
    },
  },
  test: {
    environment: 'jsdom',  // For testing DOM-related code or React components
    globals: true,         // Enables global test APIs like `describe`, `it`, `expect`
    include: ['src/test/**/*.test.jsx'], // Adjust to your actual test file path
  },
});

