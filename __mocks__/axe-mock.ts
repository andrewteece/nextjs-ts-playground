// Mock implementation for axe-core, used in accessibility testing
import { vi } from "vitest";

// Mock axe-core
vi.mock("axe-core", () => ({
  default: {
    run: vi.fn().mockResolvedValue({ violations: [] }),
  },
}));

// Mock the @storybook/addon-a11y
vi.mock("@storybook/addon-a11y", () => ({
  withAxe: vi.fn((storyFn) => storyFn()),
  argTypesEnhancers: [],
}));

export {};
