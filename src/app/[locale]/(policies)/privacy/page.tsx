import { getTranslations } from 'next-intl/server';
import PrivacyClient from './PrivacyClient';
import { Metadata } from 'next';
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.privacy' });

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
