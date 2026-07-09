import React from "react";

export default function ArtificialIntelligenceDecisionSupport() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          9. Artificial Intelligence, Automated Insights, and Decision Support
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Introduction */}
        <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime may include AI-assisted features, anomaly detection,
          confidence scoring, and similar decision-support functionality. These
          features are intended to support human review and business governance,
          not to replace lawful managerial judgment or required legal
          processes.
        </p>

        {/* 9.1 */}
        <div className="mt-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
            9.1 No Sole Reliance for Adverse Decisions
          </h3>

          <div className="mt-5 rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 px-5 py-4 dark:bg-emerald-950/40">
            <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
              Customer must not rely solely on AI-Assisted Outputs to make
              employment, compensation, disciplinary, termination, or other
              legally significant decisions. Human review must be meaningful,
              informed, documented where appropriate, and capable of changing
              the outcome.
            </p>
          </div>
        </div>

        {/* 9.3 */}
        <div className="mt-10">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
            9.3 Prohibited AI Misuse
          </h3>

          <ul className="mt-5 space-y-5">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-base font-bold leading-7 text-teal-600">
                ›
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                Using AI outputs to infer protected characteristics without
                lawful basis.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-base font-bold leading-7 text-teal-600">
                ›
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                Ranking, disciplining, or terminating workers based solely on AI
                outputs without human review.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-base font-bold leading-7 text-teal-600">
                ›
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                Using the Service to train external models or extract
                proprietary model logic without written authorization.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}