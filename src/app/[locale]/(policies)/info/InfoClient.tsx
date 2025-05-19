'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';



const InfoClient = () => {
  return (
    <Section className="py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-3">
          <div className="fixed top-24 space-y-4 pt-10">
            <h2 className="text-xl font-bold">Quick Navigation</h2>
            <nav className="space-y-2">
              {['What Are Cookies', 'Types of Cookies', 'Cookie Usage', 'Managing Cookies', 'Updates'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="block border-l-2 border-transparent pl-4 text-sm hover:border-surface-light dark:hover:border-surface-dark">
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.article
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="col-span-12 lg:col-span-9">
          <header className="mb-12">
            <H h="h1">Cookie Policy</H>
            <p className="mt-4 text-lg">Last Updated: May 05, 2025</p>
          </header>

          <div className="prose prose-lg dark:prose-invert">
            <section id="what-are-cookies" className="mb-12">
              <H h="h2">What Are Cookies</H>
              <div className="mt-6 grid gap-6">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <p>
                    Cookies are small text files that are placed on your device when you visit a website. They
                    are widely used to make websites work more efficiently and provide useful information to
                    website owners.
                  </p>
                </div>
              </div>
            </section>

            <section id="types-of-cookies" className="mb-12">
              <H h="h2">Types of Cookies</H>
              <div className="mt-6 grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: 'Essential Cookies',
                      description: 'Required for basic website functionality and cannot be disabled.',
                    },
                    {
                      title: 'Performance Cookies',
                      description: 'Help us understand how visitors interact with our website.',
                    },
                    {
                      title: 'Functionality Cookies',
                      description: 'Remember your preferences and personalization choices.',
                    },
                    {
                      title: 'Marketing Cookies',
                      description: 'Track your activity to deliver targeted advertising.',
                    },
                  ].map((cookie) => (
                    <div key={cookie.title} className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                      <h3 className="mb-3 text-lg font-semibold">{cookie.title}</h3>
                      <p>{cookie.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="cookie-usage" className="mb-12">
              <H h="h2">Cookie Usage</H>
              <div className="mt-6 grid gap-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Purpose
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {[
                        {
                          purpose: 'Authentication',
                          duration: 'Session',
                          type: 'Essential',
                        },
                        {
                          purpose: 'Analytics',
                          duration: '2 years',
                          type: 'Performance',
                        },
                        {
                          purpose: 'Preferences',
                          duration: '1 year',
                          type: 'Functionality',
                        },
                      ].map((row, idx) => (
                        <tr key={idx}>
                          <td className="whitespace-nowrap px-6 py-4">{row.purpose}</td>
                          <td className="whitespace-nowrap px-6 py-4">{row.duration}</td>
                          <td className="whitespace-nowrap px-6 py-4">{row.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="managing-cookies" className="mb-12">
              <H h="h2">Managing Cookies</H>
              <div className="mt-6 grid gap-6">
                <p>You can control and manage cookies in various ways:</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    'Browser Settings',
                    'Private Browsing',
                    'Opt-out Tools',
                    'Cookie Consent',
                    'Third-party Tools',
                    'Device Settings',
                  ].map((method) => (
                    <div
                      key={method}
                      className="rounded-lg border border-gray-200 p-4 text-center dark:border-gray-700">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="updates" className="mb-12">
              <H h="h2">Updates</H>
              <div className="mt-6 grid gap-6">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <p>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this
                    page with an updated revision date.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-12 border-t pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This Cookie Policy is part of our{' '}
              <Link href="/privacy" className="text-surface-light underline dark:text-surface-dark">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-surface-light underline dark:text-surface-dark">
                Terms of Service
              </Link>
              .
            </p>
          </footer>
        </motion.article>
      </motion.div>
    </Section>
  );
};

export default InfoClient;
