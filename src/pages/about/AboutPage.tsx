'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Basic fade-in-up animation for headings
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 2 }
};

// Typing animation effect for text
const typewrite = {
  initial: { width: '0%' },
  whileInView: { width: '100%' },
  viewport: { once: true },
  transition: { 
    duration: 4,
    ease: "easeOut"
  }
};



// Progress bar animation (unchanged but with viewport)
const progressBar = {
  initial: { width: 0 },
  whileInView: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 3, delay: 0.2 }
  }),
  viewport: { once: true }
};

// Skills data remains the same
const skills = {
  technical: [
    { name: 'Frontend Development', level: 90 },
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Backend Integration', level: 75 },
    { name: 'Performance Optimization', level: 85 },
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'Polish', level: 'Intermediate' },
  ]
};

const workValues = [
  {
    title: 'Clean Code Craftsman',
    description: 'I write self-documenting code with clear naming conventions and modular architecture. My codebase consistently scores over 90% on maintainability metrics, reducing technical debt by 35% on recent projects. I prioritize readability over cleverness and business value over perfectionism.'
  },
  {
    title: 'User Experience Engineer',
    description: 'Every feature I build starts with user research and journey mapping. I`ve reduced bounce rates by 28% through performance optimizations and intuitive UI design. I regularly conduct usability testing sessions and iterate based on quantifiable user feedback rather than assumptions.'
  },
  {
    title: 'Performance Optimization Specialist',
    description: 'I`ve cut average page load times from 4.2s to under 1.5s through strategic code splitting, asset optimization, and caching strategies. My applications maintain 60fps animations even on mid-tier mobile devices. I implement measurable performance budgets and monitor core web vitals as critical success metrics.'
  }
];
const hobbies = [
  {
    title: 'Gaming',
    desc: 'Strategy & RPG enthusiast',
    icon: '🎮',
    details: 'Particularly interested in games that challenge strategic thinking and problem-solving abilities. Currently exploring game development as a hobby.'
  },
  {
    title: 'Hiking',
    desc: 'Nature exploration',
    icon: '🏔️',
    details: 'Regular mountain trips and nature photography. Completed 12 major trails across different landscapes and terrains.'
  },
  {
    title: 'Fitness',
    desc: 'Strength training',
    icon: '💪',
    details: 'Dedicated to maintaining both physical and mental health through regular workout routines and yoga practices.'
  },
  {
    title: 'Reading',
    desc: 'Tech & Science books',
    icon: '📚',
    details: 'Always expanding knowledge through technical literature, science journals, and industry publications. Active member of two book clubs.'
  }
];


const WorkValueCard = ({ title, description, index }: { 
  title: string; 
  description: string; 
  index: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ x }}
      className={`relative grid grid-cols-12 gap-4 border-t-2 border-surface-light pt-8 dark:border-surface-dark
        ${index % 2 === 0 ? '' : 'text-right'}`}
    >
      {/* Number indicator */}
      <div className={`col-span-1 font-mono text-4xl font-bold text-gray-200 dark:text-gray-700
        ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Content */}
      <div className={`col-span-11 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
        <TypewriterText className="mb-4 text-2xl font-bold">
          {title}
        </TypewriterText>
        <div className={`relative ${index % 2 === 0 ? 'border-l-4' : 'border-r-4'} 
          border-surface-light px-6 dark:border-surface-dark`}>
          <TypewriterText className="text-gray-600 dark:text-gray-400">
            {description}
          </TypewriterText>
        </div>
      </div>
    </motion.div>
  );
};

const WorkValuesSection = () => {
  return (
    <Section className="my-24">
      {/* Section Title with Swiss-style asymmetrical layout */}
      <div className="mb-16 grid grid-cols-12">
        <motion.div 
          className="col-span-8 col-start-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <H h="h2">Work Values & Engineering Philosophy</H>
          <div className="mt-4 h-1 w-24 bg-surface-light dark:bg-surface-dark" />
        </motion.div>
      </div>

      {/* Values Grid with alternating layout */}
      <div className="space-y-16">
        {workValues.map((value, index) => (
          <WorkValueCard
            key={value.title}
            title={value.title}
            description={value.description}
            index={index}
          />
        ))}
      </div>

      {/* Swiss-style geometric accent */}
      <div className="relative mt-16">
        <div className="absolute left-1/2 h-16 w-1 -translate-x-1/2 bg-surface-light dark:bg-surface-dark" />
        <div className="absolute left-1/2 top-16 h-4 w-4 -translate-x-1/2 rotate-45 bg-surface-light dark:bg-surface-dark" />
      </div>
    </Section>
  );
};

const TypewriterText = ({ children, className }: { children: string, className?: string }) => (
  <div className="relative">
    <motion.div 
      className={`${className} opacity-0`}
      aria-hidden="true"
    >
      {children}
    </motion.div>
    <motion.div 
      className={`${className} absolute top-0 left-0 overflow-hidden whitespace-pre-wrap`}
      variants={typewrite}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </div>
);

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="grid min-h-[50vh] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <H h="h1" className="mb-8">About Me</H>
          </motion.div>
          <TypewriterText className="mb-6 text-lg">
            Senior Frontend Developer with 4 years of experience crafting performant web solutions.
            Specializing in React.js, Next.js, and TypeScript for building responsive interfaces that deliver
            exceptional user experiences.
          </TypewriterText>
          <TypewriterText className="text-lg">
            My core value lies in combining technical expertise with business understanding, creating
            solutions that enhance user engagement and conversion rates.
          </TypewriterText>
        </div>
        <motion.div 
          className="relative order-1 aspect-square md:order-2"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Image
            src="/assets/myphoto.jpg"
            alt="Professional photo"
            fill
            className="rounded-none object-cover"
            priority
          />
        </motion.div>
      </Section>

      {/* Skills Grid */}
      <Section className="my-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <H h="h2" className="mb-8">Technical Expertise</H>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.technical.map((skill) => (
              <div key={skill.name} className="border-l-4 border-surface-light pl-4 dark:border-surface-dark">
                <TypewriterText className="mb-2 text-xl">{skill.name}</TypewriterText>
                <div className="h-2 bg-gray-200 dark:bg-gray-700">
                  <motion.div
                    className="h-full bg-surface-light dark:bg-surface-dark"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    custom={skill.level}
                    variants={progressBar}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <H h="h2" className="mb-8">Languages</H>
          </motion.div>
          <div className="space-y-6">
            {skills.languages.map((lang) => (
              <div key={lang.name} className="border-l-4 border-surface-light pl-4 dark:border-surface-dark">
                <TypewriterText className="text-xl">{lang.name}</TypewriterText>
                <TypewriterText className="text-gray-600 dark:text-gray-400">
                  {lang.level}
                </TypewriterText>
              </div>
            ))}
          </div>
        </div>
      </Section>
<WorkValuesSection/>
      {/* Interests & Hobbies */}
      <Section className="my-24">
  {/* Central line accent */}
  <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-700" />
  
  {/* Section Title - Centered */}
  <motion.div 
    className="relative mb-16 text-center"
    variants={fadeInUp}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
  >
    <H h="h2" className="mb-4">Interests & Hobbies</H>
    <div className="mx-auto h-1 w-24 bg-surface-light dark:bg-surface-dark" />
  </motion.div>

  {/* Hobbies Grid */}
  <div className="relative grid gap-16">
    {hobbies.map((hobby, index) => (
      <motion.div
        key={hobby.title}
        className={`grid grid-cols-12 items-center gap-4 ${
          index % 2 === 0 ? 'text-right' : ''
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Content positioning based on index */}
        {index % 2 === 0 ? (
          <>
            {/* Left side content */}
            <div className="col-span-5 pr-8">
              <TypewriterText className="mb-2 text-2xl font-bold">
                {hobby.title}
              </TypewriterText>
              <TypewriterText className="mb-4 text-gray-600 dark:text-gray-400">
                {hobby.desc}
              </TypewriterText>
              <TypewriterText className="text-sm">
                {hobby.details}
              </TypewriterText>
            </div>

            {/* Center icon */}
            <div className="col-span-2 flex justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-surface-light text-2xl dark:bg-surface-dark">
                {hobby.icon}
              </div>
            </div>

            {/* Right side empty */}
            <div className="col-span-5" />
          </>
        ) : (
          <>
            {/* Left side empty */}
            <div className="col-span-5" />

            {/* Center icon */}
            <div className="col-span-2 flex justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-surface-light text-2xl dark:bg-surface-dark">
                {hobby.icon}
              </div>
            </div>

            {/* Right side content */}
            <div className="col-span-5 pl-8">
              <TypewriterText className="mb-2 text-2xl font-bold">
                {hobby.title}
              </TypewriterText>
              <TypewriterText className="mb-4 text-gray-600 dark:text-gray-400">
                {hobby.desc}
              </TypewriterText>
              <TypewriterText className="text-sm">
                {hobby.details}
              </TypewriterText>
            </div>
          </>
        )}

        
      </motion.div>
    ))}
  </div>

  {/* Bottom geometric accent */}
  <div className="relative mt-16">
    <div className="absolute left-1/2 h-16 w-1 -translate-x-1/2 bg-surface-light dark:bg-surface-dark" />
    <div className="absolute left-1/2 top-16 h-4 w-4 -translate-x-1/2 rotate-45 bg-surface-light dark:bg-surface-dark" />
  </div>
</Section>

      {/* Advantages */}
      <Section className="my-16">
        <motion.div {...fadeInUp}>
          <H h="h2" className="mb-12 text-center">Why Work With Me</H>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Technical Excellence',
              desc: 'Deep expertise in modern web technologies and best practices'
            },
            {
              title: 'Quick Adaptation',
              desc: 'Fast learning and integration into new projects and teams'
            },
            {
              title: 'Result-Oriented',
              desc: 'Focus on delivering business value and meeting objectives'
            }
          ].map((advantage) => (
            <motion.div 
              key={advantage.title}
              className="bg-gray-100 p-6 dark:bg-gray-800" 
              {...typewrite}
            >
              <H h='h3' className="mb-4 text-xl">{advantage.title}</H>
              <p>{advantage.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;