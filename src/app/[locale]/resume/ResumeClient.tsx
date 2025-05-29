// src/app/[locale]/resume/ResumeClient.tsx
'use client';

import { useEffect, useState } from 'react';
import Section from '@/shared/ui/Section';
import { H } from '@/shared/ui/Htag';
import DownloadResumeButton from '@/shared/ui/DownloadResumeButton/DownloadResumeButton';
import { Download, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  AnimatedWrapper,
  StaggeredContainer,
  StaggeredItem,
  ParallaxElement,
  GeometricShape,
} from '@/shared/ui/AnimatedComponents';

// Animation variants

// Animated PDF viewer with loading states
const AnimatedPDFViewer = () => {
  const pdfUrl = '/assets/cv/Yevhenii_Hrem_CV.pdf';
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}>
      <div className="mb-4 w-full bg-gray-100 p-4 dark:bg-gray-800">
        <iframe src={`${pdfUrl}#view=FitH`} className="h-[800px] w-full border-none" title="Resume PDF" />
      </div>
    </motion.div>
  );
};

const ResumeClient = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Section className="py-16">
        <motion.div
          className="flex h-[800px] items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <motion.div
            className="h-16 w-16 rounded-full border-4 border-surface-light border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Header with Parallax */}
      <ParallaxElement speed={0.2}>
        <Section className="relative overflow-hidden pt-16">
          {/* Background geometric shapes */}
          <motion.div
            className="absolute left-10 top-20 opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}>
            <GeometricShape shape="circle" size={120} className="text-surface-light dark:text-surface-dark" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10 opacity-15"
            animate={{
              rotate: [360, 0],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}>
            <GeometricShape shape="square" size={80} className="text-h1-light dark:text-h1-dark" />
          </motion.div>

          <motion.div style={{ y: headerY }} className="relative z-10">
            <div className="mb-6 text-center md:mb-12">
              <AnimatedWrapper animation="fadeInUp">
                <motion.div
                  className="mb-6 inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <FileText className="h-8 w-8 text-h1-light dark:text-h1-dark" />
                  </motion.div>
                  <H h="h1">My Resume</H>
                </motion.div>
              </AnimatedWrapper>

              <AnimatedWrapper animation="fadeInUp" delay={0.2}>
                <motion.p
                  className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
                  whileInView={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}>
                  Comprehensive overview of my professional experience, technical skills, and achievements in
                  web development
                </motion.p>
              </AnimatedWrapper>

              {/* Primary download button with enhanced animations */}
              <AnimatedWrapper animation="scaleIn" delay={0.4}>
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-block">
                  <DownloadResumeButton variant="ghost" className="group relative overflow-hidden px-8 py-4">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-surface-light/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />

                    <span className="relative z-10 flex items-center gap-3">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                        <Download size={20} />
                      </motion.div>
                      Download CV
                    </span>
                  </DownloadResumeButton>

                  {/* Floating geometric accent */}
                  <motion.div
                    className="absolute -right-2 -top-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}>
                    <GeometricShape shape="circle" size={12} className="text-h2-light dark:text-h2-dark" />
                  </motion.div>
                </motion.div>
              </AnimatedWrapper>
            </div>
          </motion.div>
        </Section>
      </ParallaxElement>

      {/* Stats Section with Counters */}

      {/* Contact Information Quick Access */}

      {/* Main PDF Viewer */}
      <Section className="hidden w-full max-w-4xl flex-col items-center md:flex">
        <AnimatedPDFViewer />
      </Section>

      {/* Bottom Action Section */}
      <Section className="pb-8 md:py-16">
        <div className="text-center">
          <AnimatedWrapper animation="fadeInUp">
            <H h="h3" className="mb-6">
              Ready to collaborate?
            </H>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Let's discuss how my skills and experience can contribute to your next project
            </p>
          </AnimatedWrapper>

          <StaggeredContainer className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <StaggeredItem>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <DownloadResumeButton variant="btn_primary_outline" className="group relative px-8 py-4">
                  <motion.span
                    className="flex items-center gap-3"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}>
                    Download Resume
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                      <Download size={20} />
                    </motion.div>
                  </motion.span>
                </DownloadResumeButton>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 bg-surface-light px-8 py-4 font-medium text-primary-light transition-colors hover:bg-surface-light/90 dark:bg-surface-dark dark:text-primary-dark dark:hover:bg-surface-dark/90"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}>
                <span>Get In Touch</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}>
                  →
                </motion.div>
              </motion.a>
            </StaggeredItem>
          </StaggeredContainer>

          {/* Floating geometric accents */}
          <motion.div
            className="absolute left-10 top-10 opacity-20"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}>
            <GeometricShape shape="square" size={30} className="text-h2-light dark:text-h2-dark" />
          </motion.div>

          <motion.div
            className="absolute bottom-10 right-10 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}>
            <GeometricShape shape="circle" size={40} className="text-border-light dark:text-border-dark" />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default ResumeClient;
