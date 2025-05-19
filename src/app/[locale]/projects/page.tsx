import { getTranslations } from 'next-intl/server';
import ProjectsClient from './ProjectsClient';
import { Metadata } from 'next';
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.projects' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

export default async function ProjectsPage() {
  return <ProjectsClient />;
}
