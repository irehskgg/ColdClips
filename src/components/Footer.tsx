import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <img src={logo} alt="ColdClips" className="h-8 w-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            Viral clipping campaigns for creators.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:hello@coldclips.com"
            className="hover:text-foreground transition-colors"
          >
            hello@coldclips.com
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ColdClips. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
