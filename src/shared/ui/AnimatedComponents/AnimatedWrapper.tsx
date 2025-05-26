'use client';

import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';
import { VIEWPORT_ANIMATIONS, ViewportAnimationKey } from '@/shared/lib/animations';
import useViewportAnimation from '@/shared/hooks/useViewportAnimation';

interface AnimatedWrapperProps {
  children: ReactNode;
  animation?: ViewportAnimationKey;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedWrapper = ({
  children,
  animation = 'fadeInUp',
  delay = 0.2,
  className = '',
  threshold = 0.1,
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useViewportAnimation(threshold);

  // Memoize animation variant to prevent recreation
  const animationVariant = useMemo(() => {
    const baseVariant = VIEWPORT_ANIMATIONS[animation];
    if (!baseVariant) {
      console.warn(`Animation "${animation}" not found, falling back to fadeInUp`);
      return VIEWPORT_ANIMATIONS.fadeInUp;
    }
    return baseVariant;
  }, [animation]);

  // Memoize transition with delay
  const transitionWithDelay = useMemo(
    () => ({
      ...animationVariant.transition,
      delay,
    }),
    [animationVariant.transition, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial={animationVariant.initial}
      animate={isInView ? animationVariant.animate : animationVariant.initial}
      transition={transitionWithDelay}
      className={className}>
      {children}
    </motion.div>
  );
};
