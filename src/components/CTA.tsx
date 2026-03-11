import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          Launch Your Clipping Campaign Today
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Ready to get your content in front of millions? Click below and let's
          get started.
        </p>
        <Button size="lg" className="rounded-full px-10 text-base font-semibold gap-2" asChild>
          <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
            Start Your Campaign <ArrowUpRight size={18} />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
