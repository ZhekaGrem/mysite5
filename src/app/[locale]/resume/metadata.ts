// src/app/[locale]/resume/metadata.ts
import { Metadata } from 'next';
import { LocaleType } from '@/shared/types/index.types';
import { generateDynamicMetadata } from '@/shared/i18n/metadata';

export async function generateMetadata({ params }: { params: { locale: Promise<LocaleType> } }): Promise<Metadata> {
  return generateDynamicMetadata(params, 'resume');
}