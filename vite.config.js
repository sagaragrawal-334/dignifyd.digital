import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Exclude large/locked reference video files from the file watcher
      ignored: ['**/reference/**', '**/Dignifyd Digital*/**'],
    },
  },
})
