import { Metadata, Viewport } from 'next';
import { getTranslations } from 'next-intl/server';
type Props = {
  params: Promise<{ locale: string }>;
};

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const previewImgUrl: string =
  'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747742176/preview-img/opengraph-image_h7hh7s.jpg';
const siteUrl: string = 'https://portfolio-zhekagrems-projects.vercel.app/';
export async function generateMetadatagenerateMetadata({ params }: Props): Promise<Metadata> {
  // Дочекаємося резолву params
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    applicationName: 'HremStudio',
    referrer: 'origin-when-cross-origin',
    keywords: ['frontend', 'developer', 'portfolio', 'react', 'nextjs'],
    authors: [{ name: 'Yevhenii Hrem', url: 'https://github.com/ZhekaGrem' }],
    creator: 'Yevhenii Hrem',
    publisher: 'HremStudio or Company',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'uk-UA': '/ua',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'en' ? 'ua' : 'en',
      url: siteUrl,
      siteName: t('og.siteName'),
      title: t('og.title'),
      description: t('og.description'),
      images: [
        {
          url: previewImgUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      site: '@GremZheka',
      creator: '@GremZheka',
      creatorId: 'GremZheka',
      images: [previewImgUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],

      apple: [{ url: '/apple-touch-icon.png' }],
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },

    appleWebApp: {
      capable: true,
      title: t('appName'),
      statusBarStyle: 'black-translucent',
    },
    abstract: t('description'),
    category: 'technology',
    classification: 'Portfolio',
    other: {
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/browserconfig.xml',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': t('appName'),
      'format-detection': 'telephone=no',
      'pinterest-rich-pin': 'true',
      'fb:app_id': 'your-fb-app-id',
      'twitter:data1': t('twitter.data1'),
      'twitter:label1': t('twitter.label1'),
      'twitter:data2': t('twitter.data2'),
      'twitter:label2': t('twitter.label2'),
    },
  };
}
