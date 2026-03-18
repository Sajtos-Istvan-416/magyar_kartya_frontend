import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server:{
    proxy: {
      '/users': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true
      },
      '/api/game': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true
      }
    }
  }
})
