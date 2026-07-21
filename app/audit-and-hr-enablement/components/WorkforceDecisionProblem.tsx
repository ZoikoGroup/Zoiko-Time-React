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
    <section
      className="
      relative w-full overflow-hidden
      bg-white
      dark:bg-slate-950
      "
    >
      <div
        className="
        mx-auto flex min-h-screen max-w-[1440px]
        flex-col items-center
        px-5 py-16
        sm:px-10
        lg:px-16 lg:py-[74px]
        "
      >

        {/* Eyebrow */}
        <div
          className="
          text-center text-xs font-bold uppercase
          leading-5 tracking-wider
          text-teal-600
          dark:text-teal-400
          "
        >
          The Problem
        </div>


        {/* Heading */}
        <h2
          className="
          mt-5 text-center
          text-3xl font-bold leading-tight
          text-slate-900
          sm:text-4xl
          dark:text-white
          "
        >
          Why Workforce Decisions Break Down
        </h2>


        {/* Description */}
        <p
          className="
          mt-5 max-w-[560px]
          text-center text-base
          leading-7
          text-slate-600
          sm:text-lg
          dark:text-slate-400
          "
        >
          Without structure, decisions become inconsistent — and
          <br className="hidden sm:block" />
          inconsistency creates compounding risk across your organisation.
        </p>


        {/* Cards */}
        <div
          className="
          mt-16 grid w-full
          max-w-[1040px]
          grid-cols-1
          gap-6
          sm:mt-[92px]
          md:grid-cols-3
          md:gap-8
          lg:gap-[34.66px]
          "
        >
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="
              relative min-h-[288px]
              overflow-hidden rounded-xl
              bg-white
              px-7 py-8
              shadow-[0px_8px_24px_rgba(0,0,0,0.08)]
              outline outline-1
              outline-slate-200
              dark:bg-slate-900
              dark:outline-slate-800
              dark:shadow-[0px_8px_24px_rgba(0,0,0,0.18)]
              "
            >

              {/* Gradient Line */}
              <div
                className="
                absolute left-0 top-0
                h-[3px] w-full
                bg-gradient-to-r
                from-teal-500
                to-teal-400
                "
              />


              {/* Icon */}
              <div
                className="
                flex size-11
                items-center justify-center
                rounded-lg
                bg-teal-100
                dark:bg-teal-950/70
                "
              >
                <span className="text-xl">
                  {problem.icon}
                </span>
              </div>


              {/* Title */}
              <h3
                className="
                mt-6
                text-lg font-bold
                leading-7
                text-slate-900
                dark:text-white
                "
              >
                {problem.title}
              </h3>


              {/* Description */}
              <p
                className="
                mt-3
                text-base
                leading-6
                text-slate-600
                dark:text-slate-400
                "
              >
                {problem.description}
              </p>

            </div>
          ))}
        </div>


        {/* Insight Box */}
        <div
          className="
          mt-12
          flex min-h-[128px]
          w-full max-w-[680px]
          items-center justify-center
          rounded-xl
          bg-indigo-50
          px-6 py-8
          text-center
          outline outline-1
          outline-indigo-200
          sm:px-10
          dark:bg-indigo-950/40
          dark:outline-indigo-400/20
          "
        >
          <p
            className="
            text-base
            font-semibold
            leading-7
            text-slate-700
            sm:text-lg
            dark:text-slate-200
            "
          >
            Without structure, decisions become inconsistent, and
            <br className="hidden sm:block" />

            <span
              className="
              font-extrabold
              text-teal-600
              dark:text-teal-400
              "
            >
              inconsistency creates risk
            </span>

            <span>
              {" "}across every layer of the organisation.
            </span>

          </p>
        </div>

      </div>
    </section>
  );
}