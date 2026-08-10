"use client";

const recordRows = [
  {
    number: "1",
    label: "Source",
    value: "Web clock · verified",
    title: "Source & provenance",
    description: "Where the record came from — device, method, verification.",
  },
  {
    number: "2",
    label: "Policy",
    value: "Auto clock-out 12h · v4",
    title: "Policy applied",
    description: "The exact, versioned rule that classified the record.",
  },
  {
    number: "3",
    label: "Timestamps",
    value: "In 09:02 · reviewed 14:10",
    title: "Timestamps",
    description:
      "Submitted, edited, reviewed — each preserved, never overwritten.",
  },
  {
    number: "4",
    label: "Worker note",
    value: "Correction requested",
    title: "Worker participation",
    description: "Notes and correction requests attached by the worker.",
  },
  {
    number: "5",
    label: "Decision",
    value: "Approved · reason logged",
    title: "Decision & evidence",
    description:
      "The reviewer’s reasoned decision and the preserved evidence trail.",
  },
];

export default function RecordAnatomy() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Section label */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Record Anatomy
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[820px] text-center text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
          Every record, fully accountable
        </h2>

        {/* Description */}
        <p className="w-full max-w-[680px] text-center text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
          Five things every time record carries — so it can be understood,
          explained, and
          <br className="hidden sm:block" /> defended.
        </p>

        {/* Record + explanations */}
        <div className="mt-5 w-full max-w-[1040px]">
          {/* Record card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900">
            {/* Record header */}
            <div className="flex items-center justify-between bg-slate-800 px-4 py-3">
              <span className="text-xs font-semibold leading-5 text-white">
                Time record · #4821
              </span>

              <span className="text-xs font-semibold leading-5 text-white">
                v3
              </span>
            </div>

            {/* Record rows */}
            {recordRows.map((row, index) => (
              <div
                key={row.number}
                className={`flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center ${
                  index !== recordRows.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-50 dark:bg-emerald-950/50">
                  <span className="text-xs font-bold leading-5 text-teal-700 dark:text-teal-400">
                    {row.number}
                  </span>
                </div>

                {/* Label */}
                <div className="w-full text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:w-28">
                  {row.label}
                </div>

                {/* Value */}
                <div className="text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* Explanation list */}
          <div className="mt-5 flex flex-col gap-3">
            {recordRows.map((row) => (
              <div
                key={row.title}
                className="flex items-start gap-3"
              >
                {/* Number */}
                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-slate-800">
                  <span className="text-xs font-bold leading-5 text-white">
                    {row.number}
                  </span>
                </div>

                {/* Explanation */}
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                    {row.title}
                  </h3>

                  <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {row.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}