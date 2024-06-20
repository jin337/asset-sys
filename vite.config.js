import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import compression from 'vite-plugin-compression'
import postcssPresetEnv from 'postcss-preset-env'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5174,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      src: resolve('src'),
      assets: resolve('src/assets'),
      views: resolve('src/views')
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer(), postcssPresetEnv()]
    }
  },
  plugins: [
    react(),
    compression({ threshold: 10240 }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk/[name]-[hash].js',
        entryFileNames: 'assets/chunk/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom', 'react-router-dom', 'douyinfe']
        }
      }
    }
  }
})
