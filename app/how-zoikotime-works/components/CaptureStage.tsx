import Link from "next/link";

export default function CaptureStage() {
  const signalCategories = [
    "Time entry",
    "Clock event",
    "Attendance state",
    "Shift reference",
    "Approval action",
    "Policy assignment",
    "Jurisdiction context",
    "Worker correction",
    "Integration event",
    "Admin action",
  ];

  const provenanceRows = [
    {
      signal: "Clock event",
      source: "Web app",
      time: "09:00 UTC",
      status: "Validated",
      statusClass:
        "bg-emerald-50 text-teal-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    },
    {
      signal: "Attendance",
      source: "Schedule ref",
      time: "09:00 UTC",
      status: "Received",
      statusClass:
        "bg-emerald-50 text-teal-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    },
    {
      signal: "Approval action",
      source: "Reviewer",
      time: "17:40 UTC",
      status: "Received",
      statusClass:
        "bg-indigo-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    },
    {
      signal: "Integration event",
      source: "HRIS",
      time: "18:02 UTC",
      status: "Late",
      statusClass:
        "bg-orange-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300",
    },
    {
      signal: "Missing exit",
      source: "—",
      time: "—",
      status: "Incomplete",
      statusClass:
        "bg-rose-50 text-red-700 dark:bg-red-500/10 dark:text-red-300",
    },
  ];

  const signalsUsed = [
    "Documented time & clock events",
    "Attendance & schedule references",
    "Approval actions",
    "Policy & jurisdiction context",
    "Approved integration events",
  ];

  const neverCollected = [
    "Screenshots",
    "Keystroke content",
    "URL / browsing history",
    "Application-name monitoring",
    "Clipboard content",
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        {/* Top Section */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 shadow dark:bg-emerald-500/10">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-600 text-xs font-bold text-white">
                1
              </div>

              <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                Capture
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
              Stage 1
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Capture documented workforce signals—not worker activity
              surveillance.
            </p>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Approved signal categories
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {signalCategories.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/time-tracking"
                className="inline-flex items-center justify-center rounded-[10px] border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
              >
                Explore Time Tracking
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between bg-slate-800 px-5 py-3">
              <h3 className="text-sm font-semibold text-white">
                Source intake &amp; record provenance
              </h3>

              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                Synthetic data
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Signal
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Source
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Time · Zone
                    </th>

                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      State
                    </th>
                  </tr>
                </thead>

                <tbody>

                                      {provenanceRows.map((row) => (
                    <tr
                      key={row.signal}
                      className="border-b border-slate-200 dark:border-slate-700"
                    >
                      <td className="px-5 py-4 text-sm text-slate-800 dark:text-slate-200">
                        {row.signal}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.source}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.time}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${row.statusClass}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-slate-200 px-5 py-4 dark:border-slate-700">
              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                Provenance kept per signal: source, actor/service identity,
                organization, worker, timestamp, time zone, validation, version.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Comparison */}
        <div className="text-center">
          <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
            What Capture uses — and what it never collects:
          </p>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 lg:grid-cols-2">
            {/* Signals Used */}
            <div>
              <div className="bg-teal-600 px-6 py-4">
                <h3 className="text-lg font-bold text-white">
                  Signals used
                </h3>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {signalsUsed.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-6 py-4"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-500/10">
                      <svg
                        className="h-3 w-3 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Never Collected */}
            <div className="border-t border-slate-200 dark:border-slate-700 lg:border-l lg:border-t-0">
              <div className="bg-slate-800 px-6 py-4">
                <h3 className="text-lg font-bold text-white">
                  Never collected
                </h3>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {neverCollected.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-6 py-4"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10">
                      <svg
                        className="h-3 w-3 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}