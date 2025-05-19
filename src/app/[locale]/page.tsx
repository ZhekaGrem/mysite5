import HeroSection from '@/widgets/HeroSection/HeroSection';
import Section from '@/shared/ui/Section';
import Image from 'next/image';
import { H } from '@/shared/ui/Htag';
import Marquee from 'react-fast-marquee';
import { Button } from '@/shared/ui/button';
import DownloadResumeButton from '@/shared/ui/DownloadResumeButton/DownloadResumeButton';
import Link from 'next/link';
import { Download, ArrowBigRightDash } from 'lucide-react';

import {
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JestIcon,
  JQueryIcon,
  JsIcon,
  MongodbIcon,
  NextIcon,
  PhpIcon,
  PostgreIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
  RedisIcon,
} from '@/shared/ui/icons/index';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(props: { params: { locale: string } }) {
  // Await the params object before destructuring
  const params = await Promise.resolve(props.params);
  const locale = params.locale;
  
  const t = await getTranslations({ locale, namespace: 'Pages.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description')
    }
  };
}

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Section className="overflow-visible">
        <div className="grid w-full grid-cols-4 gap-4">
          {/* 1 рядок, 3 стовпці об'єднані в 1 блок */}
          <div className="relative col-span-2 row-span-3 justify-items-center">
            {/* <Image src='/assets/myphoto.jpg' alt='myphoto' width={500} height={1000} className='  object-contain absolute -top-5 -left-5 -z-10'/>
         <Image src='/assets/myphoto.jpg' alt='myphoto' width={500} height={1000} className='  object-contain absolute top-10 left-10 -z-10'/> */}
            <Image
              src="/assets/myphoto.jpg"
              alt="myphoto"
              width={500}
              height={1000}
              className="z-10 h-auto object-contain"
            />
          </div>
          <div className="col-span-2 p-4">
            <H h="h2">About me</H>
            <p>Розробник з 4-річним досвідом створення високопродуктивних веб-рішень.</p>
            <p>
              Спеціалізуюсь на розробці реактивних інтерфейсів з використанням React.js, Next.js і TypeScript,
              що забезпечують відмінний користувацький досвід.
            </p>
            <p>
              Ключова цінність моєї роботи – поєднання технічної майстерності з розумінням бізнес-цілей, що
              дозволяє створювати не просто красиві, але й функціональні рішення, які підвищують конверсію та
              залученість користувачів.
            </p>
          </div>

          {/* 2 рядок, 1 стовпець (об'єднаний з 3 рядком, 1 стовпець) */}

          {/* 2 рядок, 2 стовпець (окремий) */}
          <div className="p-4">
            <H h="h3">Languages</H>
            <ul className="space-y-2 pt-5">
              <li>Ukrainian</li>
              <li>English</li>
              <li>Polish</li>
            </ul>
          </div>

          {/* 2 рядок, 3 стовпець (об'єднаний з 3 рядком, 3 стовпець) */}
          <div className="row-span-2 p-4">
            <H h="h3">Переваги співпраці зі мною</H>
            <ul className="space-y-3 pt-5">
              <li>Технічна експертиза</li>
              <li>Швидка адаптація </li>
              <li>Комплексні рішення </li>
              <li>Орієнтація на результат </li>
              <li>Комунікація </li>
            </ul>
          </div>

          {/* 3 рядок, 2 стовпець */}
          <div className="p-4">
            <H h="h3">МОЄ Резуме</H>
            <div className="pt-5">
              <DownloadResumeButton variant="ghost" className="items-center p-5">
                скачати <Download size={20} />{' '}
              </DownloadResumeButton>
            </div>
          </div>
        </div>
      </Section>

      <MarqueeSkills />
      <Contacts />
    </>
  );
};

const Contacts = () => {
  return (
    <Section className="my-10">
      <H h="h2">Звязатись зі мною</H>
      <p className="text-white-200 my-5 text-center md:mt-10">
        Let's connect and explore how I can help you build high-quality, responsive, and scalable web
        solutions.
      </p>
      <Link href="/contact">
        <Button variant="ghost" className="p-5">
          Написати <ArrowBigRightDash size={20} className="animate-bounce-x" />{' '}
        </Button>
      </Link>
    </Section>
  );
};

const MarqueeSkills = () => {
  return (
    <Section className="py-10">
      <Marquee    
            >
        <div className="p-10">
          <CssIcon />
        </div>
        <div className="p-10">
          <HtmlIcon />
        </div>
        <div className="p-10">
          <ReactIcon />
        </div>
        <div className="p-10">
          <JsIcon />
        </div>
        <div className="p-10">
          <TailwindIcon />
        </div>
        <div className="p-10">
          <TsIcon />
        </div>
        <div className="p-10">
          <FigmaIcon />
        </div>
        <div className="p-10">
          <NextIcon />
        </div>
        <div className="p-10">
          <GitHubIcon />
        </div>
        <div className="p-10">
          <FirebaseIcon />
        </div>
        <div className="p-10">
          <GitIcon />
        </div>
        <div className="p-10">
          <JestIcon />
        </div>
        <div className="p-10">
          <MongodbIcon />
        </div>
        <div className="p-10">
          <PhpIcon />
        </div>
        <div className="p-10">
          <JQueryIcon />
        </div>
        <div className="p-10">
          <GoIcon />
        </div>
        <div className="p-10">
          <PostgreIcon />
        </div>
        <div className="p-10">
          <PythonIcon />
        </div>
        <div className="p-10">
          <RedisIcon />
        </div>
      </Marquee>
    </Section>
  );
};

export default HomePage;
