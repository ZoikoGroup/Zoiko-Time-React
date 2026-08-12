"use client";

import Link from "next/link";

const stats = [
  { label: "Records ready", value: "94%" },
  { label: "Pending review", value: "6" },
  { label: "Exceptions", value: "3" },
  { label: "Sync pending", value: "2" },
];

const rows = [
  {
    team: "Design team",
    context: "Office",
    contextType: "office",
    status: "On schedule",
    state: "Records ready",
    stateType: "success",
  },
  {
    team: "Support (remote)",
    context: "Remote",
    contextType: "remote",
    status: "2 pending",
    state: "Pending review",
    stateType: "warning",
  },
  {
    team: "Field ops",
    context: "Field",
    contextType: "field",
    status: "Sync pending",
    state: "Sync pending",
    stateType: "info",
  },
  {
    team: "Finance",
    context: "Office",
    contextType: "office",
    status: "Complete",
    state: "Approved",
    stateType: "success",
  },
  {
    team: "Contractors",
    context: "Remote",
    contextType: "remote",
    status: "1 exception",
    state: "Context requested",
    stateType: "warning",
  },
];

function ContextBadge({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    office:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    remote:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    field:
      "bg-violet-100 text-indigo-700 dark:bg-violet-500/15 dark:text-violet-300",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-bold ${
        styles[type] || styles.office
      }`}
    >
      {children}
    </span>
  );
}

function StateBadge({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    success:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    warning:
      "bg-orange-100 text-yellow-700 dark:bg-orange-500/15 dark:text-orange-300",
    info:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${
        styles[type] || styles.info
      }`}
    >
      {children}
    </span>
  );
}

export default function HybridCommand() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 text-slate-800 transition-colors dark:bg-slate-950 dark:text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Product Proof
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl lg:text-[40px]">
            The Hybrid Workforce Command Center
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Aggregated operations, exceptions, and worker transparency across
            office, remote, and field — never a live worker map.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mx-auto mt-12 max-w-[1080px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] sm:mt-14">
          {/* Browser bar */}
          <div className="flex h-11 items-center gap-2 bg-slate-800 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />

            <span className="ml-2 truncate text-xs font-medium text-white/90">
              ZoikoTime · Hybrid Workforce Command Center
            </span>
          </div>

          <div className="p-4 sm:p-5 lg:p-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[10px] border border-slate-200 bg-gray-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/70"
                >
                  <p className="text-[9px] font-normal uppercase tracking-tight text-gray-500 dark:text-slate-400">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-lg font-extrabold leading-7 text-slate-800 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="mt-7 overflow-x-auto">
              <div className="min-w-[760px]">
                {/* Header */}
                <div className="grid grid-cols-[1.25fr_1fr_1fr_1.25fr] border-b border-slate-200 dark:border-slate-700">
                  {["Team", "Work context", "Status", "State"].map((item) => (
                    <div
                      key={item}
                      className="px-2 py-2 text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:text-slate-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {rows.map((row) => (
                  <div
                    key={row.team}
                    className="grid grid-cols-[1.25fr_1fr_1fr_1.25fr] border-b border-slate-200 last:border-b-0 dark:border-slate-700"
                  >
                    <div className="flex min-h-9 items-center px-2 py-2 text-xs text-slate-800 dark:text-slate-200">
                      {row.team}
                    </div>

                    <div className="flex min-h-9 items-center px-2 py-2">
                      <ContextBadge type={row.contextType}>
                        {row.context}
                      </ContextBadge>
                    </div>

                    <div className="flex min-h-9 items-center px-2 py-2 text-xs text-slate-800 dark:text-slate-200">
                      {row.status}
                    </div>

                    <div className="flex min-h-9 items-center px-2 py-2">
                      <StateBadge type={row.stateType}>
                        {row.state}
                      </StateBadge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="mt-5 text-[10px] leading-4 text-gray-500 dark:text-slate-400">
              Aggregated operations and exceptions — not worker surveillance.
              Work context is declared/configured and worker-visible. No
              location map, no productivity score. Synthetic data.
            </p>
          </div>
        </div>

       {/* CTA */}
<div className="mt-10 flex justify-center sm:mt-12">
  <Link
    href="/request-enterprise-demo"
    className="
      inline-flex
      min-h-11
      w-full
      max-w-[240px]
      items-center
      justify-center
      rounded-[10px]
      bg-[#3FB97A]
      px-6
      text-center
      text-sm
      font-semibold
      text-white
      shadow-[0_6px_16px_rgba(63,185,122,0.28)]
      transition
      hover:bg-[#35A96D]
      focus:outline-none
      focus:ring-2
      focus:ring-[#3FB97A]
      focus:ring-offset-2
      dark:focus:ring-offset-slate-950
      sm:text-base
    "
  >
    Request Enterprise Demo
  </Link>
</div>
      </div>
    </section>
  );
}