// src/types/metadata.ts
import { Metadata } from 'next';

export type LocaleParams = {
  params: {
    locale: string;
  };
};

export type MetadataGenerator = (props: LocaleParams) => Promise<Metadata>;
