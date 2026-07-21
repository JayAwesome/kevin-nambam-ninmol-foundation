import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    cssMinify: true,
    minify: 'esbuild',
    sourcemap: false,
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: false,
  },
  preview: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: false,
  },
});
