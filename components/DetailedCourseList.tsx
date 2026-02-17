import React from 'react';
import { DETAILED_COURSE_SECTIONS } from '../constants';
import * as Icons from 'lucide-react';
import { Button } from './Button';
import { Clock, TrendingUp, Shield, DraftingCompass, Wrench, Zap } from 'lucide-react';

const SECTION_THEMES: Record<string, { bg: string, accent: string, icon: any, pattern: string, banner: string, textGradient: string }> = {
  'operating': {
    bg: 'bg-stone-100',
    accent: 'text-amber-700',
    icon: Wrench,
    pattern: 'radial-gradient(#d97706 1px, transparent 1px)',
    banner: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-amber-200 to-amber-500'
  },
  'safety': {
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
    icon: Shield,
    pattern: 'linear-gradient(45deg, #ffedd5 25%, transparent 25%, transparent 75%, #ffedd5 75%, #ffedd5), linear-gradient(45deg, #ffedd5 25%, transparent 25%, transparent 75%, #ffedd5 75%, #ffedd5)',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-orange-200 to-orange-500'
  },
  'job': {
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
    icon: Zap,
    pattern: 'radial-gradient(circle, #bfdbfe 1px, transparent 1px)',
    banner: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-blue-200 to-blue-500'
  },
  'qc': {
    bg: 'bg-emerald-50',
    accent: 'text-emerald-700',
    icon: TrendingUp,
    pattern: 'linear-gradient(#d1fae5 1px, transparent 1px), linear-gradient(90deg, #d1fae5 1px, transparent 1px)',
    banner: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-emerald-200 to-emerald-500'
  },
  'welding': {
    bg: 'bg-slate-100',
    accent: 'text-slate-700',
    icon: Icons.Flame,
    pattern: 'repeating-linear-gradient(45deg, #e2e8f0, #e2e8f0 10px, #f1f5f9 10px, #f1f5f9 20px)',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-slate-200 to-slate-400'
  },
  'arch_design': {
    bg: 'bg-indigo-50',
    accent: 'text-indigo-600',
    icon: DraftingCompass,
    pattern: 'linear-gradient(30deg, #c7d2fe 12%, transparent 12.5%, transparent 87%, #c7d2fe 87.5%, #c7d2fe), linear-gradient(150deg, #c7d2fe 12%, transparent 12.5%, transparent 87%, #c7d2fe 87.5%, #c7d2fe)',
    banner: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&h=300&q=80',
    textGradient: 'from-indigo-200 to-indigo-500'
  }
};

export const DetailedCourseList: React.FC = () => {
  return (
    <div className="bg-white pb-24">
      {DETAILED_COURSE_SECTIONS.map((section, index) => {
        const theme = SECTION_THEMES[section.id] || SECTION_THEMES['operating'];
        const isJobSection = section.id === 'job';

        // Dynamic grid providing "fill" behavior while maintaining card structure
        const containerClasses = "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-center";

        return (
          <section
            key={section.id}
            id={section.id}
            className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed group"
            style={{ backgroundImage: `url(${theme.banner})` }}
          >
            {/* Top Separator Line (except for first item) */}
            {index > 0 && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent z-20" />
            )}
            {/* Dark Overlay for Readability */}
            <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/95`} />

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: theme.pattern, backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Section Header */}
              <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-3 rounded-lg bg-white/10 backdrop-blur-md shadow-inner border border-white/20 text-white`}>
                      <theme.icon size={28} />
                    </div>
                    <span className="text-base font-bold tracking-[0.2em] uppercase text-oscorp-accent">
                      {section.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mt-2 tracking-tight">
                    {section.category}
                  </h2>
                  <p className="text-gray-300 max-w-2xl text-lg mt-4 font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <Button variant="primary" className="shrink-0 shadow-lg shadow-oscorp-accent/20">Download Syllabus</Button>
              </div>

              {/* Cards Container */}
              <div className={containerClasses}>
                {section.courses.map((course) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const IconComponent = (Icons as any)[course.icon] || Icons.Book;

                  return (
                    <div
                      key={course.id}
                      className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/10 hover:bg-white/20 hover:border-oscorp-accent/50 hover:shadow-oscorp-accent/10 hover:-translate-y-2 transition-all duration-500 flex flex-col group/card h-full relative overflow-hidden`}
                    >
                      {/* Top Row: Icon & Duration Badge */}
                      <div className="mb-6 flex justify-between items-start">
                        <div className={`p-4 rounded-xl bg-white/10 text-gray-200 group-hover/card:bg-oscorp-accent group-hover/card:text-white transition-all duration-300 shadow-inner`}>
                          <IconComponent size={28} />
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          {/* Prominent Duration Badge */}
                          <div className="flex items-center gap-1.5 bg-oscorp-accent/20 border border-oscorp-accent/30 rounded-full px-3 py-1 text-oscorp-accent text-xs font-bold uppercase tracking-wider shadow-sm">
                            <Clock size={12} className="stroke-[3]" />
                            <span>{course.duration}</span>
                          </div>

                          {course.level === 'Advanced' && (
                            <span className="bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                              Advanced
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className={`font-bold text-2xl mb-3 line-clamp-2 leading-tight transition-colors bg-gradient-to-r ${theme.textGradient} bg-clip-text text-transparent group-hover/card:text-white`}>
                        {course.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed font-light">
                        {course.description}
                      </p>

                      <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-2 mt-auto text-xs font-medium text-gray-400">
                        <div className="flex items-center gap-1.5 transition-colors group-hover/card:text-white">
                          <span>View Details</span>
                          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center group-hover/card:bg-oscorp-accent group-hover/card:text-white transition-colors">
                            <Icons.ArrowRight size={10} />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Shield size={14} className="text-emerald-400" />
                          <span>Certified</span>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-oscorp-accent/0 via-oscorp-accent/0 to-oscorp-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};