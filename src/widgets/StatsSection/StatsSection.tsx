// src/widgets/StatsSection/ui/StatsSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code, Award, Users, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import {
  AnimatedWrapper,
  HoverCard,
  StaggeredContainer,
  StaggeredItem,
  GeometricShape,
} from '@/shared/ui/AnimatedComponents';

interface SkillData {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
  description: string;
}
// Stats data
const STATS: SkillData[] = [
  {
    value: '4+',
    label: 'Years Experience',
    icon: Calendar,
    color: '#8F2A9D',
    description: 'Professional development',
  },
  {
    value: '20+',
    label: 'Projects Completed',
    icon: Briefcase,
    color: '#B2FF9E',
    description: 'Successful deliveries',
  },
  {
    value: '15+',
    label: 'Technologies',
    icon: Code,
    color: '#AFFC41',
    description: 'Modern tech stack',
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    icon: Users,
    color: '#1DD3B0',
    description: 'Happy clients',
  },
  {
    value: '5+',
    label: 'Certifications',
    icon: Award,
    color: '#e76f51',
    description: 'Professional growth',
  },
  {
    value: '3',
    label: 'Languages',
    icon: Globe,
    color: '#e9c46a',
    description: 'Communication skills',
  },
];

// Animated counter component
const AnimatedCounter = ({
  value,
  duration = 2,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = numericValue / (duration * 60); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, duration, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="font-mono text-4xl font-bold md:text-5xl">
      {count}
      {suffix}
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: SkillData; index: number }) => {
  return (
    <HoverCard
      hoverAnimation="lift"
      className={`group relative overflow-hidden rounded-lg border-2 border-border-light p-6 shadow-sm dark:border-border-dark md:p-8`}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-10"
        style={{
          background: `linear-gradient(135deg, ${stat.color}, transparent)`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with animation */}
      <motion.div
        className="relative z-10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full md:h-20 md:w-20"
        style={{ backgroundColor: `${stat.color}20` }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ duration: 0.3 }}>
        <stat.icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: stat.color }} />

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 opacity-30"
          style={{ borderColor: stat.color }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Counter */}
      <div className="relative z-10 mb-2">
        <AnimatedCounter value={stat.value} duration={1.5 + index * 0.2} delay={index * 0.1} />
      </div>

      {/* Label */}
      <h3 className="relative z-10 mb-2 text-lg font-semibold md:text-xl">{stat.label}</h3>

      {/* Description */}
      <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>

      {/* Floating geometric accent */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}>
        <GeometricShape shape="circle" size={12} color={stat.color} />
      </motion.div>

      {/* Animated line accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full origin-left hover:scale-100"
        style={{ backgroundColor: stat.color }}
        initial={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      />
    </HoverCard>
  );
};

export const StatsSection = () => {
  return (
    <Section className="relative overflow-hidden py-20">
      {/* Background geometric shapes */}
      <motion.div
        className="absolute left-10 top-10 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}>
        <GeometricShape shape="circle" size={150} color="rgb(42, 157, 143)" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-5"
        animate={{
          rotate: [360, 0],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}>
        <GeometricShape shape="square" size={120} color="rgb(178, 255, 158)" />
      </motion.div>

      <div className="relative z-10">
        {/* Section Header */}
        <AnimatedWrapper animation="fadeInUp" className="mb-16 text-center">
          <motion.div
            className="mb-6 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
              <Award className="h-8 w-8 text-surface-light dark:text-surface-dark" />
            </motion.div>
            <H h="h2">Achievements & Experience</H>
          </motion.div>

          <motion.p
            className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400"
            whileInView={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            Numbers that reflect my journey and commitment to excellence in web development
          </motion.p>

          {/* Animated accent line */}
          <motion.div
            className="mx-auto mt-6 h-1 w-32 bg-gradient-to-r from-surface-light to-transparent dark:from-surface-dark"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedWrapper>

        {/* Stats Grid */}
        <StaggeredContainer className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {STATS.map((stat, index) => (
            <StaggeredItem key={stat.label}>
              <StatCard stat={stat} index={index} />
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </Section>
  );
};

export default StatsSection;
