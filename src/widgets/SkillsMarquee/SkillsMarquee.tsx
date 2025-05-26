'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import { memo, SVGProps } from 'react';
import { AnimatedWrapper, GeometricShape } from '@/shared/ui/AnimatedComponents';

import {
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GitHubIcon,
  GitIcon,
  GoIcon,
  HtmlIcon,
  JestIcon,
  // JQueryIcon,
  JsIcon,
  MongodbIcon,
  NextIcon,
  PhpIcon,
  PostgreIcon,
  PythonIcon,
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

  proficiency: number;
  color: string;
}

const SKILLSDATA: SkillData[] = [
  { Icon: ReactNoTextIcon, name: 'React', proficiency: 95, color: 'rgb(97, 218, 251)' },
  { Icon: NextIcon, name: 'Next.js', proficiency: 90, color: 'rgb(0, 0, 0)' },
  { Icon: TsIcon, name: 'TypeScript', proficiency: 85, color: 'rgb(49, 120, 198)' },
  { Icon: JsIcon, name: 'JavaScript', proficiency: 95, color: 'rgb(240, 219, 79)' },
  { Icon: TailwindIcon, name: 'Tailwind', proficiency: 90, color: 'rgb(56, 189, 248)' },
  { Icon: CssIcon, name: 'CSS3', proficiency: 88, color: 'rgb(21, 114, 182)' },
  { Icon: HtmlIcon, name: 'HTML5', proficiency: 95, color: 'rgb(228, 77, 38)' },
  { Icon: GitHubIcon, name: 'GitHub', proficiency: 85, color: 'rgb(36, 41, 47)' },
  { Icon: GitIcon, name: 'Git', proficiency: 80, color: 'rgb(240, 80, 50)' },
  { Icon: FigmaIcon, name: 'Figma', proficiency: 75, color: 'rgb(162, 89, 255)' },
  { Icon: FirebaseIcon, name: 'Firebase', proficiency: 70, color: 'rgb(255, 160, 0)' },
  { Icon: MongodbIcon, name: 'MongoDB', proficiency: 75, color: 'rgb(71, 162, 72)' },
  {
    Icon: PostgreIcon,
    name: 'PostgreSQL',

    proficiency: 70,
    color: 'rgb(51, 103, 145)',
  },
  { Icon: RedisIcon, name: 'Redis', proficiency: 65, color: 'rgb(164, 30, 17)' },
  { Icon: JestIcon, name: 'Jest', proficiency: 80, color: 'rgb(153, 66, 91)' },
  { Icon: PythonIcon, name: 'Python', proficiency: 60, color: 'rgb(55, 118, 171)' },
  { Icon: PhpIcon, name: 'PHP', proficiency: 55, color: 'rgb(120, 123, 182)' },
  { Icon: GoIcon, name: 'Go', proficiency: 50, color: 'rgb(0, 172, 215)' },
  // { Icon: JQueryIcon, name: 'jQuery',   proficiency: 70, color: 'rgb(8, 104, 172)' },
  { Icon: DockerIcon, name: 'Docker', proficiency: 40, color: 'rgb(1, 155, 198)' },
  { Icon: ExpressIcon, name: 'Express', proficiency: 50, color: 'rgb(68, 68, 68)' },
  { Icon: NodeJsIcon, name: 'Nodejs', proficiency: 70, color: 'rgb(89, 169, 70)' },
  { Icon: V8Icon, name: 'V8', proficiency: 40, color: 'rgb(72, 137, 244)' },
  { Icon: AWSIcon, name: 'AWS', proficiency: 60, color: 'rgb(255, 153, 0)' },
  { Icon: GraphQlIcon, name: 'GraphQL', proficiency: 60, color: 'rgb(228, 52, 170)' },
  { Icon: WPIcon, name: 'WordPress', proficiency: 40, color: 'rgb(73, 73, 73)' },
  { Icon: ReactNoTextIcon, name: 'React', proficiency: 95, color: 'rgb(97, 218, 251)' },
  { Icon: NextIcon, name: 'Next.js', proficiency: 90, color: 'rgb(0, 0, 0)' },
  { Icon: TsIcon, name: 'TypeScript', proficiency: 85, color: 'rgb(49, 120, 198)' },
  { Icon: JsIcon, name: 'JavaScript', proficiency: 95, color: 'rgb(240, 219, 79)' },
  { Icon: TailwindIcon, name: 'Tailwind', proficiency: 90, color: 'rgb(56, 189, 248)' },
  { Icon: CssIcon, name: 'CSS3', proficiency: 88, color: 'rgb(21, 114, 182)' },
  { Icon: HtmlIcon, name: 'HTML5', proficiency: 95, color: 'rgb(228, 77, 38)' },
  { Icon: GitHubIcon, name: 'GitHub', proficiency: 85, color: 'rgb(36, 41, 47)' },
  { Icon: GitIcon, name: 'Git', proficiency: 80, color: 'rgb(240, 80, 50)' },
  { Icon: FigmaIcon, name: 'Figma', proficiency: 75, color: 'rgb(162, 89, 255)' },
  { Icon: FirebaseIcon, name: 'Firebase', proficiency: 70, color: 'rgb(255, 160, 0)' },
  { Icon: MongodbIcon, name: 'MongoDB', proficiency: 75, color: 'rgb(71, 162, 72)' },
  {
    Icon: PostgreIcon,
    name: 'PostgreSQL',

    proficiency: 70,
    color: 'rgb(51, 103, 145)',
  },
  { Icon: RedisIcon, name: 'Redis', proficiency: 65, color: 'rgb(164, 30, 17)' },
  { Icon: JestIcon, name: 'Jest', proficiency: 80, color: 'rgb(153, 66, 91)' },
  { Icon: PythonIcon, name: 'Python', proficiency: 60, color: 'rgb(55, 118, 171)' },
  { Icon: PhpIcon, name: 'PHP', proficiency: 55, color: 'rgb(120, 123, 182)' },
  { Icon: GoIcon, name: 'Go', proficiency: 50, color: 'rgb(0, 172, 215)' },
  // { Icon: JQueryIcon, name: 'jQuery',   proficiency: 70, color: 'rgb(8, 104, 172)' },
  { Icon: DockerIcon, name: 'Docker', proficiency: 40, color: 'rgb(1, 155, 198)' },
  { Icon: ExpressIcon, name: 'Express', proficiency: 50, color: 'rgb(68, 68, 68)' },
  { Icon: NodeJsIcon, name: 'Nodejs', proficiency: 70, color: 'rgb(89, 169, 70)' },
  { Icon: V8Icon, name: 'V8', proficiency: 40, color: 'rgb(72, 137, 244)' },
  { Icon: AWSIcon, name: 'AWS', proficiency: 60, color: 'rgb(255, 153, 0)' },
  { Icon: GraphQlIcon, name: 'GraphQL', proficiency: 60, color: 'rgb(228, 52, 170)' },
  { Icon: WPIcon, name: 'WordPress', proficiency: 40, color: 'rgb(73, 73, 73)' },
];

// Simplified skill item for better marquee performance
const SkillItem = memo(({ skill }: { skill: SkillData }) => {
  return (
    <div
      className="mx-4 md:mx-4"
      aria-label={`${skill.name} - ${skill.proficiency}% proficiency`}
      title={`${skill.name} - ${skill.proficiency}%`}>
      <div className="group relative flex min-w-[120px] flex-col items-center overflow-hidden rounded-lg border-2 border-double border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 hover:shadow-lg dark:border-gray-800/40 dark:bg-gray-800/20 dark:hover:border-gray-700/60 dark:hover:bg-gray-800/40 md:min-w-[140px] md:p-6">
        {/* Background color on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ backgroundColor: skill.color }}
        />

        {/* Icon with CSS animation */}
        <div className="relative mb-3 transition-transform duration-300 group-hover:scale-110">
          <skill.Icon />
          <div
            className="absolute inset-0 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"
            style={{ backgroundColor: skill.color }}
          />
        </div>

        {/* Skill name */}
        <h3 className="relative z-10 mb-2 text-center text-sm font-semibold text-gray-800 transition-colors duration-200 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white md:text-base">
          {skill.name}
        </h3>

        {/* Proficiency bar */}
        <div className="relative z-10 mt-3 h-1 w-full overflow-hidden rounded bg-gray-200/60 dark:bg-gray-700/60">
          <div
            className="h-full rounded transition-all duration-500 group-hover:opacity-100"
            style={{
              backgroundColor: skill.color,
              width: `${skill.proficiency}%`,
              opacity: 0.8,
            }}
          />
        </div>

        {/* Proficiency text */}
        <span className="relative z-10 mt-2 font-mono text-xs text-gray-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-gray-400">
          {skill.proficiency}%
        </span>
      </div>
    </div>
  );
});

SkillItem.displayName = 'SkillItem';

const SkillsMarquee = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      {/* Simplified background animation */}
      <div className="absolute left-1/4 top-0 opacity-5">
        <GeometricShape shape="circle" size={200} color="rgb(42, 157, 143)" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fadeInUp" className="mb-16 text-center">
          <div className="inline-flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
              <ReactNoTextIcon />
            </motion.div>
            <H h="h2" className="m-auto">
              Technical Skills
            </H>
          </div>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </AnimatedWrapper>

        {/* Marquee with proper configuration */}
        <div className="w-full">
          <Marquee speed={40} delay={0} direction="right">
            {SKILLSDATA.map((skill, index) => (
              <SkillItem key={`skill-${skill.name}-${index}`} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default SkillsMarquee;
