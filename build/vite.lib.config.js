import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
export default defineConfig({
  build: {
    sourcemap: false,
    outDir: './dist',
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: 'easy_valid',
      fileName: format => `easy_valid.${format === 'iife' ? 'min' : format}.js`,
      formats: ['es', 'umd', 'iife']
    },
    emptyOutDir: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.json'],
    alias: {
      '@': '/src/'
    }
  },
  plugins: [
    dts({
      exclude: ['node_modules']
    }),
    ViteMinifyPlugin({})
  ]
})
