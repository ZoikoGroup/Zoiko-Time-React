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
    <section className="bg-[#0B1220] dark:bg-gray-950 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="mb-4 inline-block text-xs font-bold tracking-[1.3px] text-[#00C6A9] dark:text-teal-400">
            Responsible AI
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-white md:text-[32px]">
            AI-Assisted Intelligence. Human-Governed Outcomes.
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-gray-300">
            ZoikoTime&apos;s AI-assisted capabilities are designed to help
            authorized users understand patterns, detect anomalies, summarize
            workforce data, prioritize review, and improve operational clarity.
            They should not replace accountable human judgment in sensitive
            workforce decisions.
          </p>
        </div>

        {/* Notice */}
        <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-[#00C6A933] bg-[#00C6A914] dark:border-teal-500/30 dark:bg-teal-500/10 p-8 text-center text-sm font-semibold leading-7 text-[#00C6A9] dark:text-teal-300">
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
                className="rounded-xl bg-white/5 dark:bg-gray-900/70 p-5 transition-colors duration-300"
              >
                <h3 className="flex items-center gap-3 text-base font-semibold text-white">
                  <span className="text-xl">{item.icon}</span>
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right Flow */}
          <div className="rounded-xl bg-white/5 dark:bg-gray-900/70 p-6 transition-colors duration-300">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              AI and Human Governance Flow
            </h3>

            <div className="mt-5 space-y-3">
              {FLOW.map((step) => (
                <div
                  key={step.label}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 ${
                    step.done
                      ? "bg-[#009D8C1A] dark:bg-teal-500/20"
                      : "bg-white/5 dark:bg-gray-800"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm text-white">
                    <span className="text-lg">{step.icon}</span>
                    {step.label}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      step.tag === "AI"
                        ? "bg-teal-800/60 text-teal-200"
                        : "bg-white/10 text-gray-300"
                    }`}
                  >
                    {step.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg bg-white/5 dark:bg-gray-800 px-4 py-4 text-center">
              <p className="text-xs leading-6 text-gray-400">
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
            className="text-sm font-semibold text-teal-400 transition hover:text-teal-300"
          >
            Learn more about Responsible AI →
          </a>
        </div>
      </div>
    </section>
  );
}