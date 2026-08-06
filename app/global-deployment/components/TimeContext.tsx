import Image from "next/image";

const controls = [
  {
    term: "Authoritative zone",
    detail:
      "approved identifier, scope, source, version. Human labels and offsets are contextual only.",
  },
  {
    term: "DST transitions",
    detail:
      "spring-forward, fall-back, non-hour changes, ambiguous and skipped local times, overnight shifts, historical rule changes.",
  },
  {
    term: "Reference contexts",
    detail:
      "worker, location, organization, policy, integration, export, and report precedence, with differences shown.",
  },
  {
    term: "Cutover",
    detail:
      "activation instant, local interpretation, period boundary, historical records, rollback.",
  },
  {
    term: "Calendar and workweek",
    detail:
      "versioned week start, holidays, working days, local date, period boundary, exception ownership.",
  },
  {
    term: "Exports",
    detail:
      "carry timestamp, time-zone context, mapping version, and acknowledgement per the approved contract.",
  },
  {
    term: "Corrections",
    detail:
      "preserve original and corrected values, reason, authority, affected outputs, recalculation, evidence.",
  },
];

export default function TimeContext() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
              Time Zones, DST &amp; Calendar Integrity
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Time Context Is a Record-Integrity Control
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Time is where distributed workforce records quietly break. Every
              zone, transition, and calendar convention is versioned, tested,
              and explicitly owned.
            </p>

            {/* Control List */}
            <ul className="mt-6 flex flex-col gap-3">

              {controls.map((control) => (
                <li key={control.term} className="flex gap-3">

                  <span
                    className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                    aria-hidden="true"
                  />

                  <p className="text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    <span className="font-bold text-sky-950 dark:text-white">
                      {control.term}
                    </span>{" "}
                    — {control.detail}
                  </p>

                </li>
              ))}

            </ul>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">

            <Image
              src="/global-deployment/Time%20Zones%20DST-Calendar%20Integrity.png"
              alt="Workforce record timeline showing time context, sequence, and integrity checks"
              width={534}
              height={444}
              className="h-auto w-full object-cover"
            />

            {/* Test Gate Callout */}
            <div className="rounded-xl border border-l-[3px] border-sky-800 bg-slate-50 px-6 pb-6 pt-5 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                Test gate
              </p>

              <p className="mt-2 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                No rollout wave passes readiness until the approved time and DST
                scenario suite succeeds — or until every exception is explicitly
                documented, owned, accepted, and visible.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
