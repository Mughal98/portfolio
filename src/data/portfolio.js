import { getR2Url } from "@/config/cloudflare";

// ====================================
// VIDEOS - Using Cloudflare R2
// ====================================

export const SHORTS_DATA = [
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/greatDP.jpg"),
    video: getR2Url("videos/shorts/greatDP.mp4"),
    category: ["history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/andrewRibs.jpg"),
    video: getR2Url("videos/shorts/andrewRibs.mp4"),
    category: ["sports", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/kodak.jpg"),
    video: getR2Url("videos/shorts/kodak.mp4"),
    category: ["tech", "history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/netflix.jpg"),
    video: getR2Url("videos/shorts/netflix.mp4"),
    category: ["history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/neuralink.jpg"),
    video: getR2Url("videos/shorts/neuralink.mp4"),
    category: ["tech", "education", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/y2k.jpg"),
    video: getR2Url("videos/shorts/y2k.mp4"),
    category: ["tech", "history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/kante.jpg"),
    video: getR2Url("videos/shorts/kante.mp4"),
    category: ["sports", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/shadiCard.jpg"),
    video: getR2Url("videos/shorts/shadiCard.mp4"),
    category: ["lifestyle", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/appleEvent.jpg"),
    video: getR2Url("videos/shorts/appleEvent.mp4"),
    category: ["tech", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/bitChat.jpg"),
    video: getR2Url("videos/shorts/bitChat.mp4"),
    category: ["tech"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/blackBerry.jpg"),
    video: getR2Url("videos/shorts/blackBerry.mp4"),
    category: ["tech", "history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/yahoo.jpg"),
    video: getR2Url("videos/shorts/yahoo.mp4"),
    category: ["tech", "history", "animation"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/htc.jpg"),
    video: getR2Url("videos/shorts/htc.mp4"),
    category: ["tech", "history"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/est1.jpg"),
    video: getR2Url("videos/shorts/est1.mp4"),
    category: ["estate", "map"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/est2.jpg"),
    video: getR2Url("videos/shorts/est2.mp4"),
    category: ["estate", "map"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/iphone17.jpg"),
    video: getR2Url("videos/shorts/iphone17.mp4"),
    category: ["tech"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/speedGun.jpg"),
    video: getR2Url("videos/shorts/speedGun.mp4"),
    category: ["sports", "tech", "education"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/wannaCry.jpg"),
    video: getR2Url("videos/shorts/wannaCry.mp4"),
    category: ["tech", "history"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/shorts/fifa.jpg"),
    video: getR2Url("videos/shorts/fifa.mp4"),
    category: ["sports", "education"],
  },
];

export const LONG_DATA = [
  {
    thumbnail: getR2Url("videos/thumbnails/long/food.jpg"),
    video: getR2Url("videos/long/food.mp4"),
    category: ["food", "lifestyle"],
  },
  {
    thumbnail: getR2Url("videos/thumbnails/long/canGame.jpg"),
    video: getR2Url("videos/long/canGame.mp4"),
    category: ["gaming", "fun"],
  },
];

export const COLOR_GRADE_DATA = {
  raw: getR2Url("videos/color/color-raw.mp4"),
  graded: getR2Url("videos/color/color-graded.mp4"),
};

// ====================================
// IMAGES - Using Local Paths
// ====================================

export const DESIGNS_DATA = [
  { url: "/images/designs/darkFire.jpg" },
  { url: "/images/designs/dua.jpg" },
  { url: "/images/designs/cards.jpg" },
  { url: "/images/designs/darkFight.jpg" },
  { url: "/images/designs/burgerTaste.jpg" },
  { url: "/images/designs/dog.jpg" },
  { url: "/images/designs/burger1.jpg" },
  { url: "/images/designs/pizzaFired.jpg" },
];

export const THUMBNAILS_DATA = [
  { url: "/images/thumbnails-portfolio/valoComms.jpg" },
  { url: "/images/thumbnails-portfolio/hack.jpg" },
  { url: "/images/thumbnails-portfolio/islam.jpg" },
];

export const TESTIMONIALS_DATA = [
  {
    name: "Andrew",
    source: "Altum Athletics",
    image: "/images/testimonials/andrew.jpg",
    rating: 5,
    quote:
      "Simple clip and turned into a valuable piece of highly engaging content. Fast and communicated well throughout.",
  },
  {
    name: "Sufyan",
    source: "Jano Tech",
    image: "/images/testimonials/janoTech.jpg",
    rating: 5,
    quote:
      "Absolutely Fantastic! Delivered what we imagined. Visual Explaination on Point. Highly recommended!",
  },
  {
    name: "Harvey",
    source: "Talkin' Ball",
    image: "/images/testimonials/talkin.jpg",
    rating: 4,
    quote:
      "We really appreciate this dedication, We certainly value it and are delighted with your work.",
  },
  {
    name: "Regen",
    source: "Regen Valorant",
    image: "/images/testimonials/regen.jpg",
    rating: 4,
    quote:
      "Worth money! Great experience working together. Looking forward to work again in future too.",
  },
];
