import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(() => ({
  plugins: [react(), tsconfigPaths(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './tests/setup.ts',
    ],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true
  },
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
}));
