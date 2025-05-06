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
    font: string;
  }
> = {
  h1: {
    size: 'text-7xl',
    font: plexSans.className,
  },
  h2: {
    size: 'text-5xl mb-5',
    font: plexSans.className,
  },
  h3: {
    size: 'text-3xl',
    font: plexMono.className,
  },
} as const;

export const H = ({ h = 'h2', children, className, ...props }: HProps): React.ReactElement => {
  const Component = h;

  const headingConfig = HEADING_CONFIG[h as HeadingTagType];
  const headingClasses = cn('font-medium', headingConfig.size, headingConfig.font, className);

  return (
    <Component className={headingClasses} data-heading-level={h} {...props}>
      {children}
    </Component>
  );
};

export const isValidHeadingType = (type: string): type is HeadingTagType => {
  return ['h1', 'h2', 'h3'].includes(type);
};
