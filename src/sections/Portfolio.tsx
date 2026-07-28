import { Reveal } from "@/components/Reveal";
import { VideoCard } from "@/components/VideoCard";
import { gusReels, karterReel, tursonzzReels } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32"
    >
      <Reveal>
        <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Gus Trades
        </h2>
      </Reveal>
      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {gusReels.map((reel, i) => (
          <Reveal key={reel.src} delay={i * 100}>
            <VideoCard src={reel.src} views={reel.views} label={`Gus Trades reel ${i + 1}`} />
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-3xl mt-10 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
          <Reveal className="sm:col-span-2">
            <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">
              Tursonzz
            </h2>
          </Reveal>
          <Reveal>
            <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-tight">
              Karter
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {tursonzzReels.map((reel, i) => (
            <Reveal key={reel.src} delay={i * 100}>
              <VideoCard src={reel.src} label={`Tursonzz reel ${i + 1}`} />
            </Reveal>
          ))}
          <Reveal delay={200}>
            <VideoCard src={karterReel.src} label="Karter reel" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
