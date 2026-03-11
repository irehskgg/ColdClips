import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const avatars = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/546522275_18292024546269961_2289333089928849984_n-aEuoFyqVN8NG0ntsWiXMTqIONKkSkG.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_459045410_1039405664643518_8788834369149958529_n-7fzRkTkeMxNJKeqHg5Exc9W7mXZJi3.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_506016514_18502979659036856_2641489261036504634_n-gB2twds1EHpG93bjAh3AXgjmMQOJmB.jpg",
]

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1]">
          Launch Your Clipping Campaign{" "}
          <span className="italic text-primary">Today</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 italic">
          Fill out the quick questionnaire to see if you qualify for the program.
        </p>
        
        <div className="mb-8">
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 text-xl rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group"
          >
            <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <div 
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
              >
                <Image
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm bg-secondary/80 px-3 py-1.5 rounded-full text-foreground">
            Many Already Joined
          </span>
        </div>
      </div>
    </section>
  )
}
