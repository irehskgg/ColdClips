import { Button } from "@/components/ui/button"
import Image from "next/image"

const avatars = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/546522275_18292024546269961_2289333089928849984_n-aEuoFyqVN8NG0ntsWiXMTqIONKkSkG.jpg",
    alt: "Team member 1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_459045410_1039405664643518_8788834369149958529_n-7fzRkTkeMxNJKeqHg5Exc9W7mXZJi3.jpg",
    alt: "Team member 2"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_506016514_18502979659036856_2641489261036504634_n-gB2twds1EHpG93bjAh3AXgjmMQOJmB.jpg",
    alt: "Team member 3"
  }
]

export function ApplySection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-[1.1] text-balance">
          Apply Now Before{" "}
          <em className="italic">Clipping</em> Becomes Expensive:
        </h2>
        
        {/* CTA Button */}
        <div className="mb-8">
        <Button 
<Button 
  asChild 
  size="lg"
  className="bg-[#2300ff] hover:bg-[#1b00cc] text-white font-bold px-12 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
>  
    <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
         APPLY NOW
            </a>
          </Button>
        </div>
        
        {/* Subtext */}
        <p className="text-muted-foreground text-lg italic mb-8 max-w-xl mx-auto">
          Fill out the quick questionnaire above to see if you qualify for the program.
        </p>
        
        {/* Social Proof Avatars */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm text-foreground font-medium bg-secondary/80 px-3 py-1.5 rounded-full">
            Many Already Joined
          </span>
        </div>
      </div>
    </section>
  )
}
