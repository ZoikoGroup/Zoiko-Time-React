import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

const paths = [
  {
    title: 'Existing customer',
    body: 'You don’t need to re-qualify. Go straight to what you need.',
    action: 'Docs & Release Notes',
    href: '/release-notes',
  },
  {
    title: 'Worker transparency or correction',
    body: 'See your own record rights, privacy information, and human review options.',
    action: 'Workers & Privacy',
    href: '/worker-transparency-notice',
  },
  {
    title: 'Can’t find what you need',
    body: 'Browse Help and Docs, or reach a real person if nothing current fits.',
    action: 'Contact Support',
    href: '/contact',
  },
];

export default function MorePaths() {
  return (
    <section className="w-full bg-green-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9">

        {/* Section heading */}
        <div className="flex max-w-[680px] flex-col items-center gap-3">

          <SectionEyebrow label="A Few More Paths" />

          <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl md:text-4xl">
            Already a Customer, or Looking for Something Specific?
          </h2>

        </div>

        {/* Path cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 px-5 pt-8 pb-6 sm:pt-10"
            >

              <h3 className="text-center text-sm font-bold leading-6 text-slate-900">
                {path.title}
              </h3>

              <p className="flex-1 pt-3 text-center text-xs font-normal leading-5 text-gray-500">
                {path.body}
              </p>

              <Link
                href={path.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold leading-6 text-emerald-700 transition hover:text-emerald-800"
              >
                <span>{path.action}</span>
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
