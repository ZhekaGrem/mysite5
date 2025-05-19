import { getTranslations } from 'next-intl/server';
import TermsClient from './TermsClient';
import { Metadata } from 'next';
import { PropsLang } from '@/shared/types/index.types';

export async function generateMetadata({ params }: PropsLang): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Pages.terms' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default async function TermsPage() {
  return <TermsClient />;
}
