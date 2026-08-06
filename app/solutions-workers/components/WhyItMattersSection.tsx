import { Lock, Shield } from 'lucide-react';
import React from 'react';

export default function WhyItMattersSection() {
  const cards = [
    {
      title: "Easy capture",
      description: "Start, stop, pause, and switch context with minimal friction on any supported device.",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Visible record",
      description: "See your own time events, totals, and current state — no guessing what was captured.",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Clear status",
      description: "Needs input, pending review, corrected, approved — plain state names, never vague labels.",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Correction and context",
      description: "Add missing detail or request a correction through a visible, trackable workflow.",
      icon: (
        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Privacy and human review",
      description: "Work-time facts only — no screenshots, keystrokes, browsing history, or app names.",
      icon: (
        <Lock className='text-teal-600 '></Lock>
      )
    },
    {
      title: "Accessible support",
      description: "Clear help routes when something goes wrong — no dead ends, no silent penalties.",
      icon: (
        <Shield className='text-teal-600 '></Shield>
      )
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Why It Matters
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-8">
          A time record should be clear, correctable, and respectful
        </h2>

        {/* Highlight Callout Box */}
        <div className="w-full max-w-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 rounded-2xl p-6 mb-12 text-center">
          <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
            Workers need a fast way to record time, understand what is stored, see status, correct mistakes, and get help — without trading privacy for a usable record.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl flex items-center justify-center mb-5">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-2">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}