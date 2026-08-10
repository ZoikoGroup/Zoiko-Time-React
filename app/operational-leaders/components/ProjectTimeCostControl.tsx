import Link from "next/link";
import React from 'react';

const viewsList = [
  'Portfolio summary',
  'Project detail',
  'Unattributed records',
  'Worker review',
  'Export preview',
];

const metricDefinitionsList = [
  'Attribution completeness',
  'Late coding',
  'Coding changed after approval',
  'Records blocked from export',
];

export default function ProjectTimeCostControl() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
        
        {/* Left Column: Heading, Lists, CTAs & Scope Footnote */}
        <div className="flex flex-col gap-6">
          
          {/* Header Section */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
              Project Time &amp; Labor Cost Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Connect Approved Time to Projects, Services, and Cost Structures
            </h2>
            <p className="text-base text-slate-600 leading-relaxed pt-1 max-w-[644px]">
              ZoikoTime can associate approved time with configured projects, tasks, customers, service lines, billable states, or cost codes — helping operations and finance identify missing attribution before downstream use.
            </p>
          </div>

          {/* Feature Lists Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            
            {/* Views Card */}
            <div className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900">
                Views
              </h3>
              <ul className="flex flex-col gap-2.5">
                {viewsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 mt-2 rounded-sm bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metric Definitions Card */}
            <div className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-3">
              <h3 className="text-base font-bold text-slate-900">
                Metric definitions
              </h3>
              <ul className="flex flex-col gap-2.5">
                {metricDefinitionsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 mt-2 rounded-sm bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/control-project-time-and-cost"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
            >
              Explore Control Project Time &amp; Cost
            </Link>
            <Link
              href="/project-based-businesses"
              className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-base rounded-lg border border-slate-200 transition-colors"
            >
              Project-Based Businesses
            </Link>
          </div>

          {/* Scope Boundary Footnote */}
          <p className="text-xs text-slate-500 leading-normal pt-1">
            Scope boundary: no revenue, margin, profitability, or guaranteed cost-saving claims. Those require rate and cost data ZoikoTime does not hold by default.
          </p>

        </div>

        {/* Right Column: Hero Graphic / Image */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            className="w-full max-w-[534px] h-auto aspect-[4/3] rounded-2xl  object-cover"
            src="/operational-leaders/div.mock (1).png"
            alt="Project time and labor cost preview illustration"
          />
        </div>

      </div>
    </section>
  );
}
