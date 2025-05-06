'use client';

import { Button } from '@/shared/ui/button';
import { useProjectFilter } from './project-filter.store';
import { motion } from 'framer-motion';

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'design', label: 'Design' },
];

export const ProjectFilter = () => {
  const { category, setCategory } = useProjectFilter();

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {CATEGORIES.map((cat) => (
        <motion.div key={cat.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={category === cat.id ? 'default' : 'outline'}
            onClick={() => setCategory(cat.id)}
            className="min-w-[120px]">
            {cat.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};
