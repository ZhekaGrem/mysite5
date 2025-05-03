import {  useTranslations } from 'next-intl';
import HeroSection from '@/widgets/HeroSection/HeroSectin'
import SwitchTheme from '@/features/SwitchTheme/SwitchTheme'


export default function Home() {
  const t = useTranslations('navigation');
  return (
    <div className=' text-green-700 dark:text-amber-600'>
      {/* <HeroSection/> */}
      
       {t('home')}
       {t('about')}
       {t('contact')}
    <SwitchTheme/>
    </div>
  );
}
