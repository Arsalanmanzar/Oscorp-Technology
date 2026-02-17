import React from 'react';
import { Button } from './Button';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustryInsights: React.FC = () => {
  return (
    <section className="py-20 bg-oscorp-accent text-oscorp-secondary relative overflow-hidden">
      {/* Background Decor - Abstract Data Flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute right-0 bottom-0 w-full h-full opacity-5" 
             style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6 animate-pulse">
              <TrendingUp size={16} />
              <span>Industry Insight</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              With the rise of Smart Cities, <br className="hidden md:block"/>
              demand for BMS pros is up <span className="bg-black text-oscorp-accent px-2 inline-block transform -skew-x-6">15% annually</span>.
            </h2>
            
            <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto lg:mx-0">
              The technical workforce gap is widening. The opportunities are real. <br/>
              <span className="font-bold">Are you ready to lead the future?</span>
            </p>
          </div>

          <div className="shrink-0 relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-white rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            
            <Link to="/contact" className="relative block">
              <Button className="bg-white text-black hover:bg-gray-50 text-xl font-black px-10 py-6 h-auto shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-4 border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 active:shadow-none">
                Start Your Certification
                <div className="bg-black text-oscorp-accent rounded-full p-2 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-oscorp-accent group-hover:text-black">
                    <ArrowRight size={24} />
                </div>
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};