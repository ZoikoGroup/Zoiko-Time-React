'use client' 
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is ZoikoTime for operational leaders?',
    answer:
      'ZoikoTime provides operational leaders with verified time, attendance, project, exception, and approval records. It helps teams see what is complete, what needs review, who owns the next action, and whether records are ready for authorized downstream use.',
  },
  {
    question: 'Does ZoikoTime monitor employee screens or applications?',
    answer:
      'No. ZoikoTime focuses on workflow records, approvals, and effective operational tracking rather than invasive screen monitoring or app tracking.',
  },
  {
    question: 'Does ZoikoTime measure worker productivity?',
    answer:
      'ZoikoTime measures process completeness and workflow efficiency rather than subjective individual worker productivity.',
  },
  {
    question: 'How are incomplete time or attendance records handled?',
    answer:
      'Incomplete records generate structured exception flags that route to designated reviewers or managers for timely resolution before approval.',
  },
  {
    question: 'Can workers correct a record?',
    answer:
      'Yes, workers can submit time adjustment requests with reasons attached, which follow configured approval workflows and maintain full audit history.',
  },
  {
    question: 'Does AI decide whether a worker was productive or compliant?',
    answer:
      'No. AI features assist in classifying exceptions and identifying missing attributes, but human review and approval remain necessary.',
  },
  {
    question: 'Can ZoikoTime support remote, hybrid, and contractor teams?',
    answer:
      'Yes. ZoikoTime configures policies based on worker types, locations, and groups to seamlessly support flexible operational structures.',
  },
  {
    question: 'Can ZoikoTime connect to payroll, billing, or ERP systems?',
    answer:
      'Yes, ZoikoTime exports authorized and approved records via supported APIs, file exports, or direct connectors.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Implementation timelines vary by scope, worker count, and system complexity. Enterprise deployment follows a structured 4-phase rollout plan.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing is tailored based on worker count, operational regions, integration requirements, and support tiers.',
  },
];

export default function FAQSection() {
  // First item open by default based on design state
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[700px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Operational Leaders, Questions Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Straight Answers Before You Book Anything
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full max-w-[860px] border-t border-slate-200 divide-y divide-slate-200">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center justify-between text-left gap-4 hover:text-emerald-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Plus className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                </button>

                {isOpen && item.answer && (
                  <div className="pb-5 pr-8 text-sm text-slate-600 leading-relaxed">
                    {item.answer}
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