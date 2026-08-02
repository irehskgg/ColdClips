import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Results } from "@/sections/Results";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="top">
        <Hero />
        <Portfolio />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
