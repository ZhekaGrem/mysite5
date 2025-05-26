import { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

const siteUrl: string = 'https://portfolio-zhekagrems-projects.vercel.app/';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Frontend Developer Portfolio',
    template: '%s | Portfolio',
  },
  description:
    'Professional Frontend Developer portfolio specializing in React, Next.js, and modern web technologies',
  applicationName: 'HremStudio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'frontend',
    'developer',
    'portfolio',
    'react',
    'nextjs',
    'web development',
    'javascript',
    'typescript',
  ],
  authors: [{ name: 'Yevhenii Hrem', url: 'https://github.com/ZhekaGrem' }],
  creator: 'Yevhenii Hrem',
  publisher: 'HremStudio',
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
    locale: 'en_US',
    alternateLocale: 'uk_UA',
    url: siteUrl,
    siteName: 'Frontend Developer Portfolio',
    title: 'Frontend Developer Portfolio - Modern Web Solutions',
    description:
      'Explore innovative web development projects and solutions built with React, Next.js, and cutting-edge technologies',

    images: [
      {
        url: 'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747900839/preview-img/opengraph-image-2_bbaqvc.jpg',
        alt: 'Frontend Developer Portfolio Preview',
        width: 1000,
        height: 430,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Developer Portfolio',
    description: 'Modern web development projects and solutions',
    images: [
      'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747900839/preview-img/opengraph-image-2_bbaqvc.jpg',
    ],
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

  appleWebApp: {
    capable: true,
    title: 'Frontend Portfolio',
    statusBarStyle: 'black-translucent',
  },
  abstract:
    'Professional Frontend Developer portfolio specializing in React, Next.js, and modern web technologies',
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'og:image':
      'https://res.cloudinary.com/dwgk0dtrp/image/upload/v1747900839/preview-img/opengraph-image-2_bbaqvc.jpg',
    'msapplication-TileColor': '#1DD3B0',
    'msapplication-config': '/browserconfig.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Frontend Portfolio',
    'format-detection': 'telephone=no',
    'pinterest-rich-pin': 'true',
    'fb:app_id': 'your-fb-app-id',
    'twitter:data1': '4+ years of experience',
    'twitter:label1': 'Experience',
    'twitter:data2': '20+ completed projects',
    'twitter:label2': 'Projects',
  },
};
