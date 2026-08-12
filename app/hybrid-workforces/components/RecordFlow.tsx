"use client";

const stages = [
  {
    number: "1",
    title: "Plan",
    description: (
      <>
        Schedule, work context,
        <br />
        project & policy
        <br />
        configured.
      </>
    ),
    owner: "Policy owner / manager",
  },
  {
    number: "2",
    title: "Capture",
    description: (
      <>
        Worker or approved
        <br />
        system records start, stop,
        <br />
        break & sync.
      </>
    ),
    owner: "Worker / device",
  },
  {
    number: "3",
    title: "Classify",
    description: (
      <>
        Deterministic policy
        <br />
        interprets events; applied
        <br />
        rule preserved.
      </>
    ),
    owner: "System — not ML",
  },
  {
    number: "4",
    title: "Review",
    description: (
      <>
        Worker adds context or
        <br />
        requests correction;
        <br />
        reviewer resolves.
      </>
    ),
    owner: "Worker + reviewer",
  },
  {
    number: "5",
    title: "Approve",
    description: (
      <>
        Authorized decision
        <br />
        confirms the record;
        <br />
        history preserved.
      </>
    ),
    owner: "Manager / HR / payroll",
  },
  {
    number: "6",
    title: "Export",
    description: (
      <>
        Approved record handed
        <br />
        to payroll/project with
        <br />
        export status.
      </>
    ),
    owner: "Integration owner",
  },
];

export default function RecordFlow() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Record Lifecycle
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Plan to export — with review built in
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Six governed stages, each with a named owner and a human review
            point.
          </p>
        </div>

        {/* Lifecycle */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="
                relative
                min-h-[176px]
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-[15px]
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                transition-all
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
              "
            >
              {/* Number */}
              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  bg-gradient-to-br
                  from-teal-600
                  to-green-400
                  text-xs
                  font-extrabold
                  text-white
                "
              >
                {stage.number}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-xs leading-4 text-gray-500 dark:text-slate-400">
                {stage.description}
              </p>

              {/* Owner */}
              <p className="absolute bottom-4 left-[15px] text-[9.5px] font-semibold leading-4 text-teal-700 dark:text-teal-400">
                {stage.owner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}