// Alternative approach: Custom animation hooks
// src/hooks/useAnimations.js

import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Custom hook for scroll animations
export function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}

// Custom hook for staggered animations
export function useStagger(delay = 0.1) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  };
}

// Usage example:
// const { ref, controls } = useScrollAnimation();
// <motion.div ref={ref} animate={controls} variants={variants.slideFromLeft} />
