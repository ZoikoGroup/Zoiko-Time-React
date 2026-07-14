import React from "react";

const contextItems = [
  {
    icon: "📌",
    title: "Timestamped Events",
    description:
      "Workforce events carry time context, event origin, and relevant metadata.",
  },
  {
    icon: "📖",
    title: "Policy Context",
    description:
      "Evidence retains the policy, rule, or approval pathway that applied when the event occurred.",
  },
  {
    icon: "🔄",
    title: "Correction History",
    description:
      "Corrections are handled through reviewable change history rather than silent overwriting.",
  },
  {
    icon: "👁",
    title: "Export History",
    description:
      "Evidence exports are logged with user, time, scope, format, and destination context.",
  },
];

const evidenceQuestions = [
  "What happened?",
  "When did it happen?",
  "Who reviewed it?",
  "What policy applied?",
  "Was it corrected or disputed?",
  "What was exported, by whom, and when?",
];

const governanceItems = [
  {
    title: "Permission-Based Access",
    status: "Required",
  },
  {
    title: "Separate View / Export Rights",
    status: "Enforced",
  },
  {
    title: "Evidence Package Audit Logs",
    status: "Enabled",
  },
  {
    title: "Separation of Duties",
    status: "Supported",
  },
];

const EvidenceContext = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Evidence Context
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
            How Evidence Context Is Built
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400">
            Audit-ready records require more than a timestamp. ZoikoTime is
            designed to preserve the surrounding context that helps
            organizations understand what happened, how it was reviewed,
            what policy applied, and what was exported.
          </p>

          <div className="mt-10 space-y-5">
            {contextItems.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5"
              >
                <div className="flex gap-4">
                  <div className="text-2xl">{item.icon}</div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Review, Export, and Governance Controls
          </h3>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            When workforce records need to be reviewed, shared, or produced,
            ZoikoTime can support structured evidence packages that preserve
            relevant context while restricting access to authorized users.
          </p>

          {/* Questions Card */}
          <div className="mt-8 rounded-2xl bg-slate-900 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Evidence packages help teams answer:
            </p>

            <div className="mt-5 divide-y divide-white/10">
              {evidenceQuestions.map((question) => (
                <div
                  key={question}
                  className="flex items-center gap-3 py-3"
                >
                  <span className="text-teal-500 font-bold text-lg">›</span>

                  <span className="text-sm text-white/80">
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Governance Controls */}
          <div className="mt-8 space-y-4">
            {governanceItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3"
              >
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </span>

                <span className="rounded-full border border-teal-600/20 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 text-xs font-bold text-teal-700 dark:text-teal-400">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceContext;