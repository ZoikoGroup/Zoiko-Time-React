import { FiCheckCircle, FiShield } from "react-icons/fi";

export default function AiGovernance() {
  const requiredLabels = [
    "AI-generated, with draft or review status",
    "Source references and generated time",
    "Retention, reviewer, edited status",
    "Stated limitations",
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-14">
        {/* Left Content */}
        <div className="w-full lg:max-w-[470px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Governed AI-Generated Outputs
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            An AI Recap Is a
            <br />
            Communication Artifact,
            <br />
            Not a Workforce Record
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            An approved Sema AI summary, action extraction, decision capture,
            recap, or follow-up suggestion may be considered for integration
            only when the feature, workspace, policy, permission, retention, and
            destination use are all validated.
          </p>

          {/* Warning Card */}
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/40 dark:bg-red-950/20">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
              Prohibited Use
            </p>

            <p className="mt-2 text-sm leading-7 text-red-700 dark:text-red-300">
              No AI-generated output may automatically determine hours,
              attendance, breaks, payroll, performance, misconduct, discipline,
              employment status, legal status, or compliance.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              AI Governance
            </span>

            <span className="rounded-lg border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              Human-in-Command
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex w-full flex-col gap-6">
          {/* Required Label */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Required label
            </h3>

            <div className="mt-6 space-y-4">
              {requiredLabels.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 h-5 w-5 text-emerald-500" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
              Product, version, or model information only when approved.
            </p>
          </div>

                    {/* Human Review */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-2 dark:bg-emerald-900/30">
                <FiShield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Human review
              </h3>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              A reviewer verifies source, accuracy, completeness, attribution,
              context, sensitivity, permitted purpose, and destination effect
              before approval. Edits remain visibly human-reviewed and versioned.
            </p>
          </div>

          {/* Sensitive Space Exclusion */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Sensitive space exclusion
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              AI or the integration may be disabled or limited in confidential,
              legal, executive, HR, security, regulated, or externally attended
              spaces according to policy.
            </p>
          </div>

          {/* Change Behavior */}
          <div className="rounded-2xl border border-slate-300 bg-slate-100 p-8 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Change behavior
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              If source content, AI output, policy, or a reviewer decision
              changes, downstream context is re-evaluated and versioned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}