import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Relative asset URLs, so the build works from any GitHub Pages sub-path.
  base: './',
  plugins: [vue()]
})
