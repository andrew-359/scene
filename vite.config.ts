import { defineConfig } from "vite"
import circleDependency from "vite-plugin-circular-dependency"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    circleDependency({
      outputFilePath: `./circleDep`,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(`./src`, import.meta.url))
    }
  },
})


