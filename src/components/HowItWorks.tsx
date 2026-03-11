import { motion } from "framer-motion";
import { Upload, Rocket, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const steps = [
  {
    icon: Upload,
    title: "Submit Your Content",
    description:
      "Send us your long-form content like podcasts, interviews, or streams.",
  },
  {
    icon: Rocket,
    title: "We Launch Clipping Campaigns",
    description:
      "Our team distributes clips across multiple clipping accounts.",
  },
  {
    icon: TrendingUp,
    title: "Go Viral",
    description:
      "Your content spreads across TikTok, Instagram Reels, and YouTube Shorts.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <img src={logo} alt="ColdClips" className="h-8 w-auto" />
            How ColdClips Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Three simple steps to get your content in front of millions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-card border border-border text-center group hover:shadow-soft transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <step.icon size={26} className="text-primary-foreground" />
              </div>
              <span className="absolute top-4 right-5 text-5xl font-black text-muted/60 select-none">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
