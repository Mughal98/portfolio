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
      "Took simple clip and really turned into a valuable piece of highly engaging content. Fast and communicated well throughout.",
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

export const LOGOS_DATA = [
  {
    mainImage: "/images/logos/paySuite/main.webp",
    title: "Card Payment",
    children: [
      { url: "/images/logos/paySuite/1.webp" },
      { url: "/images/logos/paySuite/2.webp" },
      { url: "/images/logos/paySuite/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/blueBison/main.webp",
    title: "Construction Co.",
    children: [
      { url: "/images/logos/blueBison/1.webp" },
      { url: "/images/logos/blueBison/2.webp" },
      { url: "/images/logos/blueBison/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/cryptrading/main.webp",
    title: "Crypto Trading",
    children: [
      { url: "/images/logos/cryptrading/1.webp" },
      { url: "/images/logos/cryptrading/2.webp" },
      { url: "/images/logos/cryptrading/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/empathic/main.webp",
    title: "AI driven App",
    children: [
      { url: "/images/logos/empathic/1.webp" },
      { url: "/images/logos/empathic/2.webp" },
      { url: "/images/logos/empathic/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/storee/main.webp",
    title: "E-commerce",
    children: [
      { url: "/images/logos/storee/1.webp" },
      { url: "/images/logos/storee/2.webp" },
      { url: "/images/logos/storee/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/aqua/main.webp",
    title: "Mineral Water",
    children: [
      { url: "/images/logos/aqua/1.webp" },
      { url: "/images/logos/aqua/2.webp" },
      { url: "/images/logos/aqua/3.webp" },
    ],
  },
  {
    mainImage: "/images/logos/paradise/main.webp",
    title: "Pure Coffee",
    children: [
      { url: "/images/logos/paradise/1.webp" },
      { url: "/images/logos/paradise/2.webp" },
    ],
  },
  {
    mainImage: "/images/logos/nexbash/main.webp",
    title: "Tech Conference",
    children: [
      { url: "/images/logos/nexbash/1.webp" },
      { url: "/images/logos/nexbash/2.webp" },
    ],
  },
  {
    mainImage: "/images/logos/byteCash/main.webp",
    title: "Digital Wallet",
    children: [
      { url: "/images/logos/byteCash/1.webp" },
      { url: "/images/logos/byteCash/2.webp" },
    ],
  },
  {
    mainImage: "/images/logos/burgerFest/main.webp",
    title: "Festival Event",
    children: [
      { url: "/images/logos/burgerFest/1.webp" },
      { url: "/images/logos/burgerFest/2.webp" },
    ],
  },
];
