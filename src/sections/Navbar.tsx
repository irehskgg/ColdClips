import { site } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 md:px-10"
      >
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {site.name}
        </a>
        <div className="flex items-center gap-8 text-sm text-[#1a73ff]">
          <a href="#results" className="transition-opacity hover:opacity-70">
            Client Results
          </a>
          <a href="#book" className="transition-opacity hover:opacity-70">
            Contact Us
          </a>
        </div>
        <div />
      </nav>
    </header>
  );
}
