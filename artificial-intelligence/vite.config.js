import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow importing the root-level `arificial-intelligence.jsx` from `src/App.jsx`.
      allow: [".."],
    },
  },
})
