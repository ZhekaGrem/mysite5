import { getTranslations } from 'next-intl/server';
import InfoClient from './InfoClient';
import { Metadata } from 'next';

type Props = {
  params: {
    locale: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'Pages.cookies' });
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description')
    }
  };
}

export default function InfoPage() {
  return <InfoClient />;
}