"use client";

import { FiCheck } from "react-icons/fi";
import Link from "next/link";

const governanceItems = [
  "Data quality — source status, freshness, exclusions, correction lag, reconciliation, owner",
  "Metric governance — version, effective date, last review, pending change, impacted reports",
  "Privacy and access — default aggregation, minimum group, suppression, drill-down permission",
  "Evidence — last published report, export manifest, calculation record, correction lineage",
];

const tabs = [
  "Overview",
  "Executive Views",
  "Metric Catalog",
  "Dashboards",
  "Reports",
  "Data Quality",
  "Anomaly Review",
  "Exports",
  "Schedules",
  "Evidence",
];

const kpis = [
  { label: "Approved records", value: "18.4k" },
  { label: "Completeness", value: "96.4%" },
  { label: "Pending corrections", value: "27" },
  { label: "Open exceptions", value: "38" },
  { label: "Reports due", value: "5" },
  { label: "Stale definitions", value: "2" },
  { label: "Export reviews", value: "3" },
  { label: "Access reviews", value: "1" },
];

const queue = [
  {
    item: "Definition review",
    reason: "MT-014 review overdue by 12 days",
    owner: "Analytics admin",
    status: "Needs review",
    color:
      "bg-amber-500/10 text-amber-300 border border-amber-400/20",
  },
  {
    item: "Data gap",
    reason: "Attendance feed stale — 41h vs 24h expected",
    owner: "Data admin",
    status: "Stale",
    color:
      "bg-orange-500/10 text-orange-300 border border-orange-400/20",
  },
  {
    item: "Report owner missing",
    reason: "Regional readiness report unassigned",
    owner: "Unassigned",
    status: "Needs owner",
    color:
      "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20",
  },
  {
    item: "Schedule failure",
    reason: "Run held — recipient eligibility revoked",
    owner: "Report author",
    status: "Held, not sent",
    color:
      "bg-red-500/10 text-red-300 border border-red-400/20",
  },
  {
    item: "Export approval",
    reason: "Payroll readiness export awaiting authority",
    owner: "Privacy reviewer",
    status: "Pending",
    color:
      "bg-sky-500/10 text-sky-300 border border-sky-400/20",
  },
  {
    item: "Recalculation pending",
    reason: "Correction batch C-2211 affects 3 reports",
    owner: "System",
    status: "Recalculating",
    color:
      "bg-blue-500/10 text-blue-300 border border-blue-400/20",
  },
];

export default function AnalyticsGovernanceCenter() {
  return (
    <section
    id="analytics-governance-center"
     className="w-full bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Main responsive layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16 xl:gap-20">
          
          {/* ================= LEFT ================= */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400 sm:text-xs sm:tracking-[0.25em]">
              Analytics Governance Center
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[42px] lg:text-5xl xl:text-[52px]">
              Quality, Privacy,
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              and Provenance
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Sit Next to
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              the Number
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
              Governance is not a settings page you visit once. Freshness,
              completeness, metric version, suppression state, and export
              approval appear alongside every result.
            </p>

            {/* Governance items */}
            <div className="mt-7 space-y-5 sm:mt-8">
              {governanceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex shrink-0 items-center justify-center rounded-full bg-emerald-500/20 p-1">
                    <FiCheck className="h-3.5 w-3.5 text-emerald-400 sm:h-4 sm:w-4" />
                  </div>

                  <p className="min-w-0 text-sm leading-7 text-white sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300 sm:px-4 sm:py-2 sm:text-xs md:text-sm"
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs sm:tracking-[0.25em]">
              KPI Row — Counts, not a composite score
            </p>

            {/* KPI Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 md:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="min-w-0 rounded-xl border border-white/10 bg-white/5 p-3.5 sm:p-4"
                >
                  <p className="truncate text-[9px] uppercase tracking-wide text-slate-400 sm:text-[10px] sm:text-xs">
                    {kpi.label}
                  </p>

                  <h3 className="mt-1.5 text-lg font-bold text-white sm:mt-2 sm:text-xl md:text-2xl">
                    {kpi.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:mt-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px]">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:px-5 sm:text-xs">
                        Item
                      </th>

                      <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:px-5 sm:text-xs">
                        Reason
                      </th>

                      <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:px-5 sm:text-xs">
                        Owner
                      </th>

                      <th className="whitespace-nowrap px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:px-5 sm:text-xs">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {queue.map((row) => (
                      <tr
                        key={row.item}
                        className="border-b border-white/10 last:border-none"
                      >
                        <td className="px-4 py-4 text-xs font-semibold text-white sm:px-5 sm:py-5 sm:text-sm">
                          {row.item}
                        </td>

                        <td className="px-4 py-4 text-xs leading-5 text-slate-300 sm:px-5 sm:py-5 sm:text-sm">
                          {row.reason}
                        </td>

                        <td className="px-4 py-4 text-xs text-slate-300 sm:px-5 sm:py-5 sm:text-sm">
                          {row.owner}
                        </td>

                        <td className="px-4 py-4 sm:px-5 sm:py-5">
                          <span
                            className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold sm:px-3 sm:text-xs ${row.color}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table note */}
              <div className="border-t border-white/10 px-4 py-3.5 sm:px-5 sm:py-4">
                <p className="text-[11px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                  Attention queue, synthetic. Every item is a workflow
                  condition with an owner—never a judgment about a person.
                </p>
              </div>
            </div>

            <p className="mt-5 text-[10px] leading-5 text-slate-500 sm:mt-6 sm:text-xs sm:leading-6">
              The mockup is implementation-aware but implies no metric
              family, data scale, accuracy, freshness, prediction, format,
              provider, region, plan, or customer outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}