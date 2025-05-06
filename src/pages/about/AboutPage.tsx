// Swiss style inspired About page
'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Skills data
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
  ],
  tools: ['VS Code', 'Git', 'Docker', 'Figma', 'Webpack', 'Jest', 'Redux', 'GraphQL'],
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="grid min-h-[50vh] grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div className="order-2 md:order-1" {...fadeInUp}>
          <H h="h1" className="mb-8">
            About Me
          </H>
          <p className="mb-6 text-lg">
            Senior Frontend Developer with 4 years of experience crafting performant web solutions.
            Specializing in React.js, Next.js, and TypeScript for building responsive interfaces that deliver
            exceptional user experiences.
          </p>
          <p className="text-lg">
            My core value lies in combining technical expertise with business understanding, creating
            solutions that enhance user engagement and conversion rates.
          </p>
        </motion.div>
        <motion.div className="relative order-1 aspect-square md:order-2" {...fadeInUp}>
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
        {/* Technical Skills */}
        <motion.div className="col-span-2" {...fadeInUp}>
          <H h="h2" className="mb-8">
            Technical Expertise
          </H>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.technical.map((skill) => (
              <div key={skill.name} className="border-l-4 border-surface-light pl-4 dark:border-surface-dark">
                <h3 className="mb-2 text-xl">{skill.name}</h3>
                <div className="h-2 bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full bg-surface-light dark:bg-surface-dark"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div {...fadeInUp}>
          <H h="h2" className="mb-8">
            Languages
          </H>
          <div className="space-y-6">
            {skills.languages.map((lang) => (
              <div key={lang.name} className="border-l-4 border-surface-light pl-4 dark:border-surface-dark">
                <h3 className="text-xl">{lang.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Interests & Hobbies */}
      <Section className="my-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <H h="h2" className="mb-8">
            Hobbies & Interests
          </H>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl">Gaming</h3>
              <p>Strategy & RPG enthusiast</p>
            </div>
            <div className="bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl">Hiking</h3>
              <p>Nature exploration</p>
            </div>
            <div className="bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl">Fitness</h3>
              <p>Strength training</p>
            </div>
            <div className="bg-gray-100 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl">Reading</h3>
              <p>Tech & Science books</p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp}>
          <H h="h2" className="mb-8">
            Tools & Technologies
          </H>
          <div className="grid grid-cols-2 gap-4">
            {skills.tools.map((tool) => (
              <div key={tool} className="border border-gray-200 p-4 text-center dark:border-gray-700">
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Advantages */}
      <Section className="my-16">
        <H h="h2" className="mb-12 text-center">
          Why Work With Me
        </H>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div className="bg-gray-100 p-6 dark:bg-gray-800" {...fadeInUp}>
            <h3 className="mb-4 text-xl">Technical Excellence</h3>
            <p>Deep expertise in modern web technologies and best practices</p>
          </motion.div>
          <motion.div className="bg-gray-100 p-6 dark:bg-gray-800" {...fadeInUp}>
            <h3 className="mb-4 text-xl">Quick Adaptation</h3>
            <p>Fast learning and integration into new projects and teams</p>
          </motion.div>
          <motion.div className="bg-gray-100 p-6 dark:bg-gray-800" {...fadeInUp}>
            <h3 className="mb-4 text-xl">Result-Oriented</h3>
            <p>Focus on delivering business value and meeting objectives</p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
