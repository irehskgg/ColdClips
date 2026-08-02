import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const links = [
  { href: `mailto:${site.contacts.email}`, label: site.contacts.email, external: false },
  {
    href: site.contacts.instagramAgency.url,
    label: site.contacts.instagramAgency.handle,
    external: true,
  },
  {
    href: site.contacts.instagramPersonal.url,
    label: site.contacts.instagramPersonal.handle,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="book" aria-label="Contact" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 md:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
            Let's talk.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center gap-3 text-sm md:text-base text-muted-foreground">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
