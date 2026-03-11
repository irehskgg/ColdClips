import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import Results from "@/components/Results";
import SetupSection from "@/components/SetupSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <Results />
      <SetupSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
