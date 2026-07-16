"use client";

const problems = [
  {
    icon: "⚠️",
    title: "Inconsistent Decisions",
    description: (
      <>
        Different managers produce
        <br className="hidden sm:block" /> different outcomes for the same
        <br className="hidden sm:block" /> scenario — creating inequity, risk, and
        <br className="hidden sm:block" /> legal exposure across the workforce.
      </>
    ),
  },
  {
    icon: "📋",
    title: "No Case Structure",
    description: (
      <>
        Issues are handled informally, without
        <br className="hidden sm:block" /> assigned ownership, evidence trails,
        <br className="hidden sm:block" /> or standardised processes — making
        <br className="hidden sm:block" /> review and audit impossible.
      </>
    ),
  },
  {
    icon: "🔒",
    title: "Lack of Traceability",
    description: (
      <>
        Decisions cannot be audited or
        <br className="hidden sm:block" /> defended because there is no record
        <br className="hidden sm:block" /> of what was considered, who
        <br className="hidden sm:block" /> decided, or why a particular outcome
        <br className="hidden sm:block" /> was reached.
      </>
    ),
  },
];

export default function WorkforceDecisionProblem() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div className="mx-auto flex min-h-[821.48px] w-full max-w-[1440px] flex-col items-center px-6 py-[74px] sm:px-10 lg:px-16">

        {/* Eyebrow */}
        <div className="text-center text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
          The Problem
        </div>

        {/* Heading */}
        <h2 className="mt-[18px] text-center font-['Plus_Jakarta_Sans'] text-3xl font-bold leading-10 text-white sm:text-4xl">
          Why Workforce Decisions Break Down
        </h2>

        {/* Description */}
        <p className="mt-[18px] max-w-[560px] text-center font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-400 sm:text-lg">
          Without structure, decisions become inconsistent — and
          <br className="hidden sm:block" />
          inconsistency creates compounding risk across your organisation.
        </p>

        {/* Cards */}
        <div className="mt-[92px] grid w-full max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-[34.66px]">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="relative min-h-[288px] overflow-hidden rounded-xl bg-slate-900 px-[33px] py-[33px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-800"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-500 to-teal-400" />

              {/* Icon */}
              <div className="flex size-11 items-center justify-center rounded-lg bg-teal-950/70">
                <span className="text-xl leading-8 text-slate-200">
                  {problem.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-[24px] font-['Plus_Jakarta_Sans'] text-lg font-bold leading-7 text-white">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="mt-[12px] font-['Plus_Jakarta_Sans'] text-base font-normal leading-6 text-slate-400">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Insight Box */}
        <div className="mt-[49px] flex min-h-[128px] w-full max-w-[680px] items-center justify-center rounded-xl bg-indigo-950/40 px-6 py-8 text-center outline outline-1 outline-offset-[-1px] outline-indigo-400/20 sm:px-10">
          <p className="font-['Plus_Jakarta_Sans'] text-base font-semibold leading-7 text-slate-200 sm:text-lg">
            Without structure, decisions become inconsistent, and
            <br className="hidden sm:block" />
            <span className="font-extrabold text-teal-400">
              inconsistency creates risk
            </span>
            <span> across every layer of the organisation.</span>
          </p>
        </div>
      </div>
    </section>
  );
}