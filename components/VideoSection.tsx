import React from 'react';

export const VideoSection: React.FC = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-oscorp-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2">Future Vision</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">The Future of Construction</h2>
                    <div className="w-16 h-1.5 bg-oscorp-accent rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl text-lg">
                        Witness the convergence of architectural elegance and machine precision. This is what we build.
                    </p>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    {/* YouTube Embed */}
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/HeSmxFn8TcV?autoplay=0&controls=1&rel=0&modestbranding=1"
                        title="Sacred Machines of the Future"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-8">
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                        <p className="text-sm text-oscorp-accent uppercase tracking-wide">Design Tools</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">Virtual</h4>
                        <p className="text-sm text-oscorp-accent uppercase tracking-wide">Site Simulations</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">AI</h4>
                        <p className="text-sm text-oscorp-accent uppercase tracking-wide">Integrated Workflow</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
