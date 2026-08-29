export const PORTFOLIO_CONFIG = {
  editPage: {
    shorts: {
      enabled: true,
      title: "Shorts/Reels Edit",
      description: "Engaging Short-form videos with Motion gfx & Animations",
    },
    longForm: {
      enabled: true,
      title: "Long/Youtube Edit",
      description:
        "In-depth storytelling and cinematic experiences for YouTube",
    },
    // NEW: Color Grade section
    colorGrade: {
      enabled: true,
      title: "Color Grade",
      description: "Cinematic color grading and visual tone transformations",
    },
  },
  designsPage: {
    // Set to false to hide "Designs" from navbar (route still works if visited directly)
    visibleInNav: false,
    designs: {
      enabled: true,
      title: "Illustration & Post",
      description:
        "Creative illustrations, Concept Art & social media post designs",
    },
    thumbnails: {
      enabled: true,
      title: "Thumbnail Designs",
      description:
        "Eye-catching thumbnails designed to maximize click-through rates",
    },
  },
  homePage: {
    showReelsCount: 6,
  },
};
