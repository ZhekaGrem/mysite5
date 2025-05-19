import { ButtonHTMLAttributes, ReactNode } from 'react';

export type LocaleType = 'en' | 'ua';
export type variant =
  | 'link'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'btn_primary_outline'
  | null
  | undefined;



export interface DownloadResumeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: variant;
}

export interface LangProps {
  params: {
    locale: LocaleType;
  };
}