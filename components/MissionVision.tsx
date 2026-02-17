import React from 'react';
import { Target, Eye, Compass, Lightbulb } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <style>{`
        @keyframes ripple-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
        .ripple-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          pointer-events: none;
        }
        /* Only animate when parent group is hovered */
        .group:hover .ripple-animate-1 {
            animation: ripple-pulse 2s linear infinite;
        }
        .group:hover .ripple-animate-2 {
            animation: ripple-pulse 2s linear infinite;
            animation-delay: 1s;
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-oscorp-accent/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2 block">
              Our Purpose
           </span>
           <h2 className="text-4xl font-extrabold text-oscorp-secondary">
              Mission & Vision
           </h2>
           <div className="w-16 h-1 bg-oscorp-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border-l-4 border-oscorp-accent relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 z-10">
                
                {/* Concentric Ripple Effect - Increased opacity for light background */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <div className="ripple-circle w-96 h-96 bg-oscorp-accent/50 ripple-animate-1 opacity-0"></div>
                    <div className="ripple-circle w-96 h-96 bg-oscorp-accent/40 ripple-animate-2 opacity-0"></div>
                </div>

                {/* Background Decor Circle (Static/Subtle) */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-oscorp-accent/5 rounded-full blur-3xl z-0 transition-transform duration-700 group-hover:scale-125"></div>
                
                {/* Large Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-oscorp-secondary transform group-hover:rotate-12 group-hover:scale-110 duration-500 z-0">
                    <Target size={140} />
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-oscorp-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-oscorp-accent group-hover:text-oscorp-secondary group-hover:scale-110 transition-all duration-300">
                        <Compass size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-oscorp-secondary mb-4 relative">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-lg relative">
                        To bridge the critical gap between theoretical knowledge and industrial application. We are dedicated to empowering a new generation of skilled professionals with hands-on training in heavy machinery, safety protocols, and advanced technical systems, ensuring they are job-ready from day one.
                    </p>
                </div>
            </div>

            {/* Vision Card */}
            <div className="bg-oscorp-secondary p-10 rounded-2xl shadow-lg border-r-4 border-oscorp-accent relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-oscorp-accent/20 transition-all duration-500 z-10">
                
                {/* Concentric Ripple Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <div className="ripple-circle w-96 h-96 bg-white/10 ripple-animate-1 opacity-0"></div>
                    <div className="ripple-circle w-96 h-96 bg-white/5 ripple-animate-2 opacity-0"></div>
                </div>

                {/* Background Decor Circle */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0 transition-transform duration-700 group-hover:scale-125"></div>

                {/* Large Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white transform group-hover:-rotate-12 group-hover:scale-110 duration-500 z-0">
                    <Eye size={140} />
                </div>

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-oscorp-accent text-oscorp-secondary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:text-oscorp-secondary group-hover:scale-110 transition-all duration-300">
                        <Lightbulb size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 relative">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed text-lg relative">
                        To be the global gold standard in technical education and industrial certification. We envision a world where safe, efficient, and innovative industrial operations are driven by Oscorp-certified experts, leading the way in infrastructure development.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};