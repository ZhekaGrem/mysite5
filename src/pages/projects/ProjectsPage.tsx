'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { ProjectFilter } from '@/features/ProjectFilter/ProjectFilter'
import { ProjectList } from '@/widgets/ProjectList/ProjectList';
import { motion } from 'framer-motion';
import { ProjectType } from '@/shared/types/index.types';

// In a real app, this would come from an API or CMS
const PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    image: '/assets/projects/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'web',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A React Native mobile banking application with biometric authentication.',
    image: '/assets/projects/project2.jpg',
    tags: ['React Native', 'TypeScript', 'Redux'],
    category: 'mobile',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '3',
    title: 'Design System',
    description: 'A comprehensive design system built with Storybook and React components.',
    image: '/assets/projects/project3.jpg',
    tags: ['React', 'Storybook', 'Styled Components'],
    category: 'design',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: false,
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <Section className="py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <H h="h1">My Projects</H>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Explore my latest work and side projects.
          Each project represents my commitment to clean code and innovative solutions.
        </p>
      </motion.div>

      {/* Filter */}
      <ProjectFilter />

      {/* Projects Grid */}
      <ProjectList projects={PROJECTS} />
    </Section>
  );
};

export default ProjectsPage;