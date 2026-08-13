import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

interface NavLink {
  label: string;
  href: string;
}

interface NavColumn {
  title: string;
  links: NavLink[];
}

const columns: NavColumn[] = [
  {
    title: 'Trust & Governance',
    links: [
      { label: 'Security & access boundaries', href: '/security-overview' },
      { label: 'Privacy collection limits', href: '/privacy-controls' },
      { label: 'Anti-surveillance principles', href: '/ethical-design' },
      { label: 'Human authority', href: '/human-in-command' },
      { label: 'AI Governance', href: '/ai-governance' },
      { label: 'System Status', href: '/system-status' },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      { label: 'Administration & policy', href: '/administrative-controls' },
      { label: 'Identity & access', href: '/identity-access-management' },
      { label: 'Controlled integrations', href: '/enterprise-integrations' },
      { label: 'Reporting', href: '/reports-dashboards' },
      { label: 'Support', href: '/help-center' },
      { label: 'Procurement & legal', href: '/procurement-and-legal-resources' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Getting Started', href: '/guides' },
      { label: 'Help Center', href: '/help-center' },
      { label: 'Product Documentation', href: '/product-documentation' },
      { label: 'Release Notes', href: '/release-notes' },
      { label: 'Resource Center', href: '/resources' },
    ],
  },
];

export default function EvidenceNavigation() {
  return (
    <section className="w-full bg-green-50 dark:bg-slate-900 pt-14 sm:pt-16 pb-16 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-8 sm:gap-10">

        {/* Header Section */}
        <div className="max-w-[760px] flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Trust, Enterprise &amp; Resources</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            Evidence Navigation, Not Reassurance Theater
          </h2>
        </div>

        {/* Route Columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {columns.map((column) => (
            <div
              key={column.title}
              className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-6">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 leading-6 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Routing Photo */}
        <figure className="w-full relative rounded-[20px] overflow-hidden">
          <img
            className="w-full h-72 sm:h-80 object-cover"
            src="/product-overview/trust-navigation.png"
            alt="A trust, security, and operations team reviewing governance together"
          />
          <figcaption className="absolute inset-x-0 bottom-0 px-6 sm:px-8 py-6 bg-linear-to-t from-slate-900/90 to-slate-900/0 text-white text-sm sm:text-base font-medium leading-6">
            <span className="block max-w-136">
              Whether you&apos;re a worker, HR, finance, IT, or procurement — the right route is one
              click away, without behavioral profiling.
            </span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
