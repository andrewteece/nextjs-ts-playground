import { Footer } from "@/components/shell/Footer";
import { Navbar } from "@/components/shell/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Playground",
  description: "Sandbox for Next.js + TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground">
        {/* in <head> or top of <body> to avoid FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();`,
          }}
        />
        <Navbar />
        <main className="container py-8 animate-fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
