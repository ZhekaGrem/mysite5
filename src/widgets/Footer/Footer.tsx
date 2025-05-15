// src/widgets/Footer/Footer.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/shared/i18n/routing';
import SocialLinks from '@/features/SocialLinks/SocialLinks';
import Logo from '@/shared/ui/Logo';

const Footer = () => {
  const t = useTranslations('navigation');

  // Footer sections using grid system
  const sections = [
    {
      title: 'Navigation',
      links: [
        { href: '/', label: t('home') },
        { href: '/projects', label: t('about') },
        { href: '/contact', label: t('contact') },
      ],
    },

    {
      title: 'Contact',
      links: [
        { href: 'mailto:info@example.com', label: 'info@example.com' },
        { href: 'tel:+380123456789', label: '+38 (012) 345-67-89' },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 mx-auto mt-auto max-w-7xl border-t border-border-light backdrop-blur-sm dark:border-border-dark">
      <div className=" ">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="h-8 w-16 text-xl font-semibold tracking-tighter">
              <Logo />
            </Link>
            <p className="max-w-md text-sm leading-relaxed">
              Створюємо передові технологічні рішення, поєднуючи функціональність та естетику відповідно до
              принципів швейцарського стилю.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">Social</h3>
            <SocialLinks position="footer" />
          </div>
          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-border-light px-6 pb-6 pt-6 dark:border-border-dark md:flex-row md:items-center md:justify-between">
          <p className="text-sm">© {currentYear} Your Company. All rights reserved.</p>

          {/* Bottom Links */}
          <ul className="flex flex-wrap gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
              <li key={label}>
                <Link
                  href="#"
                  className="text-sm transition-colors hover:text-primary-dark dark:hover:text-primary-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
