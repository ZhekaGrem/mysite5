'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { VIEWPORT_ANIMATIONS } from '@/shared/lib/animations';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverAnimation?: 'lift' | 'rotate' | 'scale';
  colorTransition?: boolean;
}

export const HoverCard = ({
  children,
  className = '',
  hoverAnimation = 'lift',
  colorTransition = true,
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverVariants = {
    lift: VIEWPORT_ANIMATIONS.hoverLift,
    rotate: VIEWPORT_ANIMATIONS.hoverRotate,
    scale: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    },
  };

  return (
    <motion.div
      className={`${className} ${colorTransition ? 'transition-colors duration-300' : ''}`}
      {...hoverVariants[hoverAnimation]}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        ...(colorTransition &&
          isHovered && {
            backgroundColor: 'rgba(42, 157, 143, 0.1)',
          }),
      }}>
      {children}
    </motion.div>
  );
};
