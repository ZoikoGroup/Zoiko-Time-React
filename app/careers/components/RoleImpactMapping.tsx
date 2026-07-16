const ROLES = [
  {
    eyebrow: "PRODUCT & STRATEGY",
    title: "Senior Product Manager — Workforce Systems",
    problem:
      "Workforce manager, inaccurate time recording, and the absence of defensible evidence for payroll and compliance decisions at enterprise scale.",
    systems:
      "Session assurance engine · Anomaly detection · Policy enforcement layer · Evidence generation",
    stakeholders: ["CFO", "CHRO", "Legal", "Compliance"],
  },
  {
    eyebrow: "ENGINEERING",
    title: "Platform Engineer — Verification & Evidence Systems",
    problem:
      "The absence of real-time, tamper-evident verification infrastructure for enterprise workforce operations across distributed, contractor, and remote-first workforces.",
    systems:
      "Session validation pipeline · Confidence scoring engine · Audit trail architecture · Evidence record integrity",
    stakeholders: ["CTO", "Legal", "Audit"],
  },
  {
    eyebrow: "ENTERPRISE SUCCESS",
    title: "Enterprise Customer Success — Regulated Industries",
    problem:
      "Enterprise clients need adoption, not just technical deployment — translating platform capabilities into measurable business outcomes for compliance, finance, and HR teams.",
    systems:
      "Policy engine configuration · Evidence export workflows · HR dispute resolution · Compliance reporting",
    stakeholders: ["CHRO", "Legal", "Operations"],
  },
  {
    eyebrow: "COMPLIANCE & LEGAL",
    title: "Compliance Systems Analyst — Policy & Regulatory",
    problem:
      "The complexity of multi-jurisdiction labor law, data protection, and AI governance requirements that must be operationalised into ZoikoTime's policy engine at global scale.",
    systems:
      "Jurisdiction rules engine · GDPR alignment · EU AI Act compliance framework · Regulatory inspection readiness",
    stakeholders: ["Legal", "CFO", "Regulators"],
  },
  {
    eyebrow: "DATA & AI",
    title: "ML Engineer — Anomaly Detection & Confidence Systems",
    problem:
      "Detecting fraudulent, manipulated, or anomalous workforce activity with the accuracy, speed, and explainability required for human-reviewed enterprise governance decisions.",
    systems:
      "Confidence scoring model · Adversarial pattern detection · Explainability engine · Behavioural baseline",
    stakeholders: ["CTO", "CFO", "Audit"],
  },
  {
    eyebrow: "ENTERPRISE SALES",
    title: "Enterprise Account Executive — Regulated Markets",
    problem:
      "Enterprise prospects in regulated sectors need a commercial champion who understands governance, compliance, and financial risk — not just product features.",
    systems:
      "Enterprise pipeline · Procurement cycle acceleration · Executive stakeholder navigation · Regulated sector go-to-market",
    stakeholders: ["CFO", "CHRO", "GC", "CTO"],
  },
];

export default function RoleImpactMapping() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#F6F6F6] dark:bg-slate-900 p-6 md:p-10 lg:p-14 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C] mb-5">
          ROLE IMPACT MAPPING
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-[34px] font-semibold text-[#0D1526] dark:text-white mb-5">
          Every Role Has a Measurable Impact
        </h2>

        <p className="mx-auto max-w-4xl text-base sm:text-lg leading-8 text-[#5A6E87] dark:text-slate-300">
          At ZoikoTime, every team member connects directly to the system that
          protects billions in payroll, ensures compliance, and defends
          organisations in audit—not as a compliance function, but as a core
          operating layer.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 text-left">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition-colors"
            >
              {/* Header */}
              <div className="bg-[#009D8C] px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-white/70">
                  {role.eyebrow}
                </p>

                <h3 className="mt-2 text-lg font-semibold leading-7 text-white">
                  {role.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-6 px-5 py-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Problem You Solve
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {role.problem}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Systems You Influence
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {role.systems}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    Stakeholders You Impact
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.stakeholders.map((stakeholder) => (
                      <span
                        key={stakeholder}
                        className="rounded-full border border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
                      >
                        {stakeholder}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 dark:border-slate-700 px-5 py-4 text-center">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#009D8C] hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                >
                  View Role Detail →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}