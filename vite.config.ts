// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      context: path.resolve(__dirname, './src/context'),
      hooks: path.resolve(__dirname, './src/hooks'),
      pages: path.resolve(__dirname, './src/pages'),
      providers: path.resolve(__dirname, './src/providers'),
      routes: path.resolve(__dirname, './src/routes'),
      services: path.resolve(__dirname, './src/services'),
      shared: path.resolve(__dirname, './src/shared'),
      theme: path.resolve(__dirname, './src/theme'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
