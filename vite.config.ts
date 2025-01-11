import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFile, copyFile } from "fs/promises";
import type { Plugin } from "vite";

// Custom plugin to generate CNAME file and copy 404.html
const generateFiles = (): Plugin => {
  return {
    name: "generate-files",
    closeBundle: async () => {
      await writeFile("docs/CNAME", "jmoore.info");
      await copyFile("public/404.html", "docs/404.html");
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generateFiles()],
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Put all mermaid-related code into a single chunk
          if (
            id.includes("mermaid") ||
            id.includes("_baseUniq") ||
            id.includes("_basePickBy")
          ) {
            return "mermaid";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ["mermaid"],
  },
});
