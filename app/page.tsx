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
