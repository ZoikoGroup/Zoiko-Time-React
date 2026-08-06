import { FiCheck } from "react-icons/fi";

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
    color: "bg-amber-500/10 text-amber-300 border border-amber-400/20",
  },
  {
    item: "Data gap",
    reason: "Attendance feed stale — 41h vs 24h expected",
    owner: "Data admin",
    status: "Stale",
    color: "bg-orange-500/10 text-orange-300 border border-orange-400/20",
  },
  {
    item: "Report owner missing",
    reason: "Regional readiness report unassigned",
    owner: "Unassigned",
    status: "Needs owner",
    color: "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20",
  },
  {
    item: "Schedule failure",
    reason: "Run held — recipient eligibility revoked",
    owner: "Report author",
    status: "Held, not sent",
    color: "bg-red-500/10 text-red-300 border border-red-400/20",
  },
  {
    item: "Export approval",
    reason: "Payroll readiness export awaiting authority",
    owner: "Privacy reviewer",
    status: "Pending",
    color: "bg-sky-500/10 text-sky-300 border border-sky-400/20",
  },
  {
    item: "Recalculation pending",
    reason: "Correction batch C-2211 affects 3 reports",
    owner: "System",
    status: "Recalculating",
    color: "bg-blue-500/10 text-blue-300 border border-blue-400/20",
  },
];

export default function AnalyticsGovernanceCenter() {
  return (
    <section className="bg-slate-950 py-10 sm:py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 sm:text-xs">
              Analytics Governance Center
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Quality, Privacy,
              <br />
              and Provenance
              <br />
              Sit Next to
              <br />
              the Number
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Governance is not a settings page you visit once. Freshness,
              completeness, metric version, suppression state, and export
              approval appear alongside every result.
            </p>

            <div className="mt-8 space-y-5">
              {governanceItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-500/20 p-1">
                    <FiCheck className="h-4 w-4 text-emerald-400" />
                  </div>

                  <p className="text-sm leading-7 text-white sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <span
                  key={tab}
                  className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 sm:px-4 sm:text-sm"
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              KPI Row — Counts, not a composite score
            </p>

            {/* KPI Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[10px] uppercase tracking-wide text-slate-400 sm:text-xs">
                    {kpi.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {kpi.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="overflow-x-auto">
                <table className="min-w-[700px] w-full">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs uppercase text-slate-400">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase text-slate-400">
                        Reason
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase text-slate-400">
                        Owner
                      </th>
                      <th className="px-4 py-3 text-left text-xs uppercase text-slate-400">
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
                        <td className="px-4 py-5 text-sm font-semibold text-white">
                          {row.item}
                        </td>

                        <td className="px-4 py-5 text-sm text-slate-300">
                          {row.reason}
                        </td>

                        <td className="px-4 py-5 text-sm text-slate-300">
                          {row.owner}
                        </td>

                        <td className="px-4 py-5">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${row.color}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-white/10 px-4 py-4">
                <p className="text-xs leading-6 text-slate-400">
                  Attention queue, synthetic. Every item is a workflow condition
                  with an owner—never a judgment about a person.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              The mockup is implementation-aware but implies no metric family,
              data scale, accuracy, freshness, prediction, format, provider,
              region, plan, or customer outcome.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}