const guarantees = [
  "No hidden collection",
  "No guessed values",
  "No untraceable mutation",
  "No broadened access on failure",
];

export default function ShortAnswer() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            The Short Answer
          </p>
          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Governed connections, not a sync toggle
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            ZoikoTime Enterprise Integrations connect approved sources and
            destinations through explicit authorization, versioned deterministic
            mappings, controlled test runs, accountable activation, monitored
            delivery, reconciliation, and evidence history. Availability varies
            by system, direction, object, plan, region, and configuration.
          </p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-[820px] flex-wrap justify-center gap-2">
          {guarantees.map((item) => (
            <li
              key={item}
              className="rounded-[20px] border border-emerald-100 bg-[#EAF6F3] px-3 py-1.5 text-xs font-semibold leading-5 text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-6 max-w-[880px] rounded-xl border border-emerald-100 bg-[#EAF6F3] px-5 py-4 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-normal leading-5 text-slate-800 dark:text-slate-300">
            Connections never broaden access on failure, silently invent values,
            override worker corrections, or remove human authority over
            consequential outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
