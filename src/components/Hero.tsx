import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 grid-pattern overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Social proof badge with team photos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 bg-card border border-border px-5 py-2.5 rounded-full text-sm font-medium mb-10 shadow-card"
        >
          <div className="flex -space-x-2">
            <img src={team1} alt="Team member" className="w-7 h-7 rounded-full object-cover border-2 border-background" />
            <img src={team2} alt="Team member" className="w-7 h-7 rounded-full object-cover border-2 border-background" />
            <img src={team3} alt="Team member" className="w-7 h-7 rounded-full object-cover border-2 border-background" />
          </div>
          <span className="text-foreground">Over 1M+ Views Generated From ColdClips</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6"
        >
          The #1 Clipping Team{" "}
          <br />
          Behind <span className="text-primary">Massive</span> Campaigns
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          ColdClips is designed to run performance based short form video campaigns.
          We are a network engineered for distribution powered by a community of
          clippers driving millions of views.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground mb-10"
        >
          ColdClips launched recently and has already generated over 1M+ views
          for creators in its first month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 text-base h-12 gap-2" asChild>
            <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
              Start Your Campaign <ArrowUpRight size={18} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base h-12 gap-2"
          >
            See How It Works <ArrowUpRight size={18} />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs text-muted-foreground mt-4"
        >
          30-minute call. No prep needed.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
