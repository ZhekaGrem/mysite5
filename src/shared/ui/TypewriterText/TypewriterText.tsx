import { motion } from 'framer-motion';

const typewrite = {
  initial: { width: '0%' },
  whileInView: { width: '100%' },
  viewport: { once: true },
  transition: {
    duration: 4,
    ease: 'easeOut',
  },
};

export const TypewriterText = ({ children, className }: { children: string; className?: string }) => (
  <div className="relative">
    <motion.div className={`${className} opacity-0`} aria-hidden="true">
      {children}
    </motion.div>
    <motion.div
      className={`${className} absolute left-0 top-0 overflow-hidden whitespace-pre-wrap`}
      variants={typewrite}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}>
      {children}
    </motion.div>
  </div>
);
