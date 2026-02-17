import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Button } from './Button';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        question: "Do I need prior technical experience to enroll?",
        answer: "For most beginner courses (like Forklift, Electrician, or AC Technician), no prior experience is required. We start from the fundamentals. Advanced courses (like NDT Level II or Revit) may require basic industry knowledge or prior certification.",
    },
    {
        question: "Are Oscorp certificates recognized internationally?",
        answer: "Yes. Our courses are designed to meet global standards (OSHA, IOSH, ASME). We have partnerships with multinational corporations in the Gulf, Europe, and Asia, ensuring your credentials are valued worldwide.",
    },
    {
        question: "Does Oscorp provide job placement assistance?",
        answer: "Absolutely. We have a dedicated Career Services team that assists with resume building, mock interviews, and connecting you with our network of 500+ hiring partners. Our 'Job Oriented Courses' are specifically tailored for immediate employment.",
    },
    {
        question: "What is the duration of the courses?",
        answer: "Course duration varies from 1 month (fast-track certifications like IOSH) to 6 months (Advanced Diplomas). Most trade skill courses are 2-3 months of intensive practical training.",
    },
    {
        question: "Can I take multiple courses simultaneously?",
        answer: "We generally recommend focusing on one specialized track to maximize learning, especially for practical labs. However, complementary courses (e.g., AutoCAD + Revit, or Safety + Fire Safety) can often be taken together.",
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-oscorp-neutral/30 rounded-full text-oscorp-secondary text-xs font-bold tracking-widest uppercase mb-4">
                        <HelpCircle size={14} />
                        Common Queries
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-oscorp-secondary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500">
                        Everything you need to know about joining the Oscorp elite.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-oscorp-accent bg-oscorp-accent/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg ${isOpen ? 'text-oscorp-secondary' : 'text-gray-700'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-1 rounded-full border transition-colors ${isOpen ? 'bg-oscorp-accent text-white border-oscorp-accent' : 'bg-transparent border-gray-300 text-gray-400'}`}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <Button variant="outline">Contact Admissions</Button>
                </div>
            </div>
        </section>
    );
};
