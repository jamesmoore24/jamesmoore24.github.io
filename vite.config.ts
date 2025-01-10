import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFile } from "fs/promises";
import type { Plugin } from "vite";

// Custom plugin to generate CNAME file
const generateCNAME = (): Plugin => {
  return {
    name: "generate-cname",
    closeBundle: async () => {
      await writeFile("docs/CNAME", "jmoore.info");
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generateCNAME()],
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
