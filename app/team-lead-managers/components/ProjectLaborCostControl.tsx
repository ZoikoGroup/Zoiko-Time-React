'use client'
import Link from "next/link";
import { useState } from 'react';

const viewsList = [
  'Portfolio summary',
  'Project detail',
  'Unattributed records',
  'Worker review',
  'Export preview',
];

const metricsList = [
  'Attribution completeness',
  'Late coding',
  'Coding changed after approval',
  'Records blocked from export',
];

export default function ProjectLaborCostControl() {
  const [selectedView, setSelectedView] = useState<string>('Portfolio summary');

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Information & Controls */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Header Block */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Project Time &amp; Labor Cost Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Connect Approved Time to<br className="hidden sm:inline" />
              Projects, Services, and Cost<br className="hidden sm:inline" />
              Structures
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              ZoikoTime can associate approved time with configured projects, tasks, customers, service lines, billable states, or cost codes &mdash; helping you and finance catch missing attribution before the record is used downstream.
            </p>
          </div>

          {/* Dual Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            
            {/* Views List */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                Views
              </h3>
              <ul className="flex flex-col gap-2 pt-1">
                {viewsList.map((item, idx) => {
                  const isSelected = selectedView === item;
                  return (
                    <li key={idx}>
                      <button
                        onClick={() => setSelectedView(item)}
                        className={`w-full text-left flex items-start gap-2.5 transition-colors focus:outline-none ${
                          isSelected ? 'font-semibold text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors ${isSelected ? 'bg-emerald-500' : 'bg-emerald-400'}`} aria-hidden="true" />
                        <span className="text-sm leading-snug">{item}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Metric Definitions */}
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                Metric definitions
              </h3>
              <ul className="flex flex-col gap-2 pt-1">
                {metricsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" aria-hidden="true" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/control-project-time-and-cost" className="px-3 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Explore Control Project Time &amp; Cost
            </Link>
            <Link href="/project-based-businesses" className="px-3 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
              Project-Based Businesses
            </Link>
          </div>

          {/* Scope Boundary Footnote */}
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
            <strong>Scope boundary:</strong> this is not a finance dashboard. No revenue, margin, profitability, or guaranteed cost-saving claims &mdash; those require rate and cost data ZoikoTime does not hold by default.
          </p>

        </div>

        {/* Right Column: Preview / Graphic Showcase */}
        <div className="lg:col-span-6 w-full flex flex-col gap-4">
          <div className="w-full  rounded-2xl  p-2 sm:p-4 overflow-hidden">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full rounded-xl overflow-hidden flex flex-col justify-between p-6 text-white">
              
              {/* Preview Header */}
                <img src="/team-lead-managers/div.mock (8).png"/>

              

             

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
