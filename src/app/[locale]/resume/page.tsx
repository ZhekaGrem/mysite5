import { getTranslations } from 'next-intl/server';
import ResumeClient from './ResumeClient';
import { Metadata } from 'next';

import type { PropsPage } from '@/shared/types/Page.props';

export async function generateMetadata({ params }: PropsPage): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.resume' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default async function ResumePage() {
  return <ResumeClient />;
}
