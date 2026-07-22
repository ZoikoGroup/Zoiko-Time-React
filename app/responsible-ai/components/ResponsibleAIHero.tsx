import React from "react";
import Link from "next/link";

const aiLayers = [
  {
    title: "Workforce records",
    description:
      "Time entries, activity context, approvals, corrections, exceptions, and evidence.",
    border: "border-slate-400",
  },
  {
    title: "AI assistance layer",
    description:
      "Anomaly signals, completeness checks, pattern summaries, risk indicators, and evidence organization.",
    border: "border-teal-600",
  },
  {
    title: "Governance layer",
    description:
      "Permissions, policies, audit logs, review rules, redaction, retention, and escalation controls.",
    border: "border-slate-800",
  },
  {
    title: "Human review layer",
    description:
      "Managers, HR, legal, operations, administrators, and authorized reviewers.",
    border: "border-blue-600",
  },
  {
    title: "Customer decision layer",
    description:
      "Customer-controlled decisions — not autonomous AI determinations.",
    border: "border-green-500",
  },
];

export default function ResponsibleAIHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-16 dark:from-slate-950 dark:to-slate-900 lg:px-8 lg:py-24">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-[-160px] h-96 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_470px]">
        
        {/* Left Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Responsible AI
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl">
            AI for workforce assurance,
            <br />
            governed by{" "}
            <span className="text-teal-600">
              human
              <br />
              judgment
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime uses AI to support workforce review, anomaly detection,
            operational visibility, evidence organization, and policy-aware
            decision support — without replacing HR, legal, manager, or employer
            judgment.
          </p>

          {/* Highlight Box */}
          <div className="mt-8 max-w-xl rounded-r-lg border-l-4 border-emerald-100 bg-slate-50 p-5 dark:border-emerald-900 dark:bg-slate-900">
            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
              Workforce AI must be explainable, permissioned, transparent, and
              reviewable. ZoikoTime helps organizations use AI responsibly
              across time records, activity context, exceptions, reports, and
              evidence workflows while maintaining clear boundaries around
              sensitive workforce decisions.
            </p>
          </div>

          {/* Buttons */}
<div className="mt-8 flex flex-wrap gap-4">
  {/* Get a Demo */}
  <Link
    href="/request-a-demo"
    className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-7 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
  >
    Get a Demo
  </Link>

  {/* Contact Sales */}
  <Link
    href="/contact-sales"
    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
  >
    Contact Sales
  </Link>
</div>

          <p className="mt-8 text-xs leading-5 text-slate-500 dark:text-slate-400">
            ZoikoTime does not make final employment, wage, disciplinary, legal,
            or worker-classification decisions. AI-assisted outputs support
            authorized human review.
          </p>
        </div>


        {/* Right Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-900">
          
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            Layered responsible AI model
          </h2>

          <div className="mt-8 space-y-5">
            {aiLayers.map((layer) => (
              <div
                key={layer.title}
                className={`rounded-xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950 ${layer.border}`}
              >
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {layer.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}