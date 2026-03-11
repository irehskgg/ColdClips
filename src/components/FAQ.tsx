import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ColdClips?",
    answer:
      "ColdClips is a clipping campaign agency that helps creators and brands scale short-form distribution. We activate a network of clippers to create and publish performance-focused edits across TikTok, Reels, and YouTube Shorts.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a short intro call. Bring yourself and your vision, and we handle strategy, launch setup, and weekly campaign execution.",
  },
  {
    question: "How quickly can my campaign launch?",
    answer:
      "Most campaigns launch within 1–2 days after our initial call. We move fast so your content starts getting distributed right away.",
  },
  {
    question: "What kind of content works best?",
    answer:
      "Long-form content like podcasts, interviews, livestreams, and vlogs work best. We find the most engaging moments and turn them into viral short-form clips.",
  },
  {
    question: "How do you measure results?",
    answer:
      "We track views, engagement, and growth across all platforms. You'll receive regular reports showing exactly how your content is performing.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-4 bg-accent/30 grid-pattern">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-block bg-foreground text-background text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know before getting started
          </p>
        </motion.div>

        {/* Stats badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {[
            { stat: "1M+", label: "Views Generated" },
            { stat: "50+", label: "Active Clippers" },
            { stat: "1–2 Days After Call", label: "Typical Launch Window" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card border border-border rounded-full px-5 py-2 flex items-center gap-2 text-sm"
            >
              <span className="font-bold text-foreground">{item.stat}</span>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-card"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base hover:no-underline gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-11">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Side info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-card"
          >
            <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-3">
              Before You Launch
            </p>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Clear answers,<br />faster decisions
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Process, fit, timeline, and pricing in one place so you can launch with confidence.
            </p>
            <div className="space-y-3">
              {[
                "Fast onboarding with campaign setup in 1–2 days after your call",
                "Multi-platform clipping across TikTok, Reels, Shorts, and X",
                "Weekly performance reports and optimization",
                "Dedicated campaign manager",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
