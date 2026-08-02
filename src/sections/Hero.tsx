import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 md:px-10 pt-10 pb-10 md:pt-16 md:pb-16 text-center">
      <Reveal>
        <h1 className="mx-auto max-w-4xl text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.9]">
          Premium short-form editing.
        </h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base lg:text-lg text-muted-foreground">
          We ideate, script and edit content for brands who want to grow through organic reach.
        </p>
      </Reveal>
    </section>
  );
}
