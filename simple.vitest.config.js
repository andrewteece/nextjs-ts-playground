import { defineConfig } from "vitest/config";

// Simple Vitest configuration that bypasses Storybook integration
export default defineConfig({
  test: {
    // Only include simple test files
    include: ["*.test.js", "src/tests/simple/**/*.test.{js,ts}"],
    // Use node environment to avoid jsdom dependency issues
    environment: "node",
  },
});
