import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:7255',
        changeOrigin: true,
        secure: false, // Disable SSL verification if using self-signed certificates
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
