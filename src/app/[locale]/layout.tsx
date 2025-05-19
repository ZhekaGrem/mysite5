import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/shared/i18n/routing';
import { LocaleType } from '@/shared/types/index.types';
import { ThemeProvider } from 'next-themes';
import { generateDynamicMetadata } from '@/shared/i18n/metadata';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import Sidebar from '@/widgets/Sidebar/Sidebar';

const plexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

export async function generateMetadata({ params }: { params: { locale: Promise<LocaleType> } }): Promise<Metadata> {
  return generateDynamicMetadata(params, 'home');
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: LocaleType };
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={` ${plexMono.className} min-h-screen bg-primary-light text-text-light antialiased dark:bg-primary-dark dark:text-text-dark`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <Sidebar  />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
