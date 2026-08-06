import { Globe, ShieldCheck } from 'lucide-react';
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  // Lucide / SVG Icon Path
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Team readiness',
    description: 'Know which records are complete before your cut-off, not after it.',
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Visible ownership',
    description: 'Every exception has a neutral state, an owner, and a due point.',
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Fewer follow-up cycles',
    description: 'Ask once, in the record, with the reason and history attached.',
    icon: (
      <Globe className='text-teal-600'></Globe>
    ),
  },
  {
    title: 'Trust with your team',
    description: 'No screenshots. No keystroke content. Workers see their own records.',
    icon: (
      <ShieldCheck className='text-teal-600'></ShieldCheck>
    ),
  },
];

export default function ValuePropsBanner() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-11 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3.5">
              
              {/* Icon Wrapper */}
              <div className="w-9 h-9 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.25">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-6">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}