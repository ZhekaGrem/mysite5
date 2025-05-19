import { getTranslations } from 'next-intl/server';
import PrivacyClient from './PrivacyClient';
import { Metadata } from 'next';
import { PropsLang } from '@/shared/types/index.types';

export async function generateMetadata({ params }: PropsLang): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Pages.privacy' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default async function PrivacyPage() {
  return <PrivacyClient />;
}
