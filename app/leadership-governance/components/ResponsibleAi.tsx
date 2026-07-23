const CAPABILITIES = [
  {
    icon: "⚪",
    title: "Pattern Detection",
    body: "AI can help identify unusual time, activity, attendance, utilization, or approval patterns that may require human review — without automatically triggering adverse actions.",
  },
  {
    icon: "📊",
    title: "Summaries and Insights",
    body: "AI can help summarize workforce trends, reporting outputs, exceptions, and operational signals for authorized users who need clearer visibility across large datasets.",
  },
  {
    icon: "⚠️",
    title: "Review Prioritization",
    body: "AI can help prioritize records that appear incomplete, unusual, unsupported, or inconsistent with configured policies — routing them to the appropriate human reviewer.",
  },
  {
    icon: "💡",
    title: "Explainable Support",
    body: "AI-assisted outputs should include understandable context, supporting signals, limitations, and review prompts so users can evaluate and challenge findings before acting.",
  },
];

const FLOW = [
  { icon: "📷", label: "Pattern detected in time records", tag: "AI" },
  { icon: "📄", label: "Exception flagged and prioritized", tag: "AI" },
  { icon: "💡", label: "Context and signals surfaced", tag: "AI" },
  { icon: "👤", label: "Authorized reviewer receives flag", tag: "Human" },
  { icon: "⚪", label: "Reviewer evaluates context and record", tag: "Human" },
  {
    icon: "✅",
    label: "Governed decision made by person",
    tag: "Human",
    done: true,
  },
];

export default function ResponsibleAI() {
  return (
    <section className="bg-white px-6 py-12 transition-colors duration-300 dark:bg-slate-900 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#00C6A9]">
            Responsible AI
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-slate-900 dark:text-white md:text-[32px]">
            AI-Assisted Intelligence. Human-Governed Outcomes.
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-slate-600 dark:text-white/60">
            ZoikoTime&apos;s AI-assisted capabilities are designed to help
            authorized users understand patterns, detect anomalies, summarize
            workforce data, prioritize review, and improve operational clarity.
            They should not replace accountable human judgment in sensitive
            workforce decisions.
          </p>
        </div>

        {/* Notice */}
        <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-[#00C6A9]/30 bg-[#00C6A9]/10 p-8 text-center text-sm font-semibold leading-7 text-[#00C6A9] dark:border-[#00C6A9]/30 dark:bg-[#00C6A9]/10 dark:text-teal-300">
          ZoikoTime should not be positioned as automatically making final
          employment, disciplinary, payroll, legal, or worker-impacting
          decisions. Critical decisions should remain subject to appropriate
          human review, organizational policy, and applicable law.
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* Left Cards */}
          <div className="space-y-4">
            {CAPABILITIES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#00C6A9]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00C6A9]/30 dark:hover:bg-white/10"
              >
                <h3 className="flex items-center gap-3 text-base font-semibold text-slate-900 dark:text-white">
                  <span className="text-xl">{item.icon}</span>
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-white/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right Flow */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-gray-400">
              AI and Human Governance Flow
            </h3>

            <div className="mt-5 space-y-3">
              {FLOW.map((step) => (
                <div
                  key={step.label}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${
                    step.done
                      ? "bg-[#00C6A9]/10"
                      : "bg-slate-100 dark:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm text-slate-900 dark:text-white">
                    <span className="text-lg">{step.icon}</span>
                    {step.label}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      step.tag === "AI"
                        ? "bg-teal-100 text-teal-700 dark:bg-teal-800/60 dark:text-teal-200"
                        : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-gray-300"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-slate-100 px-4 py-4 text-center dark:bg-white/5">
              <p className="text-xs leading-6 text-slate-600 dark:text-gray-400">
                AI informs. Humans decide. Audit trail records the full sequence
                from detection through to decision.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-sm font-semibold text-[#00C6A9] transition-colors hover:text-teal-600 dark:hover:text-teal-300"
          >
            Learn more about Responsible AI →
          </a>
        </div>
      </div>
    </section>
  );
}