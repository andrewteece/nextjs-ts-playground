import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Next.js + TS Playground</h1>
      <p>Pick a kata to practice.</p>
      <ul className="list-disc pl-6">
        <li>
          <Link href="/play">Playground: Counter & API echo</Link>
        </li>
      </ul>
    </section>
  );
}
