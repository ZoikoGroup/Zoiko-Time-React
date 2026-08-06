import React from 'react';

const valuePills = [
  'Source-aware.',
  'Deterministic.',
  'Rehearsed.',
  'Reconciled.',
  'Human-approved.',
];

export default function GovernedMigrationHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Header Content */}
            <header className="flex flex-col gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Governed migration
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Plan a migration that preserves workforce-record trust
              </h2>
              <p className="max-w-xl text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Review your source landscape, scope, ownership, mapping needs, validation expectations, cutover requirements, and evidence obligations with an enterprise specialist.
              </p>
            </header>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Request Enterprise Demo
              </button>
              <button
                type="button"
                className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-base rounded-xl transition-all cursor-pointer"
              >
                Talk to Sales
              </button>
            </div>

            {/* Existing Customer Link */}
            <div>
              <a
                href="#signin"
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-sm group transition-colors"
              >
                <span>Existing customer? Sign in or request migration support</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Value Highlights Tag List */}
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              {valuePills.map((pill, idx) => (
                <li
                  key={idx}
                  className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide"
                >
                  {pill}
                </li>
              ))}
            </ul>

          </div>

          {/* Right Column: Hero Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] aspect-[4/3] sm:aspect-[6/5] rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="/data-migration/div.mock (11).png"
                alt="Governed migration platform overview dashboard"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}