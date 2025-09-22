// src/app/[locale]/not-found.tsx
'use client';

import { useTranslations } from 'next-intl';
import { H } from '../../shared/ui/Htag';
import { motion } from 'framer-motion';
import { Link as LocalizedLink } from '@/shared/i18n/routing';

export default function NotFound() {
  // Use translations for the current locale
  const t = useTranslations('Pages.404');

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <H h="h1" className="mb-4 text-6xl font-semibold text-accent-light dark:text-accent-dark">
          404
        </H>
        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
          {t('message') || "Oops! Looks like you're lost."}
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-accent-light dark:text-accent-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
        <LocalizedLink href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 rounded-lg border-4 border-solid border-accent-light p-3 text-accent-light transition-colors hover:bg-accent-light hover:text-white dark:border-accent-dark dark:text-accent-dark dark:hover:bg-accent-dark dark:hover:text-black">
            {t('homeButton') || 'Go home!'}
          </motion.button>
        </LocalizedLink>
      </motion.div>
    </div>
  );
}
