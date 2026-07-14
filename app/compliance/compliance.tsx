"use client";

const complianceTags = [
  "SOC 2 Type II–Aligned Controls",
  "ISO 27001 Control Framework",
  "GDPR & Privacy Alignment",
  "Audit-Ready Evidence Generation",
  "Continuous Compliance Monitoring",
];
const complianceSteps = [
  {
    icon: "📋",
    title: "Policy Definition",
    description: "Rules, thresholds, jurisdiction settings",
  },
  {
    icon: "⚙️",
    title: "Control Enforcement",
    description: "System-level, real-time enforcement",
  },
  {
    icon: "📂",
    title: "Evidence Generation",
    description: "Tamper-evident, timestamped records",
  },
  {
    icon: "📡",
    title: "Monitoring & Alerts",
    description: "Continuous anomaly and breach detection",
  },
  {
    icon: "📊",
    title: "Audit & Reporting",
    description: "On-demand exports, regulator-ready",
  },
];
const controlMappings = [
  {
    domain: "Access Control",
    soc2: "CC6.1",
    iso: "A.9",
    gdpr: "Art. 32",
    implementation:
      "RBAC + policy enforcement + session identity validation",
  },
  {
    domain: "Data Protection",
    soc2: "CC6.7",
    iso: "A.10",
    gdpr: "Art. 5",
    implementation:
      "AES-256 encryption + data minimisation enforcement",
  },
  {
    domain: "Audit Logging",
    soc2: "CC7.2",
    iso: "A.12",
    gdpr: "Art. 30",
    implementation:
      "Immutable audit logs + processing activity register",
  },
  {
    domain: "Continuous Monitoring",
    soc2: "CC7.3",
    iso: "A.12",
    gdpr: "—",
    implementation:
      "Real-time anomaly detection + risk indicator monitoring",
  },
  {
    domain: "Data Subject Rights",
    soc2: "—",
    iso: "—",
    gdpr: "Art. 15–22",
    implementation:
      "Rights execution workflows + request tracking system",
  },
  {
    domain: "Incident & Breach Management",
    soc2: "CC9.2",
    iso: "A.16",
    gdpr: "Art. 33",
    implementation:
      "Automated breach detection + 72-hour notification workflow",
  },
];
const controlCards = [
  {
    icon: "🔐",
    title: "Access Control Enforcement",
    description:
      "Every access event is validated against the role assignment matrix before execution — not logged after. Unauthorised access is blocked, not just audited.",
    points: [
      "Role-based permissions enforced at platform architecture — cannot be bypassed by configuration.",
      "Least-privilege default — access must be explicitly granted, not assumed.",
      "Session identity validated at every access event — not just at login.",
      "All access events logged immutably with full context and actor identity.",
    ],
    footer:
      "Controls are executed — not assumed to be in place.",
  },
  {
    icon: "⚙️",
    title: "Policy Enforcement Logic",
    description:
      "Employer-configured governance policies are enforced at the system level — consistently applied across every session, worker, and jurisdiction without manual intervention.",
    points: [
      "Configurable rules defined by the organisation through the Policy Engine.",
      "Automated validation against policy at every session event — no gaps, no exceptions.",
      "Exception handling — policy breach detected, flagged, and escalated immediately.",
      "Policy configuration change log — every modification tracked and auditable.",
    ],
    footer:
      "Policy enforcement is systemic — not dependent on individual discipline.",
  },
  {
    icon: "📊",
    title: "Data Handling Controls",
    description:
      "Data processing constraints are enforced at the architecture level — ensuring data minimisation, purpose limitation, and retention compliance regardless of user or admin action.",
    points: [
      "Encryption enforced at capture — AES-256 at rest, TLS 1.3 in transit.",
      "Retention schedules enforced automatically per jurisdiction.",
      "Access logging for every data interaction — no silent access.",
      "Cross-purpose use prevented systemically — not reliant on policy instruction.",
    ],
    footer:
      "Data controls are architectural — they cannot be disabled or bypassed.",
  },
];
const auditItems = [
  {
    title: "Session logs — 50 workers, March 2026 (1,240 sessions)",
  },
  {
    title:
      "Confidence score records with four-layer breakdown per session",
  },
  {
    title:
      "Policy compliance confirmation for each session (policy version applied)",
  },
  {
    title:
      "Flagged session log — 7 sessions, with anomaly classification and resolution",
  },
  {
    title:
      "Chain of custody documentation — tamper-evidence confirmed for all records",
  },
  {
    title:
      "Export format: PDF/A-3 (regulatory) + JSON (technical audit)",
  },
];
const monitoringCards = [
  {
    icon: "📡",
    title: "Anomaly Detection",
    description:
      "Continuous statistical and adversarial pattern analysis — detecting manipulation, fraud, and policy deviation signals in real time. Every anomaly classified, scored, and routed to human review before any consequential action is taken.",
  },
  {
    icon: "🚨",
    title: "Policy Breach Alerts",
    description:
      "Immediate alerting when a configured policy threshold is breached — working time violations, jurisdiction non-compliance, access threshold exceedance. Notifications routed to the appropriate governance function automatically.",
  },
  {
    icon: "📊",
    title: "Risk Indicator Dashboard",
    description:
      "Real-time risk indicator monitoring across all active workforce populations — surfacing emerging risk patterns before they become incidents, and providing the governance context required for proactive remediation.",
  },
];

const certifications = [
  {
    icon: "🏆",
    title: "SOC 2 Type II",
    description:
      "Annual independent audit against the Trust Services Criteria — security, availability, processing integrity, confidentiality, and privacy.",
    badge: "✓ Certified",
  },
  {
    icon: "🛡️",
    title: "ISO 27001",
    description:
      "Information security management system certified against ISO/IEC 27001:2022 — covering all applicable Annex A controls.",
    badge: "✓ Certified",
  },
  {
    icon: "⚖️",
    title: "GDPR Aligned",
    description:
      "Privacy-by-design architecture aligned to GDPR, UK GDPR, and CCPA/CPRA — with DPA, processing register, and DPIA documentation available.",
    badge: "✓ Documented",
  },
  {
    icon: "🤖",
    title: "EU AI Act",
    description:
      "High-risk AI system compliance framework in place — human-in-command model, explainability requirements, and conformity assessment documentation available.",
    badge: "✓ Aligned",
  },
];
const documents = [
  {
    icon: "📊",
    title: "Compliance Overview",
    description:
      "Complete compliance architecture overview — controls, frameworks, and alignment evidence structured for procurement and legal review.",
  },
  {
    icon: "📋",
    title: "Control Mapping Document",
    description:
      "Full control-by-control mapping across SOC 2, ISO 27001, GDPR, CCPA, and EU AI Act — with implementation and evidence for each control.",
  },
  {
    icon: "📂",
    title: "Audit Pack",
    description:
      "Structured evidence pack for audit and regulatory inspection — session evidence examples, control effectiveness report, and chain of custody documentation.",
  },
  {
    icon: "⚙️",
    title: "Policy Framework Guide",
    description:
      "Policy Engine configuration framework — governance policies, jurisdiction rule sets, and compliance configuration guide for enterprise deployment.",
  },
];

export default function Compliance() {
    function Badge({
  children,
  color,
}: {
  children: string;
  color: "indigo" | "amber" | "teal";
}) {
  const styles = {
    indigo:
      "bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
    amber:
      "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    teal:
      "bg-emerald-50 text-teal-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-teal-300 dark:border-emerald-800",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${styles[color]}`}
    >
      {children}
    </span>
  );
}
  return (
    <>
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 dark:bg-gray-950">
      {/* Background Gradient */}
      <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:leading-[60px]">
            Compliance Infrastructure for
         
            Workforce Operations
          </h2>

          <h3 className="mt-4 text-3xl font-bold leading-tight text-teal-500 sm:text-5xl lg:leading-[60px]">
            Verifiable, Continuous, and Audit-Ready
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-500 dark:text-gray-300">
            ZoikoTime enables organisations to operate with confidence through
            policy-driven controls, structured evidence generation, and
            alignment with global regulatory frameworks.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-teal-500/20 bg-teal-500/10 px-8 py-5">
          <p className="text-center text-sm font-bold leading-6 text-teal-600 dark:text-teal-400">
            ZoikoTime transforms compliance from periodic validation into
            continuous, system-enforced assurance.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-md bg-teal-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
            Request Compliance Briefing
          </button>

          <button className="rounded-md border-2 border-teal-600 px-8 py-3 text-sm font-medium text-teal-600 transition hover:bg-teal-600 hover:text-white dark:text-teal-400 dark:border-teal-400">
            Download Audit Pack
          </button>
        </div>

        {/* Compliance Tags */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-4">
          {complianceTags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <span className="h-2 w-2 rounded-full bg-teal-500" />

              <span className="text-sm font-semibold text-slate-600 dark:text-gray-300">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            How Compliance Works in ZoikoTime
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            Compliance is enforced at the point of operation — not reconstructed
            after the fact. Every stage generates structured, auditable
            evidence automatically.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {complianceSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center px-6 py-8 text-center ${
                  index !== complianceSteps.length - 1
                    ? "border-b border-slate-200 sm:border-r sm:border-b-0 dark:border-gray-700"
                    : ""
                }`}
              >
                <div className="text-4xl">{step.icon}</div>

                <h3 className="mt-5 text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-500 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-lg border-t border-teal-600/20 bg-emerald-50 px-6 py-4 dark:bg-emerald-900/20">
          <p className="text-center text-sm font-bold text-teal-700 dark:text-teal-400">
            Compliance is enforced at the point of operation — not reconstructed
            after the fact. Every stage generates structured evidence
            automatically.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-white py-16 lg:py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white lg:text-4xl">
          Line-by-Line Control Mapping Across Frameworks
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 dark:text-gray-300">
          Big 4 audit-level control documentation — click any row to expand the
          full control logic, system behaviour, and evidence generated for each
          mapped control.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-20 mt-5">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_3fr] bg-slate-100 dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800">
            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Control Domain
            </div>

            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-indigo-700">
              SOC 2 <br /> Control
            </div>

            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-amber-700">
              ISO 27001 <br /> Clause
            </div>

            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-teal-600">
              GDPR <br /> Article
            </div>

            <div className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Implementation in ZoikoTime
            </div>
          </div>

          {/* Body */}
          {controlMappings.map((item, index) => (
            <div
              key={index}
              className={`grid gap-4 border-b border-slate-200 px-5 py-4 md:grid-cols-[2fr_1fr_1fr_1fr_3fr] dark:border-gray-800 ${
                index === 0
                  ? "border border-blue-500 md:border-x-0 md:border-t-0"
                  : ""
              }`}
            >
              {/* Mobile Labels */}
              <div className="md:hidden space-y-3">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400">
                    Control Domain
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    {item.domain}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge color="indigo">{item.soc2}</Badge>
                  <Badge color="amber">{item.iso}</Badge>
                  <Badge color="teal">{item.gdpr}</Badge>
                </div>

                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {item.implementation}
                </p>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex items-center text-sm font-semibold text-slate-900 dark:text-white">
                {item.domain}
              </div>

              <div className="hidden md:flex items-center">
                <Badge color="indigo">{item.soc2}</Badge>
              </div>

              <div className="hidden md:flex items-center">
                <Badge color="amber">{item.iso}</Badge>
              </div>

              <div className="hidden md:flex items-center">
                <Badge color="teal">{item.gdpr}</Badge>
              </div>

              <div className="hidden md:flex items-center text-sm text-slate-500 dark:text-gray-400">
                {item.implementation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            How Controls Are Enforced In Practice
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            Controls are executed by the system in real time—not dependent on
            manual adherence, individual discretion, or periodic review. Here is
            the enforcement logic for the three primary control areas.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">

        
                    {controlCards.map((card, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Top Gradient */}
              <div className="h-1 bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-8">
                {/* Icon */}
                <div className="text-4xl">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-gray-300">
                  {card.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-8 space-y-5">
                  {card.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 text-lg font-bold text-teal-600">
                        ›
                      </span>

                      <p className="text-sm leading-6 text-slate-700 dark:text-gray-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer Box */}
                <div className="mt-8 rounded-md bg-emerald-50 p-4 dark:bg-emerald-900/20">
                  <p className="text-sm font-bold text-teal-700 dark:text-teal-300">
                    {card.footer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   <section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            Structured Evidence Generation Every Record
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            Every action in ZoikoTime is linked to a structured evidence record
            timestamped, policy-referenced, integrity-signed, and traceable.
            This is the schema of a standard session evidence record.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-6 py-5 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ZoikoTime Evidence Record — Session SES-2026-08841
            </h3>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-sm bg-teal-600"></span>

              <span className="text-xs font-bold text-teal-600">
                Tamper-Evident
              </span>
            </div>
          </div>

          {/* Code */}
          <div className="overflow-x-auto bg-slate-50 p-6 font-mono text-xs leading-8 dark:bg-gray-950">
 
  <pre className=" text-xs leading-8 whitespace-pre-wrap">

    <span className="text-slate-700">{"{"}</span>
    {"\n"}

    <span className="text-indigo-500">  "record_id"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">"SES-2026-08841"</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "timestamp_utc"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">"2026-03-18T08:01:14Z"</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "session_duration_hrs"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">8.56</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "user_role"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">
      "Senior Consultant — Billable"
    </span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "action_performed"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">
      "Remote session — verified billable work"
    </span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "confidence_score"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">96</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "confidence_layers"</span>
    <span className="text-slate-700">: </span>
    <span className="text-slate-700">{"{"}</span>
    {"\n"}

    <span className="text-indigo-500">    "identity"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">97</span>
    <span className="text-slate-700">, </span>

    <span className="text-indigo-500">"session"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">95</span>
    <span className="text-slate-700">, </span>

    <span className="text-indigo-500">"device"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">98</span>
    <span className="text-slate-700">, </span>

    <span className="text-indigo-500">"location"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">94</span>
    {"\n"}

    <span className="text-slate-700">  {"}"},</span>
    {"\n"}
        <span className="text-indigo-500">  "policy_reference"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">
      "Remote Session Policy v3.2 — UK jurisdiction"
    </span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "policy_outcome"</span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">
      "Compliant — all thresholds met"
    </span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">  "anomaly_flags"</span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">[]</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">
      {"  "}
      "system_validation_outcome"
    </span>
    <span className="text-slate-700">: </span>
    <span className="text-amber-600">
      "Accepted — payroll approved"
    </span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">
      {"  "}
      "human_review_required"
    </span>
    <span className="text-slate-700">: </span>
    <span className="text-teal-600">false</span>
    <span className="text-slate-700">,</span>
    {"\n"}

    <span className="text-indigo-500">
      {"  "}
      "integrity_signature"
    </span>
    <span className="text-slate-700">: </span>
    <span className="text-slate-400 break-all">
      "sha256:3a7f9e2b1c8d4f6a0e5b9c2d7a3f1e8b4c6d0a2e7b5f9c1d3a6e0b4f2c8d1a7e"
    </span>
    {"\n"}

    <span className="text-slate-700">{"}"}</span>

  </pre>
</div>
  

          {/* Footer */}
          <div className="border-t border-teal-600/10 bg-emerald-50 px-6 py-4 dark:bg-emerald-900/20">
            <p className="text-center text-sm font-bold text-teal-700 dark:text-teal-400">
              Every action is linked to evidence — and every piece of evidence
              is traceable, timestamped, and integrity-verified.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            How ZoikoTime Responds to Real Audit Scenarios
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            Three real-world audit scenarios — each showing exactly what an
            auditor requests and what ZoikoTime produces in response. This is
            deal-closing material for compliance teams.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Wage &amp; Hour Audit Scenario
            </h3>

            <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-gray-300">
              A regulatory authority requests proof of hours worked for a
              sample group of workers over a specified period — a common wage
              compliance audit requirement in regulated sectors. Before
              ZoikoTime, this took HR teams weeks to prepare. With ZoikoTime,
              it takes under 4 minutes.
            </p>

            {/* Auditor Request */}

            <div className="mt-8 rounded-xl border border-slate-200 bg-emerald-50 p-6 dark:border-gray-700 dark:bg-emerald-900/20">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Auditor Request
              </span>

              <p className="mt-4 text-sm leading-7 text-slate-900 dark:text-white">
                "Provide verified proof of hours worked and policy compliance
                for 50 workers across the period 01–31 March 2026, including
                any flagged or disputed sessions."
              </p>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500 dark:text-gray-400">
              ZoikoTime generates a structured evidence package automatically —
              no manual preparation, no reconstruction from incomplete records,
              no gaps.
            </p>
          </div>
<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">

  {/* Header */}
  <div className="flex items-center justify-between bg-slate-900 px-5 py-4">
    <h4 className="text-xs font-bold text-white">
      ZoikoTime Audit Response — Generated in &lt;4 min
    </h4>

    <span className="font-mono text-xs text-teal-400">
      Export ready
    </span>
  </div>

  {/* Row 1 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Session logs — 50 workers, March 2026 (1,240 sessions)
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>

  {/* Row 2 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Confidence score records with four-layer breakdown per session
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>

  {/* Row 3 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Policy compliance confirmation for each session (policy version applied)
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>

  {/* Row 4 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Flagged session log — 7 sessions, with anomaly classification and
      resolution
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>
    {/* Row 5 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Chain of custody documentation — tamper-evidence confirmed for all
      records
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>

  {/* Row 6 */}
  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-gray-700">
    <p className="max-w-sm text-xs font-semibold leading-5 text-slate-900 dark:text-white">
      Export format: PDF/A-3 (regulatory) + JSON (technical audit)
    </p>

    <span className="rounded-full border border-teal-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-800 dark:bg-emerald-900/20 dark:text-teal-300">
      Ready
    </span>
  </div>

  {/* Footer */}
  <div className="bg-emerald-50 px-6 py-5 dark:bg-emerald-900/20">
    <p className="text-center text-xs font-bold leading-6 text-teal-700 dark:text-teal-300">
      Complete evidence package generated in under 4 minutes.
      <br />
      Previously took 2–3 weeks of manual HR preparation.
    </p>
  </div>

</div>
{/* End Right Card */}

</div>
{/* End Grid */}

</div>
</section>
<section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            Real-Time Compliance Monitoring
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            ZoikoTime monitors compliance continuously—not periodically.
            <br className="hidden md:block" />
            Anomalies, policy breaches, and risk indicators are detected and
            escalated in real time, before they become compliance incidents.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-3">
          {monitoringCards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              {/* Icon */}
              <div className="text-4xl">{card.icon}</div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            Third-Party Verified Compliance Posture
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            ZoikoTime's compliance posture is not a self-assessment—it is
            validated by independent third-party audit and certification
            against the relevant standards.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Icon */}
              <div className="text-center text-5xl">{item.icon}</div>

              {/* Title */}
              <h3 className="mt-8 text-center text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 flex-1 text-center text-sm leading-7 text-slate-500 dark:text-gray-300">
                {item.description}
              </p>

              {/* Badge */}
              <div className="mt-8 flex justify-center">
                <span className="rounded-full border border-teal-200 bg-emerald-50 px-5 py-2 text-xs font-bold text-teal-700 dark:border-teal-700 dark:bg-emerald-900/20 dark:text-teal-300">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
            Compliance Documentation Immediately Available
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Icon */}
              <div className="text-center text-5xl">{doc.icon}</div>

              {/* Title */}
              <h3 className="mt-8 text-center text-xl font-bold text-slate-900 dark:text-white">
                {doc.title}
              </h3>

              {/* Description */}
              <p className="mt-5 flex-1 text-center text-sm leading-7 text-slate-500 dark:text-gray-300">
                {doc.description}
              </p>

              {/* Download Link */}
              <button className="mt-8 text-center text-sm font-bold text-teal-600 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-gray-950">
      {/* Top Gradient Border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            Compliance You Can
          </h2>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-teal-600 lg:text-5xl">
            Defend Not Just Claim
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-500 dark:text-gray-300">
            ZoikoTime provides the control framework, evidence infrastructure,
            and audit documentation that regulators, auditors, and legal teams
            require—not a compliance statement, a verifiable system.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button className="rounded-md bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0px_4px_14px_rgba(0,157,140,0.28)] transition-all duration-300 hover:bg-teal-700 hover:shadow-lg">
            Request Compliance Briefing
          </button>

          <button className="rounded-md border border-slate-300 bg-white px-8 py-3 text-base font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Talk to Compliance Team
          </button>
        </div>
      </div>
    </section>
    </>

  );
}