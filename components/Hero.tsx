import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, GraduationCap, Building2 } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { STATS } from '../constants';

// Cursor trail particle
interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CursorTrail: React.FC<{ particles: TrailParticle[] }> = ({ particles }) => (
  <>
    {particles.map((p, i) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: p.x,
          top: p.y,
          width: p.size,
          height: p.size,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0.6, scale: 1, background: 'rgba(59, 130, 246, 0.5)' }}
        animate={{
          opacity: 0,
          scale: 0,
          y: (Math.random() - 0.5) * 40,
          x: (Math.random() - 0.5) * 30,
          background: 'rgba(96, 165, 250, 0)',
        }}
        transition={{ duration: 1 + Math.random() * 0.5, ease: 'easeOut' }}
      />
    ))}
  </>
);

// Animated counter for stats
const AnimatedStat: React.FC<{
  value: string;
  label: string;
  index: number;
}> = ({ value, label, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [GraduationCap, Building2, Sparkles, Zap];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      className="relative group cursor-default text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 + index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative z-10 p-4"
        whileHover={{ y: [0, -6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 bg-oscorp-accent rounded-2xl"
            />
          )}
        </AnimatePresence>
        <motion.div
          className="flex items-center justify-center mb-2"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-5 h-5 text-oscorp-accent/60" />
        </motion.div>
        <p className="text-3xl md:text-4xl font-black text-oscorp-secondary group-hover:text-oscorp-accent transition-colors duration-300">
          {value}
        </p>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-2 group-hover:text-gray-700 transition-colors duration-300 font-medium">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([]);
  const particleIdRef = useRef(0);
  const lastSpawnRef = useRef(0);

  const cursorX = useMotionValue(0.5);
  const cursorY = useMotionValue(0.5);
  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setIsInView(true);
  }, []);

  // Clean old particles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailParticles(prev => prev.slice(-20));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      cursorX.set(x);
      cursorY.set(y);

      // Spawn trail particles (throttled)
      const now = Date.now();
      if (now - lastSpawnRef.current > 40) {
        lastSpawnRef.current = now;
        const newParticles: TrailParticle[] = Array.from({ length: 2 }, () => ({
          id: particleIdRef.current++,
          x: e.clientX - rect.left + (Math.random() - 0.5) * 12,
          y: e.clientY - rect.top + (Math.random() - 0.5) * 12,
          size: 2 + Math.random() * 4,
        }));
        setTrailParticles(prev => [...prev, ...newParticles]);
      }
    },
    [cursorX, cursorY]
  );

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
    <motion.section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ background: '#FAFAF5' }}
    >
      {/* Blue cursor trail particles */}
      <CursorTrail particles={trailParticles} />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26,26,46,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,26,46,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative corner accents */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-oscorp-accent/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity } }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 border border-oscorp-secondary/5 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, scale: { duration: 7, repeat: Infinity } }}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-oscorp-secondary/5 border border-oscorp-secondary/10 rounded-full backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3.5 h-3.5 text-oscorp-accent" />
              </motion.div>
              <span className="text-xs font-semibold tracking-wider uppercase text-oscorp-secondary/70">
                Shaping the Future Since 2024
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-oscorp-secondary leading-[1.05] tracking-tight"
            >
              Forge Your{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent via-yellow-500 to-orange-500 animate-gradient-shift bg-[length:200%_auto]">
                  Technical
                </span>
              </span>{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-oscorp-accent to-yellow-500 animate-gradient-shift bg-[length:200%_auto]">
                  Destiny
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-oscorp-accent to-yellow-500 rounded-full"
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
              className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed"
            >
              Oscorp Technology provides elite technical education for the next
              generation of innovators, Technocrats and Tech-Enthusiasts.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Explore Courses
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="outline">View Institute</Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-oscorp-neutral/50"
            >
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

          {/* Visual Column - Interactive Orb */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-oscorp-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-oscorp-accent rounded-full shadow-lg shadow-oscorp-accent/50" />
              </motion.div>

              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-oscorp-secondary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-oscorp-secondary/40 rounded-full" />
                <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-oscorp-accent/40 rounded-full" />
              </motion.div>

              {/* X-axis tilted orbit */}
              <div className="absolute inset-4" style={{ perspective: '800px' }}>
                <motion.div
                  className="absolute inset-0 rounded-full border border-oscorp-accent/15"
                  style={{ transformStyle: 'preserve-3d', rotateX: '60deg' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute -top-1 left-1/2 w-2.5 h-2.5 bg-oscorp-accent/70 rounded-full shadow-md shadow-oscorp-accent/30" />
                  <div className="absolute -bottom-1 right-1/3 w-1.5 h-1.5 bg-yellow-400/50 rounded-full" />
                </motion.div>
              </div>

              {/* Y-axis tilted orbit */}
              <div className="absolute inset-12" style={{ perspective: '800px' }}>
                <motion.div
                  className="absolute inset-0 rounded-full border border-yellow-500/15"
                  style={{ transformStyle: 'preserve-3d', rotateY: '60deg' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute -top-1 left-1/2 w-2 h-2 bg-yellow-500/60 rounded-full shadow-md shadow-yellow-500/30" />
                  <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 bg-oscorp-accent/50 rounded-full" />
                </motion.div>
              </div>

              {/* Central glow orb with dynamic lighting */}
              <motion.div
                className="absolute inset-16 rounded-full overflow-hidden"
                style={{
                  background: useTransform(
                    [smoothX, smoothY],
                    ([x, y]) => {
                      const lx = Number(x) * 100;
                      const ly = Number(y) * 100;
                      return `radial-gradient(circle at ${lx}% ${ly}%, #F5D45A 0%, #E8B20E 20%, #B8860B 45%, #1A1A2E 85%)`;
                    }
                  ),
                  boxShadow: useTransform(
                    [smoothX, smoothY],
                    ([x, y]) => {
                      // Shadow cast opposite to cursor (light source)
                      const sx = (0.5 - Number(x)) * 60;
                      const sy = (0.5 - Number(y)) * 60;
                      const intensity = 0.3 + Math.abs(Number(x) - 0.5) * 0.4;
                      return `
                        ${sx}px ${sy}px 40px rgba(0,0,0,${intensity}),
                        0 0 80px rgba(232,178,14,0.3),
                        0 0 160px rgba(232,178,14,0.12),
                        inset ${-sx * 0.3}px ${-sy * 0.3}px 30px rgba(0,0,0,0.4),
                        inset ${sx * 0.2}px ${sy * 0.2}px 20px rgba(255,255,255,0.08)
                      `;
                    }
                  ),
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Specular highlight that follows cursor */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: useTransform(
                      [smoothX, smoothY],
                      ([x, y]) => {
                        const hx = Number(x) * 80 + 10;
                        const hy = Number(y) * 80 + 10;
                        return `
                          radial-gradient(circle at ${hx}% ${hy}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 15%, transparent 40%),
                          radial-gradient(circle at ${100 - hx}% ${100 - hy}%, rgba(0,0,0,0.3) 0%, transparent 50%)
                        `;
                      }
                    ),
                  }}
                />
                {/* Rim light on edge opposite to cursor */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: useTransform(
                      [smoothX, smoothY],
                      ([x, y]) => {
                        const rx = (1 - Number(x)) * 100;
                        const ry = (1 - Number(y)) * 100;
                        return `radial-gradient(circle at ${rx}% ${ry}%, rgba(232,178,14,0.15) 0%, transparent 30%)`;
                      }
                    ),
                  }}
                />
              </motion.div>

              {/* Dynamic light cone / ambient glow following cursor */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: useTransform(
                    [smoothX, smoothY],
                    ([x, y]) => {
                      const lx = Number(x) * 100;
                      const ly = Number(y) * 100;
                      return `radial-gradient(ellipse at ${lx}% ${ly}%, rgba(232,178,14,0.08) 0%, transparent 60%)`;
                    }
                  ),
                }}
              />

              {/* Floating keyword labels */}
              {['HVAC', 'Safety', 'Welding', 'QA/QC'].map((label, i) => {
                const angle = (i * Math.PI * 2) / 4 - Math.PI / 4;
                const radius = 52;
                const lx = 50 + Math.cos(angle) * radius;
                const ly = 50 + Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={label}
                    className="absolute px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-wider uppercase text-oscorp-secondary shadow-md border border-gray-100"
                    style={{ left: `${lx}%`, top: `${ly}%`, transform: 'translate(-50%, -50%)' }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};