import { IBM_Plex_Mono } from 'next/font/google';
import { getTranslations } from 'next-intl/server';
import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/shared/i18n/routing';
import { ThemeProvider } from 'next-themes';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import Sidebar from '@/widgets/Sidebar/Sidebar';
import { siteViewport } from './metadata';
const plexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
});

export const viewport = siteViewport;

export async function generateMetadata(props: { params: { locale: string } }) {
  // Await the params object before destructuring
  const params = await Promise.resolve(props.params);
  const locale = params.locale;

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      images: [
        {
          url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747688498/preview-img/opengraph-image_h7hh7s.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: [
        'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747688498/preview-img/opengraph-image_h7hh7s.jpg',
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
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
            <GoogleAnalytics gaId="G-1S9YR0G6C6" />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
