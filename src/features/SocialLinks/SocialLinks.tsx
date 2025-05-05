// src/features/SocialLinks/SocialLinks.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import Whatsapp from './Whatsapp'

const socialLinks = [
  { Icon: Github,   href: 'https://github.com', label: 'GitHub' },
  { Icon: Linkedin,  href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Whatsapp,  href: 'https://whatsapp.com', label: 'whatsapp' },
  { Icon: Facebook,  href: 'https://telegram.com', label: 'Telegram' }
];

interface SocialLinksProps {
  position?: 'footer' | 'side';
}

const SocialLinks = ({ position = 'side' }: SocialLinksProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Інвертуємо видимість бокової панелі коли футер в в'юпорті
        if (position === 'side') {
          setIsVisible(!entry.isIntersecting);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.2, // Спрацьовує коли 20% футера видно
        rootMargin: '100px' // Додаємо відступ для більш плавного переходу
      }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, [position]);

  const sideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: position === 'side' ? { opacity: 0, x: -20 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  if (position === 'footer') {
    return (
      <motion.div
        ref={footerRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={footerVariants}
        className="flex gap-6 items-center pt-5"
      >
        {socialLinks.map(({ Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-current transition-colors hover:text-primary-dark dark:hover:text-primary-light"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sideVariants}
          className="fixed left-6 top-1/2 z-40 -translate-y-1/2 flex flex-col gap-6"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-current transition-colors hover:text-primary-dark dark:hover:text-primary-light"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinks;