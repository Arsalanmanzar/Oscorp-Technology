import React from 'react';
import { Linkedin, Twitter, Award } from 'lucide-react';

export const AboutHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-oscorp-secondary overflow-hidden text-white">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 right-10 w-96 h-96 bg-oscorp-accent rounded-full blur-[120px]" />
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-900 rounded-full blur-[100px]" />
                {/* Grid pattern */}
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Image Side */}
                <div className="relative order-2 md:order-1">
                    <div className="relative aspect-[3/4] max-w-md mx-auto md:mr-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                            alt="Norman Osborn"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Overlay Name */}
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <h3 className="text-3xl font-bold text-white">Norman Osborn</h3>
                            <p className="text-oscorp-accent font-medium tracking-wide">Founder & CEO</p>
                        </div>
                    </div>

                    {/* Floating Element */}
                    <div className="absolute -bottom-6 -right-6 md:right-10 bg-white text-oscorp-secondary p-6 shadow-xl max-w-[200px] border-l-4 border-oscorp-accent hidden sm:block">
                        <div className="flex items-center gap-2 mb-2">
                            <Award className="text-oscorp-accent" size={24} />
                            <span className="font-bold">20+ Years</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-tight">Leading industrial innovation and education.</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="order-1 md:order-2 space-y-8">
                    <div className="inline-block px-3 py-1 bg-oscorp-accent/10 border border-oscorp-accent/20 rounded-full text-oscorp-accent text-xs font-bold tracking-widest uppercase">
                        The Visionary
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Architecting the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent to-yellow-200">
                            Industrial Mind
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        "I founded Oscorp Technology not just to teach, but to bridge the critical gap between academic theory and the ruthless demands of modern industry. We are building the workforce that will maintain the machines of tomorrow."
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oscorp-accent hover:text-oscorp-secondary transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-oscorp-accent hover:text-oscorp-secondary transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};