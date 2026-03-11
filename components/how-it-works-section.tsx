"use client"

import { Upload, Scissors, Share2, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Send Your Content",
    description: "Simply send us your long-form videos or raw content. We handle everything from there.",
    step: "01",
  },
  {
    icon: Scissors,
    title: "We Create Viral Clips",
    description: "Our team identifies the best moments and creates engaging short-form clips optimized for virality.",
    step: "02",
  },
  {
    icon: Share2,
    title: "Mass Distribution",
    description: "We distribute your clips across our network of accounts on TikTok, Reels, and YouTube Shorts.",
    step: "03",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting millions of views has never been easier. Here's our simple 3-step process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-16 left-full w-full items-center justify-center z-0">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                )}
                
                <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors duration-300">
                        {step.step}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
