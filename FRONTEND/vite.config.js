import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      // simple Discord-like base64 classes name after bundle: topHead_f9h0h after css bundle
      generateScopedName: "[local]_[hash:base64:5]",
    },
  },
})
