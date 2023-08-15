// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './tests/setup.ts',
    ],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  }
}));
