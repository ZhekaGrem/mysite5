'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <Section className="py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-3">
          <div className="fixed  top-24 space-y-4 pt-10">
            <h2 className="text-xl font-bold">On this page</h2>
            <nav className="space-y-2">
              {['Information Collection', 'Data Usage', 'Your Rights', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block border-l-2 border-transparent pl-4 text-sm hover:border-surface-light dark:hover:border-surface-dark">
                  {item}
                </a>
              ))}
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
            <H h="h1">Privacy Policy</H>
            <p className="mt-4 text-lg">Last updated: May 05, 2025</p>
          </header>

          <div className="prose prose-lg dark:prose-invert">
            <section id="information-collection" className="mb-12">
              <H h="h2">Information Collection</H>
              <div className="mt-6 grid gap-6">
                <p>We collect information that you provide directly to us, including but not limited to:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                  <li>Device and usage information</li>
                </ul>
              </div>
            </section>

            <section id="data-usage" className="mb-12">
              <H h="h2">Data Usage</H>
              <div className="mt-6 grid gap-6">
                <p>We use the collected information for various purposes:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h3 className="mb-3 text-lg font-semibold">Service Provision</h3>
                    <p>To operate, maintain, and improve our services</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h3 className="mb-3 text-lg font-semibold">Communication</h3>
                    <p>To send you updates and relevant information</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="your-rights" className="mb-12">
              <H h="h2">Your Rights</H>
              <div className="mt-6 grid gap-6">
                <p>You have several rights regarding your personal data:</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    'Access your data',
                    'Correct inaccuracies',
                    'Request deletion',
                    'Restrict processing',
                    'Data portability',
                    'Object to processing',
                  ].map((right) => (
                    <div key={right} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                      {right}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="mb-12">
              <H h="h2">Contact</H>
              <div className="mt-6 grid gap-6">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <p>Email: privacy@example.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Privacy Street, Security City, 12345</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-12 border-t pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This policy is effective as of May 05, 2025 and will remain in effect except with respect to any
              changes in its provisions in the future. Read our{' '}
              <Link href="/terms" className="text-surface-light underline dark:text-surface-dark">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/cookies" className="text-surface-light underline dark:text-surface-dark">
                Cookie Policy
              </Link>
              .
            </p>
          </footer>
        </motion.article>
      </motion.div>
    </Section>
  );
};

export default PrivacyPolicy;
