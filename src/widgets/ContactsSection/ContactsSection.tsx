'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { Button } from '@/shared/ui/button';
import { ArrowBigRightDash } from 'lucide-react';
import { AnimatedWrapper, GeometricShape } from '@/shared/ui/AnimatedComponents';

const ContactsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section className="relative my-20 overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute left-1/4 top-0 opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <GeometricShape shape="circle" size={200} color="rgb(42, 157, 143)" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-1/4 opacity-5"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <GeometricShape shape="square" size={150} color="rgb(178, 255, 158)" />
      </motion.div>

      <div className="relative z-10 text-center">
        <AnimatedWrapper animation="fadeInUp">
          <motion.div
            className="mb-6 flex items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <ArrowBigRightDash className="h-8 w-8 text-surface-light dark:text-surface-dark" />
            </motion.div>
            <H h="h2">Звязатись зі мною</H>
          </motion.div>
        </AnimatedWrapper>

        <AnimatedWrapper animation="fadeInUp" delay={0.2}>
          <motion.p
            className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed md:mt-12"
            whileInView={{
              opacity: [0.8, 1, 0.8],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}>
            Let's connect and explore how I can help you build high-quality, responsive, and scalable web
            solutions.
          </motion.p>
        </AnimatedWrapper>

        <AnimatedWrapper animation="scaleIn" delay={0.4}>
          <motion.div
            className="relative inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}>
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="relative">
                <Button variant="ghost" className="group relative overflow-hidden p-6 text-lg">
                  {/* Animated background waves */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-surface-light/20 via-surface-light/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 1,
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    Написати
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}>
                      <ArrowBigRightDash size={24} className="animate-bounce-x" />
                    </motion.div>
                  </span>

                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-surface-light/10 dark:bg-surface-dark/10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1 : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </Link>

            {/* Floating geometric accents around button */}
            <motion.div
              className="absolute -right-2 -top-2"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}>
              <GeometricShape shape="circle" size={12} color="rgb(42, 157, 143)" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{
                y: [-3, 3, -3],
                rotate: [45, -45, 45],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}>
              <GeometricShape shape="square" size={10} color="rgb(178, 255, 158)" />
            </motion.div>

            <motion.div
              className="absolute -left-8 top-1/2 -translate-y-1/2"
              animate={{
                scaleX: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}>
              <GeometricShape shape="line" size={20} color="rgb(175, 252, 65)" />
            </motion.div>
          </motion.div>
        </AnimatedWrapper>
      </div>
    </Section>
  );
};

export default ContactsSection;
