// Shared animation utilities for cleaner motion code

// Animation variants - define states for consistent animations
export const variants = {
  // Basic opacity animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },

  // Slide animations
  slideFromLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },

  slideFromRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },

  slideFromBottom: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  },

  slideFromTop: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  },

  // Fade with movement
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },

  fadeUpLarge: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },

  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },

  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },

  // Combined animations for complex movements
  slideRightScale: {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  },

  slideLeftScale: {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }
};

// Transition presets for consistent timing
export const transitions = {
  smooth: { duration: 0.8, ease: "easeOut" },
  fast: { duration: 0.6, ease: "easeOut" },
  slow: { duration: 1.2, ease: "easeOut" },
  spring: { type: "spring", stiffness: 300, damping: 20 },
  
  // Functions for delayed animations
  smoothDelayed: (delay) => ({ duration: 0.8, delay, ease: "easeOut" }),
  fastDelayed: (delay) => ({ duration: 0.6, delay, ease: "easeOut" }),
  slowDelayed: (delay) => ({ duration: 1.2, delay, ease: "easeOut" }),
  springDelayed: (delay) => ({ type: "spring", stiffness: 300, damping: 20, delay })
};

// Hover effects for interactive elements
export const hoverEffects = {
  // Button hover effects
  buttonPrimary: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" 
  },
  
  buttonSecondary: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
  },

  buttonWhite: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
  },

  // Image hover effects
  image: { 
    scale: 1.05, 
    transition: { duration: 0.3 } 
  },

  imageSubtle: { 
    scale: 1.02, 
    transition: { duration: 0.3, ease: "easeOut" } 
  },

  // Card hover effects
  card: { 
    scale: 1.03, 
    y: -5,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 } 
  },

  // Icon hover effects
  icon: { 
    scale: 1.1, 
    rotate: 5,
    transition: { duration: 0.2 } 
  }
};

// Tap effects for buttons
export const tapEffects = {
  scale: { scale: 0.95 },
  scaleSmall: { scale: 0.98 }
};

// Viewport settings for scroll animations
export const viewport = {
  once: true,
  amount: 0.3
};

export const viewportLarge = {
  once: true,
  amount: 0.1
};

// Container animations for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// For use with stagger containers
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
