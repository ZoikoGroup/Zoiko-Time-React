import React from 'react';
import Image from 'next/image';

interface Route {
  topic: string;
  handling: string;
  owners: string;
}

const routes: Route[] = [
  {
    topic: 'Enterprise diligence',
    handling: 'Handled by a privacy owner; procurement routing only if you ask.',
    owners: 'Privacy owner · Procurement',
  },
  {
    topic: 'Customer configuration',
    handling: 'Privacy and customer operations; operational support where needed.',
    owners: 'Privacy · Support',
  },
  {
    topic: 'Worker / individual',
    handling: 'Privacy owner, with worker-focused trust resources.',
    owners: 'Privacy · Worker resources',
  },
  {
    topic: 'AI / provider',
    handling: 'Privacy owner, with AI-governance context.',
    owners: 'Privacy · AI governance',
  },
  {
    topic: 'Security incident',
    handling: 'Not handled here — routed to Security / Status / Support.',
    owners: 'Security · Status',
  },
  {
    topic: 'Accessibility',
    handling: 'Accessibility or support — no medical proof required.',
    owners: 'Accessibility · Support',
  },
];

export default function RoutingAndBoundaries() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center">

        {/* Header Section */}
        <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Routing &amp; Boundaries
        </span>
        <h2 className="pt-3 max-w-[820px] text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white leading-10">
          Where your request goes
        </h2>
        <p className="max-w-[760px] text-center text-base text-gray-500 dark:text-slate-400 leading-7">
          Privacy review is kept separate from sales, security incidents, and record corrections.
        </p>

        {/* Routing Cards */}
        <div className="pt-8 pb-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {routes.map((route) => (
            <div
              key={route.topic}
              className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] flex flex-col gap-1"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-white leading-6">
                {route.topic}
              </h3>
              <p className="text-xs text-gray-500 dark:text-slate-400 leading-5">{route.handling}</p>
              <p className="pt-1 text-xs font-semibold text-teal-700 dark:text-teal-400 leading-5">
                {route.owners}
              </p>
            </div>
          ))}
        </div>

        {/* CRM Firewall Callout */}
        <div className="w-full max-w-[900px] px-5 sm:px-7 py-6 bg-slate-800 dark:bg-slate-900 rounded-2xl shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] flex items-start gap-4">
          <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
            <Image
              src="/request-privacy-review/icon-crm-firewall.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase leading-4 tracking-wider text-teal-400">
              CRM firewall &amp; human authority
            </span>
            <p className="text-sm text-white leading-5">
              Privacy concerns, worker context, rights intent, legal questions, sensitive evidence, and
              reviewer outcomes stay out of marketing CRM and lead scoring. There is no privacy-risk,
              worker-risk, or lead score. Humans decide legal and privacy applicability, remedy,
              restrictions, and closure — AI only assists with bounded clerical tasks.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
