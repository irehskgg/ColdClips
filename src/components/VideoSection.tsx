import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logo from "@/assets/logo.png";

const VideoSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl shadow-card border border-border p-8 max-w-[600px] w-full text-center mb-10"
        >
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
            <Play size={20} className="text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <img src={logo} alt="ColdClips" className="h-6 w-auto" />
            How ColdClips Works
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Watch this quick breakdown of how our clipping campaigns turn
            long-form content into millions of views.
          </p>
        </motion.div>

        {/* Video */}
        <motion.video
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl rounded-2xl shadow-soft"
          controls
          preload="metadata"
          src="/videos/explainer.mp4"
        />
      </div>
    </section>
  );
};

export default VideoSection;
