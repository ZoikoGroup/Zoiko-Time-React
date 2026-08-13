import React from 'react';

export default function PublicEvidenceHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 transition-colors duration-200">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full bg-[#e1f6e6] px-3.5 py-1.5 text-xs font-bold uppercase leading-5 tracking-wider text-[#2e8b57] dark:bg-emerald-950/50 dark:text-green-400">
          Trust Center
        </span>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-5xl">
          Public evidence, available{' '}
          <span className="italic">without a form</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-[645px] text-base leading-7 text-zinc-700 dark:text-slate-300">
          Current public security, privacy, governance and accessibility evidence is
          available here directly. Controlled and customer-specific artifacts may
          require an approved access process — but public evidence is never withheld
          to capture a lead.
        </p>

      </div>
    </section>
  );
}
