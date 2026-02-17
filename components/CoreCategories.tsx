import React, { useState, useCallback, useRef } from 'react';
import { CORE_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export const CoreCategories: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="disciplines"
            className="py-24 relative overflow-hidden"
            style={{ background: '#F5F5F0' }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setMousePos({ x: -1000, y: -1000 }); }}
        >
            {/* Animated mesh background that reveals on cursor hover */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Base mesh pattern (fully transparent until cursor reveals it) */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        opacity: isHovering ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        animation: isHovering ? 'meshJiggle 3s ease-in-out infinite' : 'none',
                    }}
                >
                    <defs>
                        <radialGradient id="meshReveal" cx={mousePos.x} cy={mousePos.y} r="450" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="40%" stopColor="white" stopOpacity="0.6" />
                            <stop offset="70%" stopColor="white" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                        <mask id="meshMask">
                            <rect width="100%" height="100%" fill="url(#meshReveal)" />
                        </mask>
                        <pattern id="meshPattern" width="45" height="45" patternUnits="userSpaceOnUse">
                            {/* Horizontal lines */}
                            <line x1="0" y1="22.5" x2="45" y2="22.5" stroke="rgba(200,160,30,0.3)" strokeWidth="0.6" />
                            {/* Vertical lines */}
                            <line x1="22.5" y1="0" x2="22.5" y2="45" stroke="rgba(200,160,30,0.3)" strokeWidth="0.6" />
                            {/* Diagonal lines */}
                            <line x1="0" y1="0" x2="45" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="0.4" />
                            <line x1="45" y1="0" x2="0" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="0.4" />
                            {/* Node dots at intersections */}
                            <circle cx="22.5" cy="22.5" r="2" fill="rgba(230,179,37,0.45)" />
                            <circle cx="0" cy="0" r="1.2" fill="rgba(0,0,0,0.12)" />
                            <circle cx="45" cy="0" r="1.2" fill="rgba(0,0,0,0.12)" />
                            <circle cx="0" cy="45" r="1.2" fill="rgba(0,0,0,0.12)" />
                            <circle cx="45" cy="45" r="1.2" fill="rgba(0,0,0,0.12)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#meshPattern)" mask="url(#meshMask)" />
                </svg>

                {/* Soft glow at cursor position */}
                {isHovering && (
                    <div
                        className="absolute rounded-full"
                        style={{
                            left: mousePos.x - 200,
                            top: mousePos.y - 200,
                            width: 400,
                            height: 400,
                            background: 'radial-gradient(circle, rgba(230,179,37,0.1) 0%, rgba(230,179,37,0.04) 40%, transparent 70%)',
                            transition: 'left 0.1s ease-out, top 0.1s ease-out',
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </div>

            {/* Technical Background Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 left-1/4 w-px h-full bg-oscorp-secondary"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-oscorp-secondary"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-oscorp-secondary"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2">Technical Foundations</span>
                    <h2 className="text-4xl font-extrabold text-oscorp-secondary mb-4">Core Courses</h2>
                    <div className="w-16 h-1.5 bg-oscorp-secondary rounded-full"></div>
                    <p className="mt-4 text-gray-500 max-w-2xl">
                        Essential industrial and technical skills engineered for the modern workforce.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {CORE_CATEGORIES.map((cat, index) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const IconComponent = (Icons as any)[cat.icon] || Icons.Circle;

                        return (
                            <div
                                key={cat.id}
                                className="group relative p-8 border border-oscorp-neutral bg-gray-50 overflow-hidden hover:bg-black hover:border-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full md:w-[calc(50%_-_12px)] lg:w-[calc(33.333%_-_16px)]"
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white border border-oscorp-neutral rounded-lg group-hover:bg-oscorp-accent group-hover:border-oscorp-accent transition-colors duration-300">
                                            <IconComponent className="w-6 h-6 text-oscorp-secondary" />
                                        </div>
                                        <span className="text-5xl font-black text-gray-200 group-hover:text-[#C0C0C0] transition-colors duration-300 select-none">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-oscorp-secondary mb-3 group-hover:text-oscorp-accent transition-colors duration-300">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {cat.description}
                                    </p>

                                    <div className="mt-6 w-8 h-1 bg-oscorp-neutral group-hover:bg-oscorp-accent transition-all duration-300 group-hover:w-16" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};