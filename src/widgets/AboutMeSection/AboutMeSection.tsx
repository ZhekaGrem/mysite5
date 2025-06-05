'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import DownloadResumeButton from '@/shared/ui/DownloadResumeButton/DownloadResumeButton';
import { Download, User, Globe, Briefcase } from 'lucide-react';
import {
  AnimatedWrapper,
  StaggeredContainer,
  StaggeredItem,
  GeometricShape,
} from '@/shared/ui/AnimatedComponents';
import { useTranslations } from 'next-intl';

const AboutMeSection = () => {
  const t = useTranslations('Pages.home.section');
  const [imageHovered, setImageHovered] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects for different elements
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const languages = [
    { name: t('uk'), level: t('native'), proficiency: 100 },
    { name: t('en'), level: t('professional'), proficiency: 90 },
    { name: t('pl'), level: t('intermediate'), proficiency: 40 },
  ];

  const advantages = [
    { text: t('tages-1'), icon: '⚡', color: 'rgb(42, 157, 143)' },
    { text: t('tages-2'), icon: '🚀', color: 'rgb(178, 255, 158)' },
    { text: t('tages-3'), icon: '🎯', color: 'rgb(175, 252, 65)' },
    { text: t('tages-4'), icon: '📊', color: 'rgb(29, 211, 176)' },
    { text: t('tages-5'), icon: '💬', color: 'rgb(231, 111, 81)' },
  ];

  return (
    <Section ref={sectionRef} className="relative overflow-visible py-16">
      {/* Background geometric accents */}
      <motion.div
        className="absolute left-5 top-10 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <GeometricShape shape="circle" className="text-highlight-light dark:text-highlight-dark" />
      </motion.div>

      <StaggeredContainer className="relative z-10 grid w-full grid-cols-4 gap-4">
        {/* Photo Section - Enhanced with multiple animations */}
        <StaggeredItem className="relative col-span-4 row-span-1 justify-items-center md:col-span-2 md:row-span-3">
          <motion.div
            style={{ y: imageY }}
            className="group relative"
            onHoverStart={() => setImageHovered(true)}
            onHoverEnd={() => setImageHovered(false)}>
            {/* Animated photo frame */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}>
              {/* Background layers for depth effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-surface-light/20 dark:bg-surface-dark/20"
                animate={{
                  scale: imageHovered ? 1.1 : 1,
                  rotate: imageHovered ? 2 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: -2, transform: 'translate(8px, 8px)' }}
              />

              <motion.div
                className="absolute inset-0 rounded-lg bg-surface-light/30 dark:bg-surface-dark/30"
                animate={{
                  scale: imageHovered ? 1.05 : 1,
                  rotate: imageHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1, transform: 'translate(4px, 4px)' }}
              />

              {/* Main image */}
              <motion.div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/photo/my-photo-1.png"
                  alt="myphoto"
                  width={400}
                  height={800}
                  className="hover:contrast-110 z-10 h-auto object-cover transition-all duration-500"
                />

                {/* Animated overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-surface-light/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Floating geometric accents around photo */}
              <motion.div
                className="absolute -right-4 -top-4"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}>
                <GeometricShape
                  shape="circle"
                  size={20}
                  className="text-surface-light dark:text-surface-dark"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}>
                <GeometricShape shape="square" size={16} className="text-hover-light dark:text-hover-dark" />
              </motion.div>
            </motion.div>
          </motion.div>
        </StaggeredItem>

        {/* About Text Section */}
        <StaggeredItem className="col-span-4 p-4 md:col-span-2">
          <motion.div style={{ y: textY }}>
            <AnimatedWrapper animation="fadeInLeft">
              <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                  <User className="h-6 w-6 text-h2-light dark:text-h2-dark" />
                </motion.div>
                <H h="h2">{t('about-title')}</H>
              </div>
            </AnimatedWrapper>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed">
                {t('about-text-1')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="leading-relaxed">
                {t('about-text-2')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="leading-relaxed">
                {t('about-text-3')}
              </motion.p>
            </div>

            {/* Animated accent line */}
            <motion.div
              className="mt-6 h-1 bg-gradient-to-r from-surface-light to-transparent dark:from-surface-dark"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </StaggeredItem>

        {/* Languages Section */}
        <StaggeredItem className="col-span-2 row-span-1 p-4 md:col-span-1">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                <Globe className="h-5 w-5 text-h1-light dark:text-h1-dark" />
              </motion.div>
              <H h="h3">{t('lang-title')}</H>
            </div>

            <ul className="space-y-3 pt-2">
              {languages.map((lang, index) => (
                <motion.li
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-gray-500">{lang.level}</span>
                  </div>

                  {/* Animated proficiency bar */}
                  <div className="mt-1 h-1 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-full bg-surface-light dark:bg-surface-dark"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </StaggeredItem>

        {/* Advantages Section */}
        <StaggeredItem className="col-span-2 row-span-2 p-4 md:col-span-1">
          <div className="h-full">
            <div className="mb-4 flex items-center gap-3">
              <H h="h3">{t('tages-title')}</H>
            </div>

            <ul className="space-y-4 pt-2">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={advantage.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex cursor-default items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                  whileHover={{ x: 5 }}>
                  <motion.span
                    className="text-lg"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                    }}
                    transition={{ duration: 0.2 }}>
                    {advantage.icon}
                  </motion.span>
                  <span className="font-medium transition-colors group-hover:text-surface-light dark:group-hover:text-surface-dark">
                    {advantage.text}
                  </span>

                  {/* Animated accent dot */}
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}>
                    <GeometricShape shape="circle" size={6} color={advantage.color} />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </StaggeredItem>

        {/* Resume Section */}
        <StaggeredItem className="col-span-2 p-4 md:col-span-1">
          <div className="h-full text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:block">
                <Briefcase className="h-5 w-5 text-h1-light dark:text-h1-dark" />
              </motion.div>
              <H h="h3">{t('my-cv')}</H>
            </div>

            <div className="pt-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <DownloadResumeButton
                  variant="ghost"
                  className="group relative items-center overflow-hidden p-4">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-surface-light/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <span className="relative z-10 flex items-center gap-2">
                    {t('download')}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                      <Download size={20} />
                    </motion.div>
                  </span>
                </DownloadResumeButton>
              </motion.div>

              {/* Geometric accent */}
              <motion.div
                className="mt-3 flex justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <GeometricShape shape="line" size={40} className="bg-h1-light dark:bg-h1-dark" />
              </motion.div>
            </div>
          </div>
        </StaggeredItem>
      </StaggeredContainer>
    </Section>
  );
};

export default AboutMeSection;
