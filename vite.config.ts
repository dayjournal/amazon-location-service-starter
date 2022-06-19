import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  define: {
    'global': {},
  },
})