import React from 'react';
import Link from 'next/link';

type Authority = {
  title: string;
  body: string;
  href: string;
  /** Support is highlighted so it is never mistaken for a sales route. */
  highlight?: boolean;
};

const authorities: Authority[] = [
  {
    title: 'Security',
    body: 'Control domains, shared responsibility, and the review route.',
    href: '/security',
  },
  {
    title: 'Privacy',
    body: 'Categories, purposes, retention, and worker rights.',
    href: '/privacy-controls',
  },
  {
    title: 'Human-in-Command',
    body: 'Where consequential decision authority sits.',
    href: '/human-in-command',
  },
  {
    title: 'AI Governance',
    body: 'Authority classes and the deterministic boundary.',
    href: '/ai-governance',
  },
  {
    title: 'Accessibility',
    body: 'Tested scope, methods, and known limitations.',
    href: '/accessibility',
  },
  {
    title: 'System Status',
    body: 'Authoritative live operational state.',
    href: '/system-status',
  },
  {
    title: 'Procurement & Legal',
    body: 'Contractual resources and evaluation support.',
    href: '/procurement-and-legal-resources',
  },
  {
    title: 'Enterprise Support',
    body: 'For existing customers. Sales never substitutes for support.',
    href: '/customer-success',
    highlight: true,
  },
];

export default function AuthorityOwnership() {
  return (
    <section className="w-full bg-[#050b1f] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Section heading */}
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Each authority owns its own evidence
          </h2>

          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            The Trust Center points at these rather than restating them, so a claim has
            exactly one home.
          </p>

        </div>

        {/* Authority cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {authorities.map((authority) => (
            <Link
              key={authority.title}
              href={authority.href}
              className={`group flex flex-col gap-2 rounded-2xl border p-5 transition hover:border-emerald-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                authority.highlight
                  ? 'border-emerald-900/60 bg-emerald-950/30'
                  : 'border-slate-800 bg-slate-900/40'
              }`}
            >

              <h3 className="text-base font-bold leading-5 text-white transition group-hover:text-emerald-400">
                {authority.title}
              </h3>

              <p className="text-xs font-normal leading-5 text-slate-400">
                {authority.body}
              </p>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
