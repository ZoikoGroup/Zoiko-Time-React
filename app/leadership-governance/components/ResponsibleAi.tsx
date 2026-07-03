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
    { icon: "✅", label: "Governed decision made by person", tag: "Human", done: true },
];

export default function ResponsibleAI() {
    return (
        <section className="bg-[#0B1220] px-6 py-12 md:px-54">
            <div className="mx-auto max-w-6xl text-center">
                <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#00C6A9] mb-4">
                    Responsible AI
                </span>
                <h2 className="text-4xl md:text-[32px] font-semibold text-white mb-5">
                    AI-Assisted Intelligence. Human-Governed Outcomes.
                </h2>
                <p className="text-[#FFFFFF99] max-w-245 mx-auto">
                    ZoikoTime&apos;s AI-assisted capabilities are designed to help authorized users
                    understand patterns, detect anomalies, summarize workforce data, prioritize review,
                    and improve operational clarity. They should not replace accountable human judgment
                    in sensitive workforce decisions.
                </p>
            </div>

            <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-[#00C6A933] bg-[#00C6A914] p-8 text-center text-sm font-semibold leading-relaxed text-[#00C6A9E5]">
                ZoikoTime should not be positioned as automatically making final employment,
                disciplinary, payroll, legal, or worker-impacting decisions. Critical decisions should
                remain subject to appropriate human review, organizational policy, and applicable law.
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-3">
                    {CAPABILITIES.map((c) => (
                        <div key={c.title} className="rounded-lg bg-[#FFFFFF0D] p-5">
                            <p className="flex items-center gap-2 text-sm font-semibold text-white">
                                <span>{c.icon}</span>
                                {c.title}
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-[#FFFFFF80]">{c.body}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-lg bg-[#FFFFFF0D] p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        AI and Human Governance Flow
                    </h3>
                    <div className="mt-4 flex flex-col gap-2">
                        {FLOW.map((step) => (
                            <div
                                key={step.label}
                                className={`flex items-center justify-between rounded-md px-4 py-3 ${step.done ? "bg-[#009D8C1A]" : "bg-[#FFFFFF0F]"
                                    }`}
                            >
                                <span className="flex items-center gap-2 text-sm text-slate-100">
                                    <span>{step.icon}</span>
                                    {step.label}
                                </span>
                                <span
                                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${step.tag === "AI"
                                        ? "bg-teal-800/60 text-teal-200"
                                        : "bg-white/10 text-slate-300"
                                        }`}
                                >
                                    {step.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 rounded-md bg-white/[0.03] px-4 py-3 text-center text-xs leading-relaxed text-slate-400">
                        AI informs. Humans decide. Audit trail records the full sequence from detection
                        through to decision.
                    </p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <a href="#" className="text-sm font-semibold text-teal-400 hover:text-teal-300">
                    Learn more about Responsible AI →
                </a>
            </div>
        </section>
    );
}
