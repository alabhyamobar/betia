import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/betia/',
   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        celebrate: resolve(__dirname, "celebrate.html"),
      },
    },
  },
})