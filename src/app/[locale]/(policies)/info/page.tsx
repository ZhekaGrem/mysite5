// src/app/[locale]/(policies)/info/page.tsx
import { Metadata } from 'next';
import InfoClient from './InfoClient';
import { getTranslations } from 'next-intl/server';
import type { PropsPage } from '@/shared/types/Page.props';

export async function generateMetadata({ params }: PropsPage): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.cookies' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default function InfoPage() {
  return <InfoClient />;
}
