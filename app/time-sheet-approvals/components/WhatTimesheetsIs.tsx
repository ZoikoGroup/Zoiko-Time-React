import React from 'react';
import Link from 'next/link';

interface PrincipleCard {
  title: string;
  description: string;
}

const principleCards: PrincipleCard[] = [
  {
    title: 'Human authority',
    description:
      'ZoikoTime may validate, organize, classify deterministically, route, and explain. It does not autonomously approve, reject, discipline, determine pay, or decide legal outcomes.',
  },
  {
    title: 'Worker rights',
    description:
      'Visible review, correction, explanation, status, and escalation paths — according to authorized scope and applicable policy.',
  },
  {
    title: 'What “approved” means',
    description:
      'An authorized reviewer accepted a defined record version for a configured workflow. Nothing broader.',
  },
  {
    title: 'What evidence means',
    description:
      'History records what the system and authorized users did, using available sources and versions. It does not create missing facts.',
  },
];

const navigationTabs = [
  { label: 'Anti-Surveillance Principles', href: '/responsible-ai' },
  { label: 'Human-in-Command Controls', href: '/human-in-command' },
  { label: 'Evidence Ledger', href: '#' },
];

export default function WhatTimesheetsIs() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <header className="max-w-[820px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            What Timesheets &amp; Approvals Is
          </span>
          <p className="max-w-[720px] text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            ZoikoTime Timesheets &amp; Approvals assembles reviewable time records into a defined period, shows workers and authorized reviewers sources, status, exceptions, corrections, and policy context, routes submissions through configured human approval, records reasons and changes, and releases approved record versions to authorized downstream workflows. Approval does not guarantee payroll, legal, or compliance outcomes.
          </p>
        </header>

        {/* 4-Column Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principleCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2.5 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Action Badges / Buttons */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3.5 pt-2">
          {navigationTabs.map((tab, idx) => (
            <Link
              key={idx}
              href={tab.href}
              className="px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-sm sm:text-base rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              {tab.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}