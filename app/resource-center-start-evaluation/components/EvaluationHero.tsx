import React from 'react';
import SectionEyebrow from './SectionEyebrow';

type Pathway = {
  title: string;
  description: string;
  icon: string;
};

const pathways: Pathway[] = [
  {
    title: 'Platform',
    description: 'Understand what ZoikoTime does',
    icon: 'apps.svg',
  },
  {
    title: 'Use case',
    description: 'Understand a business scenario',
    icon: 'fact-check.svg',
  },
  {
    title: 'Trust & governance',
    description: 'Security, privacy, AI boundaries, worker rights',
    icon: 'handshake.svg',
  },
  {
    title: 'Pricing',
    description: 'Compare current commercial options',
    icon: 'credit-card.svg',
  },
  {
    title: 'Enterprise deployment',
    description: 'Procurement and rollout evaluation',
    icon: 'corporate-fare.svg',
  },
  {
    title: 'Documentation / help',
    description: 'Instructions, troubleshooting, support',
    icon: 'files.svg',
  },
  {
    title: 'Shipped changes',
    description: 'Understand a recent product update',
    icon: 'local-shipping.svg',
  },
];

export default function EvaluationHero() {
  return (
    <section className="w-full bg-gradient-to-b from-green-50 to-white px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-14">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3.5">

        <SectionEyebrow label="Resource Center" />

        <h1 className="max-w-[720px] text-center text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:max-w-[1000px] lg:text-5xl lg:leading-[58px]">
          Explore ZoikoTime using current product,{' '}
          {/* Forced two-line break at lg; wraps naturally below that. */}
          <br className="hidden lg:inline" />
          trust, pricing, and enterprise resources
        </h1>

        <p className="max-w-[600px] text-center text-sm font-semibold leading-7 text-gray-500 sm:text-base">
          Self-directed evaluation — no forms, no account, no hidden score. Choose the
          question that matches where you are, and we&apos;ll route you to the current
          authoritative source.
        </p>

        {/* Evaluation pathway card */}
        <div className="mt-6 w-full rounded-[20px] border border-slate-200 bg-white px-4 py-10 shadow-[0px_22px_46px_-26px_rgba(10,22,40,0.26)] sm:px-8 sm:py-12 lg:px-10">

          <div className="flex flex-col items-center gap-3">

            <SectionEyebrow label="Evaluation Pathway" />

            <h2 className="text-center text-2xl font-bold leading-10 text-slate-900 sm:text-3xl">
              What do you need to evaluate ?
            </h2>

            <p className="max-w-[560px] text-center text-sm font-normal leading-6 text-gray-500">
              Choose a question. ZoikoTime routes you to the current authoritative source;
              it does not create a score or recommendation profile.
            </p>

          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >

                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-green-50">
                  <img
                    className="h-5 w-5"
                    src={`/resource-center-start-evaluation/${pathway.icon}`}
                    alt=""
                    aria-hidden="true"
                  />
                </span>

                <span className="text-sm font-semibold leading-6 text-slate-900">
                  {pathway.title}
                </span>

                <span className="text-xs font-normal leading-4 text-gray-500">
                  {pathway.description}
                </span>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
