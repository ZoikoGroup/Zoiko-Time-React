import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

export default function CommercialTruth() {
  return (
    <section className="w-full bg-green-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9">

        {/* Section heading */}
        <div className="flex max-w-[680px] flex-col items-center gap-3">

          <SectionEyebrow label="04 · Commercial Truth" />

          <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl md:text-4xl">
            Pricing, Once the Context Is Clear
          </h2>

        </div>

        {/* Pricing card */}
        <div className="flex w-full max-w-[560px] flex-col items-center gap-2 rounded-[20px] border border-slate-200 bg-green-50 p-6 sm:p-9">

          <h3 className="text-center text-lg font-bold leading-7 text-slate-900">
            Current Plans &amp; Pricing
          </h3>

          <p className="pb-2 text-center text-sm font-normal leading-6 text-gray-500">
            Straightforward pricing for growing teams, with customizable options for larger
            organizations. No hidden tiers, no invented figures.
          </p>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-sm font-semibold leading-6 text-white transition hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            View Pricing
          </Link>

        </div>

      </div>
    </section>
  );
}
