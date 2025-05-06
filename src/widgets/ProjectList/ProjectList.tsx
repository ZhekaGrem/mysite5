'use client';

import { ProjectCard } from '@/shared/ui/ProjectCard';
import { ProjectType } from '@/shared/types/index.types';
import { useProjectFilter } from '@/features/ProjectFilter/project-filter.store';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectListProps {
  projects: ProjectType[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const { category } = useProjectFilter();

  const filteredProjects = projects.filter((project) => category === 'all' || project.category === category);

  return (
    <AnimatePresence>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
