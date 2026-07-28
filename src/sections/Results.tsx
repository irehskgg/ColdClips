import { Reveal } from "@/components/Reveal";
import { results, testimonials } from "@/data/portfolio";

export function Results() {
  return (
    <section id="results" aria-label="Client results" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-24 md:py-32">
        <Reveal>
          <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-[-0.03em]">
            Client Results
          </h2>
        </Reveal>
        <div className="mt-16 md:mt-20 grid grid-cols-2 gap-10 md:gap-20">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-5xl md:text-7xl font-semibold tracking-[-0.03em]">
                  {r.stat}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 md:mt-24 mx-auto max-w-xl flex flex-col items-center gap-6">
          {testimonials.map((src, i) => (
            <Reveal key={src} delay={i * 80}>
              <img
                src={src}
                alt={`Client testimonial ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full max-w-md rounded-lg"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
