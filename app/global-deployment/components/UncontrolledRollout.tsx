const risks = [
  {
    title: "Different legal and operating contexts",
    risk: "policy drift, unclear ownership, and inconsistent notice, correction, approval, and record treatment.",
    response:
      "Page response — scope model, jurisdiction profiles, inheritance, exceptions, named owners, evidence.",
  },
  {
    title: "Time behaves differently by location",
    risk: "DST, calendars, overnight shifts, cutover, historical rule changes, and period boundaries can distort records.",
    response:
      "Page response — versioned time and locale controls, scenario tests, neutral conflict states, recalculation evidence.",
  },
  {
    title: "Data and support claims collapse together",
    risk: "deployment, data location, transfers, support, legal review, and commercial status get treated as one fact.",
    response:
      "Page response — separate registries with their own statuses, owners, dates, limitations, and authoritative routes.",
  },
  {
    title: "Activation precedes readiness",
    risk: "identity, mapping, communication, support, correction, and rollback gaps surface after launch.",
    response:
      "Page response — readiness test suite, named approval, waves, rollback, post-launch review.",
  },
  {
    title: "Workers experience local consequences",
    risk: "incorrect context and unclear rights reduce trust and create record disputes.",
    response:
      "Page response — notice, visibility, correction, human review, consultation, accessible support.",
  },
];

export default function UncontrolledRollout() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Why Global Deployment Requires Control
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Five Ways Uncontrolled Rollout Damages the Record
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Deployment across boundaries is a governed operating problem, not a
            feature list. Each risk below has a specific control on this page.
          </p>

        </div>

        {/* Risk Rows */}
        <div className="mt-10 flex flex-col gap-3.5">

          {risks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-5 sm:flex-row sm:gap-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-5 text-sky-950 sm:w-56 sm:shrink-0 dark:text-white">
                {item.title}
              </h3>

              <div className="flex flex-1 flex-col gap-1.5">

                <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  <span className="font-bold">Risk:</span> {item.risk}
                </p>

                <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                  {item.response}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
