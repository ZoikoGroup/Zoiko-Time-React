import React from 'react';

export default function DataTransparencySection() {
  const usedInformation = [
    "Approved time events",
    "Approved work / project context",
    "Schedule context where used",
    "Comments, corrections, approvals",
    "Disclosed authentication & device-trust events",
  ];

  const neverCollected = [
    "Screenshots",
    "Keystroke content",
    "URL / browsing history",
    "Application-name monitoring",
    "Clipboard data & individual productivity score",
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Category Badge */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Data Transparency
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          Know what ZoikoTime collects — and what it never collects
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-12">
          The negative capability set is a binding product commitment, not a feature toggle.
        </p>

        {/* Comparison Card Grid */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700/60">
          
          {/* Column 1: Information Used */}
          <div className="flex flex-col">
            <div className="bg-teal-600 px-6 py-4">
              <h3 className="text-base font-bold text-white">
                Information used
              </h3>
            </div>
            <ul className="divide-y divide-slate-200 dark:divide-slate-700/60 flex-1">
              {usedInformation.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 px-6 py-3.5 text-sm font-normal text-gray-700 dark:text-gray-200">
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Never Collected */}
          <div className="flex flex-col">
            <div className="bg-slate-800 px-6 py-4">
              <h3 className="text-base font-bold text-white">
                Never collected
              </h3>
            </div>
            <ul className="divide-y divide-slate-200 dark:divide-slate-700/60 flex-1">
              {neverCollected.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 px-6 py-3.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 text-amber-700 dark:text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}