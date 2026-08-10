'use client';

import React, { useState } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type PageKey = 'introduction' | 'quickstart' | 'recording-time' | 'break-rest';

type NavLink = {
  label: string;
  key: PageKey | null;
};

type NavSection = {
  title: string;
  links: NavLink[];
};

type PageSection = {
  heading: string;
  body?: string;
  list?: [string, string][];
};

type PageContent = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  updated: string;
  prev: PageKey | null;
  next: PageKey | null;
  sections: PageSection[];
};

// ---------------------------------------------------------------------------
// Nav tree — shared by the sidebar. `key: null` entries aren't built yet,
// so clicking them does nothing (matches the '#' links in the Figma file).
// ---------------------------------------------------------------------------
const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Getting Started',
    links: [
      { label: 'Introduction', key: 'introduction' },
      { label: 'Quickstart', key: 'quickstart' },
    ],
  },
  {
    title: 'Time Tracking',
    links: [
      { label: 'Recording time', key: 'recording-time' },
      { label: 'Break & rest configuration', key: 'break-rest' },
    ],
  },
  {
    title: 'Deterministic Classification',
    links: [
      { label: 'How classification works', key: null },
      { label: 'Policy versioning', key: null },
    ],
  },
  {
    title: 'Shift Integrity',
    links: [
      { label: 'Exception states', key: null },
      { label: 'Correction workflow', key: null },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { label: 'Integrations overview', key: null },
      { label: 'Payroll export', key: null },
    ],
  },
  {
    title: 'API Reference',
    links: [
      { label: 'Authentication', key: null },
      { label: 'Endpoints overview', key: null },
    ],
  },
  {
    title: 'Security & Access',
    links: [
      { label: 'Data handling', key: null },
      { label: 'Roles & permissions', key: null },
    ],
  },
];

// ---------------------------------------------------------------------------
// Page content — everything transcribed from the Figma screenshots.
// ---------------------------------------------------------------------------
const PAGES: Record<PageKey, PageContent> = {
  introduction: {
    breadcrumb: 'Getting Started',
    title: 'Introduction',
    subtitle: 'What ZoikoTime is, and the core concepts every page in this documentation assumes you know.',
    updated: 'Last updated Aug 3, 2026',
    prev: null,
    next: 'quickstart',
    sections: [
      {
        heading: 'What ZoikoTime does',
        body: 'ZoikoTime records approved time events, applies deterministic policy rules, surfaces exceptions neutrally, and preserves a full evidence trail from capture to approval. It is workforce truth infrastructure, not employee monitoring software.',
      },
      {
        heading: 'Core concepts',
        list: [
          ['Record', 'a time event and everything that happens to it: classification, context, review, and approval.'],
          ['State', 'a plain-language status (Needs Context, Pending Review, Corrected, Approved) that describes the record, never the worker.'],
          ['Policy', 'versioned, effective-dated rules that determine how records are classified.'],
          ['Human review', 'the authority that makes every consequential decision; ZoikoTime never acts autonomously.'],
        ],
      },
      {
        heading: 'Where to go next',
        body: "If you're setting up ZoikoTime for the first time, continue to Quickstart. If you're integrating with an existing system, jump to Integrations Overview or API Reference.",
      },
    ],
  },

  quickstart: {
    breadcrumb: 'Getting Started',
    title: 'Quickstart',
    subtitle: 'Get a working ZoikoTime configuration in four steps.',
    updated: 'Last updated Jul 28, 2026',
    prev: 'introduction',
    next: 'recording-time',
    sections: [
      {
        heading: '1. Create your organization',
        body: "Set your organization's name, primary timezone, and default policy set from the Admin console. You can add sites and regions later — this just establishes your root configuration.",
      },
      {
        heading: '2. Invite your first workers',
        body: 'Add workers individually by email, or connect SSO-based provisioning for larger teams. Assign each worker a role: Worker, Reviewer, or Administrator.',
      },
      {
        heading: '3. Configure a policy',
        body: 'Set a grace window, rounding rule, and break policy for your primary site. You can preview the impact of any policy change before publishing it.',
      },
      {
        heading: '4. Record your first shift',
        body: 'Sign in as a test worker and record a shift using the desktop or mobile app. Confirm it appears correctly in the Verification Workspace with the expected state.',
      },
    ],
  },

  'recording-time': {
    breadcrumb: 'Time Tracking',
    title: 'Recording time',
    subtitle: 'How workers capture time events across desktop, mobile, and kiosk sources.',
    updated: 'Last updated Aug 1, 2026',
    prev: 'quickstart',
    next: 'break-rest',
    sections: [
      {
        heading: 'Supported actions',
        body: 'Start, stop, pause, resume, add a break, switch project or task context, and add a note — all available from the same interface across supported devices.',
      },
      {
        heading: 'Source behavior',
        body: 'Each capture source (desktop, mobile, kiosk, integration) preserves its own timestamp and connectivity state. Offline captures on mobile show a pending-sync indicator until they reach the server.',
      },
      {
        heading: 'What is never captured',
        body: 'No screenshots, keystroke content, URL history, application names, or clipboard data are collected by any capture source, under any configuration.',
      },
    ],
  },

  'break-rest': {
    breadcrumb: 'Time Tracking',
    title: 'Break & rest configuration',
    subtitle: 'Configuring meal and rest categories, scoped by site or region.',
    updated: 'Last updated Jul 22, 2026',
    prev: 'recording-time',
    next: null,
    sections: [
      {
        heading: 'Meal vs. rest categories',
        body: 'Meal and rest periods are separate, customer-facing categories. Configure required duration, completeness rules, and review behavior independently for each.',
      },
      {
        heading: 'Scoping by site',
        body: 'Break policy should be scoped per site or region rather than set as one organization-wide default, since requirements frequently vary by jurisdiction.',
      },
      {
        heading: 'Legal boundary',
        body: 'ZoikoTime configures and evidences break policy workflows; it does not determine legal sufficiency of a given break pattern. Confirm jurisdiction-specific rules with your own legal counsel.',
      },
    ],
  },
};

const PAGE_LABELS: Record<PageKey, string> = {
  introduction: 'Introduction',
  quickstart: 'Quickstart',
  'recording-time': 'Recording time',
  'break-rest': 'Break & rest configuration',
};

export default function ZoikoDocs() {
  const [current, setCurrent] = useState<PageKey>('introduction');
  const page = PAGES[current];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 border-r-0 md:border-r border-slate-200 dark:border-slate-800 pr-0 md:pr-6">
            <nav className="space-y-6 text-sm">
              {NAV_SECTIONS.map((section) => (
                <div className="space-y-1" key={section.title}>
                  <h5 className="px-2.5 text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    {section.title}
                  </h5>
                  {section.links.map((link) => {
                    const isActive = link.key === current;
                    return (
                      <button
                        key={link.label}
                        type="button"
                        onClick={() => {
                          if (link.key) setCurrent(link.key);
                        }}
                        className={
                          'block w-full text-left px-2.5 py-2 rounded-md transition-colors ' +
                          (isActive
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-300 font-semibold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800')
                        }
                      >
                        {link.label}
                      </button>
                    );
                  })}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Article Content */}
          <main className="flex-1 max-w-4xl space-y-8">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
              <span>Documentation</span>
              <span>/</span>
              <span>{page.breadcrumb}</span>
            </div>

            {/* Document Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white mb-2">
                {page.title}
              </h1>
              <p className="text-base text-gray-500 dark:text-slate-400">{page.subtitle}</p>
              <div className="mt-4 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-400">
                {page.updated}
              </div>
            </div>

            {/* Body Sections */}
            <section className="space-y-8">
              {page.sections.map((s) => (
                <div className="space-y-2" key={s.heading}>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{s.heading}</h3>
                  {s.body && (
                    <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed">{s.body}</p>
                  )}
                  {s.list && (
                    <div className="space-y-2 text-sm text-gray-700 dark:text-slate-300 leading-relaxed">
                      {s.list.map(([term, def]) => (
                        <p key={term}>
                          <strong className="text-slate-800 dark:text-slate-100">{term}</strong> — {def}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Feedback Banner */}
            <div className="p-4 bg-gray-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-gray-500 dark:text-slate-400">
              Found an issue with this page?{' '}
              <a href="#" className="text-teal-700 dark:text-teal-400 font-semibold hover:underline">
                Contact us
              </a>{' '}
              and we&apos;ll take a look.
            </div>

            {/* Pagination Navigation */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.prev ? (
                <button
                  type="button"
                  onClick={() => setCurrent(page.prev as PageKey)}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors text-left group"
                >
                  <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">
                    ← Previous
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">
                    {PAGE_LABELS[page.prev]}
                  </span>
                </button>
              ) : (
                <div />
              )}

              {page.next ? (
                <button
                  type="button"
                  onClick={() => setCurrent(page.next as PageKey)}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm transition-colors text-right group"
                >
                  <span className="text-[10px] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide block">
                    Next →
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-teal-600 transition-colors">
                    {PAGE_LABELS[page.next]}
                  </span>
                </button>
              ) : (
                <div />
              )}
            </div>

          </main>
        </div>

        {/* Documentation Disclaimer Banner */}
        <div className="mt-12 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          This documentation describes current product capability. For task-based video walkthroughs, see{' '}
          <strong>Video Tutorials</strong>. For outcome-led educational content, see <strong>Guides</strong>. For
          legal, security, and compliance evidence, see <strong>Procurement &amp; Legal Resources</strong>.
        </div>

      </div>
    </div>
  );
}