import Link from "next/link";

const controls = [
  {
    term: "Lineage controls",
    body: "source identity, event order, duplicate detection, completeness, consistency, versioning, timestamps, reconciliation, correction, reprocessing, and downstream acknowledgment where supported.",
  },
  {
    term: "Freshness definitions",
    body: "the source event, the processing point, the clock, the expected interval, the grace window, missing-data treatment, and affected scope.",
  },
  {
    term: "Visible exceptions",
    body: "integrity exceptions stay visible and owned rather than being averaged away.",
  },
  {
    term: "Recovery protection",
    body: "issued or approved workforce records are never silently overwritten during a recovery.",
  },
  {
    term: "Degraded mode",
    body: "consequential downstream use pauses, or follows approved degraded-mode policy, when evidence is incomplete.",
  },
];

const connections = [
  { label: "Evidence Ledger", href: "/audit-grade-evidence" },
  { label: "Timesheets & Approvals", href: "/time-sheet-approvals" },
  { label: "Integrations", href: "/enterprise-integrations" },
  { label: "System Status", href: "/system-status" },
];

export default function IntegrityAndFreshness() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Data Integrity, Freshness &amp; Reconciliation
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Availability Does Not Prove Correctness
            </h2>

            <p className="mt-4 max-w-[520px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              For workforce records this is the dimension that matters most. A
              service can be fully available while quietly serving a record that
              is incomplete, duplicated, out of order, or twelve hours stale.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {controls.map((control) => (
                <li key={control.term} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                    <span className="font-bold text-sky-950 dark:text-white">
                      {control.term}
                    </span>{" "}
                    — {control.body}

                  </p>

                </li>
              ))}
            </ul>

          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">

            {/* Never-drawn conclusions */}
            <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Two conclusions never drawn
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                Availability never proves payroll, legal, attendance, or
                time-record correctness. And missing or delayed data never
                produces an automatic misconduct or worker-risk conclusion — a
                data gap is an operational condition, not a finding about a
                person.
              </p>

            </div>

            {/* Where this connects */}
            <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Where this connects
              </h3>

              <p className="mt-3 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                The reliability view of integrity and the product view of record
                correctness describe the same underlying concern from two
                directions.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {connections.map((connection) => (
                  <Link
                    key={connection.label}
                    href={connection.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
                  >

                    <span>{connection.label}</span>

                    <span
                      className="transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      →
                    </span>

                  </Link>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
