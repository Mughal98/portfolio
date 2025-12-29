// Animation configuration - adjust these values to control speed globally
export const ANIMATION_CONFIG = {
  // Page transitions
  pageTransition: {
    duration: 0.8, // Increase for slower (default: 0.6)
    ease: "easeOut",
  },

  // Fade in animations
  fadeIn: {
    duration: 0.8, // Increase for slower (default: 0.6)
    ease: "easeOut",
  },

  // Grid stagger effect
  stagger: {
    staggerChildren: 0.1, // Time between each item (increase for slower)
    delayChildren: 0.4, // Delay before starting
  },

  // Individual grid items
  gridItem: {
    duration: 0.6, // Increase for slower
    ease: "easeOut",
  },

  // Hover animations
  hover: {
    scale: 1.05,
    duration: 0.3,
  },

  // Tap/click animations
  tap: {
    scale: 0.95,
    duration: 0.2,
  },

  // Hero section
  hero: {
    duration: 1, // Slower for dramatic effect
    delay: 0.3,
  },
};

// Reusable animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: ANIMATION_CONFIG.fadeIn,
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: ANIMATION_CONFIG.fadeIn,
  },
};

export const staggerContainer = {
  animate: {
    transition: ANIMATION_CONFIG.stagger,
  },
};

export const gridItem = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: ANIMATION_CONFIG.gridItem,
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: ANIMATION_CONFIG.fadeIn,
  },
};
