'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { ContactFormData } from './contact-form.types';
import { contactFormValidation } from './contact-form.validation';
import { sendTelegramMessage } from '@/shared/api/telegram';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: contactFormValidation.name.required && 'Name is required',
              minLength: {
                value: contactFormValidation.name.minLength!,
                message: 'Name must be at least 2 characters',
              },
              maxLength: {
                value: contactFormValidation.name.maxLength!,
                message: 'Name must be less than 50 characters',
              },
              validate: contactFormValidation.name.validate,
            })}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-700"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: contactFormValidation.email.required && 'Email is required',
              pattern: {
                value: contactFormValidation.email.pattern!,
                message: 'Please enter a valid email address',
              },
              validate: contactFormValidation.email.validate,
            })}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-700"
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            {...register('message', {
              required: contactFormValidation.message.required && 'Message is required',
              minLength: {
                value: contactFormValidation.message.minLength!,
                message: 'Message must be at least 10 characters',
              },
              maxLength: {
                value: contactFormValidation.message.maxLength!,
                message: 'Message must be less than 1000 characters',
              },
              validate: contactFormValidation.message.validate,
            })}
            rows={6}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 dark:border-gray-600 dark:bg-gray-700"
            placeholder="Your message..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </Button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-500">
            Message sent successfully! I'll get back to you soon.
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-500">
            Failed to send message. Please try again later.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};
