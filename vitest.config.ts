import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // cast: Next 16 ships vite (rolldown), whose plugin types diverge from the
  // vite bundled in vitest — a types-only mismatch, not a runtime one.
  plugins: [react() as never],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: false,
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      // 'lcov' produces coverage/lcov.info — the file read by SonarQube.
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.d.ts',
        'src/**/index.{ts,tsx}',
      ],
    },
  },
})
