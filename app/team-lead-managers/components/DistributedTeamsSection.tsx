import React from 'react';

interface ScenarioCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const scenarioCards: ScenarioCard[] = [
  {
    id: 'remote',
    badge: 'Remote',
    title: 'A remote worker reviewing their own record',
    description: 'Sees the flagged session, adds context, and tracks status through to approval.',
    linkText: 'Remote Teams',
    href: '/remote-teams',
  },
  {
    id: 'hybrid',
    badge: 'Hybrid',
    title: 'A hybrid manager clearing the approval queue',
    description: 'Reviews the reason, requests information once, and approves with an amendment reason.',
    linkText: 'Hybrid Workforces',
    href: '/hybrid-workforces',
  },
  {
    id: 'field',
    badge: 'Field & contractor',
    title: 'A field team adding project context on site',
    description: 'Records the task, customer, and cost code at the point of work, on mobile.',
    linkText: 'Contractor-Heavy Workforces',
    href: '/contractor-heavy-workforces',
  },
  {
    id: 'multi-site',
    badge: 'Multi-site',
    title: 'A department head comparing team readiness',
    description: 'Checks completeness and exception aging by team before the period closes.',
    linkText: 'Global Workforces',
    href: '/global-workforces',
  },
];

export default function DistributedTeamsSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="max-w-[790px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Remote, Hybrid &amp; Distributed Teams
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Manage Distributed Work Through Clear<br className="hidden sm:inline" />
            Records, Not Digital Surveillance
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime helps remote, hybrid, field, and distributed teams capture work-time context, review exceptions, and maintain approved records without screenshots, keystroke content, URL history, application names, or clipboard data.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scenarioCards.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3 items-start">
                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/60 rounded-full border border-slate-200 dark:border-slate-600 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {card.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-normal">
                  {card.description}
                </p>
              </div>

              {/* Link CTA */}
              <a
                href={card.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
              >
                <span>{card.linkText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Feature / Trust Showcase Block */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Image Showcase Container */}
          <div className="lg:col-span-6 w-full">
            <div className="relative aspect-[4/3] sm:aspect-[14/9] w-full rounded-2xl  overflow-hidden flex items-end p-6">
              <img src="/team-lead-managers/div.photo (3).png"></img>
            </div>
          </div>

          {/* Trust Principles Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
              Your team&apos;s trust is part of the operating model
            </h3>
            <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Workers can see the records that describe their work, add context, and request corrections. That is what makes a record defensible three months later &mdash; not the amount of activity captured.
            </p>
            <a
              href="#anti-surveillance"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group pt-1"
            >
              <span>Anti-Surveillance Principles</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}