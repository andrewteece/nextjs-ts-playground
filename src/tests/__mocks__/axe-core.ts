// This file mocks the axe-core library for tests
// It prevents accessibility testing from running during tests

// Mock implementation of axe-core
export const mockAxeCore = {
  run: () => Promise.resolve({ violations: [] }),
  configure: () => {},
  reset: () => {},
};

// Create a vitest mock for axe-core
vi.mock("axe-core", () => ({
  default: mockAxeCore,
}));
