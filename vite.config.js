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
        target: 'https://nodejs303.dszcbaross.edu.hu',
        changeOrigin: true
      },
      '/api/game': {
        target: 'https://nodejs303.dszcbaross.edu.hu',
        changeOrigin: true
      },
      '/api/admin': {
        target: 'https://nodejs303.dszcbaross.edu.hu',
        changeOrigin: true
      },
      '/api': {
        target: 'https://nodejs303.dszcbaross.edu.hu',
        changeOrigin: true
      }
    }
  }
})
