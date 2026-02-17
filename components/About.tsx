import React, { useState } from 'react';
import { CheckCircle2, BookOpen, Clock, Globe2, Briefcase, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BenefitItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

const BENEFITS: BenefitItem[] = [
    {
        title: 'Industry-led Curriculum',
        description: 'Courses designed with direct input from industry leaders, ensuring every module is relevant to real-world demands.',
        icon: BookOpen,
    },
    {
        title: '24/7 Lab Access',
        description: 'Round-the-clock access to state-of-the-art facilities and equipment for hands-on practice anytime.',
        icon: Clock,
    },
    {
        title: 'Global Alumni Network',
        description: 'Join a thriving community of 10,000+ graduates placed across multinational companies worldwide.',
        icon: Globe2,
    },
    {
        title: 'Career Placement Guarantee',
        description: 'Our dedicated placement cell ensures every graduate is connected with top employers in their field.',
        icon: Briefcase,
    },
];

export const About: React.FC = () => {
    const [activeBenefit, setActiveBenefit] = useState<number>(0);
    const [imageHovered, setImageHovered] = useState(false);

    return (
        <section id="about" className="py-24 bg-white overflow-hidden relative">
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Floating geometric shapes */}
            <motion.div
                className="absolute top-20 right-[15%] w-20 h-20 border-2 border-oscorp-accent/25 rounded-lg pointer-events-none"
                animate={{ rotate: 360, y: [0, -15, 0] }}
                transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            />
            <motion.div
                className="absolute top-40 left-[8%] w-12 h-12 border-2 border-gray-400/50 rounded-full pointer-events-none"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity } }}
            />
            <motion.div
                className="absolute bottom-32 right-[10%] w-16 h-16 border-2 border-oscorp-accent/20 pointer-events-none"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                animate={{ rotate: 360, y: [0, 10, 0] }}
                transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
            />
            <motion.div
                className="absolute top-[60%] left-[5%] w-10 h-10 bg-oscorp-accent/10 rounded-full pointer-events-none"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-[30%] right-[5%] w-8 h-8 bg-gray-400/20 rounded-full pointer-events-none"
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Gradient blobs */}
            <div className="absolute top-10 left-[20%] w-72 h-72 bg-oscorp-accent/[0.07] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-[20%] w-96 h-96 bg-gray-400/[0.08] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[50%] left-[50%] w-64 h-64 bg-yellow-200/[0.08] rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            {/* Pulsing decorative lines */}
            <motion.div
                className="absolute top-0 left-[12%] w-px h-40 bg-gradient-to-b from-transparent via-oscorp-accent/10 to-transparent pointer-events-none"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-[18%] w-px h-48 bg-gradient-to-t from-transparent via-gray-400/15 to-transparent pointer-events-none"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Rotating accent crosses */}
            <motion.div
                className="absolute top-[25%] right-[25%] pointer-events-none opacity-20"
                animate={{ rotate: 90 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
                <div className="w-6 h-px bg-oscorp-secondary absolute top-1/2 left-0" />
                <div className="w-px h-6 bg-oscorp-secondary absolute left-1/2 top-0" />
            </motion.div>
            <motion.div
                className="absolute bottom-[20%] left-[30%] pointer-events-none opacity-20"
                animate={{ rotate: -90 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
                <div className="w-5 h-px bg-oscorp-accent absolute top-1/2 left-0" />
                <div className="w-px h-5 bg-oscorp-accent absolute left-1/2 top-0" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <div
                        className="relative"
                        onMouseEnter={() => setImageHovered(true)}
                        onMouseLeave={() => setImageHovered(false)}
                    >
                        <motion.div
                            className="aspect-[4/5] bg-gray-200 relative overflow-hidden"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <motion.img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=800&q=80"
                                alt="Oscorp Campus"
                                className="w-full h-full object-cover"
                                animate={{
                                    scale: imageHovered ? 1.05 : 1,
                                    filter: imageHovered ? 'brightness(1.1)' : 'brightness(1)',
                                }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    background: imageHovered
                                        ? 'linear-gradient(180deg, transparent 40%, rgba(26,26,46,0.6) 100%)'
                                        : 'linear-gradient(180deg, transparent 60%, rgba(26,26,46,0.3) 100%)',
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Animated scan line on hover */}
                            <AnimatePresence>
                                {imageHovered && (
                                    <motion.div
                                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-oscorp-accent to-transparent"
                                        initial={{ top: '0%', opacity: 0 }}
                                        animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Floating stats card */}
                        <motion.div
                            className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl border-l-4 border-oscorp-accent max-w-xs hidden md:block"
                            animate={{
                                y: [0, -4, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
                        >
                            <p className="text-4xl font-bold text-oscorp-secondary mb-2">10k+</p>
                            <p className="text-gray-500 text-sm">Successful careers launched globally since our inception.</p>
                        </motion.div>
                    </div>

                    {/* Content Column */}
                    <div>
                        <h2 className="text-4xl font-bold text-oscorp-secondary mb-6">
                            We Don't Just Teach Tech. <br />
                            <span className="text-oscorp-accent">We Engineer Leaders.</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            At Oscorp Technology, we believe that the future belongs to those who build it. Our institute stands at the intersection of academic rigor and practical innovation. We strip away the unnecessary and focus purely on the skills that dominate the market.
                        </p>

                        {/* Interactive Benefits */}
                        <div className="mb-10 space-y-3">
                            {BENEFITS.map((benefit, index) => {
                                const Icon = benefit.icon;
                                const isActive = activeBenefit === index;

                                return (
                                    <motion.div
                                        key={index}
                                        className={`relative cursor-pointer rounded-lg border transition-colors duration-300 overflow-hidden ${isActive
                                            ? 'border-oscorp-accent bg-oscorp-accent/5'
                                            : 'border-oscorp-neutral bg-gray-50 hover:border-gray-300'
                                            }`}
                                        onClick={() => setActiveBenefit(index)}
                                        whileHover={{ x: isActive ? 0 : 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Active indicator bar */}
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-oscorp-accent"
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: isActive ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <div className="p-4 pl-5">
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-oscorp-accent' : 'bg-gray-200'
                                                        }`}
                                                    animate={{ rotate: isActive ? 360 : 0 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <Icon
                                                        size={18}
                                                        className={`transition-colors duration-300 ${isActive ? 'text-oscorp-secondary' : 'text-gray-500'
                                                            }`}
                                                    />
                                                </motion.div>
                                                <span className={`font-semibold transition-colors duration-300 ${isActive ? 'text-oscorp-secondary' : 'text-gray-700'
                                                    }`}>
                                                    {benefit.title}
                                                </span>
                                                <motion.div
                                                    className="ml-auto"
                                                    animate={{ x: isActive ? 0 : -5, opacity: isActive ? 1 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ArrowRight size={16} className="text-oscorp-accent" />
                                                </motion.div>
                                            </div>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.p
                                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                                        className="text-sm text-gray-500 leading-relaxed pl-11 overflow-hidden"
                                                    >
                                                        {benefit.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Quote */}
                        <motion.div
                            className="p-6 bg-gray-50 border border-oscorp-neutral rounded-lg"
                            whileHover={{ borderColor: '#E6B325' }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="italic text-gray-600">
                                "Oscorp is not a school; it's a launchpad. The intensity of the programs mirrors the real world perfectly."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-oscorp-secondary rounded-full flex items-center justify-center text-white font-bold">
                                    N
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-oscorp-secondary">Norman Osborn</p>
                                    <p className="text-xs text-gray-500">Founder & CEO</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};