import Link from "next/link";
import React from 'react';

const privacyPoints: string[] = [
  'No screenshots',
  'No keystroke capture',
  'Human review',
  'Worker-visible records',
];

export default function TeamLeadsHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 pt-20 pb-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content & Calls to Action */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Audience Pill */}
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full">
              For Team Leads &amp; Managers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Keep Work<br />
            Moving With<br />
            <span className="text-emerald-500 dark:text-emerald-400">Clear</span> Time,<br />
            Attendance, and<br />
            Approvals
          </h1>

          {/* Subtitle / Description */}
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime gives team leads and managers one reviewable view of team time, attendance, project allocation, exceptions, and approvals — so they can resolve issues early, support workers fairly, and keep payroll and delivery on track without invasive monitoring.
          </p>

          {/* Highlight / Key Takeaway Card */}
          <div className="p-4 sm:p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-l-emerald-500 border-y border-r border-slate-200 dark:border-slate-700/80">
            <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
              See what is complete, what needs review, who owns the next action, and whether records are ready for payroll, billing, project control, or audit.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link href="/request-enterprise-demo" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Request Enterprise Demo
            </Link>
            <Link href="/start-free" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
              Start Free
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-xs text-slate-500 dark:text-slate-400">
            30-day trial for eligible plans.
          </p>

          {/* Privacy & Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 pt-2">
            {privacyPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Visual / Screenshot */}
        <div className="lg:col-span-5 mt-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[598px] rounded-2xl overflow-hidden ">
            <img
              src="/team-lead-managers/div.mock (7).png"
              alt="ZoikoTime dashboard view for team leads and managers"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
