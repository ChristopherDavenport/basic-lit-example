import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isLibraryBuild = mode === 'library' || mode === 'production'
  const isPagesBuild = mode === 'pages'
  
  return {
    base: isPagesBuild ? '/basic-lit-example/' : './',
    plugins: [],
    build: isLibraryBuild && !isPagesBuild ? {
      // Library build configuration
      outDir: 'dist',
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
    } : {
      // App build configuration for GitHub Pages
      outDir: 'dist',
      rollupOptions: {
        input: './index.html'
      },
      sourcemap: true,
      target: 'es2020'
    },
    server: {
      port: 8080
    }
  }
})
