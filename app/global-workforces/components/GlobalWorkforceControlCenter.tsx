"use client";

import React from "react";

const filters = [
  { label: "Cycle", value: "Aug 2026" },
  { label: "Entity", value: "All" },
  { label: "Region", value: "All" },
  { label: "Worker type", value: "All" },
  { label: "Status", value: "All" },
  { label: "Approver", value: "All" },
  { label: "Downstream", value: "Payroll" },
];

const kpis = [
  {
    label: "Entities",
    value: "18",
    detail: "across 3 regions",
    detailClass: "text-[#3FB97A]",
  },
  {
    label: "Cycle readiness",
    value: "92%",
    detail: "16 of 18 ready",
    detailClass: "text-[#3FB97A]",
  },
  {
    label: "Pending review",
    value: "7",
    detail: "owners assigned",
    detailClass: "text-yellow-700 dark:text-yellow-400",
  },
  {
    label: "Cutoff risk",
    value: "2",
    detail: "next 24h",
    detailClass: "text-yellow-700 dark:text-yellow-400",
  },
];

const rows = [
  {
    entity: "DE GmbH",
    region: "EMEA",
    localTime: "17:32 CET",
    reportingTime: "11:32 ET",
    readiness: "Ready",
    readinessClass:
      "bg-[#3FB97A]/10 text-[#3FB97A] dark:bg-[#3FB97A]/10 dark:text-[#3FB97A]",
    owner: "R. Diaz",
  },
  {
    entity: "SG Pte",
    region: "APAC",
    localTime: "23:32 SGT",
    reportingTime: "11:32 ET",
    readiness: "In review",
    readinessClass:
      "bg-orange-100 text-yellow-700 dark:bg-orange-400/10 dark:text-yellow-300",
    owner: "L. Chen",
  },
  {
    entity: "US Inc",
    region: "AMER",
    localTime: "11:32 ET",
    reportingTime: "11:32 ET",
    readiness: "Ready",
    readinessClass:
      "bg-[#3FB97A]/10 text-[#3FB97A] dark:bg-[#3FB97A]/10 dark:text-[#3FB97A]",
    owner: "M. Okafor",
  },
  {
    entity: "BR Ltda",
    region: "AMER",
    localTime: "12:32 BRT",
    reportingTime: "11:32 ET",
    readiness: "Cutoff risk",
    readinessClass:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-400/10 dark:text-blue-300",
    owner: "Unassigned",
  },
  {
    entity: "IN Pvt",
    region: "APAC",
    localTime: "21:02 IST",
    reportingTime: "11:32 ET",
    readiness: "Normalizing",
    readinessClass:
      "bg-zinc-100 text-gray-500 dark:bg-slate-700 dark:text-slate-300",
    owner: "A. Rao",
  },
];

export default function GlobalWorkforceControlCenter() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#3FB97A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3FB97A] sm:text-xs">
              Product Proof
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            The Global Workforce Control Center
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            Entities, regions, readiness, review queues, cutoff risk,
            ownership, and export state — one governed view, local time
            preserved.
          </p>
        </div>

        {/* =====================================================
            PRODUCT MOCKUP
        ====================================================== */}
        <div className="mx-auto mt-10 w-full max-w-[1080px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900 sm:mt-12">

          {/* Browser / App Header */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <div className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <div className="h-2.5 w-2.5 rounded-md bg-white/25" />

            <div className="pl-2.5">
              <span className="text-xs font-medium leading-5 text-white/90">
                ZoikoTime · Global Workforce Control Center
              </span>
            </div>
          </div>

          {/* =================================================
              FILTERS
          ================================================== */}
          <div className="flex flex-wrap gap-1.5 border-b border-slate-200 bg-gray-50 px-3 py-3 dark:border-slate-700 dark:bg-slate-800/80 sm:px-4">
            {filters.map((filter) => (
              <div
                key={filter.label}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 dark:border-slate-700 dark:bg-slate-900"
              >
                <span className="text-[10px] font-semibold leading-4 text-gray-500 sm:text-xs dark:text-slate-400">
                  {filter.label}:
                </span>{" "}
                <span className="text-[10px] font-semibold leading-4 text-slate-800 sm:text-xs dark:text-slate-200">
                  {filter.value}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              DASHBOARD CONTENT
          ================================================== */}
          <div className="flex flex-col gap-3 p-3 sm:p-4">

            {/* KPI CARDS */}
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-[10px] border border-slate-200 bg-gray-50 p-3 dark:border-slate-700 dark:bg-slate-800"
                >
                  <p className="text-[9px] uppercase leading-4 tracking-tight text-gray-500 dark:text-slate-400">
                    {kpi.label}
                  </p>

                  <p className="mt-0.5 text-lg font-extrabold leading-8 text-slate-800 dark:text-white">
                    {kpi.value}
                  </p>

                  <p
                    className={`text-[9px] font-semibold leading-4 ${kpi.detailClass}`}
                  >
                    {kpi.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                TABLE
            ================================================== */}
            <div className="pt-1">
              <div className="overflow-x-auto rounded-lg">
                <table className="w-full min-w-[850px] border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Entity
                      </th>

                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Region
                      </th>

                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Local time
                      </th>

                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Reporting time
                      </th>

                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Readiness
                      </th>

                      <th className="border-b border-slate-200 px-2 py-2 text-left text-[9px] font-semibold uppercase tracking-tight text-gray-500 dark:border-slate-700 dark:text-slate-400">
                        Owner
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.entity}>
                        {/* Entity */}
                        <td className="border-b border-slate-200 px-2 py-2 text-xs leading-5 text-slate-800 dark:border-slate-700 dark:text-slate-200">
                          {row.entity}
                        </td>

                        {/* Region */}
                        <td className="border-b border-slate-200 px-2 py-2 dark:border-slate-700">
                          <span className="inline-flex rounded-[5px] bg-[#3FB97A]/10 px-1.5 py-0.5 text-[9px] font-bold leading-4 text-[#3FB97A]">
                            {row.region}
                          </span>
                        </td>

                        {/* Local Time */}
                        <td className="border-b border-slate-200 px-2 py-2 text-xs leading-5 text-slate-800 dark:border-slate-700 dark:text-slate-200">
                          {row.localTime}
                        </td>

                        {/* Reporting Time */}
                        <td className="border-b border-slate-200 px-2 py-2 text-xs leading-5 text-slate-800 dark:border-slate-700 dark:text-slate-200">
                          {row.reportingTime}
                        </td>

                        {/* Readiness */}
                        <td className="border-b border-slate-200 px-2 py-2 dark:border-slate-700">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold leading-4 ${row.readinessClass}`}
                          >
                            {row.readiness}
                          </span>
                        </td>

                        {/* Owner */}
                        <td className="border-b border-slate-200 px-2 py-2 text-xs leading-5 text-slate-800 dark:border-slate-700 dark:text-slate-200">
                          {row.owner}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* =================================================
                FOOTNOTE
            ================================================== */}
            <p className="text-[10px] leading-4 text-gray-500 dark:text-slate-400">
              Local timestamps are preserved with their IANA time zone;
              reporting time is a clearly-labeled derivative. Presence never
              implies approved time. Synthetic data.
            </p>
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <div className="flex justify-center pt-6">
          <a
            href="/request-enterprise-demo"
            className="inline-flex min-h-11 w-full max-w-[260px] items-center justify-center rounded-[10px] bg-[#3FB97A] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0px_6px_16px_0px_rgba(63,185,122,0.28)] transition-all hover:bg-[#35A96E] active:scale-95 sm:w-auto sm:max-w-none sm:text-base"
          >
            Request Enterprise Demo
          </a>
        </div>
      </div>
    </section>
  );
}