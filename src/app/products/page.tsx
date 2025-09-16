import { wpFetch } from "@/lib/wp";
import { GET_PRODUCTS, GET_SITE_INFO } from "@/lib/wp-queries";

export const revalidate = 300;

export default async function ProductsPage() {
  const hasEndpoint =
    !!process.env.WP_GRAPHQL_ENDPOINT || process.env.WP_GRAPHQL_MOCK === "true";

  if (!hasEndpoint) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-sm">
          WordPress is not configured. Add an endpoint to{" "}
          <code>.env.local</code>:
        </p>
        <pre className="rounded-lg border bg-neutral-50 p-3 text-sm">
          {`WP_GRAPHQL_ENDPOINT=https://your-wp-host/graphql
# or enable local mock mode:
WP_GRAPHQL_MOCK=true`}
        </pre>
      </main>
    );
  }

  const site = await wpFetch<{ generalSettings: { title: string } }>(
    GET_SITE_INFO,
  );

  let products: { id: string; slug: string; name: string }[] = [];
  let msg = "";

  try {
    const data = await wpFetch<{ products: { nodes: typeof products } }>(
      GET_PRODUCTS,
      { first: 10 },
      { tags: ["wp", "products"] },
    );
    products = data.products?.nodes ?? [];
  } catch {
    msg =
      'WPGraphQL "products" field was not found. Install WPGraphQL for WooCommerce or switch this page to query posts.';
  }

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">
        {site.generalSettings.title} — Products
      </h1>
      {msg ? (
        <p className="text-sm text-red-600">{msg}</p>
      ) : products.length ? (
        <ul className="list-disc pl-6">
          {products.map((p) => (
            <li key={p.id}>
              <a href={`/products/${p.slug}`}>{p.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </main>
  );
}
