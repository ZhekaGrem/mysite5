import { Variants, Transition, Target } from 'framer-motion';

// Base interfaces for different animation types
interface ViewportAnimation {
  initial: Target;
  animate: Target;
  transition: Transition;
}

interface HoverAnimation {
  whileHover: Target & {
    transition?: Transition;
  };
  whileTap?: Target;
}

interface ColorTransitionAnimation {
  transition: Transition;
}

// Viewport animations with proper typing
export const VIEWPORT_ANIMATIONS: Record<string, ViewportAnimation> = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

// Stagger animations - using proper Variants structure
export const STAGGER_ANIMATIONS = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  },
} as const;

// Hover animations
export const HOVER_ANIMATIONS: Record<string, HoverAnimation> = {
  hoverLift: {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] },
    },
    whileTap: { scale: 0.98 },
  },
  hoverRotate: {
    whileHover: {
      rotate: 2,
      scale: 1.05,
      transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] },
    },
  },
} as const;

// Color transition
export const COLOR_TRANSITION: ColorTransitionAnimation = {
  transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] },
} as const;

// Swiss geometric shape animations
export const GEOMETRIC_SHAPES: Record<string, ViewportAnimation> = {
  circle: {
    initial: { scale: 0, rotate: 0 },
    animate: { scale: 1, rotate: 360 },
    transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1] },
  },
  square: {
    initial: { scale: 0, rotate: 45 },
    animate: { scale: 1, rotate: 0 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
  line: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

// Utility function for staggered animations with proper Variants structure
export const createStaggerVariants = (
  delayMultiplier = 0.1
): {
  container: Variants;
  item: Variants;
} => ({
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: delayMultiplier,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  },
});

// Swiss-style easing functions with proper typing
export const SWISS_EASING: Record<string, readonly [number, number, number, number]> = {
  smooth: [0.215, 0.61, 0.355, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  sharp: [0.4, 0.0, 0.2, 1],
  gentle: [0.25, 0.46, 0.45, 0.94],
} as const;

// Type exports for external use
export type ViewportAnimationKey = keyof typeof VIEWPORT_ANIMATIONS;
export type HoverAnimationKey = keyof typeof HOVER_ANIMATIONS;
export type GeometricShapeKey = keyof typeof GEOMETRIC_SHAPES;
export type SwissEasingKey = keyof typeof SWISS_EASING;
