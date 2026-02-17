import React from 'react';
import { Trophy, ShieldCheck, Handshake, Lightbulb } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Excellence in Education",
      year: "2023",
      desc: "Awarded Best Technical Institute for industrial automation and safety training."
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 Certified",
      year: "2022",
      desc: "Internationally recognized for maintaining superior quality management standards."
    },
    {
      icon: Handshake,
      title: "Industry Partnerships",
      year: "Ongoing",
      desc: "Strategic alliances with 50+ major corporations for curriculum alignment and hiring."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      year: "2024",
      desc: "Designated research center for next-gen BMS and IoT integration."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-oscorp-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <span className="text-oscorp-accent font-bold tracking-widest uppercase text-xs mb-2 block">
                Milestones
                </span>
                <h2 className="text-4xl font-extrabold text-oscorp-secondary mb-4">
                Our Achievements
                </h2>
                <div className="h-1 w-20 bg-oscorp-accent"></div>
            </div>
            <p className="text-gray-500 max-w-md text-right hidden md:block">
                Benchmarks of quality and trust that define our legacy in technical education.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
                <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-oscorp-secondary transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-oscorp-secondary hover:shadow-2xl">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-oscorp-accent mb-6 group-hover:bg-oscorp-accent group-hover:text-white transition-colors duration-300">
                        <item.icon size={24} />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                         <span className="text-xs font-bold px-2 py-1 bg-gray-200 rounded text-gray-600 group-hover:bg-white/10 group-hover:text-gray-300 transition-colors">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-oscorp-secondary mb-3 group-hover:text-white transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};