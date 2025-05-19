import { getTranslations } from 'next-intl/server';
import ProjectsClient from './ProjectsClient';
export async function generateMetadata(props: { params: { locale: string } }) {
  // Await the params object before destructuring
  const params = await Promise.resolve(props.params);
  const locale = params.locale;
  
  const t = await getTranslations({ locale, namespace: 'Pages.projects' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description')
    }
  };
}

export default async function ProjectsPage() {
  
  return <ProjectsClient  />;
}