import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Metadata } from 'next';
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

export interface PageProps {
  params: {
    locale: LocaleType;
  };
}

export type PropsLang = {
  params: {
    locale: string;
  };
};
export type PageParams = {
  params: {
    locale: LocaleType;
  };
};

export type GenerateMetadata = (props: PageParams) => Promise<Metadata>;
