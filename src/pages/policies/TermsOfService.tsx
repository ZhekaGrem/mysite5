'use client';

import { H } from '@/shared/ui/Htag';
import Section from '@/shared/ui/Section';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TermsOfService = () => {
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
            <h2 className="text-xl font-bold">Table of Contents</h2>
            <nav className="space-y-2">
              {[
                'Agreement',
                'User Obligations',
                'Intellectual Property',
                'Limitations',
                'Termination',
                'Governing Law',
              ].map((item) => (
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
            <H h="h1">Terms of Service</H>
            <p className="mt-4 text-lg">Effective Date: May 05, 2025</p>
          </header>

          <div className="prose prose-lg dark:prose-invert">
            <section id="agreement" className="mb-12">
              <H h="h2">Agreement</H>
              <div className="mt-6 grid gap-6">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <p>
                    By accessing or using our services, you agree to be bound by these Terms of Service. If
                    you disagree with any part of the terms, you may not access the service.
                  </p>
                </div>
              </div>
            </section>

            <section id="user-obligations" className="mb-12">
              <H h="h2">User Obligations</H>
              <div className="mt-6 grid gap-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">You Agree To:</h3>
                    <ul className="list-inside list-disc space-y-2">
                      <li>Provide accurate information</li>
                      <li>Maintain account security</li>
                      <li>Comply with all applicable laws</li>
                      <li>Respect other users' rights</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">You Must Not:</h3>
                    <ul className="list-inside list-disc space-y-2">
                      <li>Violate any laws</li>
                      <li>Impersonate others</li>
                      <li>Distribute malware</li>
                      <li>Interfere with the service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="intellectual-property" className="mb-12">
              <H h="h2">Intellectual Property</H>
              <div className="mt-6 grid gap-6">
                <p>
                  The service and its original content, features, and functionality are owned by us and are
                  protected by international copyright, trademark, patent, trade secret, and other
                  intellectual property laws.
                </p>
              </div>
            </section>

            <section id="limitations" className="mb-12">
              <H h="h2">Limitations</H>
              <div className="mt-6 grid gap-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    'Availability',
                    'Accuracy',
                    'Updates',
                    'Third-party Links',
                    'User Content',
                    'Technical Issues',
                  ].map((limitation) => (
                    <div
                      key={limitation}
                      className="rounded-lg border border-gray-200 p-4 text-center dark:border-gray-700">
                      {limitation}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="termination" className="mb-12">
              <H h="h2">Termination</H>
              <div className="mt-6 grid gap-6">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                  <p>
                    We may terminate or suspend your access to our service immediately, without prior notice
                    or liability, for any reason whatsoever, including without limitation if you breach the
                    Terms.
                  </p>
                </div>
              </div>
            </section>

            <section id="governing-law" className="mb-12">
              <H h="h2">Governing Law</H>
              <div className="mt-6 grid gap-6">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Country],
                  without regard to its conflict of law provisions.
                </p>
              </div>
            </section>
          </div>

          <footer className="mt-12 border-t pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By using our service you agree to these terms. Read our{' '}
              <Link href="/privacy" className="text-surface-light underline dark:text-surface-dark">
                Privacy Policy
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

export default TermsOfService;
