import React from 'react';
import { HProps, HeadingTagType } from '@/shared/types/Htag.props';
import { cn } from '@/shared/lib/utils';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
// Initialize fonts
const plexSans = IBM_Plex_Sans({
  weight: ['700'],
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  weight: ['600'],
  subsets: ['latin'],
});

// Configuration for sizes and fonts
const HEADING_CONFIG: Record<
  HeadingTagType,
  {
    size: string;
    lineHeight: string;
    font: string;
    color: string;
  }
> = {
  h1: {
    size: 'text-4xl md:text-5xl lg:text-6xl ',
    lineHeight: 'leading-tight',
    font: plexSans.className,
    color: 'text-h1-light dark:text-h1-dark',
  },

  h2: {
    color: 'text-h2-light dark:text-h2-dark',
    size: 'text-2xl md:text-3xl lg:text-4xl ',
    lineHeight: 'leading-snug',
    font: plexSans.className,
  },
  h3: {
    color: 'text-h1-light dark:text-h1-dark',
    size: 'text-xl md:text-2xl',
    lineHeight: 'leading-normal',
    font: plexMono.className,
  },
} as const;

export const H = ({ h = 'h2', children, className, ...props }: HProps): React.ReactElement => {
  const Component = h;

  const headingConfig = HEADING_CONFIG[h as HeadingTagType];
  const headingClasses = cn(
    'font-medium ',
    headingConfig.size,
    headingConfig.font,
    headingConfig.color,
    headingConfig.lineHeight,
    className
  );

  return (
    <Component className={headingClasses} data-heading-level={h} {...props}>
      {children}
    </Component>
  );
};

export const isValidHeadingType = (type: string): type is HeadingTagType => {
  return ['h1', 'h2', 'h3'].includes(type);
};
