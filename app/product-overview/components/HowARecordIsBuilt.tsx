import React from 'react';
import Image from 'next/image';
import SectionEyebrow from './SectionEyebrow';

interface Step {
  icon: string;
  title: string;
  detail: string;
}

const steps: Step[] = [
  { icon: 'check_small.svg', title: 'Approved inputs', detail: 'Device, app, manual, and schedule events' },
  {
    icon: 'user_attributes.svg',
    title: 'Deterministic classification',
    detail: 'Consistent, rule-based — not AI',
  },
  { icon: 'fact_check.svg', title: 'Human review / correction', detail: 'Authorized people decide' },
  { icon: 'files.svg', title: 'Evidence Ledger', detail: 'Append-only history preserved' },
  { icon: 'exit_to_app.svg', title: 'Governed outputs', detail: 'Payroll, billing, reporting, audit' },
];

export default function HowARecordIsBuilt() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pt-7 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-10">

        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Truth Architecture</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            How a Workforce Record Is Built
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400 leading-7">
            Approved inputs move through deterministic classification and human review before they
            become a governed output.
          </p>
        </div>

        {/* Pipeline */}
        <ol className="w-full flex flex-col md:flex-row md:flex-nowrap items-center md:items-start justify-center gap-y-6">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <li className="w-full md:flex-1 md:min-w-0 px-2.5 flex flex-col items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
                <div className="h-12 w-12 rounded-3xl bg-green-50 dark:bg-emerald-950/40 border border-emerald-50 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
                  <Image
                    src={`/product-overview/${step.icon}`}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-6">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-4">{step.detail}</p>
              </li>

              {/* Flow Arrow */}
              {idx < steps.length - 1 && (
                <li
                  aria-hidden="true"
                  className="px-1 shrink-0 self-center md:mt-3.5 text-lg leading-7 text-slate-400 rotate-90 md:rotate-0"
                >
                  →
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>

        {/* Human Authority Callout */}
        <div className="w-full max-w-[890px] px-5 py-4 bg-green-50 dark:bg-emerald-950/20 rounded-lg border-l-[3px] border-emerald-600">
          <p className="text-sm text-slate-900 dark:text-slate-200 leading-6 text-center">
            People remain authoritative for review and consequential outcomes — the system flags, it
            does not decide.
          </p>
        </div>

      </div>
    </section>
  );
}
