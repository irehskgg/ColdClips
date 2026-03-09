<section className="py-24 px-6 bg-black text-white text-center">
  <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl font-bold mb-6">
      What Is <span className="text-orange-400">Clipping?</span>
    </h2>

    <p className="text-lg text-gray-300 mb-6">
      Clipping is a content growth strategy where short viral clips are
      created from long-form content like podcasts, YouTube videos,
      livestreams, or interviews.
    </p>

    <p className="text-gray-400 mb-6">
      Instead of relying on one account to post clips, a network of
      clipping channels distributes your content across TikTok,
      Instagram Reels, and YouTube Shorts — dramatically increasing
      reach and visibility.
    </p>

    <p className="text-gray-400 mb-10">
      One long video can turn into dozens of short clips that generate
      hundreds of thousands — sometimes millions — of views.
    </p>

    <div className="grid md:grid-cols-2 gap-6 text-left">

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">More Reach</h3>
        <p className="text-gray-400">
          Your content spreads across multiple accounts instead of just one.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">More Chances To Go Viral</h3>
        <p className="text-gray-400">
          Each clip becomes another opportunity to reach new audiences.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">Repurpose Content</h3>
        <p className="text-gray-400">
          Turn one long video into dozens of viral short clips.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">Organic Growth</h3>
        <p className="text-gray-400">
          Reach new viewers without spending money on ads.
        </p>
      </div>

    </div>

  </div>
</section>
  import { HeroSection } from "@/components/hero-section"
import { ApplySection } from "@/components/apply-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ApplySection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
