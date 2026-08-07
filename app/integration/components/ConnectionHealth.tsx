import React from "react";

const statuses = [
  { label: "Not connected", color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
  { label: "Setup", color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
  { label: "Testing", color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
  { label: "Active", color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
  { label: "Paused", color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
  { label: "Degraded", color: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
  { label: "Failed", color: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300" },
  { label: "Review due", color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
  { label: "Retiring", color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
];

export default function ConnectionHealth() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_520px] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Connection Health & Change History
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Nine Statuses, Each With
              <br className="hidden sm:block" />
              a Definition and an Owner
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
              Freshness shows an exact timestamp and time zone with its source.
              We do not write <strong>"live"</strong> or{" "}
              <strong>"real-time"</strong> unless evidence supports it.
            </p>

            {/* STATUS CHIPS */}
            <div className="mt-8 flex flex-wrap gap-3">
              {statuses.map((status) => (
                <span
                  key={status.label}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${status.color}`}
                >
                  {status.label}
                </span>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                The timeline records authorization, testing, activation,
                mapping changes, policy changes, permission updates,
                context-category changes, pause/resume events, retries,
                reconciliation, support events, and retirement.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Every history record keeps before and after values, actor or
                service identity, role, reason, approver, effective date,
                version, and linked test results.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Health Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Health Cards
              </h3>

              <ul className="mt-5 space-y-4">
                {[
                  "Active mappings and approved categories",
                  "Last successful exchange or test",
                  "Queued items and exceptions",
                  "Policy review due and notice status",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Placeholder */}
           {/* Mapping Health Table */}
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
    Mapping Health Table
  </h3>

  <ul className="mt-5 space-y-4">
    {[
      "Workspace and destination",
      "Configuration version and current status",
      "Last attempted and last successful activity",
      "Exception count, owner and next review",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

        <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>

{/* Alerts */}
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
    Alerts
  </h3>

  <ul className="mt-5 space-y-4">
    {[
      "Severity, affected scope and first observed",
      "Current impact, owner and remediation",
      "Update time, status and support reference",
    ].map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

        <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
          {item}
        </span>
      </li>
    ))}
  </ul>

  <div className="mt-6 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
      No worker-level exposure in any alert.
    </p>
  </div>
</div>

{/* Freshness Honesty */}
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
    Freshness Honesty
  </h3>

  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
    An exact timestamp with time zone and source is more useful than a green
    dot labelled <strong>"live"</strong>. If the last successful exchange
    happened 41 hours ago, that is exactly what the panel reports.
  </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
