import reel1 from "@/assets/reel1.mov";
import reel4 from "@/assets/reel4.mov";
import reel9 from "@/assets/reel9.mov";
import reel14 from "@/assets/reel14.mov";
import reel15 from "@/assets/reel15.mov";
import timeline1 from "@/assets/timeline1.mp4";

import testimonial1 from "@/assets/testimonial1.png";
import testimonial2 from "@/assets/testimonial2.png";
import testimonial3 from "@/assets/testimonial3.png";

export interface Reel {
  src: string;
  views?: string;
}

export interface CreatorGroup {
  name: string;
  reels: Reel[];
}

export const creatorGroups: CreatorGroup[] = [
  {
    name: "Gus Trades",
    reels: [
      {
        src: reel1,
        views: "60K Views",
      },
      {
        src: reel4,
        views: "52K Views",
      },
      {
        src: reel9,
        views: "36K Views",
      },
    ],
  },
  {
    name: "Tursonzz",
    reels: [
      {
        src: reel14,
      },
      {
        src: reel15,
      },
    ],
  },
  {
    name: "Karter",
    reels: [
      {
        src: timeline1,
      },
    ],
  },
];

export const results = [
  {
    stat: "500K+",
    label: "Views Generated",
  },
  {
    stat: "100+",
    label: "Videos Edited",
  },
];

export const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
];
