import React from 'react';
import { motion } from 'framer-motion';

const DELIVER_POINTS = [
  'Real-world Industrial Equipment and Lab Sessions',
  'Internationally Recognized Certifications (NEBOSH, IOSH, OSHA)',
  'Mentorship from Active Industry Professionals',
  'Practical Project-Based Learning, Not Just Theory',
];

const RESULTS_POINTS = [
  'Dedicated Placement Cell with 500+ Partner Companies',
  'Resume Building and Interview Preparation Support',
  'On-the-Job Training Opportunities Before Graduation',
  'Alumni Network Spanning the Gulf, Europe, and Beyond',
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white overflow-hidden relative">
      {/* ======= INTRO BLOCK ======= */}
      <div className="py-20 max-w-5xl mx-auto px-6 text-center relative">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-0.5 bg-oscorp-accent" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-oscorp-secondary leading-snug mb-6"
        >
          A Premier Technical{' '}
          <span className="text-oscorp-accent">Training, Certification,{' '}
            and Career Placement</span>{' '}
          Institute
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          <span className="font-semibold text-oscorp-secondary">Oscorp Technology</span> provides elite training across{' '}
          <span className="font-bold text-oscorp-secondary">industrial, technical, and safety</span> disciplines.
          Our success in producing industry-ready graduates is powered by our teaching philosophy known
          as "The <span className="font-semibold text-oscorp-secondary">Oscorp</span> Way" — where hands-on practice meets global certification.
        </motion.p>
      </div>

      {/* ======= WE DELIVER BLOCK (Image Left, Text Right) ======= */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column with decorative circle */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative gray arc behind the image */}
              <div className="absolute -left-8 -top-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] rounded-full border-[3px] border-gray-200 opacity-40 pointer-events-none" />
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/Environment/Group Photo.jpeg"
                  alt="Hands-on Training"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-oscorp-secondary mb-6">
                We Build Industry-Ready<br />
                Professionals
              </h3>

              <ul className="space-y-4">
                {DELIVER_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-oscorp-accent shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ======= RESULTS BLOCK (Text Left, Image Right) ======= */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-oscorp-secondary mb-6">
                Career Outcomes that<br />
                Launch Futures
              </h3>

              <ul className="space-y-4">
                {RESULTS_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-oscorp-accent shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image Column with decorative circle */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Decorative gray arc */}
              <div className="absolute -right-8 -bottom-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] rounded-full border-[3px] border-gray-200 opacity-40 pointer-events-none" />
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/Environment/Team Work.jpeg"
                  alt="Career Placement Support"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};