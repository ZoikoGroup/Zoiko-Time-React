'use client';

import React from 'react';

interface Step {
  number: number;
  title: string;
  description: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Draft',
    description: (
      <>
        Author a policy or version
        <br />
        in scope.
      </>
    ),
  },
  {
    number: 2,
    title: 'Review',
    description: (
      <>
        Validate rules, jurisdiction
        <br />&amp; precedence.
      </>
    ),
  },
  {
    number: 3,
    title: 'Approve',
    description: (
      <>
        Authorized role approves
        <br />
        with a reason.
      </>
    ),
  },
  {
    number: 4,
    title: 'Publish',
    description: (
      <>
        Effective-dated; prior
        <br />
        version superseded.
      </>
    ),
  },
  {
    number: 5,
    title: 'Version',
    description: (
      <>
        Change recorded as an
        <br />
        audit event.
      </>
    ),
  },
];

export default function ChangeControlSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Change Control
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl dark:text-white">
            No policy changes without review, reason,
            <br className="hidden sm:inline" /> and a record
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
            Policy moves through a controlled path — and segregation of duties keeps
            <br className="hidden sm:inline" /> authoring, approval, and execution in separate hands.
          </p>
        </div>

        {/* 5-Step Process Bar */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
          <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 md:grid-cols-5 md:divide-y-0 md:divide-x dark:divide-gray-800">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center p-6 text-center"
              >
                {/* Step Number Badge */}
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 text-xs font-bold text-white shadow-[0px_6px_12px_0px_rgba(16,162,141,0.28)]">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-1 text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notice Banner */}
        <div className="mt-8 rounded-xl bg-emerald-50 p-5 text-center outline outline-1 outline-offset-[-1px] outline-emerald-100 dark:bg-emerald-950/30 dark:outline-emerald-800/40">
          <p className="text-sm leading-5 text-slate-800 dark:text-gray-200">
            <strong className="font-bold text-teal-700 dark:text-teal-400">
              Human authority controlling.
            </strong>{' '}
            Administrators configure the rules; they do not decide payroll, discipline, misconduct, or
            <br className="hidden md:inline" /> legal outcomes — those remain human decisions within your organization.
          </p>
        </div>
      </div>
    </section>
  );
}