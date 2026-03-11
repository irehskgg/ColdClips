import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "glass"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-2.5">
        {/* Logo with blue rounded background */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="ColdClips" className="h-9 w-auto" />
        </a>

        {/* Desktop nav links with dividers */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, i) => (
            <div key={link.href} className="flex items-center">
              {i > 0 && <div className="w-px h-5 bg-border mx-1" />}
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-1.5"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Button size="sm" className="rounded-full px-6 h-10 gap-1.5 text-sm font-semibold" asChild>
            <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
              Start Your Campaign <ArrowUpRight size={15} />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="rounded-full w-full mt-1 gap-1.5" asChild>
            <a href="https://whop.com/clipify-50d5/coldclips-client-onboarding/" target="_blank" rel="noopener noreferrer">
              Start Your Campaign <ArrowUpRight size={15} />
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
