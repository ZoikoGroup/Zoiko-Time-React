import React from 'react';
import Link from 'next/link';

export default function NeedsAPersonCta() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[900px] mx-auto p-6 sm:p-7 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] flex flex-col items-center gap-1.5">
        <h2 className="text-center text-lg sm:text-xl font-bold text-slate-800 dark:text-white leading-8">
          Have a privacy question that needs a person?
        </h2>

        <p className="max-w-[560px] pb-2.5 text-center text-sm text-gray-500 dark:text-slate-400 leading-6">
          Request a privacy review for enterprise diligence, customer configuration, a worker question,
          data use, processors/transfers, or AI/automation — reviewed by a qualified human.
        </p>

        <Link
          href="#request-a-privacy-review"
          className="min-h-11 px-6 py-3.5 bg-green-400 hover:bg-green-500 rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          Request Privacy Review
        </Link>
      </div>
    </section>
  );
}
