import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'

export default defineConfig({
  plugins: [external(), dts({ insertTypesEntry: true })],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
  },
})
