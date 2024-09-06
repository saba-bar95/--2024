import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false,
      emitWarning: true, // Set this to true to display errors and warnings in the browser console
    }),
  ],
});
