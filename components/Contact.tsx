import React from 'react';
import { Button } from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-oscorp-secondary mb-6">Start Your Journey</h2>
          <p className="text-gray-600 mb-10">
            Have questions about admissions, scholarships, or campus life? Our team is ready to help you navigate your future.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-oscorp-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-oscorp-secondary">Headquarters</h4>
                <p className="text-gray-500 text-sm">1080 Innovation Blvd, Neo-York, NY 10012</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-oscorp-accent shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-oscorp-secondary">Email Us</h4>
                <p className="text-gray-500 text-sm">admissions@oscorp.tech</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-oscorp-accent shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-oscorp-secondary">Call Us</h4>
                <p className="text-gray-500 text-sm">+1 (555) 019-2834</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-gray-50 p-8 border border-oscorp-neutral rounded-lg space-y-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-oscorp-secondary">First Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent focus:outline-none bg-white" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-oscorp-secondary">Last Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent focus:outline-none bg-white" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-oscorp-secondary">Email Address</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent focus:outline-none bg-white" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-oscorp-secondary">Program of Interest</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent focus:outline-none bg-white text-gray-600">
              <option>General Information</option>
              <option>Operating Courses</option>
              <option>Safety Officer Courses</option>
              <option>Arch & Machine Design</option>
              <option>Job Oriented Courses</option>
              <option>Quality Controller</option>
              <option>Welding</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-oscorp-secondary">Message</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent focus:outline-none bg-white h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
          </div>

          <Button type="submit" className="w-full">Send Application</Button>
        </form>
      </div>
    </section>
  );
};