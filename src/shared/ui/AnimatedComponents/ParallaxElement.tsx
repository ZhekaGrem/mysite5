'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxElement = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
}: ParallaxElementProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], ['0%', `${-speed * 100}%`]),
    down: useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]),
    left: useTransform(scrollYProgress, [0, 1], ['0%', `${-speed * 100}%`]),
    right: useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]),
  };

  const styleProps = {
    up: { y: transforms.up },
    down: { y: transforms.down },
    left: { x: transforms.left },
    right: { x: transforms.right },
  };

  return (
    <motion.div ref={ref} style={styleProps[direction]} className={className}>
      {children}
    </motion.div>
  );
};
