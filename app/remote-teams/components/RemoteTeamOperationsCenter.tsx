"use client";

const stats = [
  { value: "18", label: "Teams covered" },
  { value: "92%", label: "Service windows ready" },
  { value: "7", label: "Handoffs awaiting ack." },
  { value: "1,046", label: "Approved time ready" },
  { value: "11", label: "Open exceptions" },
  { value: "3", label: "Boundary conflicts" },
];

export default function RemoteTeamOperationsCenter() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-400">
              PRODUCT PROOF
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            The Remote Team Operations
            <br />
            Center
          </h2>

          <p className="text-base leading-7 text-gray-500 dark:text-slate-400">
            Scan local workdays, coverage, handoffs, approved time, and
            exceptions — at team level, never as an individual score.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-14 rounded-3xl bg-slate-900 p-6 shadow-2xl lg:p-9">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center"
              >
                <h3 className="text-2xl font-extrabold text-white">
                  {item.value}
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Coverage Table */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                      {/* Support EMEA */}
            <div className="flex flex-col gap-4 py-3 md:flex-row md:items-center">
              <div className="w-full md:w-32">
                <h4 className="text-xs font-semibold text-white">
                  Support EMEA
                </h4>
                <p className="mt-1 text-xs text-white/40">
                  UTC+1 · UTC+3
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4">
                <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-white/5">
                  <div className="h-full w-[82%] rounded-md bg-gradient-to-r from-emerald-700 to-emerald-300" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                  Ready
                </span>
              </div>
            </div>

            {/* Platform APAC */}
            <div className="flex flex-col gap-4 border-t border-white/10 py-3 md:flex-row md:items-center">
              <div className="w-full md:w-32">
                <h4 className="text-xs font-semibold text-white">
                  Platform APAC
                </h4>
                <p className="mt-1 text-xs text-white/40">
                  UTC+7 · UTC+8
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4">
                <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-white/5">
                  <div className="h-full w-[56%] rounded-md bg-gradient-to-r from-yellow-700 to-orange-400" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                  Partial
                </span>
              </div>
            </div>

            {/* Success Americas */}
            <div className="flex flex-col gap-4 border-t border-white/10 py-3 md:flex-row md:items-center">
              <div className="w-full md:w-32">
                <h4 className="text-xs font-semibold text-white">
                  Success Americas
                </h4>
                <p className="mt-1 text-xs text-white/40">
                  UTC-6 · UTC-3
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4">
                <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-white/5">
                  <div className="h-full w-[76%] rounded-md bg-gradient-to-r from-emerald-700 to-emerald-300" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                  Ready
                </span>
              </div>
            </div>

            {/* Ops Nairobi */}
            <div className="flex flex-col gap-4 border-t border-white/10 py-3 md:flex-row md:items-center">
              <div className="w-full md:w-32">
                <h4 className="text-xs font-semibold text-white">
                  Ops Nairobi
                </h4>
                <p className="mt-1 text-xs text-white/40">
                  UTC+3
                </p>
              </div>

              <div className="flex flex-1 items-center gap-4">
                <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-white/5">
                  <div className="h-full w-[34%] rounded-md bg-gradient-to-r from-red-800 to-red-400" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wide text-white">
                  Gap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}