import React from "react";

export default function CustodyRecord() {
  const rows = [
    {
      color: "bg-teal-600",
      event: "Evidence Object Created",
      actor: "SYS-ENGINE",
      role: "ZoikoTime Evidence Engine",
      time: "2026-03-18 14:32:07",
      status: "✓ Hash set",
    },
    {
      color: "bg-indigo-500",
      event: "Accessed — HR Review",
      actor: "USR-HR-0092",
      role: "HR Manager — Read only",
      time: "2026-03-19 09:04:31",
      status: "✓ Verified",
    },
    {
      color: "bg-emerald-600",
      event: "Integrity Verification",
      actor: "SYS-ENGINE",
      role: "Automated integrity check",
      time: "2026-03-19 09:04:32",
      status: "✓ No change",
    },
    {
      color: "bg-amber-500",
      event: "Export — Legal Package",
      actor: "USR-GC-0014",
      role: "General Counsel — Authorised",
      time: "2026-03-24 09:14:52",
      status: "✓ Sealed",
    },
    {
      color: "bg-emerald-600",
      event: "Integrity Verification",
      actor: "SYS-ENGINE",
      role: "Pre-export integrity check",
      time: "2026-03-24 09:14:53",
      status: "✓ Intact",
    },
  ];

  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-14 md:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-teal-600"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              Chain of Custody
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            A Complete, Verifiable Record Lifecycle
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-7 text-slate-500 dark:text-slate-400">
            Every evidence record has a complete lifecycle—from creation through
            every access, transfer, and retrieval—meeting forensic
            investigation standards at every step.
          </p>
        </div>

        {/* Table */}
        <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white">
              Chain of Custody — Evidence Record
            </h3>

            <span className="px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-xs font-mono text-teal-700 dark:text-emerald-300">
              EV-2026-00441
            </span>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr className="text-left text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <th className="px-6 py-4">Event</th>
                  <th className="px-6 py-4">Actor</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Integrity</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-sm ${row.color}`} />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {row.event}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      {row.actor}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                      {row.role}
                    </td>

                    <td className="px-6 py-4 text-xs font-mono text-slate-700 dark:text-slate-300">
                      {row.time}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-emerald-300">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-slate-200 dark:divide-slate-700">
            {rows.map((row, index) => (
              <div key={index} className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-sm ${row.color}`} />
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {row.event}
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Actor:</span> {row.actor}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Role:</span> {row.role}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300">
                    <span className="font-semibold">Time:</span> {row.time}
                  </p>

                  <div>
                    <span className="inline-block rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-emerald-300">
                      {row.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border-t border-teal-200 dark:border-teal-800 px-6 py-4">
            <p className="text-sm font-semibold text-teal-700 dark:text-emerald-300">
              🔐 Chain of Custody intact — 5 events recorded — 0 integrity
              violations — Record meets forensic investigation standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}