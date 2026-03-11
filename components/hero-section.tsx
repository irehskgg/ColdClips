import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-xl font-bold tracking-tight text-foreground">[ColdClips]</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.1] mb-4">
          Give Us Your Content And We&apos;ll Turn It Into
          <br />
          <span className="text-foreground">&quot;Millions Of Views&quot;</span> Using Our Network
          <br />
          Of Clipping Channels...
        </h1>
        
        {/* Subheadline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 italic">
          Without Editing, Posting, or Managing Multiple Accounts.
        </p>
        
        <p className="text-xs md:text-sm font-semibold text-foreground max-w-3xl mx-auto mb-8">
          Click Below To Start Your Campaign:
        </p>
        
        {/* CTA Button */}
        <div>
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
              Start Your Campaign
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
