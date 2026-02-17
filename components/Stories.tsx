import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, Send } from 'lucide-react';
import { Button } from './Button';

export const Stories: React.FC = () => {
    return (
        <div className="pt-24 min-h-screen bg-oscorp-primary">
            <div className="max-w-7xl mx-auto px-6 py-12">
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
                        Discover how Oscrp Technology has transformed careers and shaped the future of our graduates.
                    </p>
                </motion.div>

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
