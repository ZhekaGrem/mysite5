// src/widgets/HeroSection/HeroSection.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import type { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
const title = 'INNOVATION';
const subtitle = 'DESIGN';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error('Error initializing particles:', error);
    }
  }, []);

  // Animation for each letter with fixed ease
  const letterVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: i % 2 === 0 ? -100 : 100,
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.215, 0.61, 0.355, 1], // Proper easing values
      },
    }),
  };

  if (!mounted) return null;

  return (
    <Section className="min-h-screen items-center justify-center">
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 grid gap-16 px-4">
        <div className="grid place-items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center overflow-hidden text-center font-sans text-6xl font-bold tracking-wider text-surface-light dark:text-surface-dark md:text-8xl lg:text-9xl">
            <H h="h1">
              {title.split('').map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  custom={i}
                  variants={letterVariants}
                  className="var(--font-plex-sans) inline-block transform-gpu"
                  style={{
                    marginLeft: letter === ' ' ? '1rem' : '0.1em',
                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}>
                  {letter}
                </motion.span>
              ))}
            </H>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-8 flex justify-center overflow-hidden text-center text-2xl font-light tracking-[0.25em] text-surface-light/80 dark:text-surface-dark/80 md:text-4xl">
            {subtitle.split('').map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                custom={i + title.length + 2} // Extra delay after main text
                variants={letterVariants}
                className="inline-block transform-gpu"
                style={{
                  marginLeft: letter === ' ' ? '1rem' : '0.15em',
                }}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: (title.length + subtitle.length) * 0.1 + 0.5,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="flex justify-center gap-8">
          <button className="group relative overflow-hidden border-2 border-surface-light px-8 py-4 text-lg uppercase tracking-[0.2em] text-surface-light transition-all duration-300 hover:bg-surface-light hover:text-primary-light dark:border-surface-dark dark:text-surface-dark dark:hover:bg-surface-dark dark:hover:text-primary-dark">
            <span className="relative z-10">Explore</span>
          </button>
          <button className="group relative overflow-hidden bg-surface-light px-8 py-4 text-lg uppercase tracking-[0.2em] text-primary-light transition-all duration-300 hover:bg-transparent hover:text-surface-light dark:bg-surface-dark dark:text-primary-dark dark:hover:bg-transparent dark:hover:text-surface-dark">
            <span className="relative z-10">Contact</span>
          </button>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
