import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

const boundaries = [
  { label: 'Anti-Surveillance Principles', href: '/ethical-design' },
  { label: 'Human-in-Command Controls', href: '/human-in-command' },
  { label: 'AI Governance', href: '/ai-governance' },
  { label: 'Accessibility Baseline', href: '/accessibility' },
  { label: 'Privacy & Worker Rights', href: '/privacy-controls' },
];

export default function TrustBoundaries() {
  return (
    <section className="w-full bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Copy and boundary routes */}
        <div className="flex flex-col gap-3">

          <SectionEyebrow label="02 · Worker & Trust Boundaries" align="left" onDark />

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Before Anything Commercial, the Boundaries.
          </h2>

          <p className="text-sm font-semibold leading-7 text-white/60 sm:text-base">
            Anti-surveillance, correction rights, human authority, AI limits, accessibility,
            and privacy — surfaced early, not buried in legal pages.
          </p>

          <div className="pt-3">
            {boundaries.map((boundary, idx) => (
              <Link
                key={boundary.label}
                href={boundary.href}
                className={`group flex items-end justify-between gap-4 py-3.5 transition hover:text-white ${
                  idx === 0 ? '' : 'border-t border-white/10'
                }`}
              >

                <span className="text-sm font-normal leading-6 text-white/90">
                  {boundary.label}
                </span>

                <span
                  className="shrink-0 text-sm leading-6 text-emerald-300 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>

              </Link>
            ))}
          </div>

        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-[20px]">
          <img
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
            src="/resource-center-start-evaluation/trust-boundaries.png"
            alt="A trust and governance team reviewing worker rights and security boundaries together"
          />
        </div>

      </div>
    </section>
  );
}
