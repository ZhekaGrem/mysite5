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
  proficiency: number; // 0-100
  color: string; // rgb(…) рядок
}

// Skills data with categories and proficiency
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
];

// Animated skill item component
const SkillItem = ({ skill, index }: { skill: SkillData; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative mx-4 md:mx-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}>
      <HoverCard
        hoverAnimation="lift"
        className="group relative flex min-w-[120px] flex-col items-center overflow-hidden rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 md:min-w-[140px] md:p-6">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10"
          style={{ backgroundColor: skill.color }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon with hover effects */}
        <motion.div
          className="relative mb-3"
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}>
          <skill.Icon />

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 blur-lg group-hover:opacity-30"
            style={{ backgroundColor: skill.color }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.h3
          className="relative z-10 mb-2 text-center text-sm font-semibold md:text-base"
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
            transition={{ duration: 1, delay: index * 0.05 }}
          />
        </motion.div>

        {/* Proficiency percentage */}
        <motion.span
          className="relative z-10 mt-2 font-mono text-xs opacity-70"
          animate={{ opacity: isHovered ? 1 : 0.7 }}>
          {skill.proficiency}%
        </motion.span>

        {/* Floating geometric accent */}
        <motion.div
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}>
          <GeometricShape shape="circle" size={8} color={skill.color} />
        </motion.div>
      </HoverCard>
    </motion.div>
  );
};

const SkillsMarquee = () => {
  // Split skills into two rows for different speeds
  const topRowSkills = SKILLSDATA.filter((_, index) => index % 2 === 0);
  const bottomRowSkills = SKILLSDATA.filter((_, index) => index % 2 === 1);

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

          {/* Interactive pause button */}
        </AnimatedWrapper>

        {/* Skills Marquees */}
        <div className="space-y-8">
          {/* Top row - Left to Right */}
          <motion.div>
            <Marquee
              speed={30}
              play={true}
              gradient={true}
              gradientColor={'255, 255, 255'}
              gradientWidth={50}>
              {topRowSkills.map((skill, index) => (
                <SkillItem key={`top-${skill.name}`} skill={skill} index={index} />
              ))}
            </Marquee>
          </motion.div>

          {/* Bottom row - Right to Left */}
          <motion.div>
            <Marquee
              direction="right"
              speed={25}
              play={true}
              gradient={true}
              gradientColor={'255, 255, 255'}
              gradientWidth={50}>
              {bottomRowSkills.map((skill, index) => (
                <SkillItem key={`bottom-${skill.name}`} skill={skill} index={index} />
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsMarquee;
