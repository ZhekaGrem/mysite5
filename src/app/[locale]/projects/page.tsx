import { getTranslations } from 'next-intl/server';
import { lazy } from 'react';
import { Metadata } from 'next';
import type { PropsPage } from '@/shared/types/Page.props';
const ProjectsClient = lazy(() => import('./ProjectsClient'));

export async function generateMetadata({ params }: PropsPage): Promise<Metadata> {
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
