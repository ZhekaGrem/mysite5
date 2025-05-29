'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/shared/i18n/routing';
import SwitchTheme from '@/features/SwitchTheme/SwitchTheme';
import { useState, useEffect } from 'react';
import SwitchLang from '@/features/SwitchLang/SwitchLang';
import Logo from '@/shared/ui/Logo';
import { cn } from '@/shared/lib/utils';

const Header = () => {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Navigation items using translation
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/resume', label: t('resume') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl border-b border-border-light dark:border-border-dark',
        isScrolled ? 'bg-background/95 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      )}>
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo Area - Left Aligned */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tighter text-surface-light/80 hover:text-hover-light dark:text-surface-dark/80 dark:hover:text-hover-dark">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <SwitchTheme />
          <SwitchLang />
        </div>
        {/* Mobile Menu Button - Visible on Small Screens */}
        <button
          className="ml-auto text-2xl text-text-light dark:text-text-dark md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '×' : '≡'}
        </button>

        {/* Navigation - Center Aligned on Desktop */}

        {/* Actions Area - Right Aligned */}

        <nav
          className={` ${isOpen ? 'block bg-primary-light dark:bg-primary-dark md:bg-primary-light/20 md:dark:bg-primary-dark/20' : 'hidden'} bg-background/80 absolute left-0 right-0 top-full backdrop-blur-sm md:static md:block md:bg-transparent md:backdrop-blur-none`}>
          <ul className="flex flex-col items-center justify-end gap-6 p-4 md:flex-row md:p-0">
            {navItems.map((item) => (
              <li
                onClick={() => setIsOpen(!isOpen)}
                key={item.href}
                className="py-5 text-base font-semibold uppercase tracking-widest transition-colors hover:text-hover-light dark:hover:text-hover-dark">
                <Link href={item.href} className="">
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
