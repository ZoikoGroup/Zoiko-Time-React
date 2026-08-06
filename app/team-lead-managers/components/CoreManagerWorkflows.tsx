import { Clock, Folder, Globe, SquareCheck, TriangleAlert, User } from 'lucide-react';
import React from 'react';

interface WorkflowCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: React.ReactNode;
}

const workflows: WorkflowCard[] = [
  {
    title: 'Time and attendance readiness',
    description: 'See whether required work records are complete and which items need action.',
    linkText: 'Time Tracking',
    linkHref: '#time-tracking',
    icon: (
      <Clock  className='w-4 h-4 text-teal-600'/>
    ),
  },
  {
    title: 'Exception ownership',
    description: 'Assign incomplete or conflicting records and monitor aging without accusatory labels.',
    linkText: 'Human-in-Command Controls',
    linkHref: '#controls',
    icon: (
      <TriangleAlert className='w-4 h-4 text-teal-600'/>
    ),
  },
  {
    title: 'Approvals and change control',
    description: 'Preserve who approved, what changed, why it changed, and whether reapproval is required.',
    linkText: 'Timesheets & Approvals',
    linkHref: '#approvals',
    icon: (
      <SquareCheck className='w-4 h-4 text-teal-600'/>
    ),
  },
  {
    title: 'Project and task attribution',
    description: 'Connect approved time to work, customer, or cost structures where configured.',
    linkText: 'Control Project Time & Cost',
    linkHref: '#project-cost',
    icon: (
      <Folder className='w-4 h-4 text-teal-600'/>
    ),
  },
  {
    title: 'Remote and hybrid coordination',
    description: 'Maintain clear records across locations and schedules without invasive monitoring.',
    linkText: 'Manage Remote & Hybrid Work',
    linkHref: '#remote-work',
    icon: (
      <Globe className='w-4 h-4 text-teal-600'/>
    ),
  },
  {
    title: 'Contractor team management',
    description: 'Support distinct worker types, review rights, project context, and commercial records.',
    linkText: 'Contractor-Heavy Workforces',
    linkHref: '#contractors',
    icon: (
      <User className='w-4 h-4 text-teal-600'/>
    ),
  },
];

export default function CoreManagerWorkflows() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-11">
        
        {/* Section Header */}
        <div className="max-w-[720px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Core Manager Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            The Six Jobs You Repeat Every Week
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Each workflow has a defined owner, a visible state, and a route to the product controls behind it.
          </p>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm flex flex-col justify-between items-start gap-4 transition-all hover:shadow-md"
            >
              {/* Top Block: Icon & Content */}
              <div className="flex flex-col gap-2.5 w-full">
                <div className="w-9 h-9 shrink-0 bg-slate-100 dark:bg-slate-700/60 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug pt-1">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Block: Link Action */}
              <div className="pt-2">
                <a
                  href={card.linkHref}
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-bold hover:underline group"
                >
                  <span>{card.linkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}