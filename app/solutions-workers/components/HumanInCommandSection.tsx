import React from 'react';

export default function HumanInCommandSection() {
  const cards = [
    {
      title: "Review doctrine",
      description: "Role, permission, reason, evidence, previous/new value, timestamp, and status are all preserved for every consequential change."
    },
    {
      title: "Escalation",
      description: "Support, manager/HR routes, and protected escalation as configured — without promising a universal grievance procedure."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Category Tag */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Human-in-Command
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-6">
          Consequential decisions stay with authorized people
        </h2>

        {/* Highlight Banner */}
        <div className="w-full max-w-4xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 rounded-2xl p-6 md:p-7 mb-8 text-center">
          <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
            ZoikoTime may organize records and flag missing or unusual information, but authorized people review consequential changes. The platform does not decide discipline, label a worker dishonest, or create a productivity verdict.
          </p>
        </div>

        {/* Dark Banner / Statement Card */}
        <div className="w-full max-w-4xl bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8 flex flex-col sm:flex-row items-start gap-5">
          {/* Icon Container */}
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider block mb-1.5">
              Deterministic, not &quot;AI judgment&quot;
            </span>
            <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
              Classification is policy-bound and reviewable — never branded as AI. AI may assist with anomaly flagging and signal quality only; it does not approve, punish, or decide pay.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}