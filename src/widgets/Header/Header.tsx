'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/shared/i18n/routing';
import SwitchTheme from '@/features/SwitchTheme/SwitchTheme';
import { useState } from 'react';
import SwitchLang from '@/features/SwitchLang/SwitchLang';
import Logo from '@/shared/ui/Logo';

const Header = () => {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items using translation
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="bg-background/80 fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl border-b backdrop-blur-sm border-border-light dark:border-border-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo Area - Left Aligned */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tighter text-surface-light/80 dark:text-surface-dark/80">
          <Logo />
        </Link>

        {/* Mobile Menu Button - Visible on Small Screens */}
        <button className="ml-auto text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '×' : '≡'}
        </button>

        {/* Navigation - Center Aligned on Desktop */}

        {/* Actions Area - Right Aligned */}
        <div className="hidden items-center justify-end gap-4 md:flex">
          <SwitchTheme />
          <SwitchLang />
        </div>
        <nav
          className={` ${isOpen ? 'block' : 'hidden'} bg-background/80 absolute left-0 right-0 top-full backdrop-blur-sm md:static md:block md:bg-transparent md:backdrop-blur-none`}>
          <ul className="flex flex-col items-center justify-end gap-6 p-4 md:flex-row md:p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base uppercase tracking-widest transition-colors hover:text-primary-dark dark:hover:text-primary-light">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
