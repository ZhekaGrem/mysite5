'use client';

import { ReactNode, FC, useMemo } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
import { VIEWPORT_ANIMATIONS, ViewportAnimationKey } from '@/shared/lib/animations';
import { GeometricShape } from './AnimatedComponents';
import useViewportAnimation from '@/shared/hooks/useViewportAnimation';

// Define props that are safe to pass to motion.section
interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  animation?: ViewportAnimationKey;
  showGeometricAccents?: boolean;
  accentColor?: string;
  delay?: number;
  // Only include HTML props that don't conflict with Framer Motion
  style?: React.CSSProperties;
  'data-testid'?: string;
  role?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({
  id,
  children,
  className,
  animation = 'fadeInUp',
  showGeometricAccents = false,
  accentColor = 'rgb(42, 157, 143)',
  delay = 0,
  style,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}): React.ReactElement => {
  const { ref, isInView } = useViewportAnimation(0.1);

  // Memoize animation variant to prevent recreation
  const animationVariant = useMemo(() => {
    const variant = VIEWPORT_ANIMATIONS[animation];
    if (!variant) {
      console.warn(`Animation "${animation}" not found, falling back to fadeInUp`);
      return VIEWPORT_ANIMATIONS.fadeInUp;
    }
    return variant;
  }, [animation]);

  // Memoize transition with delay
  const transitionWithDelay = useMemo(
    () => ({
      ...animationVariant.transition,
      delay,
    }),
    [animationVariant.transition, delay]
  );

  // Safe props for motion.section
  const motionProps: HTMLMotionProps<'section'> = {
    id,
    ref,
    initial: animationVariant.initial,
    animate: isInView ? animationVariant.animate : animationVariant.initial,
    transition: transitionWithDelay,
    className: cn('relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden', className),
    style,
    role,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    tabIndex,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
  };

  return (
    <motion.section {...motionProps}>
      {/* Geometric Accents */}
      {showGeometricAccents && (
        <>
          {/* Top left accent */}
          <div className="absolute -left-8 top-8 opacity-20">
            <GeometricShape shape="circle" size={60} color={accentColor} delay={delay + 0.2} />
          </div>

          {/* Top right accent */}
          <div className="absolute -right-4 top-16 opacity-30">
            <GeometricShape shape="square" size={40} color={accentColor} delay={delay + 0.4} />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-8 right-1/4 opacity-40">
            <GeometricShape shape="line" size={120} color={accentColor} delay={delay + 0.6} />
          </div>
        </>
      )}

      {children}
    </motion.section>
  );
};

export default AnimatedSection;
