import { HeroSection } from "@/components/hero-section"
import { ApplySection } from "@/components/apply-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <HeroSection />

      <video
        className="w-full max-w-4xl mx-auto rounded-xl mt-10 shadow-lg"
        controls
      >
        <source src="/25mbweb.mp4" type="video/mp4" />
      </video>

      <ApplySection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />

    </main>
  )
}
