// src/app/products/[slug]/page.tsx
import MockBadge from "@/components/wp/MockBadge";
import NotConfigured from "@/components/wp/NotConfigured";
import { wpFetch } from "@/lib/wp";
import { GET_PRODUCT_BY_SLUG } from "@/lib/wp-queries";
import { hasWpBackend, isMockEnabled } from "@/lib/wpEnv";
import Image from "next/image";

type Product = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  image?: { sourceUrl?: string | null; altText?: string | null } | null;
  price?: {
    regularPrice?: string | null;
    salePrice?: string | null;
    formatted?: string | null;
  } | null;
} | null;

export const revalidate = 300;

export default async function ProductPage({
  params,
}: {
  // 👇 Next 15: params is a Promise you must await
  params: Promise<{ slug: string }>;
}) {
  if (!hasWpBackend()) {
    return (
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Product</h1>
        <NotConfigured />
      </main>
    );
  }

  const { slug } = await params; // 👈 await the params

  let product: Product = null;
  let msg = "";

  try {
    const data = await wpFetch<{ product: Product }>(
      GET_PRODUCT_BY_SLUG,
      { slug },
      { tags: ["wp", `product:${slug}`] },
    );
    product = data.product;
  } catch {
    msg =
      "WooCommerce GraphQL fields not found. Install WPGraphQL for WooCommerce.";
  }

  if (msg) return <div className="p-6 text-sm text-red-600">{msg}</div>;
  if (!product) return <div className="p-6">Not found.</div>;

  const p = product;
  return (
    <main className="space-y-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{p.name}</h1>
        {isMockEnabled() && <MockBadge />}
      </div>
      {p.image?.sourceUrl ? (
        <Image
          src={p.image.sourceUrl}
          alt={p.image.altText ?? p.name}
          width={800}
          height={600}
          className="rounded-xl border"
        />
      ) : null}
      {p.price?.formatted ? (
        <p className="text-lg">{p.price.formatted}</p>
      ) : null}
      {p.description ? (
        <div dangerouslySetInnerHTML={{ __html: p.description }} />
      ) : (
        <p>No description.</p>
      )}
    </main>
  );
}
