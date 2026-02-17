import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-yellow-50 text-oscorp-secondary relative">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-oscorp-accent/10 rounded-bl-full -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-tr-full blur-3xl -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2 block">
                  Real Results
                </span>
                <h2 className="text-4xl font-extrabold mb-4 text-oscorp-secondary">Success Stories</h2>
                <div className="w-20 h-1.5 bg-oscorp-accent mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Our graduates are leading teams at the world's most innovative companies.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-oscorp-accent transition-all duration-300 relative group hover:-translate-y-2">
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-oscorp-accent text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                            <Quote size={20} fill="currentColor" />
                        </div>
                        
                        <div className="mb-6 flex items-center gap-4">
                            <div className="p-1 bg-white border border-gray-200 rounded-full">
                                <img 
                                    src={t.image} 
                                    alt={t.name} 
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-lg text-oscorp-secondary leading-tight">{t.name}</p>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">{t.role}, {t.company}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed italic relative z-10">
                            "{t.content}"
                        </p>

                        {/* Decorative bottom line */}
                        <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-oscorp-accent/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};