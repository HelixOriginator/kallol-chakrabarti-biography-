import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: This matches your repository name with the dash
  base: '/kallol-chakrabarti-biography-/',
  define: {
    // This prevents the app from crashing in the browser
    'process.env': {}
  }
})
