import reel1 from "@/assets/reel1.mov.asset.json";
import reel4 from "@/assets/reel4.mov.asset.json";
import reel9 from "@/assets/reel9.mov.asset.json";
import reel14 from "@/assets/reel14.mov.asset.json";
import reel15 from "@/assets/reel15.mov.asset.json";
import timeline1 from "@/assets/timeline1.mp4.asset.json";
import testimonial1 from "@/assets/testimonial1.png.asset.json";
import testimonial2 from "@/assets/testimonial2.png.asset.json";
import testimonial3 from "@/assets/testimonial3.png.asset.json";

export interface Reel {
  src: string;
  views?: string;
}

export interface CreatorGroup {
  name: string;
  reels: Reel[];
}

export const gusReels: Reel[] = [
  { src: reel1.url, views: "60K Views" },
  { src: reel4.url, views: "52K Views" },
  { src: reel9.url, views: "36K Views" },
];

export const tursonzzReels: Reel[] = [{ src: reel14.url }, { src: reel15.url }];

export const karterReel: Reel = { src: timeline1.url };

export const results = [
  { stat: "500K+", label: "Views Generated" },
  { stat: "100+", label: "Videos Edited" },
] as const;

export const testimonials: string[] = [
  testimonial1.url,
  testimonial2.url,
  testimonial3.url,
];
