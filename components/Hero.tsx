import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, GraduationCap, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { STATS } from '../constants';
import { Link } from 'react-router-dom';

// Color configs for each stat card
const STAT_COLORS = [
  { bg: 'from-teal-500 to-teal-600', iconColor: 'text-teal-200', glow: '0 0 25px rgba(20,184,166,0.5), 0 0 60px rgba(20,184,166,0.25)', glowHover: '0 0 35px rgba(20,184,166,0.7), 0 0 80px rgba(20,184,166,0.35)' },
  { bg: 'from-purple-500 to-purple-600', iconColor: 'text-purple-200', glow: '0 0 25px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.25)', glowHover: '0 0 35px rgba(168,85,247,0.7), 0 0 80px rgba(168,85,247,0.35)' },
  { bg: 'from-rose-500 to-rose-600', iconColor: 'text-rose-200', glow: '0 0 25px rgba(244,63,94,0.5), 0 0 60px rgba(244,63,94,0.25)', glowHover: '0 0 35px rgba(244,63,94,0.7), 0 0 80px rgba(244,63,94,0.35)' },
  { bg: 'from-amber-500 to-amber-600', iconColor: 'text-amber-200', glow: '0 0 25px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.25)', glowHover: '0 0 35px rgba(245,158,11,0.7), 0 0 80px rgba(245,158,11,0.35)' },
];

// Animated counter for stats
const AnimatedStat: React.FC<{
  value: string;
  label: string;
  index: number;
}> = ({ value, label, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [GraduationCap, Building2, Sparkles, Zap];
  const Icon = icons[index % icons.length];
  const colors = STAT_COLORS[index % STAT_COLORS.length];

  return (
    <motion.div
      className={`relative group cursor-default text-center bg-gradient-to-br ${colors.bg} rounded-2xl p-6 transition-all duration-300 overflow-hidden`}
      style={{ boxShadow: isHovered ? colors.glowHover : colors.glow }}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: isHovered ? -8 : [0, -6, 0]
      }}
      transition={{
        opacity: { delay: 0.8 + index * 0.15, duration: 0.6 },
        y: isHovered
          ? { type: 'spring', stiffness: 300, damping: 20 }
          : { delay: 0.8 + index * 0.15, duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative circle */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center justify-center mb-3">
          <Icon className={`w-6 h-6 ${colors.iconColor}`} />
        </div>
        <p className="text-3xl md:text-4xl font-black text-white mb-1">
          {value}
        </p>
        <p className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-medium">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <>
      {/* Hero Section with Full-Width Background Image */}
      <motion.section
        id="home"
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />

        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-oscorp-navy/90 via-oscorp-navy/80 to-oscorp-navy/60" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 w-full relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3.5 h-3.5 text-oscorp-accent" />
              </motion.div>
              <span className="text-xs font-semibold tracking-wider uppercase text-white/80">
                Shaping the Future Since 2019
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Technical{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent via-orange-400 to-yellow-400 animate-gradient-shift bg-[length:200%_auto]">
                  Training
                </span>
              </span>{' '}
              &{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-oscorp-accent to-orange-500 animate-gradient-shift bg-[length:200%_auto]">
                  Career Excellence
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-oscorp-accent to-orange-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8"
            >
              Master Industrial Skills. Earn Global Certifications. Launch Your Career.
              Oscorp Technology provides elite technical education across Safety, HVAC,
              Welding, QA/QC, and Heavy Equipment Operations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-4"
            >
              <Link to="/courses">
                <Button className="group relative overflow-hidden px-8 py-4 text-base">
                  <span className="relative z-10 flex items-center">
                    VIEW OUR COURSES
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-oscorp-secondary px-8 py-4 text-base">
                  View Institute
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </motion.section>

      {/* Stats Section - White Background */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};