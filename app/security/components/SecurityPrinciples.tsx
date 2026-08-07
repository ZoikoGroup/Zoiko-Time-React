import React from 'react';

interface PrincipleItem {
  title: string;
  description: string;
}

const principles: PrincipleItem[] = [
  {
    title: 'Least privilege, deny by default',
    description: 'Access is granted by explicit intersection, not inherited by seniority or role name.',
  },
  {
    title: 'Purpose limitation & minimization',
    description: 'Collect and retain only what the stated purpose requires. Restricted data stays out of ordinary logs and analytics.',
  },
  {
    title: 'Explicit scope',
    description: 'Tenant, entity, object, source, and action scope are stated rather than assumed.',
  },
  {
    title: 'Human authority',
    description: 'Consequential review stays with authorized people. Automation assists; it does not conclude.',
  },
  {
    title: 'Versioned change & correction',
    description: 'Changes carry versions and evidence. Corrections are recorded, not overwritten.',
  },
  {
    title: 'Secure defaults, transparent configuration',
    description: 'Defaults are safe, and what your administrators can change is visible to them.',
  },
];

export default function SecurityPrinciples() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Security Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Six Operating Rules Behind Every Control
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Principles are not certifications. They describe how the controls below are designed — nothing more.
          </p>
        </header>

        {/* 6 Operating Rules Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((item, index) => (
            <article
              key={index}
              className="p-6 bg-slate-100/70 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-start gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}