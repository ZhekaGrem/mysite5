'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { H } from '@/shared/ui/Htag';
import { PROJECTS } from '@/entities/project/model/constants';

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
                <div className="col-span-1 flex items-start justify-end pt-8 md:col-span-2">
                  <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: currentProject === idx ? 0 : -100,
                      opacity: currentProject === idx ? 1 : 0,
                    }}
                    className="font-mono text-4xl font-bold text-highlight-light opacity-50 dark:text-highlight-dark md:text-7xl">
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
                      className="shadow-text mb-8 font-sans font-bold leading-none tracking-tighter md:text-7xl">
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
                    className="grid grid-cols-1 gap-8 px-6 md:grid-cols-2">
                    <p className="shadow-text-sm font-sans text-lg leading-relaxed text-white/80">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-4 md:flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="max-w-36 bg-primary-light px-3 py-1 align-middle text-lg font-medium dark:bg-primary-dark md:max-h-10">
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
