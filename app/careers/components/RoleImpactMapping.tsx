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
    <section className="bg-slate-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center bg-[#F6F6F6] rounded-[19px] p-4 md:p-15">
        <span className="inline-block text-xs uppercase font-bold tracking-[1.30px] text-[#009D8C] mb-5">
          ROLE IMPACT MAPPING
        </span>
        <h2 className="text-4xl md:text-[34px]  font-semibold text-[#0D1526] mb-5">
          Every Role Has a Measurable Impact
        </h2>
        <p className="text-[#5A6E87] max-w-220 mx-auto">
          At ZoikoTime, every team member connects directly to the system
          that protects billions in payroll, ensures compliance, and defends
          organisations in audit not as a compliance function, but a core
          operating layer.
        </p>

        <div className="mt-10 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="bg-teal-600 px-5 py-4">
                <p className="text-[11px] font-medium uppercase tracking-widest text-[#FFFFFFBD]">
                  {role.eyebrow}
                </p>
                <h3 className="mt-1 text-sm font-bold leading-snug max-w-55 text-white">
                  {role.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 px-5 py-5">
                <div>
                  <p className="text-[15px] font-semibold tracking-wide text-[#646464]">
                    PROBLEM YOU SOLVE
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#919191]">
                    {role.problem}
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold tracking-wide text-[#646464]">
                    SYSTEMS YOU INFLUENCE
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#919191]">
                    {role.systems}
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold tracking-wide text-[#646464]">
                    STAKEHOLDERS YOU IMPACT
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {role.stakeholders.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[11px] font-medium text-teal-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t flex justify-center border-slate-100 px-5 py-3">
                <a
                  href="#"
                  className="text-xs text-center font-semibold text-teal-600 hover:text-teal-700"
                >
                  View Role Detail &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
