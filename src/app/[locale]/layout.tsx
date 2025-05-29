import { IBM_Plex_Mono } from 'next/font/google';
// import { getTranslations } from 'next-intl/server';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/shared/i18n/routing';
import { ThemeProvider } from 'next-themes';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import ChatWidget from '@/widgets/ChatWidget/ChatWidget';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import { siteViewport, siteMetadata } from './metadata';
// import Head from 'next/head';
const plexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

export const viewport = siteViewport;
export const metadata = siteMetadata;

export type Params = Promise<{ locale: 'en' | 'ua' }>;
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Params };
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
            <Sidebar />
            <main>{children}</main>
            <Footer />
            <ChatWidget />
            <GoogleAnalytics gaId="G-1S9YR0G6C6" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
