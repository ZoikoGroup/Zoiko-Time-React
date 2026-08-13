import React from 'react';
import Image from 'next/image';

interface BasicCard {
  icon: string;
  title: string;
  detail: string;
}

const cards: BasicCard[] = [
  {
    icon: 'icon-data-categories.svg',
    title: 'Data categories',
    detail:
      'Time, attendance, schedule, project attribution, and review context — the records needed to run work fairly.',
  },
  {
    icon: 'icon-purpose-limits.svg',
    title: 'Purpose & limits',
    detail:
      'Collected for governed time, review, and approval — not for monitoring people, and not beyond what’s needed.',
  },
  {
    icon: 'icon-worker-transparency.svg',
    title: 'Worker transparency',
    detail:
      'Workers can see their own records, the policy applied, and how to request a correction.',
  },
  {
    icon: 'icon-access-roles.svg',
    title: 'Access & roles',
    detail:
      'Role-based access with separation of duties; support access is governed and audited.',
  },
];

export default function PrivacyBasics() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center">

        {/* Header Section */}
        <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Privacy Basics
        </span>
        <h2 className="pt-3 max-w-[820px] text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white leading-10">
          What we collect — and why
        </h2>
        <p className="pt-3.5 max-w-[760px] text-center text-base text-gray-500 dark:text-slate-400 leading-7">
          Plain-language privacy truth, always available without asking for anything.
        </p>

        {/* Basics Cards */}
        <div className="pt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] flex flex-col gap-1"
            >
              <div className="h-9 w-9 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center shrink-0">
                <Image
                  src={`/request-privacy-review/${card.icon}`}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </div>
              <h3 className="pt-1.5 text-sm font-semibold text-slate-800 dark:text-white leading-6">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">{card.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
