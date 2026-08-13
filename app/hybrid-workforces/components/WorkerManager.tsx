"use client";

const workerRows = [
  ["Work context", "Remote (declared)"],
  ["Schedule", "09:00–17:30 · hybrid"],
  ["Recorded", "Start 09:02 · break 45m"],
  ["Policy applied", "hybrid_break v3"],
  ["Why pending", "Missing stop event"],
];

const managerRows = [
  ["Missing stop · Remote", "Pending review", "warning"],
  ["Break overlap · Office", "Context requested", "info"],
  ["Late sync · Field", "Sync pending", "neutral"],
  ["Project switch · Remote", "Ready to approve", "success"],
];

function StatusBadge({
  children,
  type = "warning",
}: {
  children: React.ReactNode;
  type?: "warning" | "info" | "neutral" | "success";
}) {
  const styles = {
    warning:
      "bg-orange-100 text-yellow-700 dark:bg-orange-500/15 dark:text-orange-300",
    info: "bg-indigo-50 text-blue-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    neutral:
      "bg-zinc-100 text-gray-500 dark:bg-zinc-700/50 dark:text-zinc-300",
    success:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2 py-1 text-[9.5px] font-bold leading-3 ${styles[type]}`}
    >
      {children}
    </span>
  );
}

function ActionButton({
  children,
  primary = false,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className={
        primary
          ? "inline-flex min-h-9 items-center justify-center rounded-lg bg-[#3FB97A] px-3 text-xs font-semibold text-white transition hover:bg-[#35A96D]"
          : "inline-flex min-h-9 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 text-xs font-semibold text-slate-800 transition hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
      }
    >
      {children}
    </button>
  );
}

export default function WorkerManager() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Worker & Manager Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            The same truth, from both sides
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Workers see and can correct their own records; managers resolve
            exceptions and approve — with no productivity score in sight.
          </p>
        </div>

        {/* Panels */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Worker panel */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]">
            {/* Header */}
            <div className="flex min-h-11 items-center justify-between gap-3 bg-slate-800 px-4">
              <span className="text-xs font-semibold text-white">
                My record · Aug 11
              </span>

              <StatusBadge>Pending review</StatusBadge>
            </div>

            <div className="p-4 sm:p-[17px]">
              {/* Record rows */}
              <div>
                {workerRows.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid min-h-9 grid-cols-[105px_1fr] items-center border-b border-slate-200 dark:border-slate-700 sm:grid-cols-[105px_1fr]"
                  >
                    <span className="text-xs text-gray-500 dark:text-slate-400">
                      {label}
                    </span>

                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <ActionButton primary>Add context</ActionButton>

                <ActionButton>Request correction</ActionButton>
              </div>

              {/* Information */}
              <div className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 dark:border-emerald-900/50 dark:bg-emerald-500/10">
                <p className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                  You can see everything recorded, what is{" "}
                  <strong>not</strong> collected, and how to request a
                  correction.
                </p>
              </div>
            </div>
          </div>

          {/* Manager panel */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]">
            {/* Header */}
            <div className="flex min-h-11 items-center justify-between gap-3 bg-slate-800 px-4">
              <span className="text-xs font-semibold text-white">
                Manager queue
              </span>

              <StatusBadge type="info">You own 4</StatusBadge>
            </div>

            <div className="p-4 sm:p-[17px]">
              {/* Queue */}
              <div>
                {managerRows.map(([label, status, type]) => (
                  <div
                    key={label}
                    className="flex min-h-10 items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700"
                  >
                    <span className="min-w-0 text-xs text-gray-700 dark:text-slate-300">
                      {label}
                    </span>

                    <StatusBadge
                      type={
                        type as
                          | "warning"
                          | "info"
                          | "neutral"
                          | "success"
                      }
                    >
                      {status}
                    </StatusBadge>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <ActionButton primary>Approve in scope</ActionButton>

                <ActionButton>Return with reason</ActionButton>
              </div>

              {/* Information */}
              <div className="mt-5 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 dark:border-emerald-900/50 dark:bg-emerald-500/10">
                <p className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                  Approvals, exceptions & ownership — with <strong>no</strong>{" "}
                  individual productivity score or leaderboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}