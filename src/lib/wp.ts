// src/lib/wp.ts
const MOCK = process.env.WP_GRAPHQL_MOCK === "true";

export async function wpFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  opts?: { revalidate?: number; tags?: string[] },
): Promise<T> {
  // Lightweight mock mode for local development without a WP backend.
  if (MOCK) {
    return mockResponse<T>(query, variables);
  }

  const endpoint = process.env.WP_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error(
      "WP not configured: set WP_GRAPHQL_ENDPOINT or enable WP_GRAPHQL_MOCK=true",
    );
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    next: { revalidate: opts?.revalidate ?? 300, tags: opts?.tags ?? ["wp"] },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `WP request failed: ${res.status} ${res.statusText} ${text}`,
    );
  }

  const json = await res.json();
  if (json?.errors?.length) {
    const first = json.errors[0];
    throw new Error(`WPGraphQL error: ${first?.message ?? "unknown error"}`);
  }

  return json.data as T;
}

/**
 * Super-light mock responses so pages work without a WordPress backend.
 * Extend this as needed to cover more queries.
 */
function mockResponse<T>(query: string, vars?: Record<string, unknown>): T {
  const q = query.replace(/\s+/g, " ").toLowerCase();

  // Site info (always safe)
  if (q.includes("query siteinfo")) {
    return {
      generalSettings: { title: "Mock WP Site", description: "Local mock" },
    } as unknown as T;
  }

  // Products list (placeholder shape; swap to Woo fields when backend is ready)
  if (q.includes("query products")) {
    return {
      products: {
        nodes: [
          { id: "p1", slug: "alpha", name: "Alpha" },
          { id: "p2", slug: "beta", name: "Beta" },
        ],
      },
    } as unknown as T;
  }

  // Product by slug
  if (q.includes("query productbyslug")) {
    const slug = (vars?.slug as string) ?? "alpha";
    return {
      product: {
        id: "p1",
        slug,
        name: slug === "beta" ? "Beta (Mock)" : "Alpha (Mock)",
        description: "<p>Mock description</p>",
        image: null,
      },
    } as unknown as T;
  }

  // Default empty-ish response
  return {} as T;
}
