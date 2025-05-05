// import {  useTranslations } from 'next-intl';
import HeroSection from '@/widgets/HeroSection/HeroSectin'
// import SwitchTheme from '@/features/SwitchTheme/SwitchTheme'
// import SwitchLang from '@/features/SwitchLang/SwitchLang'


export default function Home() {
  // const t = useTranslations('navigation');
  return (
    <div className=' min-h-screen'>
      <HeroSection/>
    </div>
  );
}
