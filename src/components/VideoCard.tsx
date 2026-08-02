import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  src: string;
  views?: string;
  label?: string;
}

/**
 * Vertical video card. Loads the video only when it scrolls into view to
 * keep the initial page weight down and prevent all reels playing off-screen.
 */
export function VideoCard({ src, views, label }: VideoCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="group">
      <div
        ref={wrapperRef}
        className="relative aspect-[9/16] overflow-hidden bg-muted"
      >
        {inView && (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label ?? "Portfolio reel"}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      {views && (
        <figcaption className="mt-2 text-center text-[11px] md:mt-4 md:text-sm text-muted-foreground">
          {views}
        </figcaption>
      )}
    </figure>
  );
}
