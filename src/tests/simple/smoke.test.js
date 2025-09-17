import { expect, test } from "vitest";

// Simple test file that doesn't depend on React, DOM, or any other complex dependencies
test("simple smoke test", () => {
  expect(1 + 1).toBe(2);
  expect(true).toBe(true);
  expect("Hello").toEqual("Hello");
});
