import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// Simple config for smoke tests only
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    // Only include the smoke test
    include: ["src/tests/smoke.test.tsx"],
    exclude: ["**/node_modules/**"],
  },
});
