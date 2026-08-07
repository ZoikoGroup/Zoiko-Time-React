import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Map current break rules, locations, and any agreement terms.',
  },
  {
    number: '02',
    title: 'Configure',
    description: 'Build policy packs with your compliance and HR stakeholders.',
  },
  {
    number: '03',
    title: 'Pilot',
    description: 'Run on one site or region, tune exception thresholds.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Roll out company-wide with reviewer training complete.',
  },
];

export default function ImplementationSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header Section */}
        <header className="flex flex-col gap-3 max-w-[620px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Implementation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Rolling this out takes weeks, not quarters.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Most teams move from discovery to full launch in one to two scheduling cycles.
          </p>
        </header>

        {/* Timeline Stepper Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop Grid) */}
          <div className="hidden lg:block absolute top-4 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800 z-0" />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4 group">
                
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-800 dark:border-slate-200 flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-slate-800 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}