import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    inspectAttr(),
    react(),
    ViteImageOptimizer({
      logStats: true,
      includePublic: true,
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
      png: { quality: 82 },
      webp: { quality: 82 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion", "gsap", "lenis"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
