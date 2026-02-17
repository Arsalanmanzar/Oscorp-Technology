import React from 'react';
import { INSTITUTE_FEATURES } from '../constants';
import * as Icons from 'lucide-react';
import { Button } from './Button';

export const Courses: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-oscorp-secondary relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing wire animations flowing top to bottom — snapped to grid columns */}
      {[3, 6, 10, 16].map((col, i) => (
        <div
          key={i}
          className="absolute top-0 pointer-events-none"
          style={{
            left: `${col * 60}px`,
            width: '1px',
            height: '100%',
          }}
        >
          {/* The glowing pulse traveling down — bright tip, fading tail */}
          <div
            className="absolute left-0 w-full glowing-wire"
            style={{
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {/* Tail (fades out) → Tip (bright glow) */}
            <div className="w-px h-40 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-oscorp-accent/30 via-60% to-oscorp-accent to-100%" />
              {/* Bright glowing tip dot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-oscorp-accent rounded-full shadow-[0_0_6px_rgba(230,179,37,0.9),0_0_15px_rgba(230,179,37,0.6),0_0_30px_rgba(230,179,37,0.3)]" />
            </div>
          </div>
        </div>
      ))}

      {/* Horizontal glowing wires — snapped to grid rows */}
      {[4, 8].map((row, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 pointer-events-none"
          style={{
            top: `${row * 60}px`,
            height: '1px',
            width: '100%',
          }}
        >
          <div
            className="absolute top-0 h-full glowing-wire-horizontal"
            style={{
              animationDelay: `${i * 1.2 + 0.5}s`,
            }}
          >
            <div className="h-px w-48 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-oscorp-accent/30 via-60% to-oscorp-accent to-100%" />
              {/* Bright glowing tip dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-oscorp-accent rounded-full shadow-[0_0_6px_rgba(230,179,37,0.9),0_0_15px_rgba(230,179,37,0.6),0_0_30px_rgba(230,179,37,0.3)]" />
            </div>
          </div>
        </div>
      ))}

      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-oscorp-accent rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2 block">
              Why This Institute?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              The Blueprint <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent to-white">
                For Your Success
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              We bridge the gap between academic theory and industrial reality with an ecosystem designed for mastery.
            </p>
          </div>
          <a href="#about">
            <Button variant="primary">Know More</Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {INSTITUTE_FEATURES.map((feature) => {
            // Dynamically get icon component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;

            return (
              <div
                key={feature.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-oscorp-accent/10 hover:-translate-y-2 relative overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-oscorp-accent/20 blur-3xl rounded-full transform translate-x-12 -translate-y-12 group-hover:bg-oscorp-accent/40 transition-colors duration-500" />

                <div className="w-14 h-14 bg-gradient-to-br from-oscorp-accent to-yellow-600 rounded-xl flex items-center justify-center mb-6 text-oscorp-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-oscorp-accent transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-oscorp-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};