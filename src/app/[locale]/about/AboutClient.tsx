// src/app/[locale]/about/AboutClient.tsx
'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  AnimatedWrapper,
  HoverCard,
  StaggeredContainer,
  StaggeredItem,
  ParallaxElement,
  GeometricShape,
} from '@/shared/ui/AnimatedComponents';

import { WORK_VALUES, SKILLS_DATA, HOBBIES } from '@/entities/skill/model/constants';
import type { Technical, WorkValues } from '@/entities/skill/model/types';

// Enhanced skill bar component
const AnimatedSkillBar = ({ skill, index }: { skill: Technical; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard
      className="rounded-none border-l-4 bg-gray-50 p-6 transition-all duration-300 dark:bg-gray-800"
      hoverAnimation="lift">
      <motion.div
        style={{ borderLeftColor: skill.color }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}>
        <div className="mb-3 flex items-center justify-between">
          <motion.div
            animate={{ color: isHovered ? skill.color : 'currentColor' }}
            transition={{ duration: 0.3 }}>
            <H h="h3" className="text-lg font-semibold">
              {skill.name}
            </H>
          </motion.div>
          <motion.span
            className="font-mono text-sm"
            animate={{
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? skill.color : 'currentColor',
            }}
            transition={{ duration: 0.3 }}>
            {skill.level}%
          </motion.span>
        </div>

        <div className="relative h-3 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          />

          {/* Animated shimmer effect */}
          <motion.div
            className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 3,
            }}
          />
        </div>

        {/* Geometric accent */}
        <motion.div
          className="mt-2 flex justify-end"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}>
          <GeometricShape shape="circle" size={8} color={skill.color} />
        </motion.div>
      </motion.div>
    </HoverCard>
  );
};

// Enhanced work value card
const WorkValueCard = ({ value, index }: { value: WorkValues; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -50 : 50, 0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      style={{ x }}
      className="relative mx-10 grid grid-cols-12 gap-4 border-t-2 border-border-light pt-8 dark:border-border-dark"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}>
      {/* Enhanced number indicator with hover effect */}
      <motion.div
        className={`col-span-1 mt-5 font-mono text-4xl font-bold text-gray-200 dark:text-gray-700 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
        animate={{
          scale: isHovered ? 1.2 : 1,
          color: isHovered ? 'rgb(42, 157, 143)' : undefined,
        }}
        transition={{ duration: 0.3 }}>
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      {/* Content with enhanced animations */}
      <div className={`col-span-11 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
        <motion.div animate={{ y: isHovered ? -5 : 0 }} transition={{ duration: 0.3 }}>
          <div className="mb-4 flex max-w-52 items-center gap-4 text-center md:max-w-full md:text-start">
            <H h="h3" className="text-2xl font-bold">
              {value.title}
            </H>
          </div>

          <div
            className={`relative ${index % 2 === 0 ? 'border-l-4' : 'border-r-4'} border-highlight-light px-6 dark:border-highlight-dark`}>
            <p className="mb-4 hidden text-gray-600 dark:text-gray-400 md:block">{value.description}</p>

            {/* Metrics badges */}
            <div className="flex flex-wrap gap-5 md:gap-2">
              {value.metrics.map((metric: string, i: number) => (
                <motion.span
                  key={i}
                  className="rounded-full bg-surface-light/10 px-3 py-1 font-mono text-sm text-surface-light dark:bg-surface-dark/10 dark:text-surface-dark"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  {metric}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated geometric accent */}
      <motion.div
        className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-4`}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}></motion.div>
    </motion.div>
  );
};

const AboutClient = () => {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxElement speed={0.2} className="pt-20">
        <Section className="grid min-h-[70vh] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <AnimatedWrapper animation="fadeInLeft" className="order-2 md:order-1">
            <H h="h1" className="mb-8 text-center md:text-start">
              About Me
            </H>

            <motion.p
              className="mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}>
              Senior Frontend Developer with 4 years of experience crafting performant web solutions.
              Specializing in React.js, Next.js, and TypeScript for building responsive interfaces that
              deliver exceptional user experiences.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}>
              My core value lies in combining technical expertise with business understanding, creating
              solutions that enhance user engagement and conversion rates.
            </motion.p>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fadeInRight" className="relative order-1 aspect-square md:order-2">
            <HoverCard hoverAnimation="rotate" className="relative h-full w-full">
              <Image
                src="/assets/myphoto.jpg"
                alt="Professional photo"
                fill
                className="hover:contrast-110 hover:saturate-110 object-cover transition-all duration-500"
                priority
              />

              {/* Animated border accent */}
              <motion.div
                className="absolute -inset-2 border-2 border-border-light dark:border-border-dark"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </HoverCard>
          </AnimatedWrapper>
        </Section>
      </ParallaxElement>

      {/* Skills Section with Enhanced Animations */}
      <Section className="my-12 md:my-24">
        <StaggeredContainer className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-2">
            <StaggeredItem>
              <H h="h2" className="mb-8 text-center md:text-start">
                Technical Expertise
              </H>
              <GeometricShape shape="line" size={80} className="mb-8 text-h2-light dark:text-h2-dark" />
            </StaggeredItem>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SKILLS_DATA.technical.map((skill, index) => (
                <StaggeredItem key={skill.name}>
                  <AnimatedSkillBar skill={skill} index={index} />
                </StaggeredItem>
              ))}
            </div>
          </div>

          {/* Languages with enhanced styling */}
          <div>
            <StaggeredItem>
              <H h="h2" className="mb-8 text-center md:text-start">
                Languages
              </H>
              <GeometricShape shape="line" size={60} className="mb-8 text-h2-light dark:text-h2-dark" />
            </StaggeredItem>

            <div className="space-y-6">
              {SKILLS_DATA.languages.map((lang, index) => (
                <StaggeredItem key={lang.name}>
                  <HoverCard className="border-l-4 border-border-light p-4 dark:border-border-dark">
                    <H h="h3" className="text-xl font-semibold">
                      {lang.name}
                    </H>
                    <p className="text-gray-600 dark:text-gray-400">{lang.level}</p>

                    {/* Proficiency indicator */}
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className="h-full bg-surface-light dark:bg-surface-dark"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                      />
                    </div>
                  </HoverCard>
                </StaggeredItem>
              ))}
            </div>
          </div>
        </StaggeredContainer>
      </Section>

      {/* Work Values Section */}
      <Section className="my-12 md:my-24">
        <AnimatedWrapper animation="fadeInUp" className="mb-16 text-center">
          <H h="h2">Work Values & Engineering Philosophy</H>
          <motion.div
            className="mx-auto mt-4 h-1 w-24 bg-surface-light dark:bg-surface-dark"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedWrapper>

        <div className="space-y-16 text-pretty">
          {WORK_VALUES.map((value, index) => (
            <WorkValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Section>

      {/* Interests & HOBBIES with Timeline Layout */}
      <Section className="relative my-12 md:my-24">
        {/* Central animated line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-surface-light to-transparent dark:from-surface-dark"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
        />

        <AnimatedWrapper
          animation="fadeInUp"
          className="relative mb-16 bg-primary-light text-center dark:bg-primary-dark">
          <H h="h2" className="mb-4">
            Interests & HOBBIES
          </H>
          <motion.div
            className="mx-auto h-1 w-24 bg-surface-light dark:bg-surface-dark"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedWrapper>

        <div className="relative grid gap-16">
          {HOBBIES.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className={`grid grid-cols-12 items-center gap-4 ${index % 2 === 0 ? 'text-right' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-span-5 pr-8">
                    <HoverCard hoverAnimation="lift">
                      <H h="h3" className="mb-2 text-2xl font-bold">
                        {hobby.title}
                      </H>
                      <p className="mb-4 text-gray-600 dark:text-gray-400">{hobby.desc}</p>
                      <p className="hidden text-sm leading-relaxed md:block">{hobby.details}</p>
                    </HoverCard>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <motion.div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full text-2xl"
                      style={{ backgroundColor: hobby.color }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}>
                      {hobby.icon}

                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: hobby.color }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>

                  <div className="col-span-5" />
                </>
              ) : (
                <>
                  <div className="col-span-5" />

                  <div className="col-span-2 flex justify-center">
                    <motion.div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full text-2xl"
                      style={{ backgroundColor: hobby.color }}
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ duration: 0.3 }}>
                      {hobby.icon}

                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: hobby.color }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </motion.div>
                  </div>

                  <div className="col-span-5 pl-8">
                    <HoverCard hoverAnimation="lift">
                      <H h="h3" className="mb-2 text-2xl font-bold">
                        {hobby.title}
                      </H>
                      <p className="mb-4 text-gray-600 dark:text-gray-400">{hobby.desc}</p>
                      <p className="hidden text-sm leading-relaxed md:block">{hobby.details}</p>
                    </HoverCard>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Advantages Section with Cards */}
      <Section className="my-12 px-6 md:my-24">
        <AnimatedWrapper animation="fadeInUp" className="mb-12 text-center">
          <H h="h2">Why Work With Me</H>
        </AnimatedWrapper>

        <StaggeredContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Technical Excellence',
              desc: 'Deep expertise in modern web technologies and best practices',
              icon: '⚡',
              color: 'rgb(42, 157, 143)',
            },
            {
              title: 'Quick Adaptation',
              desc: 'Fast learning and integration into new projects and teams',
              icon: '🚀',
              color: 'rgb(178, 255, 158)',
            },
            {
              title: 'Result-Oriented',
              desc: 'Focus on delivering business value and meeting objectives',
              icon: '🎯',
              color: 'rgb(175, 252, 65)',
            },
          ].map((advantage, index) => (
            <StaggeredItem key={index}>
              <HoverCard
                hoverAnimation="lift"
                className="group relative h-full overflow-hidden bg-gray-50 p-8 dark:bg-gray-800">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${advantage.color}, transparent)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="mb-4 text-4xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}>
                  {advantage.icon}
                </motion.div>

                <H h="h3" className="relative z-10 mb-4 text-xl">
                  {advantage.title}
                </H>
                <p className="relative z-10">{advantage.desc}</p>

                {/* Geometric accent */}
              </HoverCard>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </Section>
    </>
  );
};

export default AboutClient;
