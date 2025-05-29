import { getTranslations } from 'next-intl/server';
import ContactClient from './ContactClient';
import { Metadata } from 'next';
import type { PropsPage } from '@/shared/types/Page.props';

export async function generateMetadata({ params }: PropsPage): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.contact' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default async function ContactPage() {
  return <ContactClient />;
}
