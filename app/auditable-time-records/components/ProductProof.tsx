"use client";

import Link from "next/link";

const tabs = [
  "Ledger Overview",
  "Review Queue",
  "Version History",
  "Audit Events",
];

const recordRows = [
  {
    record: "TR-88233",
    age: "1d",
    source: "Import batch 41",
    policy: "v3.1",
    status: "Needs review",
    statusType: "review",
  },
  {
    record: "TR-88236",
    age: "2d",
    source: "Mobile app",
    policy: "v3.2",
    status: "Approval pending",
    statusType: "pending",
  },
  {
    record: "TR-88240",
    age: "3d",
    source: "Manual entry",
    policy: "v3.2",
    status: "Needs review",
    statusType: "review",
  },
];

const versions = [
  {
    title: "Version 1 — original event received from desktop app",
    detail: "Aug 3, 09:02 · Deterministic classification applied",
    active: true,
  },
  {
    title: "Version 2 — correction proposed (unlogged lunch break)",
    detail: "Aug 4, 08:40 · Reason attached, worker notified",
    active: true,
  },
  {
    title: "Version 3 — approved by M. Alders (HR)",
    detail: "Aug 4, 09:12 · Prior version preserved",
    active: true,
  },
];

export default function ProductProof() {
  return (
    <section className="w-full bg-[#3FB97A]/10 py-12 transition-colors sm:py-16 lg:py-20 dark:bg-[#3FB97A]/5">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:gap-11 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="flex w-full max-w-[680px] flex-col items-center gap-3.5 text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#3FB97A]" />

            <span className="text-xs font-bold uppercase leading-5 tracking-widest text-[#3FB97A]">
              Product Proof
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl sm:leading-10 dark:text-white">
            See the Record Before You Rely on It
          </h2>

          {/* Description */}
          <p className="text-sm font-normal leading-7 text-gray-500 sm:text-base dark:text-gray-400">
            Original, derived, corrected, approved, exported, and reconciled
            states stay connected — and distinct.
          </p>
        </div>

        {/* ================= PRODUCT PROOF CONTAINER ================= */}
        <div className="w-full rounded-[20px] border border-[#3FB97A]/20 bg-[#3FB97A]/10 p-4 sm:p-6 lg:p-9 dark:border-[#3FB97A]/20 dark:bg-[#3FB97A]/5">
          {/* ================= TABS ================= */}
          <div className="flex w-full gap-2 overflow-x-auto pb-1">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  leading-5
                  transition-colors
                  ${
                    index === 0
                      ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                      : "border-slate-200 bg-white text-gray-500 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:border-slate-600 dark:hover:text-white"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ================= LEDGER OVERVIEW ================= */}
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] sm:p-6 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
              {/* Progress Bars */}
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                {/* Ready Records */}
                <ProgressRow
                  label="Ready records"
                  value="1,204"
                  width="92%"
                  barClass="bg-[#3FB97A]"
                />

                {/* Corrected */}
                <ProgressRow
                  label="Corrected"
                  value="42"
                  width="42%"
                  barClass="bg-slate-500"
                />

                {/* Needs Review */}
                <ProgressRow
                  label="Needs review"
                  value="18"
                  width="22%"
                  barClass="bg-yellow-600"
                />

                {/* Downstream Mismatch */}
                <ProgressRow
                  label="Downstream mismatch"
                  value="3"
                  width="8%"
                  barClass="bg-red-600"
                />
              </div>

              {/* Audit Ready Circle */}
              <div className="flex shrink-0 justify-center lg:pr-4">
                <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
                  {/* Background Ring */}
                  <div className="absolute inset-0 rounded-full border-[14px] border-slate-200 dark:border-slate-700" />

                  {/* Progress Ring */}
                  <div
                    className="absolute inset-0 rounded-full border-[14px] border-[#3FB97A]"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-xl font-extrabold leading-9 text-slate-900 dark:text-white">
                      93%
                    </span>

                    <span className="text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
                      audit-ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RECORD TABLE ================= */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.4)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr>
                    <TableHeader>Record</TableHeader>
                    <TableHeader>Age</TableHeader>
                    <TableHeader>Source</TableHeader>
                    <TableHeader>Policy</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>

                <tbody>
                  {recordRows.map((row) => (
                    <tr key={row.record}>
                      <TableCell>{row.record}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell>{row.policy}</TableCell>

                      <td className="border-b border-slate-200 px-3 py-3 dark:border-slate-700">
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            px-2.5
                            py-1
                            text-xs
                            font-bold
                            leading-5
                            ${
                              row.statusType === "pending"
                                ? "bg-orange-100 text-yellow-800 dark:bg-orange-950/50 dark:text-orange-300"
                                : "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300"
                            }
                          `}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ================= VERSION HISTORY ================= */}
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] sm:p-6 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col">
              {versions.map((version, index) => (
                <div
                  key={version.title}
                  className={`
                    flex
                    items-start
                    gap-4
                    py-3.5
                    ${
                      index !== 0
                        ? "border-t border-slate-200 dark:border-slate-700"
                        : ""
                    }
                  `}
                >
                  {/* Timeline Dot */}
                  <div className="flex w-2 shrink-0 justify-center pt-1.5">
                    <div
                      className={`h-2 w-2 rounded-sm ${
                        version.active
                          ? "bg-[#3FB97A]"
                          : "bg-slate-400"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-normal leading-5 text-slate-900 dark:text-white">
                      {version.title}
                    </p>

                    <p className="mt-0.5 text-xs font-normal leading-5 text-slate-400">
                      {version.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= AUDIT EVENTS ================= */}
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] sm:p-6 dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0px_8px_20px_-12px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col">
              {/* Export */}
              <div className="flex items-start gap-4 pb-3.5">
                <div className="flex w-2 shrink-0 justify-center pt-1.5">
                  <div className="h-2 w-2 rounded-sm bg-slate-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-normal leading-5 text-slate-900 dark:text-white">
                    Export bundle EB-2291 generated for Payroll Aug Period 1
                  </p>

                  <p className="mt-0.5 text-xs font-normal leading-5 text-slate-400">
                    Manifest: 1,204 records · purpose: payroll export
                  </p>
                </div>
              </div>

              {/* Reconciliation */}
              <div className="flex items-start gap-4 border-t border-slate-200 py-3.5 dark:border-slate-700">
                <div className="flex w-2 shrink-0 justify-center pt-1.5">
                  <div className="h-2 w-2 rounded-sm bg-slate-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-normal leading-5 text-slate-900 dark:text-white">
                    Target acknowledged and reconciled
                  </p>

                  <p className="mt-0.5 text-xs font-normal leading-5 text-slate-400">
                    Append-only audit event
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div className="flex w-full flex-col items-center gap-3.5 pt-5 text-center">
            <p className="text-sm font-normal leading-5 text-gray-500 dark:text-gray-400">
              Every panel above reflects the actual review workflow your team
              uses — no invented dashboards.
            </p>

            <Link
              href="/request-a-demo"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-slate-900
                px-6
                py-3.5
                text-center
                text-base
                font-semibold
                leading-6
                text-white
                transition-colors
                hover:bg-slate-800
                dark:bg-white
                dark:text-slate-900
                dark:hover:bg-slate-200
              "
            >
              Get a demo — see this with your records
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PROGRESS ROW ================= */

function ProgressRow({
  label,
  value,
  width,
  barClass,
}: {
  label: string;
  value: string;
  width: string;
  barClass: string;
}) {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)_45px] items-center gap-3 sm:grid-cols-[140px_minmax(0,1fr)_56px]">
      {/* Label */}
      <div className="text-xs font-semibold leading-5 text-slate-900 dark:text-slate-200">
        {label}
      </div>

      {/* Bar */}
      <div className="h-3.5 overflow-hidden rounded-md bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-md ${barClass}`}
          style={{ width }}
        />
      </div>

      {/* Value */}
      <div className="text-right text-xs font-bold leading-5 text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  );
}

/* ================= TABLE HEADER ================= */

function TableHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <th className="border-b border-slate-200 px-3 py-2.5 text-left text-xs font-bold uppercase leading-5 tracking-wide text-slate-400 dark:border-slate-700">
      {children}
    </th>
  );
}

/* ================= TABLE CELL ================= */

function TableCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <td className="border-b border-slate-200 px-3 py-3 text-base font-normal leading-6 text-slate-900 dark:border-slate-700 dark:text-white">
      {children}
    </td>
  );
}