import React, { useState, useEffect } from 'react';
import { ROADMAP_STEPS } from '../constants';
import * as Icons from 'lucide-react';

export const TechnicalRoadmap: React.FC = () => {
  const [targetStep, setTargetStep] = useState(0); // Controls circle position
  const [activeStep, setActiveStep] = useState(0); // Controls card highlight
  const [isPaused, setIsPaused] = useState(false); // Controls manual override

  // Auto-cycle the roadmap
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTargetStep((prev) => (prev + 1) % ROADMAP_STEPS.length);
    }, 3500); // Cycle every 3.5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Sync active card with circle arrival
  useEffect(() => {
    // When target changes, the circle starts moving.
    // We wait for the transition duration (1s) before highlighting the destination card.
    const timer = setTimeout(() => {
      setActiveStep(targetStep);
    }, 1000); // 1s matches the CSS transition duration

    return () => clearTimeout(timer);
  }, [targetStep]);

  // Path definition - Adjusted to go through the visual center of staggered cards
  // 0: Top (50), 1: Bottom (250), 2: Top (50), 3: Bottom (250)
  // We adjusted Y coords to align better with card centers
  const pathDefinition = "M 125 100 C 250 100, 250 300, 375 300 C 500 300, 500 100, 625 100 C 750 100, 750 300, 875 300";

  return (
    <section id="roadmap" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-oscorp-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-pulse">
            Your Path to Success
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Technical Roadmap
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A structured journey from novice to industry-ready professional, designed for maximum impact.
          </p>
        </div>

        <div className="relative min-h-[500px]">
          {/* Connecting Path (Desktop) */}
          <div className="absolute inset-0 hidden md:block pointer-events-none -mt-4">
            <svg className="w-full h-full" viewBox="0 0 1000 400" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E6B325" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#E6B325" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E6B325" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* The Path */}
              <path
                d={pathDefinition}
                fill="none"
                stroke="url(#gradientPath)"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="opacity-40"
              />

              {/* The Moving Circle Group - Animates along the path */}
              <g style={{
                offsetPath: `path("${pathDefinition}")`,
                offsetDistance: `${(targetStep / 3) * 100}%`,
                transition: 'offset-distance 1s ease-in-out',
                opacity: activeStep === targetStep ? 0 : 1 // Hide when it arrives (activeStep catches up)
              }}
                className="transition-opacity duration-300"
              >
                <circle
                  cx="0" cy="0"
                  r="12"
                  fill="#E6B325"
                  filter="url(#glow)"
                />
                <circle
                  cx="0" cy="0"
                  r="20"
                  fill="none"
                  stroke="#E6B325"
                  strokeWidth="1"
                  className="animate-ping opacity-50"
                />
              </g>
            </svg>
          </div>

          {/* Connecting Path (Mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-oscorp-accent/20 via-oscorp-accent to-oscorp-accent/20 md:hidden dashed-line"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {ROADMAP_STEPS.map((step, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[step.icon] || Icons.Circle;
              const isEven = index % 2 !== 0;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setTargetStep(index);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                  }}
                  className={`flex md:flex-col items-center gap-6 md:gap-4 relative group transition-transform duration-500 cursor-pointer
                    ${isEven ? 'md:mt-[200px]' : 'md:mt-0'}
                  `}
                >
                  {/* Step Marker */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center shrink-0 z-20 transition-all duration-500 bg-[#151515] border-2 
                    ${activeStep === index ? 'border-oscorp-accent scale-110 shadow-[0_0_20px_rgba(230,179,37,0.4)]' : 'border-gray-800'}
                  `}>
                    <IconComponent className={`w-6 h-6 transition-colors duration-300 ${activeStep === index ? 'text-oscorp-accent' : 'text-gray-600'}`} />
                  </div>

                  {/* Card Content - Solid, no glassmorphism */}
                  <div className={`
                    flex-1 md:flex-none md:w-full bg-[#151515] border p-6 rounded-xl transition-all duration-300 relative
                    ${activeStep === index
                      ? 'border-oscorp-accent shadow-[0_10px_30px_-10px_rgba(230,179,37,0.3)] translate-y-[-5px]'
                      : 'border-[#333]'
                    }
                  `}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1a1a1a] border border-oscorp-accent rounded-full flex items-center justify-center text-xs font-bold text-oscorp-accent shadow-lg z-20">
                      {index + 1}
                    </div>

                    <h3 className={`text-xl font-bold mb-2 transition-colors ${activeStep === index ? 'text-white' : 'text-gray-300'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};