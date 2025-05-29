'use client';
import { useEffect, useRef, useState } from 'react';
import { ProjectType } from '@/entities/project/model/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { H } from '@/shared/ui/Htag';
// Mock data stays the same
export const PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'Automotive Service Management Platform',
    description:
      'Розробив інтерактивну платформу для управління автосервісами з інтуїтивним UI, оптимізованою продуктивністю та інтеграцією складних рішень для відстеження сервісних запитів.',
    image: '/assets/projects/AUTOMOTIVE-SERVICE.png', // Зображення інформаційної панелі з графіками та метриками автосервісу
    tags: ['React.js', 'Redux Toolkit', 'D3.js', 'JavaScript'],
    category: 'web',

    featured: true,
  },
  {
    id: '2',
    title: 'Multi-language Lumber Sales Website',
    description:
      'Створив та розгорнув багатомовний веб-сайт для компанії з продажу пиломатеріалів з SEO-оптимізацією та інтеграцією електронної пошти, що підвищило онлайн-присутність та залучення клієнтів.',
    image: '/assets/projects/LUMBER-SALES.png', // Зображення елегантного веб-сайту з каталогом продукції з дерева
    tags: ['Next.js', 'React', 'i18n', 'Sanity CMS'],
    category: 'web',

    featured: true,
  },
  {
    id: '3',
    title: 'Meme Coin Landing Pages',
    description:
      'Розробив привабливі лендінги для проектів мем-монет, що збільшили залучення користувачів та конверсію, з інтеграцією Telegram-бота для спрощення комунікації з клієнтами.',
    image: '/assets/projects/MEME-COIN.png', // Яскрава, приваблива лендінг-сторінка з криптовалютною тематикою
    tags: ['React.js', 'Next.js 14', 'Zustand', 'Tailwind', 'Telegram API'],
    category: 'web',

    featured: true,
  },
  {
    id: '4',
    title: 'Photography School Website',
    description:
      'Створив повноцінний веб-сайт для фотошколи у складі невеликої команди, впровадивши систему реєстрації на курси через Telegram-бота та адаптивний дизайн для всіх пристроїв.',
    image: '/assets/projects/PHOTOGRAPHY-SCHOOL.png', // Стильний мінімалістичний веб-сайт з фотографіями високої якості
    tags: ['React.js', 'Next.js 14', 'Tailwind', 'Node.js', 'Telegram API'],
    category: 'web',

    featured: false,
  },
  {
    id: '5',
    title: 'WordPress Custom Theme Development',
    description:
      'Розробив та інтегрував кастомні теми WordPress для маркетингових проектів, поєднавши сучасний фронтенд з легкістю управління контентом для клієнтів.',
    image: '/assets/projects/WORDPRESS-CUSTOM.png', // Знімок екрану з адміністративною панеллю WordPress та кастомною темою
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Custom Themes'],
    category: 'web',

    featured: false,
  },
  {
    id: '6',
    title: 'Apartment Rental Platform',
    description:
      'Розробив сучасну платформу для оренди квартир з інтерактивною мапою, системою фільтрації, та функціоналом онлайн-бронювання. Реалізував зручний кабінет користувача для орендарів та власників квартир.',
    image: '/assets/projects/APARTMENT-RENTAL.png', // Зображення стильного інтерфейсу з картою міста та фотографіями квартир
    tags: ['React.js', 'Next.js', 'Leaflet', 'Tailwind CSS', 'Firebase'],
    category: 'web',

    featured: true,
  },
  {
    id: '7',
    title: 'Event Management System with QR Verification',
    description:
      'Створив комплексну систему управління подіями з реєстрацією через Telegram-бота, адмін-панеллю для моніторингу відвідуваності, генерацією QR-кодів як електронних квитків, та веб-інтерфейсом для верифікації учасників на вході.',
    image: '/assets/projects/EVENT-MANAGEMENT.png', // Комбіноване зображення з інтерфейсом Telegram-бота, QR-кодами та адмін-панеллю
    tags: ['Python', 'Next.js', 'Telegram API', 'MongoDB', 'QR Code Generation'],
    category: 'fullstack',

    featured: true,
  },
];

const ProjectsClient = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLastSlideVisible, setIsLastSlideVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;

      // If we're on the last slide and scrolling down, don't prevent default
      if (currentProject === PROJECTS.length - 1 && isScrollingDown && isLastSlideVisible) {
        return;
      }

      e.preventDefault();

      // Handle horizontal scroll for projects
      if (currentProject < PROJECTS.length - 1 || !isScrollingDown) {
        const delta = Math.sign(e.deltaY);
        const newIndex = Math.min(Math.max(currentProject + delta, 0), PROJECTS.length - 1);

        if (newIndex !== currentProject) {
          setCurrentProject(newIndex);
          container.scrollTo({
            left: newIndex * window.innerWidth,
            behavior: 'smooth',
          });
        }
      }

      // Check if we should start vertical scrolling
      if (currentProject === PROJECTS.length - 1 && isScrollingDown) {
        setIsLastSlideVisible(true);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentProject, isLastSlideVisible]);

  // Handle touch events for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStart = 0;
    let touchEnd = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEnd = e.changedTouches[0].screenX;
      const delta = touchStart - touchEnd;

      if (Math.abs(delta) > 50) {
        // Minimum swipe distance
        const direction = Math.sign(delta);
        const newIndex = Math.min(Math.max(currentProject + direction, 0), PROJECTS.length - 1);

        setCurrentProject(newIndex);
        const scrollAmount = newIndex * window.innerWidth;
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentProject]);

  return (
    <div
      ref={containerRef}
      className="flex h-screen snap-x snap-mandatory overflow-x-hidden overflow-y-hidden">
      <div className="flex h-full" ref={scrollRef}>
        {PROJECTS.map((project, idx) => (
          <div key={project.id} className="h-screen w-screen flex-shrink-0 snap-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentProject === idx ? 1 : 0.3 }}
              className="relative flex h-screen w-screen flex-col">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              {/* Swiss Style Content */}
              <div className="relative z-10 grid h-full grid-cols-12 gap-8 p-12">
                {/* Project Number */}
                <div className="col-span-2 flex items-start justify-end pt-8">
                  <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: currentProject === idx ? 0 : -100,
                      opacity: currentProject === idx ? 1 : 0,
                    }}
                    className="font-mono text-7xl font-bold text-highlight-light opacity-50 dark:text-highlight-dark">
                    {String(idx + 1).padStart(2, '0')}
                  </motion.span>
                </div>

                {/* Project Title */}
                <div className="col-span-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                      x: currentProject === idx ? 0 : 100,
                      opacity: currentProject === idx ? 1 : 0,
                    }}>
                    <H
                      h="h1"
                      className="mb-8 font-sans text-7xl font-bold leading-none tracking-tighter text-white shadow-black">
                      {project.title.toUpperCase()}
                    </H>
                  </motion.div>
                  {/* Project Details */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: currentProject === idx ? 0 : 50,
                      opacity: currentProject === idx ? 1 : 0,
                    }}
                    className="grid grid-cols-2 gap-8">
                    <p className="font-sans text-lg leading-relaxed text-white/80">{project.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="max-h-10 bg-accent-light px-3 py-1 align-middle text-lg font-medium dark:bg-accent-dark">
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-4">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentProject(idx);
              containerRef.current?.scrollTo({
                left: idx * window.innerWidth,
                behavior: 'smooth',
              });
            }}
            className={`h-3 transition-all ${
              currentProject === idx ? 'w-24 bg-highlight-light dark:bg-highlight-dark' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsClient;
