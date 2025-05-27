'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ProjectCardProps } from '@/entities/project/model/types';

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Project Info */}
      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text -gray-600 rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">{project.description}</p>

        {/* Links */}
      </div>
    </motion.article>
  );
};
