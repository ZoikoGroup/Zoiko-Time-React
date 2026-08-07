const sources = [
  {
    source: "Mobile app",
    captures: "Clock-in/out, break events, source timestamp",
    dependency: "Grace window, geofence rules where configured",
  },
  {
    source: "Desktop / web",
    captures: "Clock-in/out and approved manual entries",
    dependency: "Approval requirements for manual entry",
  },
  {
    source: "Kiosk / terminal",
    captures: "Shared-device clock events with identity check",
    dependency: "Identity verification method configured per site",
  },
  {
    source: "Scheduling integration",
    captures: "Expected shift start/end for comparison",
    dependency: "Schedule source and sync freshness",
  },
];

export default function SourceContext() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Source &amp; Policy Context
          </p>
          <h2 className="mx-auto mt-3 max-w-[740px] text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Where a shift event comes from — and what governs it
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[22%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Source
                  </th>
                  <th className="w-[39%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Captures
                  </th>
                  <th className="w-[39%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Policy dependency
                  </th>
                </tr>
              </thead>

              <tbody>
                {sources.map(({ source, captures, dependency }, index) => (
                  <tr
                    key={source}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-gray-50 dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-xs font-bold leading-5 text-slate-800 dark:text-white">
                      {source}
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {captures}
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {dependency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
