"use client";

import React from "react";

const stages = [
  {
    number: "1",
    title: "Find your path",
    description: (
      <>
        Path Finder routes you to the setup
        <br className="hidden sm:block" />
        track built for your role and permissions
        <br className="hidden sm:block" />— not a generic checklist.
      </>
    ),
  },
  {
    number: "2",
    title: "Configure with guardrails",
    description: (
      <>
        Every setting has a default and a
        <br className="hidden sm:block" />
        source. Nothing configures itself, and
        <br className="hidden sm:block" />
        every change is attributable.
      </>
    ),
  },
  {
    number: "3",
    title: "Test safely",
    description: (
      <>
        A governed sandbox mirrors production
        <br className="hidden sm:block" />
        rules with zero impact on live workers,
        <br className="hidden sm:block" />
        pay, or audit evidence.
      </>
    ),
  },
  {
    number: "4",
    title: "Verify & launch",
    description: (
      <>
        A person confirms readiness before
        <br className="hidden sm:block" />
        anything goes live. Verification is a
        <br className="hidden sm:block" />
        step, never a formality.
      </>
    ),
  },
];

export default function Model() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-[66px]">
      <div className="mx-auto max-w-[1168px]">
        {/* HEADER */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Operating Model
            </span>
          </div>

          <h2 className="mt-2 max-w-[500px] text-3xl font-bold leading-9 text-sky-950 dark:text-white sm:text-[32px]">
            How governed onboarding actually works.
          </h2>

          <p className="mt-4 max-w-[520px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            The same four stages apply no matter your role — only the specific
            steps inside each stage change.
          </p>
        </div>

        {/* STAGES */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[74px] lg:grid-cols-4 lg:gap-0">
          {stages.map((stage, index) => (
            <div
              key={stage.number}
              className="relative flex min-h-[190px] flex-col sm:px-5 lg:px-[18px]"
            >
              {/* CONNECTING LINE */}
              {index < stages.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] right-[-18px] top-[22px] hidden h-px bg-gray-200 dark:bg-white/10 lg:block" />
              )}

              {/* NUMBER */}
              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-950 text-base font-bold text-white dark:bg-teal-600">
                {stage.number}
              </div>

              {/* CONTENT */}
              <div className="mt-5">
                <h3 className="text-base font-bold text-sky-950 dark:text-white">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm font-normal leading-5 text-slate-600 dark:text-slate-400">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}