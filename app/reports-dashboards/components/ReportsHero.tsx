import Image from "next/image";
import Link from "next/link";

import { poppins } from "../fonts";

const metaItems = [
  { label: "Org:", value: "Northfield Logistics" },
  { label: "Unit:", value: "All warehouses" },
  { label: "Period:", value: "Aug 1–7, 2026" },
  { label: "Time zone:", value: "Display: America/Los_Angeles" },
  { label: "Definitions:", value: "v3.2" },
];

const stats = [
  { value: "4,812", label: "Records in scope" },
  { value: "4,390", label: "Complete" },
  { value: "211", label: "Needs review" },
  { value: "4,180", label: "Approved" },
  { value: "3,962", label: "Released" },
  { value: "14", label: "Reconciliation difference" },
];

const statusRows = [
  {
    label: "Workflow status",
    value: "211 in review",
    tone: "bg-orange-100 text-yellow-600",
  },
  { label: "Source health", value: "Current", tone: "bg-emerald-50 text-emerald-600" },
  { label: "Release readiness", value: "Ready", tone: "bg-indigo-50 text-blue-600" },
  {
    label: "Export / delivery",
    value: "Delivered · 8:02 AM",
    tone: "bg-emerald-50 text-emerald-600",
  },
  { label: "Annotations", value: "2 open · 5 resolved", tone: "" },
];

const guarantees = [
  { icon: "/reports-dashboards/icon-definition.svg", label: "Every number carries a definition" },
  { icon: "/reports-dashboards/icon-no-scoring.svg", label: "No worker scoring or ranking" },
  { icon: "/reports-dashboards/icon-scoped-access.svg", label: "Scoped access, purpose-limited" },
  { icon: "/reports-dashboards/icon-governed-export.svg", label: "Governed export, not a log dump" },
];

export default function ReportsHero() {
  return (
    <section className="bg-gradient-to-b from-[#0A1626] via-[#0C1D30] to-[#102A45] pb-16">
      <div className="mx-auto w-full max-w-[1240px] px-6 pt-20 lg:px-9 lg:pt-28">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3.5">
          <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-400" />

          <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
            Reports &amp; Dashboards
          </span>
        </div>

        {/* Heading */}
        <h1
          className={`${poppins.className} mx-auto mt-5 max-w-[820px] text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl`}
        >
          See the health of workforce records
          <br className="hidden lg:block" /> without scoring people.
        </h1>

        <p className="mx-auto mt-6 max-w-[780px] text-center text-base leading-6 text-slate-400">
          Organization-level views of record health, workflow status, source
          quality, and release readiness — every number carries its definition,
          version, and limitations. Governed outputs, not a leaderboard.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/start-free"
            className="inline-flex h-11 w-full items-center justify-center rounded-full bg-teal-500 px-7 text-sm font-semibold text-white transition hover:bg-teal-400 sm:w-auto"
          >
            Start Free
          </Link>

          <Link
            href="/request-enterprise-demo"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/how-zoikotime-works"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            See How ZoikoTime Works
          </Link>
        </div>

        {/* Dashboard preview */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white">

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-gray-100 px-6 py-4">
            {metaItems.map((item) => (
              <p key={item.label} className="text-xs text-slate-500">
                {item.label}{" "}
                <span className="font-bold text-sky-950">{item.value}</span>
              </p>
            ))}

            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
              ✓ Data current through 3:00 PM local
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-bold text-blue-600">
              <Image
                src="/reports-dashboards/icon-privacy-lock.svg"
                alt=""
                width={11}
                height={11}
                aria-hidden="true"
              />
              Privacy thresholds applied
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 border-b border-gray-100 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 py-5 ${
                  index > 0 ? "lg:border-l lg:border-gray-100" : ""
                }`}
              >
                <p className={`${poppins.className} text-2xl font-bold text-sky-950`}>
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trend + status */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px]">

            {/* Trend */}
            <div className="px-6 py-6">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Record health trend — 7 days
              </p>

              <svg
                viewBox="0 0 650 110"
                preserveAspectRatio="none"
                className="mt-6 h-[110px] w-full"
                role="img"
                aria-label="Seven-day trend of completion rate rising and needs-review rate holding flat"
              >
                <polyline
                  points="0,88 93,84 186,90 279,62 372,70 465,44 558,48 650,26"
                  fill="none"
                  stroke="#12B886"
                  strokeWidth="3"
                />

                <polyline
                  points="0,100 93,99 186,101 279,97 372,95 465,97 558,99 650,98"
                  fill="none"
                  stroke="#E4E9ED"
                  strokeWidth="3"
                />
              </svg>

              <div className="mt-4 flex flex-wrap items-center gap-5">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Completion rate
                </span>

                <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-gray-200" />
                  Needs-review rate
                </span>
              </div>
            </div>

            {/* Status list */}
            <div className="border-t border-gray-100 px-6 py-2 lg:border-l lg:border-t-0">
              {statusRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 py-4 ${
                    index > 0 ? "border-t border-gray-100" : ""
                  }`}
                >
                  <span className="text-sm text-slate-600">{row.label}</span>

                  {row.tone ? (
                    <span
                      className={`rounded-md px-2.5 py-1 text-xs font-bold ${row.tone}`}
                    >
                      {row.value}
                    </span>
                  ) : (
                    <span className="text-sm text-sky-950">{row.value}</span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Guarantee strip */}
      <div className="mt-16 border-y border-white/10 bg-black/25">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5">
          {guarantees.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 text-xs text-white/70"
            >
              <Image
                src={item.icon}
                alt=""
                width={13}
                height={13}
                aria-hidden="true"
              />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
