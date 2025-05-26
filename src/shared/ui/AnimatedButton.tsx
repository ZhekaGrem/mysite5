'use client';

import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'group relative overflow-hidden border-2 border-surface-light px-8 py-4 text-lg uppercase tracking-[0.2em] text-surface-light transition-all duration-300 hover:bg-surface-light hover:text-primary-light dark:border-surface-dark dark:text-surface-dark dark:hover:bg-surface-dark dark:hover:text-primary-dark',
        link: 'text-primary underline-offset-4 hover:underline',
        btn_primary_outline:
          'group relative overflow-hidden bg-surface-light px-8 py-4 text-lg uppercase tracking-[0.2em] text-primary-light transition-all duration-300 hover:bg-transparent hover:text-surface-light dark:bg-surface-dark dark:text-primary-dark dark:hover:bg-transparent dark:hover:text-surface-dark',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface AnimatedButtonProps
  extends Omit<React.ComponentProps<'button'>, 'onAnimationStart' | 'onAnimationEnd'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withHoverEffect?: boolean;
  hoverScale?: number;
}

function AnimatedButton({
  className,
  variant,
  size,
  asChild = false,
  withHoverEffect = true,
  hoverScale = 1.05,
  children,
  ...props
}: AnimatedButtonProps) {
  if (asChild) {
    return (
      <Slot className={cn(buttonVariants({ variant, size, className }))} {...props}>
        <motion.div
          whileHover={
            withHoverEffect
              ? {
                  scale: hoverScale,
                  y: -2,
                  transition: { duration: 0.2, ease: [0.215, 0.61, 0.355, 1] },
                }
              : undefined
          }
          whileTap={withHoverEffect ? { scale: 0.95 } : undefined}>
          {children}
        </motion.div>
      </Slot>
    );
  }

  return (
    <motion.button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      whileHover={
        withHoverEffect
          ? {
              scale: hoverScale,
              y: -2,
              transition: { duration: 0.2, ease: [0.215, 0.61, 0.355, 1] },
            }
          : undefined
      }
      whileTap={withHoverEffect ? { scale: 0.95 } : undefined}
      {...(props as HTMLMotionProps<'button'>)}>
      {children}
    </motion.button>
  );
}

export { AnimatedButton, buttonVariants };
