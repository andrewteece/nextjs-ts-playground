export function Footer() {
  return (
    <footer className="mt-12 border-t border-border py-8 text-sm text-muted-fg">
      <div className="container flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Next Playground</p>
        <p className="opacity-80">Built with Next.js, Tailwind & Storybook</p>
      </div>
    </footer>
  );
}
