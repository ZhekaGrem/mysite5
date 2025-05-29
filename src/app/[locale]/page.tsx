import HeroSection from '@/widgets/HeroSection/HeroSection';
import AboutMeSection from '@/widgets/AboutMeSection/AboutMeSection';
import SkillsMarquee from '@/widgets/SkillsMarquee/SkillsMarquee';
import ContactsSection from '@/widgets/ContactsSection/ContactsSection';
import StatsSection from '@/widgets/StatsSection/StatsSection';

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

import type { PropsPage } from '@/shared/types/Page.props';

export async function generateMetadata({ params }: PropsPage): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Pages.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ContactsSection />

      <SkillsMarquee />
      <StatsSection />
    </>
  );
};

export default HomePage;
