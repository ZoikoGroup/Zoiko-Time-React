"use client";

import { FaCheckCircle } from "react-icons/fa";

const transparencyItems = [
  {
    title: "Record card",
    description:
      "Context label, source product and workspace where permitted, date, relationship to the workforce record, human review status, current outcome, change history.",
  },
  {
    title: "Correction path",
    description:
      "Open context → review source and reason → request correction or clarification → human review → decision → updated history → escalation and support.",
  },
  {
    title: "Restrictions",
    description:
      "Sensitive source content may be restricted while still explaining category, purpose, decision, reviewer, and correction path where appropriate.",
  },
  {
    title: "Accessibility and language",
    description:
      "Plain language, accessible formats, locale and time-zone context, alternative support channels.",
  },
];

const managerCards = [
  {
    title: "Manager / Reviewer",
    description:
      "Assigned review queue, mapped team and workspace context, source references where permitted, conflicts, worker review status, permitted decisions, escalation, history.",
    bg: "bg-white dark:bg-slate-900",
  },
  {
    title: "Operations / HR Reviewer",
    description:
      "Cross-workflow exceptions, policy alignment, mapping issues, correction backlog, ownership, deadlines, evidence, support — with no blanket message access.",
    bg: "bg-white dark:bg-slate-900",
  },
  {
    title: "Executive / Leadership",
    description:
      "Approved organization-level connection health, mapped scope, policy status, workflow status, exception trends, adoption, review completion.",
    bg: "bg-white dark:bg-slate-900",
  },
  {
    title: "Source Access Is Separate",
    description:
      "A role may see that context exists, and its category, without permission to open the Sema source. Effective access is enforced independently of the queue view.",
    bg: "bg-slate-50 dark:bg-slate-800",
  },
];

export default function Transparency() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
              Worker & Participant Transparency
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              If Connected Context
              <br />
              Touches Your Record,
              <br />
              You Can See It
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
              The notice states: connected by your organization, the products
              involved, mapped scope, approved purpose, context category,
              source, review status, who may access it, retention summary,
              rights and support route, and the policy version.
            </p>

            <div className="mt-10 space-y-6">

              {transparencyItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="mt-1 text-sm text-emerald-500 flex-shrink-0" />

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/30">

              <p className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
                No Hidden Scoring
              </p>

              <p className="mt-3 text-sm leading-7 text-red-700 dark:text-red-300">
                No individual productivity score, communication-volume score,
                sentiment score, responsiveness ranking, behavioral profile,
                or surveillance heatmap.
              </p>

            </div>

          </div>

          {/* RIGHT COLUMN STARTS IN PART 2 */}
                    {/* RIGHT COLUMN */}
          <div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-500">
              Manager, Reviewer & Leadership Experiences
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              Bounded Review,
              <br />
              Not Broad Access
            </h2>

            <div className="mt-8 space-y-6">

              {managerCards.map((card) => (
                <div
                  key={card.title}
                  className={`${card.bg} rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-950/30">

              <p className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
                Prohibited Metrics
              </p>

              <p className="mt-3 text-sm leading-7 text-red-700 dark:text-red-300">
                Individual message count, response speed, speaking time,
                meeting duration ranking, sentiment, after-hours
                communication score, productivity score, worker leaderboard,
                or hidden risk score.
              </p>

            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Leadership reporting does not authorize employment, payroll,
              disciplinary, performance, or legal decisions without separate
              evidence and a human process. Small groups and sensitive
              categories are aggregated or suppressed where required.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}