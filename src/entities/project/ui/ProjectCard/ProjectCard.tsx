'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { ProjectCardProps } from '@/entities/project/model/types';
import Link from 'next/link';



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
        <div className="mt-auto flex gap-4">
          {project.demoUrl && (
            <Button variant="outline" asChild>
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <LinkIcon size={16} />
                Live Demo
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2">
                <Github size={16} />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
