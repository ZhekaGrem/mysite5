// src/widgets/HeroSection/HeroSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { AnimatedButton } from '@/shared/ui/AnimatedButton';
import { GeometricShape, ParallaxElement } from '@/shared/ui/AnimatedComponents';
import { Link } from '@/shared/i18n/routing';

const title = 'INNOVATION';
const subtitle = 'DESIGN';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax transforms for background elements
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enhanced letter animation with stagger and bounce
  const letterVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: i % 2 === 0 ? -100 : 100,
      scale: 0.8,
      rotate: i % 2 === 0 ? -10 : 10,
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.08,
        ease: [0.215, 0.61, 0.355, 1],
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  // Floating animation for geometric shapes
  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  if (!mounted) return null;

  return (
    <Section className="relative min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax Particles Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <ParticlesBackground />
      </motion.div>

      {/* Floating Geometric Accents */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute left-1/4 top-1/4 opacity-30">
        <GeometricShape shape="circle" size={80} color="rgb(42, 157, 143)" delay={0.5} />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/3 right-1/4 opacity-40"
        style={{ animationDelay: '2s' }}>
        <GeometricShape shape="square" size={60} color="rgb(178, 255, 158)" delay={1} />
      </motion.div>

      {/* Animated geometric lines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.215, 0.61, 0.355, 1] }}
        className="absolute left-8 top-1/2 h-px w-32 origin-left bg-surface-light dark:bg-surface-dark"
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 2.3, ease: [0.215, 0.61, 0.355, 1] }}
        className="absolute right-8 top-1/3 h-px w-24 origin-right bg-surface-light dark:bg-surface-dark"
      />

      <ParallaxElement speed={0.3} className="relative z-10">
        <motion.div style={{ y: textY }} className="grid gap-16 px-4">
          <div className="grid place-items-center">
            {/* Enhanced Title Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="relative flex flex-wrap justify-center overflow-hidden text-center font-sans text-6xl font-bold tracking-wider text-surface-light dark:text-surface-dark md:text-8xl lg:text-9xl">
              {/* Background accent for title */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-highlight-light to-surface-light blur-3xl"
              />

              <H h="h1" className="relative z-10">
                {title.split('').map((letter, i) => (
                  <motion.span
                    key={`${letter}-${i}`}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block transform-gpu cursor-default transition-transform duration-200 hover:scale-110"
                    style={{
                      marginLeft: letter === ' ' ? '1rem' : '0.1em',
                      textShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                    whileHover={{
                      y: -5,
                      color: 'rgb(42, 157, 143)',
                      transition: { duration: 0.2 },
                    }}>
                    {letter}
                  </motion.span>
                ))}
              </H>
            </motion.div>

            {/* Enhanced Subtitle with color transition */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="relative mt-8 flex justify-center overflow-hidden text-center text-2xl font-light tracking-[0.25em] text-surface-light/80 dark:text-surface-dark/80 md:text-4xl">
              {subtitle.split('').map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  custom={i + title.length + 2}
                  variants={letterVariants}
                  className="inline-block transform-gpu cursor-default transition-all duration-200 hover:scale-105"
                  style={{
                    marginLeft: letter === ' ' ? '1rem' : '0.15em',
                  }}
                  whileHover={{
                    y: -3,
                    color: 'rgb(178, 255, 158)',
                  }}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Animated accent line under subtitle */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: (title.length + subtitle.length) * 0.08 + 1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="mt-8 h-1 w-32 origin-center bg-gradient-to-r from-highlight-light to-surface-light dark:from-highlight-dark dark:to-surface-dark"
            />
          </div>

          {/* Enhanced Buttons with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: (title.length + subtitle.length) * 0.08 + 1.5,
              duration: 0.8,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="flex justify-center gap-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <AnimatedButton
                  variant="ghost"
                  className="group relative overflow-hidden px-8 py-4"
                  withHoverEffect={true}
                  hoverScale={1.02}>
                  <span className="relative z-10 transition-colors group-hover:text-primary-light dark:group-hover:text-primary-dark">
                    Explore
                  </span>

                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-highlight-light/20 to-surface-light/20"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </AnimatedButton>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <AnimatedButton
                  variant="btn_primary_outline"
                  className="group relative overflow-hidden"
                  withHoverEffect={true}
                  hoverScale={1.02}>
                  <span className="relative z-10">Contact</span>

                  {/* Ripple effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded bg-surface-light/10 dark:bg-surface-dark/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </ParallaxElement>
    </Section>
  );
};

export default HeroSection;
