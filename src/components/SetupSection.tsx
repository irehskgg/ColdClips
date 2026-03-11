import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Settings, Headphones, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";

const SetupSection = () => {
  return (
    <section className="py-24 px-4 grid-pattern">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            A cleaner way to launch<br />your first clipping campaign
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fast checklist for setup, launch, and weekly optimization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Why teams stay */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-card"
            >
              <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-6 flex items-center gap-2">
                <Settings size={14} className="text-primary" />
                Why Teams Stay With Us
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Settings, title: "We build the strategy", desc: "You share the vision – we build the playbook." },
                  { icon: Headphones, title: "We manage the clippers", desc: "No recruiting, no back-and-forth, no babysitting." },
                  { icon: BarChart3, title: "We optimize weekly", desc: "You get a report – we handle the rest." },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
                Choose Your Next Step
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full gap-2">
                  Book intro call <ArrowUpRight size={16} />
                </Button>
                <Button variant="outline" className="rounded-full gap-2">
                  View case studies <ArrowUpRight size={16} />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right column - checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-card"
          >
            <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-6 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-primary" />
              Practical Setup Checklist
            </p>

            <div className="mb-6">
              <p className="text-xs font-bold text-foreground tracking-wide uppercase mb-3">Bring To The Call</p>
              <div className="space-y-2.5">
                {["Your goals, offer, and point of view", "Optional: any links or content you want us to see"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-foreground tracking-wide uppercase mb-3">What We Configure</p>
              <div className="space-y-2.5">
                {[
                  "Full campaign strategy",
                  "Clipper management",
                  "Manual video review and quality check",
                  "In depth campaign reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
