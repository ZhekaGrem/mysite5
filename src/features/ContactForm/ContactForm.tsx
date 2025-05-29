'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { ContactFormData } from './contact-form.types';
import { contactFormValidation } from './contact-form.validation';
import { sendTelegramMessage } from '@/shared/api/telegram';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Watch form values for animation
  const formValues = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const success = await sendTelegramMessage(data);
      if (success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Swiss-style form field animation
  const fieldVariants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
    filled: {
      borderColor: '#2dd4bf',
      transition: { duration: 0.3 },
    },
  };

  // Progress indicator animation
  const progressVariants = {
    initial: { width: '0%' },
    animate: {
      width: `${(Object.values(formValues).filter(Boolean).length / 3) * 100}%`,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden rounded-none bg-transparent p-8">
      {/* Swiss-style geometric accents */}
      <motion.div
        className="absolute -right-4 top-0 h-16 w-1 bg-border-light dark:bg-border-dark"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute right-0 top-0 h-1 w-16 bg-border-light dark:bg-border-dark"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 1 }}
      />

      {/* Progress bar */}
      <motion.div
        className="absolute left-0 top-0 h-1 bg-border-light dark:bg-border-dark"
        variants={progressVariants}
        initial="initial"
        animate="animate"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Name Field */}
        <motion.div
          animate={focusedField === 'name' ? 'focused' : formValues.name ? 'filled' : 'initial'}
          variants={fieldVariants}
          className="relative">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-h2-light dark:text-h2-dark">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              {...register('name', contactFormValidation.name)}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className="w-full border-b-2 border-gray-200 bg-transparent p-3 pl-12 transition-colors focus:border-border-light focus:outline-none dark:border-gray-700 dark:focus:border-border-dark"
              placeholder="Your name"
            />
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500">
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Field */}
        <motion.div
          animate={focusedField === 'email' ? 'focused' : formValues.email ? 'filled' : 'initial'}
          variants={fieldVariants}
          className="relative">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-h2-light dark:text-h2-dark">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              {...register('email', contactFormValidation.email)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className="w-full border-b-2 border-gray-200 bg-transparent p-3 pl-12 transition-colors focus:border-border-light focus:outline-none dark:border-gray-700 dark:focus:border-border-dark"
              placeholder="your.email@example.com"
            />
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Field */}
        <motion.div
          animate={focusedField === 'message' ? 'focused' : formValues.message ? 'filled' : 'initial'}
          variants={fieldVariants}
          className="relative">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-h2-light dark:text-h2-dark">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              id="message"
              {...register('message', contactFormValidation.message)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={6}
              className="w-full border-b-2 border-gray-200 bg-transparent p-3 pl-12 transition-colors focus:border-border-light focus:outline-none dark:border-gray-700 dark:focus:border-border-dark"
              placeholder="Your message..."
            />
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" disabled={isSubmitting} className="relative w-full overflow-hidden">
            {isSubmitting ? (
              <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </motion.div>
            ) : (
              <motion.div
                className="flex items-center justify-center gap-2 text-accent-light dark:text-accent-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                Send Message
                <Send className="h-5 w-5" />
              </motion.div>
            )}
          </Button>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`text-center ${submitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {submitStatus === 'success'
                ? "Message sent successfully! I'll get back to you soon."
                : 'Failed to send message. Please try again later.'}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};
