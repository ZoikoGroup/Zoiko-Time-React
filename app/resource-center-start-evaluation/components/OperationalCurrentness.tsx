import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

const routes = [
  { label: 'Product Documentation', href: '/product-documentation' },
  { label: 'Release Notes', href: '/release-notes' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'System Status', href: '/system-status' },
];

export default function OperationalCurrentness() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9">

        {/* Section heading */}
        <div className="flex max-w-[680px] flex-col items-center gap-3">

          <SectionEyebrow label="03 · Operational & Currentness" />

          <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl md:text-4xl">
            Current, Not Just Correct
          </h2>

          <p className="text-center text-sm font-semibold leading-7 text-gray-500 sm:text-base">
            Documentation, release history, and support status — kept live.
          </p>

        </div>

        {/* Route pills */}
        <div className="flex w-full flex-wrap justify-center gap-3.5">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="flex h-12 items-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold leading-6 text-slate-900 transition hover:border-emerald-300 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {route.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
