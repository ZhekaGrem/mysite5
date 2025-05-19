// src/app/[locale]/(policies)/info/page.tsx
import { getTranslations } from 'next-intl/server';
import InfoClient from './InfoClient';
import { Metadata } from 'next';

// Use the exact signature from the Next.js documentation
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Pages.cookies' });

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
