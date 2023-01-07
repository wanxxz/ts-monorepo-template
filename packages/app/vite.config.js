import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'

export default defineConfig({
  plugins: [external(), dts({ insertTypesEntry: true })],
  resolve: {
    alias: {
      shared: 'shared/src/index.ts',
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'cjs'],
    },
  },
})
