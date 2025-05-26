'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import { useState, SVGProps } from 'react';
import { AnimatedWrapper, GeometricShape, HoverCard } from '@/shared/ui/AnimatedComponents';

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
  ReactNoTextIcon,
  DockerIcon,
  ExpressIcon,
  NodeJsIcon,
  V8Icon,
  AWSIcon,
  GraphQlIcon,
  WPIcon,
} from '@/shared/ui/icons/index';

type IconType = React.FC<SVGProps<SVGSVGElement>>;

interface SkillData {
  Icon: IconType;
  name: string;
  category:
    | 'Frontend'
    | 'Language'
    | 'Styling'
    | 'Markup'
    | 'Tools'
    | 'Design'
    | 'Backend'
    | 'Database'
    | 'Testing'
    | 'Library';
  proficiency: number;
  color: string;
}

const SKILLSDATA: SkillData[] = [
  { Icon: ReactIcon, name: 'React', category: 'Frontend', proficiency: 95, color: 'rgb(97, 218, 251)' },
  { Icon: NextIcon, name: 'Next.js', category: 'Frontend', proficiency: 90, color: 'rgb(0, 0, 0)' },
  { Icon: TsIcon, name: 'TypeScript', category: 'Language', proficiency: 85, color: 'rgb(49, 120, 198)' },
  { Icon: JsIcon, name: 'JavaScript', category: 'Language', proficiency: 95, color: 'rgb(240, 219, 79)' },
  { Icon: TailwindIcon, name: 'Tailwind', category: 'Styling', proficiency: 90, color: 'rgb(56, 189, 248)' },
  { Icon: CssIcon, name: 'CSS3', category: 'Styling', proficiency: 88, color: 'rgb(21, 114, 182)' },
  { Icon: HtmlIcon, name: 'HTML5', category: 'Markup', proficiency: 95, color: 'rgb(228, 77, 38)' },
  { Icon: GitHubIcon, name: 'GitHub', category: 'Tools', proficiency: 85, color: 'rgb(36, 41, 47)' },
  { Icon: GitIcon, name: 'Git', category: 'Tools', proficiency: 80, color: 'rgb(240, 80, 50)' },
  { Icon: FigmaIcon, name: 'Figma', category: 'Design', proficiency: 75, color: 'rgb(162, 89, 255)' },
  { Icon: FirebaseIcon, name: 'Firebase', category: 'Backend', proficiency: 70, color: 'rgb(255, 160, 0)' },
  { Icon: MongodbIcon, name: 'MongoDB', category: 'Database', proficiency: 75, color: 'rgb(71, 162, 72)' },
  {
    Icon: PostgreIcon,
    name: 'PostgreSQL',
    category: 'Database',
    proficiency: 70,
    color: 'rgb(51, 103, 145)',
  },
  { Icon: RedisIcon, name: 'Redis', category: 'Database', proficiency: 65, color: 'rgb(164, 30, 17)' },
  { Icon: JestIcon, name: 'Jest', category: 'Testing', proficiency: 80, color: 'rgb(153, 66, 91)' },
  { Icon: PythonIcon, name: 'Python', category: 'Language', proficiency: 60, color: 'rgb(55, 118, 171)' },
  { Icon: PhpIcon, name: 'PHP', category: 'Language', proficiency: 55, color: 'rgb(120, 123, 182)' },
  { Icon: GoIcon, name: 'Go', category: 'Language', proficiency: 50, color: 'rgb(0, 172, 215)' },
  { Icon: JQueryIcon, name: 'jQuery', category: 'Library', proficiency: 70, color: 'rgb(8, 104, 172)' },
  { Icon: DockerIcon, name: 'Docker', category: 'Tools', proficiency: 40, color: 'rgb(1, 155, 198)' },
  { Icon: ExpressIcon, name: 'Express', category: 'Backend', proficiency: 50, color: 'rgb(68, 68, 68)' },
  { Icon: NodeJsIcon, name: 'Nodejs', category: 'Language', proficiency: 70, color: 'rgb(89, 169, 70)' },
  { Icon: V8Icon, name: 'V8', category: 'Backend', proficiency: 40, color: 'rgb(72, 137, 244)' },
  { Icon: AWSIcon, name: 'AWS', category: 'Database', proficiency: 60, color: 'rgb(255, 153, 0)' },
  { Icon: GraphQlIcon, name: 'GraphQL', category: 'Database', proficiency: 60, color: 'rgb(228, 52, 170)' },
  { Icon: WPIcon, name: 'WordPress', category: 'Frontend', proficiency: 40, color: 'rgb(73, 73, 73)' },
];

// Simplified skill item for better marquee performance
const SkillItem = ({ skill, index }: { skill: SkillData; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative mx-4 p-10 md:mx-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }} // Reduced scale for better performance
      transition={{ duration: 0.2 }}>
      <HoverCard
        hoverAnimation="lift"
        className="dark:border-bg-gray-800 group relative flex min-w-[120px] flex-col items-center overflow-hidden rounded-lg border-2 border-white bg-white/30 p-4 shadow-sm dark:bg-gray-800/30 md:min-w-[140px] md:p-6">
        {/* Simplified background */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ backgroundColor: skill.color }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative mb-3">
          <skill.Icon />
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 blur-lg group-hover:opacity-30"
            style={{ backgroundColor: skill.color }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.h3
          className="relative z-10 mb-2 text-center text-sm font-semibold transition-colors duration-200 group-hover:text-current md:text-base"
          animate={{ color: isHovered ? skill.color : 'currentColor' }}
          transition={{ duration: 0.3 }}>
          {skill.name}
        </motion.h3>

        {/* Category badge */}
        <motion.span
          className="relative z-10 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          whileHover={{ scale: 1.05 }}>
          {skill.category}
        </motion.span>

        {/* Proficiency indicator */}
        <motion.div
          className="relative z-10 mt-3 h-1 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700"
          whileHover={{ scale: 1.05 }}>
          <motion.div
            className="h-full rounded"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: index * 0.02 }}
          />
        </motion.div>

        {/* Proficiency percentage */}
        <motion.span
          className="relative z-10 mt-2 font-mono text-xs opacity-70 transition-opacity duration-200 group-hover:opacity-100"
          animate={{ opacity: isHovered ? 1 : 0.7 }}>
          {skill.proficiency}%
        </motion.span>
      </HoverCard>
    </motion.div>
  );
};

const SkillsMarquee = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      {/* Background elements */}
      <motion.div
        className="absolute left-1/4 top-0 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <GeometricShape shape="circle" size={200} color="rgb(42, 157, 143)" />
      </motion.div>

      <div className="relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fadeInUp" className="mb-16 text-center">
          <motion.div
            className="inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
              <ReactNoTextIcon />
            </motion.div>
            <H h="h2" className="m-auto">
              Technical Skills
            </H>
          </motion.div>

          <motion.p
            className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400"
            whileInView={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </AnimatedWrapper>

        <Marquee speed={40} gradient={false} aria-hidden="true">
          {SKILLSDATA.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
};

export default SkillsMarquee;
