import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function OperationalLeadersHero() {
  const valueProps = [
    "No screenshots",
    "No keystroke capture",
    "Human review",
    "Worker-visible records",
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-6 lg:px-32 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start gap-4">
          
          {/* Badge */}
          <div className="px-3.5 py-1.5 bg-slate-200/70 dark:bg-slate-800 rounded-full inline-flex items-center">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              For Operational Leaders
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Run Distributed Work With{" "}
            <span className="text-emerald-500 dark:text-emerald-400">
              Clear, Defensible{" "}
            </span>
            Control
          </h1>

          {/* Subheading Description */}
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            ZoikoTime gives operational leaders verified time, attendance, project, and exception records so teams can coordinate work, control labor time and cost, and resolve issues without invasive monitoring.
          </p>

          {/* Highlight Callout Box */}
          <div className="w-full p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-700">
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              See what is complete, what needs review, who owns the next action, and whether records are ready for payroll, billing, project control, or audit.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              type="button"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-base font-bold rounded-lg shadow-sm transition-colors duration-150 w-full sm:w-auto text-center"
            >
              Request Enterprise Demo
            </button>
            <button
              type="button"
              className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-base font-bold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-150 w-full sm:w-auto text-center"
            >
              Start Free
            </button>
          </div>

          {/* Trial Subtext */}
          <span className="text-xs text-slate-500 dark:text-slate-400">
            30-day trial for eligible plans.
          </span>

          {/* Trust Checkmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {prop}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Hero Image Column */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/operational-leaders/div.mock.png"
            alt="Operational Leaders Dashboard Preview"
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl "
          />
        </div>

      </div>
    </section>
  );
}