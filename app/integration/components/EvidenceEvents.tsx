"use client";

import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const configurationEvents = [
  "Eligibility review, authority assignment",
  "Mapping created or changed",
  "Governance profile or policy change",
  "Authorization, test, acceptance, activation",
];

const operationalEvents = [
  "Context received or referenced",
  "Review, correction, decision",
  "Exception, retry, reconciliation",
  "Pause, resume, support, retirement",
];

const exportControls = [
  "Purpose, scope, period, fields, redaction",
  "Role, approval, format, retention",
  "Delivery destination, acknowledgment, expiration",
  "Watermark or reference where approved",
];

export default function EvidenceEvents() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
            Audit Evidence & Governed Exports
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Eighteen Evidence Events,
            <br />
            One Field Contract
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            Every event carries the same fields: event ID, timestamp and
            time zone, actor or service identity, role and effective
            access, organization scope, configuration version, source
            and destination, action, reason, before and after, policy,
            evidence reference, and result.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {/* Configuration Events */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Configuration Events
            </h3>

            <div className="mt-6 space-y-4">

              {configurationEvents.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 text-xs text-emerald-500 flex-shrink-0" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Continue in Part 2 */}
                    {/* Operational Events */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Operational Events
            </h3>

            <div className="mt-6 space-y-4">

              {operationalEvents.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-xs text-emerald-500" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Export Controls */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Export Controls
            </h3>

            <div className="mt-6 space-y-4">

              {exportControls.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-xs text-emerald-500" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Continue in Part 3 */}
                {/* Evidence Notice */}
        <div className="mt-10 rounded-2xl border border-emerald-200 bg-slate-100 p-6 dark:border-emerald-900 dark:bg-slate-900">

          <div className="flex items-start gap-4">

            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
              <FaShieldAlt className="text-lg text-emerald-600 dark:text-emerald-400" />
            </div>

            <div>

              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Evidence can support review and audit.
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                It does not guarantee legal admissibility, legal
                compliance, complete communication meaning, payroll
                correctness, or a particular investigation outcome.
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}
        <p className="mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400">
          Delivery history tracks requested, approved, generated,
          delivered, acknowledged, failed, expired, and revoked —
          each with an owner and a support path.
        </p>

      </div>
    </section>
  );
}