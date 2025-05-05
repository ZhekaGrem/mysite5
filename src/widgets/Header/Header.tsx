'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/shared/i18n/routing';
import SwitchTheme from '@/features/SwitchTheme/SwitchTheme';
import { useState } from 'react';
import SwitchLang from '@/features/SwitchLang/SwitchLang';

const Header = () => {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items using translation
  const navItems = [
    { href: '/', label: t('home') },
    { href: '/projects', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm mx-auto max-w-7xl">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Logo Area - Left Aligned */}
        <Link 
          href="/"
          className="font-mono text-xl font-semibold tracking-tighter"
        >
          LOGO
        </Link>

        {/* Mobile Menu Button - Visible on Small Screens */}
        <button
          className="ml-auto text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '×' : '≡'}
        </button>

        {/* Navigation - Center Aligned on Desktop */}
        <nav className={`
          ${isOpen ? 'block' : 'hidden'} 
          absolute left-0 right-0 top-full bg-background/80 backdrop-blur-sm
          md:static md:block md:bg-transparent md:backdrop-blur-none
        `}>
          <ul className="flex flex-col items-center gap-6 p-4 md:flex-row md:p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="font-mono text-base uppercase tracking-widest transition-colors hover:text-primary-dark dark:hover:text-primary-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions Area - Right Aligned */}
        <div className="hidden items-center justify-end gap-4 md:flex">
          <SwitchTheme />
          <SwitchLang />
        </div>
      </div>
    </header>
  );
};

export default Header;