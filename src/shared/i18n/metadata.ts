// src/shared/i18n/metadata.ts
import { Metadata } from 'next';
import { LocaleType } from '@/shared/types/index.types';

// Define base metadata for each locale
const baseMetadata: Record<LocaleType, Metadata> = {
  en: {
    title: {
      template: '%s | Frontend Developer Portfolio',
      default: 'Frontend Developer Portfolio',
    },
    description: 'Senior Frontend Developer with 4 years of expertise in React.js, Next.js, and TypeScript',
    keywords: ['Frontend', 'Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    metadataBase: new URL('https://your-domain.com'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Frontend Developer Portfolio',
      images: [
        {
          url: '/assets/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Frontend Developer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@your-handle',
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  ua: {
    title: {
      template: '%s | Портфоліо Frontend Розробника',
      default: 'Портфоліо Frontend Розробника',
    },
    description: 'Senior Frontend розробник з 4-річним досвідом створення високопродуктивних веб-рішень з React.js, Next.js та TypeScript',
    keywords: ['Frontend', 'Розробник', 'React', 'Next.js', 'TypeScript', 'Портфоліо'],
    authors: [{ name: 'Ваше Ім\'я' }],
    creator: 'Ваше Ім\'я',
    metadataBase: new URL('https://your-domain.com'),
    openGraph: {
      type: 'website',
      locale: 'uk_UA',
      siteName: 'Портфоліо Frontend Розробника',
      images: [
        {
          url: '/assets/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Портфоліо Frontend Розробника',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@your-handle',
    },
    robots: {
      index: true,
      follow: true,
    },
  },
};

// Define page-specific metadata for each locale
export const pageMetadata: Record<string, Record<LocaleType, Metadata>> = {
  home: {
    en: {
      title: 'Home',
      description: 'Welcome to my portfolio showcasing frontend development expertise and projects',
      openGraph: {
        title: 'Home | Frontend Developer Portfolio',
        description: 'Welcome to my portfolio showcasing frontend development expertise and projects',
      },
    },
    ua: {
      title: 'Дім',
      description: 'Ласкаво просимо до мого портфоліо, що демонструє досвід та проекти у frontend розробці',
      openGraph: {
        title: 'Дім | Портфоліо Frontend Розробника',
        description: 'Ласкаво просимо до мого портфоліо, що демонструє досвід та проекти у frontend розробці',
      },
    },
  },
  about: {
    en: {
      title: 'About Me',
      description: 'Learn about my skills, experience, and journey as a frontend developer',
      openGraph: {
        title: 'About Me | Frontend Developer Portfolio',
        description: 'Learn about my skills, experience, and journey as a frontend developer',
      },
    },
    ua: {
      title: 'Про мене',
      description: 'Дізнайтеся про мої навички, досвід та шлях як frontend розробника',
      openGraph: {
        title: 'Про мене | Портфоліо Frontend Розробника',
        description: 'Дізнайтеся про мої навички, досвід та шлях як frontend розробника',
      },
    },
  },
  projects: {
    en: {
      title: 'Projects',
      description: 'Explore my portfolio of web development projects, including e-commerce, mobile apps, and design systems',
      openGraph: {
        title: 'Projects | Frontend Developer Portfolio',
        description: 'Explore my portfolio of web development projects, including e-commerce, mobile apps, and design systems',
      },
    },
    ua: {
      title: 'Проекти',
      description: 'Перегляньте моє портфоліо проектів веб-розробки, включаючи електронну комерцію, мобільні додатки та системи дизайну',
      openGraph: {
        title: 'Проекти | Портфоліо Frontend Розробника',
        description: 'Перегляньте моє портфоліо проектів веб-розробки, включаючи електронну комерцію, мобільні додатки та системи дизайну',
      },
    },
  },
  resume: {
    en: {
      title: 'Resume',
      description: 'View my professional resume highlighting skills, experience, and qualifications in frontend development',
      openGraph: {
        title: 'Resume | Frontend Developer Portfolio',
        description: 'View my professional resume highlighting skills, experience, and qualifications in frontend development',
      },
    },
    ua: {
      title: 'Резюме',
      description: 'Перегляньте моє професійне резюме, що висвітлює навички, досвід та кваліфікацію у frontend розробці',
      openGraph: {
        title: 'Резюме | Портфоліо Frontend Розробника',
        description: 'Перегляньте моє професійне резюме, що висвітлює навички, досвід та кваліфікацію у frontend розробці',
      },
    },
  },
  contact: {
    en: {
      title: 'Contact',
      description: 'Get in touch with me for project inquiries, collaboration opportunities, or any questions',
      openGraph: {
        title: 'Contact | Frontend Developer Portfolio',
        description: 'Get in touch with me for project inquiries, collaboration opportunities, or any questions',
      },
    },
    ua: {
      title: 'Контакти',
      description: 'Зв\'яжіться зі мною щодо запитів на проекти, можливостей співпраці або будь-яких питань',
      openGraph: {
        title: 'Контакти | Портфоліо Frontend Розробника',
        description: 'Зв\'яжіться зі мною щодо запитів на проекти, можливостей співпраці або будь-яких питань',
      },
    },
  },
  // Policy pages
  cookies: {
    en: {
      title: 'Cookie Policy',
      description: 'Learn about how we use cookies and tracking technologies on our website',
      openGraph: {
        title: 'Cookie Policy | Frontend Developer Portfolio',
        description: 'Learn about how we use cookies and tracking technologies on our website',
      },
    },
    ua: {
      title: 'Політика щодо файлів cookie',
      description: 'Дізнайтеся про те, як ми використовуємо файли cookie та технології відстеження на нашому веб-сайті',
      openGraph: {
        title: 'Політика щодо файлів cookie | Портфоліо Frontend Розробника',
        description: 'Дізнайтеся про те, як ми використовуємо файли cookie та технології відстеження на нашому веб-сайті',
      },
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy',
      description: 'Information about how we collect, use, and protect your personal data',
      openGraph: {
        title: 'Privacy Policy | Frontend Developer Portfolio',
        description: 'Information about how we collect, use, and protect your personal data',
      },
    },
    ua: {
      title: 'Політика конфіденційності',
      description: 'Інформація про те, як ми збираємо, використовуємо та захищаємо ваші особисті дані',
      openGraph: {
        title: 'Політика конфіденційності | Портфоліо Frontend Розробника',
        description: 'Інформація про те, як ми збираємо, використовуємо та захищаємо ваші особисті дані',
      },
    },
  },
  terms: {
    en: {
      title: 'Terms of Service',
      description: 'The terms and conditions governing the use of our website and services',
      openGraph: {
        title: 'Terms of Service | Frontend Developer Portfolio',
        description: 'The terms and conditions governing the use of our website and services',
      },
    },
    ua: {
      title: 'Умови використання',
      description: 'Умови та положення, що регулюють використання нашого веб-сайту та послуг',
      openGraph: {
        title: 'Умови використання | Портфоліо Frontend Розробника',
        description: 'Умови та положення, що регулюють використання нашого веб-сайту та послуг',
      },
    },
  },
  // 404 page
  notFound: {
    en: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist or has been moved',
      robots: {
        index: false,
        follow: true,
      },
    },
    ua: {
      title: '404 - Сторінку не знайдено',
      description: 'Сторінка, яку ви шукаєте, не існує або була переміщена',
      robots: {
        index: false,
        follow: true,
      },
    },
  },
};

// Helper function to get metadata for a specific page and locale
export function getPageMetadata(page: string, locale: LocaleType): Metadata {
  const base = baseMetadata[locale];
  const page_metadata = pageMetadata[page]?.[locale] || {};
  
  // Merge base and page metadata
  return {
    ...base,
    ...page_metadata,
    // Ensure OpenGraph properties are properly merged
    openGraph: {
      ...base.openGraph,
      ...page_metadata.openGraph,
    },
  };
}

// Helper function to generate dynamic metadata based on the current locale
export async function generateDynamicMetadata(
  params: { locale: LocaleType | Promise<LocaleType> },
  page: string
): Promise<Metadata> {
  const locale = await params.locale;
  return getPageMetadata(page, locale);
}