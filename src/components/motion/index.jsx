// Alternative approach: Pre-configured motion components
// src/components/motion/index.jsx

import { motion } from 'framer-motion';
import { variants, transitions, hoverEffects } from '../../utils/animations';

// Pre-configured motion components
export const FadeInSection = ({ children, delay = 0, ...props }) => (
  <motion.section
    variants={variants.fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={transitions.smoothDelayed(delay)}
    {...props}
  >
    {children}
  </motion.section>
);

export const SlideFromLeft = ({ children, delay = 0, ...props }) => (
  <motion.div
    variants={variants.slideFromLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={transitions.smoothDelayed(delay)}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedButton = ({ children, variant = 'primary', onClick, ...props }) => (
  <motion.button
    whileHover={hoverEffects[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}
    whileTap={{ scale: 0.95 }}
    transition={transitions.spring}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

// Usage example:
// <FadeInSection delay={0.2}>
//   <SlideFromLeft delay={0.4}>
//     <AnimatedButton variant="primary">Click me!</AnimatedButton>
//   </SlideFromLeft>
// </FadeInSection>
