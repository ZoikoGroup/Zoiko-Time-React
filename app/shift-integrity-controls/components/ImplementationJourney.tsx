const steps = [
  {
    title: "Discovery",
    body: "Confirm populations, sources, existing policies, and success measures.",
  },
  {
    title: "Policy mapping",
    body: "Translate grace windows, rounding, and escalation rules into versioned configuration.",
  },
  {
    title: "Pilot",
    body: "A representative site runs real shifts with full review and correction workflows active.",
  },
  {
    title: "Rollout & operate",
    body: "Training, worker communications, go-live, and ongoing policy governance.",
  },
];

export default function ImplementationJourney() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Implementation Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            A measured path to go-live
          </h2>
        </div>

        <ol className="mx-auto mt-10 max-w-[820px]">
          {steps.map(({ title, body }, index) => (
            <li
              key={title}
              className={`flex gap-5 py-6 ${
                index > 0
                  ? "border-t border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xs font-bold leading-5 text-teal-700 dark:bg-slate-800 dark:text-teal-400">
                {index + 1}
              </span>

              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
