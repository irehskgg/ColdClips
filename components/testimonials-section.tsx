"use client"

import { TrendingUp, Eye, DollarSign } from "lucide-react"

const clients = [
  {
    name: "Jack Andrews",
    budget: "$500",
    views: "500,000",
    description: "Started with a $500 testing budget and is now on his way to 500,000 views across platforms.",
  },
  {
    name: "Adin",
    budget: "$500",
    views: "500,000",
    description: "Same story - $500 testing budget turned into massive viral distribution with 500,000 views.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-[1.1]">
            Yea, this sh*t works and here&apos;s what the{" "}
            <span className="italic text-primary">clients</span> have to say:
          </h2>
        </div>
        
        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{client.name}</h3>
                  <span className="text-sm text-muted-foreground">ColdClips Client</span>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                {client.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-xl p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Starting Budget</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{client.budget}</span>
                </div>
                <div className="bg-background/50 rounded-xl p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">Total Views</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{client.views}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Campaign Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
