// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './tests/setup.ts',
      './__test__/jest-setup.ts'
    ],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true
  }
}));
