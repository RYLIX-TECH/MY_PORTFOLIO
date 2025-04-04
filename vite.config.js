import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: false, // Disable HTTPS for development
  },
  build: {
    minify: 'esbuild', // Use esbuild for faster builds
    chunkSizeWarningLimit: 500, // Adjust chunk size warning
  },
});
