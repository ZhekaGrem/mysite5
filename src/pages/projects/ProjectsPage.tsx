
'use client'
import { useEffect, useRef, useState } from 'react';
import { ProjectType } from '@/shared/types/index.types';
import { motion} from 'framer-motion';
import Image from 'next/image';

// Mock data stays the same
const PROJECTS: ProjectType[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    image: '/assets/projects/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'web',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A React Native mobile banking application with biometric authentication.',
    image: '/assets/projects/project2.jpg',
    tags: ['React Native', 'TypeScript', 'Redux'],
    category: 'mobile',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
  },
  {
    id: '3',
    title: 'Design System',
    description: 'A comprehensive design system built with Storybook and React components.',
    image: '/assets/projects/project3.jpg',
    tags: ['React', 'Storybook', 'Styled Components'],
    category: 'design',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: false,
  },
  {
    id: '4',
    title: 'Design System',
    description: 'A comprehensive design system built with Storybook and React components.',
    image: '/assets/projects/project3.jpg',
    tags: ['React', 'Storybook', 'Styled Components'],
    category: 'design',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: false,
  },
  {
    id: '5',
    title: 'Design System5',
    description: 'A comprehensive design system built with Storybook and React components.',
    image: '/assets/projects/project3.jpg',
    tags: ['React', 'Storybook', 'Styled Components'],
    category: 'design',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/project',
    featured: false,
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
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
            behavior: 'smooth'
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

      if (Math.abs(delta) > 50) { // Minimum swipe distance
        const direction = Math.sign(delta);
        const newIndex = Math.min(Math.max(currentProject + direction, 0), PROJECTS.length - 1);
        
        setCurrentProject(newIndex);
        const scrollAmount = newIndex * window.innerWidth;
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
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
      className="h-screen  overflow-x-hidden overflow-y-hidden flex snap-x snap-mandatory"
    >
      <div className="flex h-full" ref={scrollRef}>
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="h-screen w-screen flex-shrink-0 snap-center"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: currentProject === idx ? 1 : 0.3 }}
              className="relative w-screen h-screen flex flex-col"
            >
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
              <div className="relative z-10 grid grid-cols-12 gap-8 h-full p-12">
                {/* Project Number */}
                <div className="col-span-2 flex items-start justify-end pt-8">
                  <motion.span 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ 
                      x: currentProject === idx ? 0 : -100,
                      opacity: currentProject === idx ? 1 : 0 
                    }}
                    className="font-mono text-7xl font-bold text-highlight-light dark:text-highlight-dark opacity-50"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </motion.span>
                </div>

                {/* Project Title */}
                <div className="col-span-10 flex flex-col justify-center">
                  <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ 
                      x: currentProject === idx ? 0 : 100,
                      opacity: currentProject === idx ? 1 : 0 
                    }}
                    className="font-sans text-9xl font-bold leading-none tracking-tighter text-white mb-8"
                  >
                    {project.title.toUpperCase()}
                  </motion.h2>

                  {/* Project Details */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ 
                      y: currentProject === idx ? 0 : 50,
                      opacity: currentProject === idx ? 1 : 0 
                    }}
                    className="grid grid-cols-2 gap-8"
                  >
                    <p className="font-sans text-xl text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="bg-accent-light dark:bg-accent-dark 
                                   px-6 py-3 text-lg font-medium"
                        >
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
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentProject(idx);
              containerRef.current?.scrollTo({
                left: idx * window.innerWidth,
                behavior: 'smooth'
              });
            }}
            className={`h-3 transition-all ${
              currentProject === idx 
                ? 'w-24 bg-highlight-light dark:bg-highlight-dark' 
                : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;