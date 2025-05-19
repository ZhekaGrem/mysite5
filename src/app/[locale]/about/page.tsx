import { getTranslations } from 'next-intl/server';
import AboutClient from './AboutClient';
export async function generateMetadata(props: { params: { locale: string } }) {
  // Await the params object before destructuring
  const params = await Promise.resolve(props.params);
  const locale = params.locale;
  
  const t = await getTranslations({ locale, namespace: 'Pages.about' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description')
    }
  };
}

export default async function AboutPage() {
  
  return <AboutClient  />;
}