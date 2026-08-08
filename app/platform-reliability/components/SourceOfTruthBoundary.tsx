import Link from "next/link";

const columns = [
  {
    title: "This page owns",
    accent: "bg-white/[0.043] border-white/[0.12]",
    items: [
      "Definitions and measurement methods",
      "Operational controls and change safety",
      "Recovery evidence and test results",
      "Limitations and correction history",
    ],
  },
  {
    title: "System Status owns",
    accent: "bg-emerald-500/10 border-emerald-500/30",
    items: [
      "Current component state",
      "Active incidents and maintenance",
      "Subscriptions and timestamps",
      "Public operational history",
    ],
  },
];

export default function SourceOfTruthBoundary() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Source-of-truth boundary
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-9 text-white sm:text-3xl">
            Current operational state belongs on System Status.
          </h2>

        </div>

        {/* Ownership Split */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

          {columns.map((column) => (
            <div
              key={column.title}
              className={`flex flex-col rounded-2xl border px-6 pb-6 pt-10 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] ${column.accent}`}
            >

              <h3 className="text-base font-bold leading-6 text-white">
                {column.title}
              </h3>

              <ul className="mt-3 flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        <p className="mt-6 text-center text-xs font-normal leading-5 text-slate-400">
          If live status cannot be reached, we state that current status cannot
          be confirmed. A cached &quot;operational&quot; is never shown as
          current, and the absence of a visible incident feed never implies all
          systems are healthy.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/system-status"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
          >
            Open System Status
          </Link>
        </div>

      </div>
    </section>
  );
}
