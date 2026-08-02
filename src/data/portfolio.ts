export interface Reel {
  src: string;
  views?: string;
}

export interface CreatorGroup {
  name: string;
  reels: Reel[];
}

export const gusReels: Reel[] = [
  {
    src: "/videos/reel1.mp4",
    views: "60K Views",
  },
  {
    src: "/videos/reel4.mov",
    views: "52K Views",
  },
  {
    src: "/videos/reel9.mov",
    views: "36K Views",
  },
];

export const tursonzzReels: Reel[] = [
  {
    src: "/videos/reel14.mov",
  },
  {
    src: "/videos/reel15.mov",
  },
];

export const karterReel: Reel = {
  src: "/videos/timeline1.mov",
};

export const results = [
  {
    stat: "500K+",
    label: "Views Generated",
  },
  {
    stat: "100+",
    label: "Videos Edited",
  },
] as const;

export const testimonials: string[] = [
  "/images/testimonial1.png",
  "/images/testimonial2.png",
  "/images/testimonial3.png",
];
