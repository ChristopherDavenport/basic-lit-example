import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  plugins: [],
  build: {
    outDir: '../dist',
    lib: {
      entry: './src/index.ts',
      name: 'BasicLitExample',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', '@lit/context', '@lit/task'],
      output: {
        globals: {
          'lit': 'lit',
          'lit/decorators.js': 'litDecorators',
          '@lit/context': 'litContext',
          '@lit/task': 'litTask'
        }
      }
    },
    sourcemap: true,
    target: 'es2020'
  },
  server: {
    port: 8080
  }
})
