import MockBadge from "@/components/wp/MockBadge";
import NotConfigured from "@/components/wp/NotConfigured";
import { wpFetch } from "@/lib/wp";
import { GET_PRODUCTS, GET_SITE_INFO } from "@/lib/wp-queries";
import { hasWpBackend, isMockEnabled } from "@/lib/wpEnv";
import Image from "next/image";

export const revalidate = 300;

type ProductNode = {
  id: string;
  slug: string;
  name: string;
  image?: { sourceUrl?: string; altText?: string } | null;
  price?: {
    regularPrice?: string | null;
    salePrice?: string | null;
    formatted?: string | null;
  } | null;
};

export default async function ProductsPage() {
  if (!hasWpBackend()) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <NotConfigured />
      </main>
    );
  }

  const site = await wpFetch<{ generalSettings: { title: string } }>(
    GET_SITE_INFO,
  );

  let products: ProductNode[] = [];
  let msg = "";

  try {
    const data = await wpFetch<{ products: { nodes: ProductNode[] } }>(
      GET_PRODUCTS,
      { first: 12 },
      { tags: ["wp", "products"] },
    );
    products = data.products?.nodes ?? [];
  } catch {
    msg =
      "WooCommerce GraphQL fields not found. Install WPGraphQL for WooCommerce on your WP site.";
  }

  return (
    <main className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">
          {site.generalSettings.title} — Products
        </h1>
        {isMockEnabled() && <MockBadge />}
      </div>

      {msg && <p className="text-sm text-red-600">{msg}</p>}

      {products.length ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <li key={p.id} className="rounded-xl border p-3">
              {p.image?.sourceUrl ? (
                <Image
                  src={p.image.sourceUrl}
                  alt={p.image.altText ?? p.name}
                  width={400}
                  height={300}
                  className="mb-2 rounded-lg border"
                />
              ) : null}
              <a
                href={`/products/${p.slug}`}
                className="font-medium hover:underline"
              >
                {p.name}
              </a>
              {p.price?.formatted ? (
                <div className="text-sm text-neutral-600">
                  {p.price.formatted}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        !msg && <p>No products found.</p>
      )}
    </main>
  );
}
