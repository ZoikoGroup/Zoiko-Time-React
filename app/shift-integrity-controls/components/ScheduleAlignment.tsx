const cards = [
  {
    title: "Expected vs. captured",
    body: "When a schedule source is connected, ZoikoTime compares captured events against the expected start, end, and break windows — surfacing conflicts, not assuming intent.",
  },
  {
    title: "Grace & rounding",
    body: "Configured grace windows and rounding rules apply consistently, versioned and auditable, so the same policy produces the same outcome every time.",
  },
  {
    title: "No schedule, no assumption",
    body: "Where no approved schedule exists, ZoikoTime evaluates against configured shift-length policy only — it never infers an expected shift on its own.",
  },
  {
    title: "Timezone & DST aware",
    body: "Boundary comparisons account for worker/location timezone and daylight-saving transitions, so effective time is never ambiguous.",
  },
];

export default function ScheduleAlignment() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Schedule &amp; Boundary Alignment
          </p>
          <h2 className="mx-auto mt-3 max-w-[790px] text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Compare captured time against expected shift boundaries
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
              </div>

              <p className="mt-3 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
