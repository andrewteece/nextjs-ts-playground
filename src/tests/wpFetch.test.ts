import { wpFetch } from "@/lib/wp";
import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

beforeEach(() => {
  // Ensure the client doesn't short-circuit with "not configured"
  process.env.WP_GRAPHQL_ENDPOINT = "http://localhost/graphql";
  delete process.env.WP_GRAPHQL_MOCK; // make sure mock mode is OFF for these tests
});

afterAll(() => {
  delete process.env.WP_GRAPHQL_ENDPOINT;
  delete process.env.WP_GRAPHQL_MOCK;
  // @ts-expect-error reset
  global.fetch = undefined;
});

describe("wpFetch", () => {
  it("throws on HTTP error", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Server Error",
      text: () => Promise.resolve("bad"),
    });

    await expect(wpFetch("{}")).rejects.toThrow("WP request failed: 500");
  });

  it("throws on GraphQL errors", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ errors: [{ message: "Nope" }] }),
    });

    await expect(wpFetch("{}")).rejects.toThrow("WPGraphQL error: Nope");
  });
});
