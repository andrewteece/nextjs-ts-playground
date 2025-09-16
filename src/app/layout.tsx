import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js TS Playground",
  description: "Practice space for Next + React + TS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900">
        <main className="mx-auto max-w-3xl p-6 space-y-8">{children}</main>
      </body>
    </html>
  );
}
