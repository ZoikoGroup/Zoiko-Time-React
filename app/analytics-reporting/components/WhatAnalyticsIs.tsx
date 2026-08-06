import { FiCheck, FiX } from "react-icons/fi";

const infoCards = [
  {
    title: "What it uses",
    description:
      "Approved workforce records and documented integration inputs, within authorized purpose and scope.",
  },
  {
    title: "What it produces",
    description:
      "Defined metrics, governed dashboards, reports, subscriptions, and controlled exports where released.",
  },
  {
    title: "Who stays responsible",
    description:
      "Authorized people interpret, investigate, correct, approve, communicate, and decide. Analytics informs review.",
  },
];

const neverDoes = [
  "Screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection — under any tier or configuration.",
  "Hidden productivity scores, secret rankings, or opaque composite ratings.",
  "Automatic misconduct findings.",
  "Autonomous consequential decisions.",
];

const responsibilities = [
  "You remain responsible for configuration and lawful basis.",
  "Roles, policy, and scope decisions stay with your organization.",
  "Data quality at source, and interpretation of results.",
  "Jurisdiction, review, and downstream use of any output.",
];

export default function WhatAnalyticsIs() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            What Analytics &amp; Reporting Is
          </span>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            ZoikoTime Analytics &amp; Reporting turns approved workforce records
            into defined metrics, dashboards, reports, and governed exports.
            Each view identifies its scope, source, metric version, time zone,
            freshness, completeness, exclusions, privacy treatment, and
            limitations. Broad views default to aggregation, small groups are
            protected, anomalies remain neutral review prompts, and authorized
            people retain responsibility for interpretation, corrections,
            approvals, payroll, employment, legal, and compliance decisions.
          </p>
        </div>

        {/* Top Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Never Does */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                <FiX className="h-5 w-5 text-red-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                What it never does
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {neverDoes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FiX className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shared Responsibility */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/30">
                <FiCheck className="h-5 w-5 text-emerald-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Shared responsibility
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {responsibilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FiCheck className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}