'use client'
import React, { useState } from 'react';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  // Theme configuration
  const theme = {
    light: {
      bg: 'rgb(60, 22, 66)',
      particle: 'rgb(175, 252, 65)',
      text: 'rgb(178, 255, 158)',
      lines: 'rgba(175, 252, 65, 0.5)'
    },
    dark: {
      bg: 'rgb(231, 111, 81)',
      particle: 'rgb(42, 157, 143)',
      text: 'rgb(233, 196, 106)',
      lines: 'rgba(42, 157, 143, 0.5)'
    }
  };

  // Particles configuration
 

  // Initialize particles using hook

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-7xl mx-auto">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <h1 
            className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: isDark ? theme.dark.text : theme.light.text }}
          >
            Інноваційні Рішення
          </h1>
          
          <p 
            className="font-sans text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
            style={{ color: isDark ? theme.dark.text : theme.light.text }}
          >
            Створюємо передові технологічні рішення, 
            поєднуючи функціональність та естетику
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-6 py-3 rounded-none font-sans text-lg transition-all 
                       hover:transform hover:translate-y-[-2px]"
              style={{
                backgroundColor: isDark ? theme.dark.particle : theme.light.particle,
                color: isDark ? theme.dark.bg : theme.light.bg
              }}
            >
              {isDark ? 'Світла тема' : 'Темна тема'}
            </button>

            <button
              className="px-6 py-3 rounded-none font-sans text-lg border-2 transition-all
                       hover:transform hover:translate-y-[-2px]"
              style={{
                borderColor: isDark ? theme.dark.particle : theme.light.particle,
                color: isDark ? theme.dark.text : theme.light.text
              }}
            >
              Дізнатись більше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;