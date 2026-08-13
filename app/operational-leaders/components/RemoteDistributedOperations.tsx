import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OperationCard {
  badge: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const cardData: OperationCard[] = [
  {
    badge: 'Remote',
    title: 'A remote worker reviewing their own record',
    description:
      'Sees the flagged session, adds context, and tracks the status through to approval.',
    linkText: 'Remote Teams',
    href:"/remote-teams"
  },
  {
    badge: 'Hybrid',
    title: 'A hybrid manager resolving an exception',
    description:
      'Reviews the reason, requests information once, and approves with an amendment reason.',
    linkText: 'Hybrid Workforces',
   href:"/hybrid-workforces"

  },
  {
    badge: 'Field & contractor',
    title: 'A field team adding project context',
    description:
      'Records the task, customer, and cost code at the point of work on mobile.',
    linkText: 'Contractor-Heavy Workforces',
    href:"/contractor-heavy-workforces"
  },
  {
    badge: 'Regional operations',
    title: 'Regional operations reviewing readiness',
    description:
      'Checks completeness and exception aging by region before the period closes.',
    linkText: 'Global Workforces',
    href:"/global-workforces"
  },
];

export default function RemoteDistributedOperations() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Top Header Section */}
        <div className="max-w-[790px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Remote, Hybrid &amp; Distributed Operations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Manage Distributed Work Through Clear Records, Not Digital Surveillance
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            ZoikoTime helps remote, hybrid, field, and distributed teams capture work-time context, review exceptions, and maintain approved records without screenshots, keystroke content, URL history, application names, or clipboard data.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between gap-4 hover:border-slate-300 transition-all group"
            >
              <div className="flex flex-col items-start gap-3">
                {/* Badge */}
                <span className="px-2.5 py-0.5 bg-slate-100 text-emerald-700 text-xs font-bold uppercase tracking-wide rounded-full border border-slate-200">
                  {card.badge}
                </span>

                {/* Card Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={card.href || '#'}
                className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm pt-2 transition-colors group-hover:underline"
              >
                <span>{card.linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Split Section: Image + Trust Statement */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center pt-4">
          
          {/* Image Side */}
          <div className="w-full flex justify-center">
            <img
              className="w-full max-w-[557px] h-auto aspect-[14/10] rounded-2xl border border-slate-200 shadow-md object-cover"
              src="/operational-leaders/div.photo (1).png"
              alt="Distributed work operations and trust principles visual"
            />
          </div>

          {/* Text Content Side */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Trust is part of the operating model
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-[644px]">
              Workers can see the records that describe their work, add context, and request corrections. That is what makes a record defensible later — not the amount of activity captured.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm pt-3 transition-colors hover:underline self-start group"
            >
              <span>Anti-Surveillance Principles</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a> */}
          </div>

        </div>

      </div>
    </section>
  );
}
