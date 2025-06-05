'use client';

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import { AnimatedWrapper, GeometricShape } from '@/shared/ui/AnimatedComponents';
import { ReactNoTextIcon } from '@/shared/ui/icons/index';
import type { SVGProps } from 'react';

// Import all icons
import {
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JestIcon,
  JsIcon,
  MongodbIcon,
  NextIcon,
  PhpIcon,
  PostgreIcon,
  PythonIcon,
  TailwindIcon,
  TsIcon,
  RedisIcon,
  DockerIcon,
  ExpressIcon,
  NodeJsIcon,
  V8Icon,
  AWSIcon,
  GraphQlIcon,
  WPIcon,
} from '@/shared/ui/icons/index';
import { useTranslations } from 'next-intl';

// Types
type IconComponent = React.FC<SVGProps<SVGSVGElement>>;

interface Skill {
  id: string;
  Icon: IconComponent;
  name: string;
  proficiency: number;
  color: string;
}

// Skills data - should be in entities/skill/model/constants.ts
const SKILLS_DATA: Skill[] = [
  { id: 'nextjs', Icon: NextIcon, name: 'Next.js', proficiency: 90, color: '#000000' },
  { id: 'typescript', Icon: TsIcon, name: 'TypeScript', proficiency: 85, color: '#3178c6' },
  { id: 'javascript', Icon: JsIcon, name: 'JavaScript', proficiency: 95, color: '#f0db4f' },
  { id: 'tailwind', Icon: TailwindIcon, name: 'Tailwind', proficiency: 90, color: '#38bdf8' },
  { id: 'css3', Icon: CssIcon, name: 'CSS3', proficiency: 88, color: '#1572b6' },
  { id: 'html5', Icon: HtmlIcon, name: 'HTML5', proficiency: 95, color: '#e44d26' },
  { id: 'github', Icon: GitHubIcon, name: 'GitHub', proficiency: 85, color: '#24292f' },
  { id: 'git', Icon: GitIcon, name: 'Git', proficiency: 80, color: '#f05032' },
  { id: 'figma', Icon: FigmaIcon, name: 'Figma', proficiency: 75, color: '#a259ff' },
  { id: 'firebase', Icon: FirebaseIcon, name: 'Firebase', proficiency: 70, color: '#ffa000' },
  { id: 'mongodb', Icon: MongodbIcon, name: 'MongoDB', proficiency: 75, color: '#47a248' },
  { id: 'postgresql', Icon: PostgreIcon, name: 'PostgreSQL', proficiency: 70, color: '#336791' },
  { id: 'redis', Icon: RedisIcon, name: 'Redis', proficiency: 65, color: '#a41e11' },
  { id: 'jest', Icon: JestIcon, name: 'Jest', proficiency: 80, color: '#99425b' },
  { id: 'python', Icon: PythonIcon, name: 'Python', proficiency: 60, color: '#3776ab' },
  { id: 'php', Icon: PhpIcon, name: 'PHP', proficiency: 55, color: '#787cb6' },
  { id: 'go', Icon: GoIcon, name: 'Go', proficiency: 50, color: '#00acd7' },
  { id: 'docker', Icon: DockerIcon, name: 'Docker', proficiency: 40, color: '#019bc6' },
  { id: 'express', Icon: ExpressIcon, name: 'Express', proficiency: 50, color: '#444444' },
  { id: 'nodejs', Icon: NodeJsIcon, name: 'Node.js', proficiency: 70, color: '#59a946' },
  { id: 'v8', Icon: V8Icon, name: 'V8', proficiency: 40, color: '#4889f4' },
  { id: 'aws', Icon: AWSIcon, name: 'AWS', proficiency: 60, color: '#ff9900' },
  { id: 'graphql', Icon: GraphQlIcon, name: 'GraphQL', proficiency: 60, color: '#e434aa' },
  { id: 'wordpress', Icon: WPIcon, name: 'WordPress', proficiency: 40, color: '#494949' },
];

// Skill item component
const SkillItem = ({ skill }: { skill: Skill }) => {
  const { Icon, name, proficiency, color } = skill;

  return (
    <div className="embla__slide m-15 min-w-0 max-w-40 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_10%]">
      <motion.div
        className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-lg border-2 border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-lg dark:border-gray-800/40 dark:bg-gray-800/20 dark:hover:border-gray-700/60 dark:hover:bg-gray-800/40"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        {/* Hover background */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
          style={{ backgroundColor: color }}
        />

        {/* Icon */}
        <div className="relative mb-3 transition-transform group-hover:scale-110">
          <Icon className="h-10 w-10 md:h-12 md:w-12" />
          <div
            className="absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity group-hover:opacity-30"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-center">
          <H h="h3" className="mb-2">
            {name}
          </H>

          {/* Progress bar */}
          <div className="mt-3 h-1 w-full overflow-hidden rounded bg-gray-200/70 dark:bg-gray-700/70">
            <motion.div
              className="h-full rounded"
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ backgroundColor: color, opacity: 0.8 }}
            />
          </div>

          {/* Proficiency text */}
          <span className="mt-2 font-mono text-xs text-gray-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-gray-400">
            {proficiency}%
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const SkillsSlider = () => {
  const t = useTranslations('Pages.home.section');
  // Embla setup with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollNext, scrollPrev]);

  return (
    <Section className="relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute left-1/4 top-0 opacity-5">
        <GeometricShape shape="circle" size={200} color="#2a9d8f" />
      </div>

      {/* Header */}
      <AnimatedWrapper animation="fadeInUp" className="mb-16 px-6 text-center">
        <div className="inline-flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
            <ReactNoTextIcon />
          </motion.div>
          <H h="h2">{t('skills-title')}</H>
        </div>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">{t('skills-text')}</p>
      </AnimatedWrapper>

      {/* Slider */}
      <div className="group relative border-y border-border-light py-10 dark:border-border-dark">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {SKILLS_DATA.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        </div>

        {/* Navigation buttons - hidden on mobile */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 shadow-lg transition-all hover:bg-white group-hover:opacity-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 md:block"
          aria-label="Previous skills">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-3 opacity-0 shadow-lg transition-all hover:bg-white group-hover:opacity-100 dark:bg-gray-800/80 dark:hover:bg-gray-800 md:block"
          aria-label="Next skills">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Section>
  );
};

export default SkillsSlider;
