import React from 'react';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-oscorp-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-white text-oscorp-secondary p-2 rounded">
                <Cpu size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tight">OSCORP</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering the next generation of technologists with cutting-edge curriculum and world-class mentorship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-oscorp-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-oscorp-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-oscorp-accent transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Core Courses</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/courses#operating" className="hover:text-oscorp-accent cursor-pointer transition-colors">Operating Courses</a></li>
              <li><a href="/courses#safety" className="hover:text-oscorp-accent cursor-pointer transition-colors">Safety Officer Courses</a></li>
              <li><a href="/courses#job" className="hover:text-oscorp-accent cursor-pointer transition-colors">Job Oriented Courses</a></li>
              <li><a href="/courses#qc" className="hover:text-oscorp-accent cursor-pointer transition-colors">Quality Controller</a></li>
              <li><a href="/courses#welding" className="hover:text-oscorp-accent cursor-pointer transition-colors">Welding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-oscorp-accent cursor-pointer transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-oscorp-accent cursor-pointer transition-colors">About</a></li>
              <li><a href="/courses" className="hover:text-oscorp-accent cursor-pointer transition-colors">Courses</a></li>
              <li><a href="/stories" className="hover:text-oscorp-accent cursor-pointer transition-colors">Stories</a></li>
              <li><a href="/contact" className="hover:text-oscorp-accent cursor-pointer transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Oscorp Technology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};