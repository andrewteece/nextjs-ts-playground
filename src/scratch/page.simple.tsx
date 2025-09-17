// Simplified version of the product page for CI
import { notFound } from "next/navigation";

// Simple product page without WP integration
export default function ProductPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  // Basic validation
  if (!slug) {
    return notFound();
  }

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Product: {slug}</h1>
      <p>This is a placeholder for product {slug}</p>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-600">Product details would appear here</p>
      </div>
    </main>
  );
}
