import React from 'react';
import { Button } from './Button';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const IndustryInsights: React.FC = () => {
  return (
    <section className="py-20 bg-oscorp-secondary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-oscorp-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <TrendingUp size={16} className="text-oscorp-accent" />
              <span className="text-white/80">Industry Insight</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              With the rise of Smart Cities, <br className="hidden md:block"/>
              demand for BMS pros is up <span className="bg-oscorp-accent text-white px-3 py-1 inline-block transform -skew-x-6 rounded">15% annually</span>.
            </h2>
            
            <p className="text-xl font-medium text-white/80 max-w-2xl mx-auto lg:mx-0">
              The technical workforce gap is widening. The opportunities are real. <br/>
              <span className="font-bold text-white">Are you ready to lead the future?</span>
            </p>
          </div>

          <div className="shrink-0 relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-oscorp-accent rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <Link to="/contact" className="relative block">
              <button className="relative bg-oscorp-accent text-white hover:bg-[#D4731F] text-xl font-black px-10 py-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-4 border-b-4 border-[#C06A1A] active:border-b-0 active:translate-y-1 active:shadow-none">
                Start Your Certification
                <div className="bg-white text-oscorp-accent rounded-full p-2 transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight size={24} />
                </div>
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};