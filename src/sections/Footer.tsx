import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex items-center justify-between text-sm">
        <span className="font-semibold tracking-tight">{site.name}</span>
        <a
          href={`mailto:${site.contacts.email}`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
