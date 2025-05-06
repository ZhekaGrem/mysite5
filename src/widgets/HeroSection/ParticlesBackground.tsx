'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground = ({ className = '' }: ParticlesBackgroundProps) => {
  // Initialize state
  const [init, setInit] = useState(false);

  // Setup particle engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {};

  // Memoize options for performance
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Render particles when initialized
  if (init) {
    return (
      <Particles
        id="swiss-particles"
        particlesLoaded={particlesLoaded}
        options={options}
        className={`absolute inset-0 z-0 h-full w-full ${className}`}
      />
    );
  }

  // Return empty fragment while initializing
  return <></>;
};

export default ParticlesBackground;
