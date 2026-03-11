import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import jackAndrews from "@/assets/jack-andrews.jpg";
import AidenYoo from "@/assets/aiden-yoo.jpg";

const caseStudies = [
  {
    icon: BarChart3,
    client: "Jack Andrews",
    clientImage: jackAndrews,
    stat: "500,000 views",
    description:
      "High ticket seller who generated over 500,000 views across TikTok and Instagram Reels within the first month. Our coordinated network of clipping pages drove significant organic traffic to his offers.",
  },
  {
    icon: TrendingUp,
    client: "Aiden Yoo",
    clientImage: aidenYoo,
    stat: "500,000 views",
    description:
      "Online influencer who generated over 500,000 views across TikTok and Instagram Reels within the first month. Our coordinated network of clipping pages drove significant organic traffic to his content.",
  },
];
const Results = () => {
  return (
    <section id="results" className="py-24 px-4 bg-accent/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <img src={logo} alt="ColdClips" className="h-8 w-auto" />
            Early Results
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real outcomes from our first campaigns — no inflated numbers, just
            honest results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                {cs.clientImage ? (
                  <img
                    src={cs.clientImage}
                    alt={cs.client}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <cs.icon size={20} className="text-primary-foreground" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-foreground">{cs.client}</p>
                  <p className="text-sm font-medium text-primary">{cs.stat}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cs.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
