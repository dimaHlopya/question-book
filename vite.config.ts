import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@router': path.resolve(__dirname, './src/router'),
      '@services': path.resolve(__dirname, './src/services'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@customTypes': path.resolve(__dirname, './src/customTypes'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@guard': path.resolve(__dirname, './src/guard'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
});
