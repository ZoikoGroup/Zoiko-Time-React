"use client"
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  // State typed to allow number or null (0 = first item expanded by default)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Does ZoikoTime take screenshots?",
      answer: "No. ZoikoTime does not collect screenshots under any tier or configuration. It also does not collect keystroke content, URL history, application names, or clipboard data."
    },
    {
      question: "Does ZoikoTime track what apps or websites I use?",
      answer: "No. ZoikoTime focuses exclusively on time tracking and presence verification without monitoring app usage or web browsing history."
    },
    {
      question: "Can I see my time record?",
      answer: "Yes. You have full transparency and direct access to view your complete time logs, submissions, and status at any time."
    },
    {
      question: "Can I correct a mistake?",
      answer: "Yes. You can submit correction requests directly through the platform, which will be logged transparently for review."
    },
    {
      question: "What does \"needs input\" mean?",
      answer: "It indicates that additional context or clarification is required from you before a time entry can be processed further."
    },
    {
      question: "Does ZoikoTime decide my pay?",
      answer: "No. ZoikoTime records and verifies time data; payroll calculations, wage determinations, and payout decisions remain with your organization."
    },
    {
      question: "Can my manager see my screen, keystrokes, or browsing?",
      answer: "No. ZoikoTime does not monitor screens, log keystrokes, or track browser activity, so managers do not have access to such data."
    },
    {
      question: "Does ZoikoTime score my productivity?",
      answer: "No. ZoikoTime does not generate productivity scores, activity percentages, or automated performance rankings."
    },
    {
      question: "Can remote, hybrid, and contract workers use ZoikoTime?",
      answer: "Yes. ZoikoTime is built to support flexible work arrangements across remote, hybrid, and contract team members."
    },
    {
      question: "What if my device or connection fails?",
      answer: "ZoikoTime stores offline state locally and safely syncs your time records once connectivity is re-established."
    },
    {
      question: "How do I get help?",
      answer: "Help is available through the built-in Help Center, direct support documentation, or your organization's support admin."
    },
    {
      question: "Is ZoikoTime accessible?",
      answer: "Yes. ZoikoTime is built following modern web accessibility standards (WCAG) to support assistive technologies."
    }
  ];

  // Handler explicitly typed with `index: number`
  const toggleAccordion = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Subtitle Category Badge */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Questions
        </span>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-xl leading-snug sm:leading-tight mb-10">
          Worker questions, answered
        </h2>

        {/* Accordion List */}
        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm overflow-hidden transition-colors duration-200"
              >
                {/* Question Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <span className="text-base font-semibold text-slate-800 dark:text-white pr-4 leading-6">
                    {faq.question}
                  </span>
                  
                  {/* Toggle Plus/Minus Icon */}
                  <span className="text-teal-600 dark:text-teal-400 text-xl font-normal leading-none flex-shrink-0 transition-transform duration-200">
                    {isOpen ? '✕' : '+'}
                  </span>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}