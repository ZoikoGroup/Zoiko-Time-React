import React from 'react';

interface PolicyCard {
  title: string;
  description: string;
}

const policyCards: PolicyCard[] = [
  {
    title: 'What this page claims',
    description:
      'Supports configurable global operating structures where available, by group and location.',
  },
  {
    title: 'What it does not claim',
    description:
      'No “globally compliant,” no “works in every country,” no local-law advice.',
  },
  {
    title: 'Gated until operational',
    description:
      'Data residency commitments and works-council resources appear only once contractually live and approved.',
  },
];

export default function GlobalPolicyControls() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <div className="max-w-[800px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Global Policy &amp; Operating Complexity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Apply Consistent Controls Across Teams, Regions, and Worker Types
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            ZoikoTime can apply configured, effective-dated time and review policies by organization, location, team, schedule, project, pay group, or worker type where supported. Local legal interpretation and payroll calculation remain outside this page&apos;s promise.
          </p>
        </div>

        {/* Hero Image Container */}
        <div className="w-full rounded-2xl  overflow-hidden ">
          <img
            className="w-full h-[384px] md:h-[450px] lg:h-[550px] object-cover"
            src="/operational-leaders/operation.png"
            alt="Global Policy and Operating Controls illustration"
          />
        </div>

        {/* 3-Column Policy Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {policyCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-2 transition-all hover:border-slate-300"
            >
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}