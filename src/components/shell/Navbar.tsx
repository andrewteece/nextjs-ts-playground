"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight hover:opacity-90"
        >
          Next Playground
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/play" className="btn btn-muted">
            Play
          </Link>
          <Link href="/products" className="btn btn-muted">
            Products
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
