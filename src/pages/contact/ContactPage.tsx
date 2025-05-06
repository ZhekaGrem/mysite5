'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/features/ContactForm/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+380 93 123 4567',
      link: 'tel:+380931234567'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'your.email@gmail.com',
      link: 'mailto:your.email@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Kyiv, Ukraine',
      link: 'https://maps.google.com/?q=Kyiv,Ukraine'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
    { name: 'GitHub', url: 'https://github.com/your-profile' },
    { name: 'Telegram', url: 'https://t.me/your-username' }
  ];

  return (
    <Section className="py-16 min-h-screen">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <H h="h1">Contact Me</H>
          <p className="text-lg">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out through any of these channels:
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {info.icon}
                <div>
                  <h3 className="text-sm font-semibold uppercase">{info.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Connect on Social Media</h2>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactPage;