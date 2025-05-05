import { HTMLAttributes, ReactNode } from 'react';

export interface HProps extends HTMLAttributes<HTMLHeadingElement> {
  h: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  className?: string;
}

export type HeadingTagType = 'h1' | 'h2' | 'h3';
