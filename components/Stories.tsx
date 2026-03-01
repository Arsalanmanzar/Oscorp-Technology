import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, GALLERY_STUDENTS } from '../constants';
import { Quote, Send, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { Button } from './Button';

const INITIAL_VISIBLE = 4;

export const Stories: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleStudents = showAll ? GALLERY_STUDENTS : GALLERY_STUDENTS.slice(0, INITIAL_VISIBLE);

    return (
        <div className="pt-24 min-h-screen bg-oscorp-primary">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Page Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-oscorp-secondary mb-6">
                        Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent to-yellow-600">Stories</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover how Oscorp Technology has transformed careers and shaped the future of our graduates.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {TESTIMONIALS.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <Quote className="text-oscorp-accent opacity-20 w-12 h-12 mb-6" />
                            <p className="text-gray-600 mb-6 italic leading-relaxed">"{story.content}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-oscorp-accent/20"
                                />
                                <div>
                                    <h4 className="font-bold text-oscorp-secondary">{story.name}</h4>
                                    <p className="text-xs text-gray-500">{story.role} at {story.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Graduate Gallery Section ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-oscorp-secondary mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-oscorp-accent to-yellow-600">Graduates</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Meet the talented professionals who launched their careers with Oscorp Technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <AnimatePresence mode="popLayout">
                        {visibleStudents.map((student, index) => (
                            <motion.div
                                key={student.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, delay: index < INITIAL_VISIBLE ? index * 0.1 : (index - INITIAL_VISIBLE) * 0.08 }}
                                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5] cursor-pointer"
                            >
                                {/* Student Image */}
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Student Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg leading-tight">{student.name}</h3>
                                    <p className="text-oscorp-accent text-sm font-medium mt-1">{student.designation}</p>
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                        <Briefcase className="w-3.5 h-3.5 text-gray-300" />
                                        <p className="text-gray-300 text-xs">{student.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less */}
                {GALLERY_STUDENTS.length > INITIAL_VISIBLE && (
                    <div className="text-center mb-20">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-oscorp-secondary text-white font-medium hover:bg-oscorp-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            {showAll ? (
                                <>Show Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>Show More <ChevronDown className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>
                )}

                {/* Call to Action for new stories */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-oscorp-secondary rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
                        <p className="text-gray-300 mb-8">
                            Your journey inspires the next generation. Submit your success story and be featured in our gallery.
                        </p>
                        <Button className="bg-white text-oscorp-secondary hover:bg-gray-100">
                            Submit Your Story <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-oscorp-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </motion.div>
            </div>
        </div>
    );
};
