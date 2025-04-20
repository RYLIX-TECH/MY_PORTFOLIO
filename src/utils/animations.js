import { useMemo } from 'react';

// Animation variants for Framer Motion
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const float = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Custom hooks for optimized animations
export const useAnimationVariants = (type) => {
  return useMemo(() => {
    switch (type) {
      case 'fadeInUp':
        return fadeInUp;
      case 'scaleIn':
        return scaleIn;
      case 'slideInLeft':
        return slideInLeft;
      case 'slideInRight':
        return slideInRight;
      case 'float':
        return float;
      default:
        return fadeInUp;
    }
  }, [type]);
};

// Stagger children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
};

export const hoverLift = {
  y: -5,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
}; 