import { wpFetch } from "@/lib/wp";
import { GET_PRODUCT_BY_SLUG } from "@/lib/wp-queries";

type ProductQuery = {
  product: {
    id: string;
    slug: string;
    name: string;
    description?: string;
    image?: { sourceUrl?: string; altText?: string };
  } | null;
};

export const revalidate = 300;

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const hasEndpoint =
    !!process.env.WP_GRAPHQL_ENDPOINT || process.env.WP_GRAPHQL_MOCK === "true";
  if (!hasEndpoint) {
    return (
      <div className="p-6">
        Not configured. Set WP_GRAPHQL_ENDPOINT or WP_GRAPHQL_MOCK=true.
      </div>
    );
  }

  const data = await wpFetch<ProductQuery>(
    GET_PRODUCT_BY_SLUG,
    { slug: params.slug },
    { tags: ["wp", `product:${params.slug}`] },
  );

  if (!data.product) return <div className="p-6">Not found.</div>;

  const p = data.product;
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold">{p.name}</h1>
      {p.description ? (
        <div dangerouslySetInnerHTML={{ __html: p.description }} />
      ) : (
        <p>No description.</p>
      )}
    </main>
  );
}
