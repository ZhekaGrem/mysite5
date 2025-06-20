'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { ContactForm } from '@/features/ContactForm/ContactForm';
import { useState, ReactNode } from 'react';
import { GeometricShape } from '@/shared/ui/AnimatedComponents/index';
import { TypewriterText } from '@/shared/ui/TypewriterText/TypewriterText';
type Social = {
  name: string;
  url: string;
  icon: ReactNode;
};

type PropsIcon = {
  social: Social;
  index: number;
};

const ContactClient = () => {
  const CONTACT_INFO = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone',
      value: '+380 93 123 4567',
      link: 'tel:+380931234567',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      value: 'your.email@gmail.com',
      link: 'mailto:your.email@gmail.com',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Location',
      value: 'Kyiv, Ukraine',
      link: 'https://maps.google.com/?q=Kyiv,Ukraine',
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/your-profile',
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: 'Telegram',
      url: 'https://t.me/your-username',
      icon: <Send className="h-6 w-6" />,
    },
  ];

  // Swiss-style grid animation
  const gridVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const SocialLink = ({ social, index }: PropsIcon) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col items-center gap-3 p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 }}>
        {/* Geometric background */}
        <motion.div
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon and text */}
        <div className="relative z-10">{social.icon}</div>
        <span className="relative z-10 text-sm">{social.name}</span>

        {/* Animated accent */}
        <motion.div
          className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 bg-border-light dark:bg-border-dark"
          animate={isHovered ? { width: '80%' } : { width: '10px' }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-1 w-6 -translate-x-1/2 bg-border-light dark:bg-border-dark"
          animate={isHovered ? { width: '80%' } : { width: '10px' }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    );
  };

  const lineVariants = {
    initial: { height: 0 },
    animate: { height: '100%', transition: { duration: 1.5 } },
  };

  return (
    <Section className="relative min-h-screen py-16">
      {/* Swiss-style animated grid overlay */}
      <motion.div
        className="absolute inset-0 grid grid-cols-12"
        variants={gridVariants}
        initial="initial"
        animate="animate">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={i}
              className="border-x border-border-light dark:border-border-dark"
              variants={lineVariants}
            />
          ))}
      </motion.div>

      {/* Main content */}
      <div className="relative grid gap-16 md:grid-cols-2">
        {/* Left Column - Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 px-6">
          {/* Title with Swiss-style underline */}
          <div className="relative">
            <H h="h1" className="mb-4">
              Contact Me
            </H>
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
              <GeometricShape shape="circle" size={120} color="rgb(42, 157, 143)" />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 2 }}
              className="h-1 bg-border-light dark:bg-border-dark"
            />
            <TypewriterText className="mt-6 text-lg">
              I'm always open to new opportunities and interesting projects.
            </TypewriterText>
          </div>

          {/* Contact Methods with Swiss-style layout */}
          <div className="relative space-y-8">
            {CONTACT_INFO.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group relative flex items-center gap-6 overflow-hidden p-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}>
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-surface-light opacity-0 dark:bg-surface-dark"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon with geometric background */}
                <div className="relative">
                  <div className="absolute -inset-1 rotate-45 bg-surface-light opacity-20 dark:bg-surface-dark" />
                  {info.icon}
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 }}>
                    <H h="h3" className="text-sm font-bold uppercase tracking-wider">
                      {info.title}
                      <TypewriterText className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </TypewriterText>
                    </H>
                  </motion.div>
                </div>

                {/* Animated line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-border-light dark:bg-border-dark"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links with Swiss-style geometric elements */}
          <div className="relative">
            <H h="h2" className="mb-6 text-xl font-semibold">
              Connect on Social Media
            </H>
            <div className="grid grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={social.name} social={social} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form with Swiss-style elements */}
        <div className="relative">
          {/* Geometric accent */}

          {/* Form wrapper with animated border */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <ContactForm />
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
            <GeometricShape shape="square" size={80} color="rgb(178, 255, 158)" />
          </motion.div>
        </div>
      </div>

      {/* Bottom geometric accents */}
    </Section>
  );
};

export default ContactClient;
