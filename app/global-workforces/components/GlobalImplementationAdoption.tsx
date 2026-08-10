"use client";

import React from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Discovery & Design Authority",
    description:
      "Confirm entities, zones, policies, roles, systems & success measures; set the design authority.",
  },
  {
    phase: "Phase 2",
    title: "Representative Pilot & Readiness",
    description:
      "Validate a representative set of countries, worker types & downstream targets with a readiness gate.",
  },
  {
    phase: "Phase 3",
    title: "Country Waves & Operate",
    description:
      "Activate by country wave with gate reviews, then operate and expand with continuous review.",
  },
];

export default function GlobalImplementationAdoption() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-16">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex w-full flex-col items-center text-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3FB97A] sm:text-xs">
              Global Implementation &amp; Adoption
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            A controlled path, country by country
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            Discovery → design authority → representative pilot → readiness →
            gate review → country waves → operate → expand.
          </p>
        </div>

        {/* =====================================================
            PHASE CARDS
        ====================================================== */}
        <div className="mx-auto mt-10 grid w-full max-w-[1080px] grid-cols-1 gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className="flex min-h-[210px] flex-col items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_25px_0px_rgba(14,31,61,0.08)] dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Phase */}
              <span className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#3FB97A]">
                {phase.phase}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-sm font-semibold leading-6 text-slate-800 sm:text-base dark:text-white">
                {phase.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm dark:text-slate-400">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <div className="flex justify-center pt-6">
          <a
            href="/request-enterprise-demo"
            className="inline-flex min-h-11 w-full max-w-[260px] items-center justify-center rounded-[10px] bg-[#3FB97A] px-6 py-3.5 text-center text-sm font-semibold leading-4 text-white shadow-[0px_6px_16px_0px_rgba(63,185,122,0.28)] transition-all hover:bg-[#35A96E] active:scale-95 sm:w-auto sm:max-w-none sm:text-base"
          >
            Request Enterprise Demo
          </a>
        </div>

      </div>
    </section>
  );
}