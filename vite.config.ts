import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({})],
  resolve: {
    alias: {
      fiskaz: path.resolve(__dirname, "./src/index.ts"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve("src/index.ts"),
      name: "fiskaz",
      fileName: (format) => `fiskaz.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "cjs",
      },
    },
  },
});
