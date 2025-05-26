'use client';

import { motion } from 'framer-motion';
import { GEOMETRIC_SHAPES } from '@/shared/lib/animations';
import useViewportAnimation from '@/shared/hooks/useViewportAnimation';
interface GeometricShapeProps {
  shape: 'circle' | 'square' | 'line';
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}

export const GeometricShape = ({
  shape,
  size = 40,
  color = 'currentColor',
  className = '',
  delay = 0,
}: GeometricShapeProps) => {
  const { ref, isInView } = useViewportAnimation(0.1);
  const shapeVariant = GEOMETRIC_SHAPES[shape];

  const shapeElements = {
    circle: (
      <motion.div
        className={`rounded-full ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        initial={shapeVariant.initial}
        animate={isInView ? shapeVariant.animate : shapeVariant.initial}
        transition={{ ...shapeVariant.transition, delay }}
      />
    ),
    square: (
      <motion.div
        className={`${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
        initial={shapeVariant.initial}
        animate={isInView ? shapeVariant.animate : shapeVariant.initial}
        transition={{ ...shapeVariant.transition, delay }}
      />
    ),
    line: (
      <motion.div
        className={`${className}`}
        style={{
          width: size,
          height: 2,
          backgroundColor: color,
          transformOrigin: 'left center',
        }}
        initial={shapeVariant.initial}
        animate={isInView ? shapeVariant.animate : shapeVariant.initial}
        transition={{ ...shapeVariant.transition, delay }}
      />
    ),
  };

  return (
    <div ref={ref} className="inline-block">
      {shapeElements[shape]}
    </div>
  );
};
