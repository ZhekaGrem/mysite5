// src/entities/project/model/constants.ts
import { ProjectType } from './types';

export const PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'Automotive Service Management Platform',
    description:
      'Розробив інтерактивну платформу для управління автосервісами з інтуїтивним UI, оптимізованою продуктивністю та інтеграцією складних рішень для відстеження сервісних запитів.',
    image: '/assets/projects/automotive-dashboard.jpg', // Зображення інформаційної панелі з графіками та метриками автосервісу
    tags: ['React.js', 'Redux Toolkit', 'D3.js', 'JavaScript'],
    category: 'web',

    featured: true,
  },
  {
    id: '2',
    title: 'Multi-language Lumber Sales Website',
    description:
      'Створив та розгорнув багатомовний веб-сайт для компанії з продажу пиломатеріалів з SEO-оптимізацією та інтеграцією електронної пошти, що підвищило онлайн-присутність та залучення клієнтів.',
    image: '/assets/projects/lumber-website.jpg', // Зображення елегантного веб-сайту з каталогом продукції з дерева
    tags: ['Next.js', 'React', 'i18n', 'Sanity CMS', 'EmailJS'],
    category: 'web',

    featured: true,
  },
  {
    id: '3',
    title: 'Meme Coin Landing Pages',
    description:
      'Розробив привабливі лендінги для проектів мем-монет, що збільшили залучення користувачів та конверсію, з інтеграцією Telegram-бота для спрощення комунікації з клієнтами.',
    image: '/assets/projects/memecoin-landing.jpg', // Яскрава, приваблива лендінг-сторінка з криптовалютною тематикою
    tags: ['React.js', 'Next.js 14', 'Zustand', 'Tailwind', 'Telegram API'],
    category: 'web',

    featured: true,
  },
  {
    id: '4',
    title: 'Photography School Website',
    description:
      'Створив повноцінний веб-сайт для фотошколи у складі невеликої команди, впровадивши систему реєстрації на курси через Telegram-бота та адаптивний дизайн для всіх пристроїв.',
    image: '/assets/projects/photography-school.jpg', // Стильний мінімалістичний веб-сайт з фотографіями високої якості
    tags: ['React.js', 'Next.js 14', 'Tailwind', 'Node.js', 'Telegram API'],
    category: 'web',

    featured: false,
  },
  {
    id: '5',
    title: 'WordPress Custom Theme Development',
    description:
      'Розробив та інтегрував кастомні теми WordPress для маркетингових проектів, поєднавши сучасний фронтенд з легкістю управління контентом для клієнтів.',
    image: '/assets/projects/wordpress-theme.jpg', // Знімок екрану з адміністративною панеллю WordPress та кастомною темою
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Custom Themes'],
    category: 'web',

    featured: false,
  },
  {
    id: '6',
    title: 'Apartment Rental Platform',
    description:
      'Розробив сучасну платформу для оренди квартир з інтерактивною мапою, системою фільтрації, та функціоналом онлайн-бронювання. Реалізував зручний кабінет користувача для орендарів та власників квартир.',
    image: '/assets/projects/apartment-rental.jpg', // Зображення стильного інтерфейсу з картою міста та фотографіями квартир
    tags: ['React.js', 'Next.js', 'Leaflet', 'Tailwind CSS', 'Firebase'],
    category: 'web',

    featured: true,
  },
  {
    id: '7',
    title: 'Event Management System with QR Verification',
    description:
      'Створив комплексну систему управління подіями з реєстрацією через Telegram-бота, адмін-панеллю для моніторингу відвідуваності, генерацією QR-кодів як електронних квитків, та веб-інтерфейсом для верифікації учасників на вході.',
    image: '/assets/projects/event-management.jpg', // Комбіноване зображення з інтерфейсом Telegram-бота, QR-кодами та адмін-панеллю
    tags: ['Python', 'Next.js', 'Telegram API', 'MongoDB', 'QR Code Generation'],
    category: 'fullstack',

    featured: true,
  },
];
