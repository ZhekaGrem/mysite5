'use client';

import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';
import { createStaggerVariants } from '@/shared/lib/animations';
import useViewportAnimation from '@/shared/hooks/useViewportAnimation';

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const StaggeredContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
}: StaggeredContainerProps) => {
  const { ref, isInView } = useViewportAnimation(0.1);

  // Memoize variants to prevent recreation on every render
  const variants = useMemo(() => createStaggerVariants(staggerDelay), [staggerDelay]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants.container}
      className={className}>
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  // Use static variants since no stagger delay needed for items
  const variants = useMemo(() => createStaggerVariants(), []);

  return (
    <motion.div variants={variants.item} className={className}>
      {children}
    </motion.div>
  );
};
