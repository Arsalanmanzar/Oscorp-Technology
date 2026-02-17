import React from 'react';
import { Button } from './Button';
import { BookOpen, Download } from 'lucide-react';

export const CoursesHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-oscorp-secondary overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
         <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[80%] bg-oscorp-accent/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E6B325 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-oscorp-accent text-sm font-medium mb-6">
            <BookOpen size={16} />
            <span>World-Class Curriculum</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Master the Machines <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent to-yellow-200">
            That Move the World
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          From heavy machinery to precision safety protocols, our courses are engineered to forge the next generation of industrial leaders.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/assets/Oscorp_Course_Brochure.pdf" download="Oscorp_Course_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="w-full sm:w-auto flex items-center gap-2">
                    <Download size={18} />
                    Download Course PDF
                </Button>
            </a>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-oscorp-secondary w-full sm:w-auto">
                Speak to Advisor
            </Button>
        </div>
      </div>
    </section>
  );
};