"use client"

import { Eye, TrendingUp, Zap, Flame } from "lucide-react"

const stats = [
  { views: "2.4M", label: "Views", icon: Eye, color: "text-blue-400" },
  { views: "1.1M", label: "Views", icon: TrendingUp, color: "text-green-400" },
  { views: "870K", label: "Views", icon: Zap, color: "text-yellow-400" },
  { views: "540K", label: "Views", icon: Flame, color: "text-orange-400" },
]

export function SocialProofSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results From Our Clips
          </h2>
          <p className="text-muted-foreground text-lg">
            Here's what our clipping campaigns have achieved for creators like you
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.views}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Additional stats bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="px-6">
            <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Active Clippers</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="px-6">
            <div className="text-2xl md:text-3xl font-bold text-primary">100M+</div>
            <div className="text-sm text-muted-foreground">Total Views Generated</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="px-6">
            <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Clips Per Month</div>
          </div>
        </div>
      </div>
    </section>
  )
}
