import React from 'react';

export default function SecurityHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Hero Content */}
        <div className="flex flex-col items-start gap-6">
          
          {/* Security Pill Badge */}
          <div className="px-3.5 py-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-full inline-flex items-center">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Security
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Protect workforce records without turning work into{' '}
            <span className="text-emerald-500 dark:text-emerald-400">
              surveillance
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Identity and access, encryption in transit and at rest, environment and tenant boundaries, change control, monitoring, incident response, evidence, human authority, and a clearly stated split of responsibility between ZoikoTime, your organization, and your providers.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              type="button"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg shadow-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Explore Security Controls
            </button>
            <button
              type="button"
              className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base rounded-lg border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Request Security Review
            </button>
          </div>

          {/* Footer Sub-Navigation Links */}
          <nav aria-label="Related links" className="flex items-center gap-2 text-sm pt-2 flex-wrap">
            <a href="#privacy" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              Privacy
            </a>
            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">•</span>
            <a href="#status" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              System Status
            </a>
            <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">•</span>
            <a href="#trust" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              Trust Center
            </a>
          </nav>

        </div>

        {/* Right Column: Media Preview & Truth Boundary Card */}
        <div className="flex flex-col gap-6">
          
          {/* Hero Media Preview */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <img
              src="/security/div.mock (16).png"
              alt="Security dashboard visualization preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Security Truth Boundary Banner Card */}
          <aside className="p-5 bg-white dark:bg-slate-900 rounded-xl border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Security truth boundary
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Security is a system of current controls, responsibilities, evidence, and recovery — not a guarantee that incidents cannot occur, or that every deployment, endpoint, integration, and customer configuration is secure.
            </p>
          </aside>

        </div>

      </div>
    </section>
  );
}