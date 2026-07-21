const architecture = [
  {
    title: "Identity Layer",
    description:
      "Authentication, session validation, and access enforcement — ensuring that only verified identities can access system resources, with continuous re-validation throughout each session.",
    primary: [
      "Multi-factor authentication",
      "Session continuity validation",
      "Biometric signal processing",
    ],
    secondary: ["SSO integration", "Re-authentication policies"],
  },
  {
    title: "Application Layer",
    description:
      "Input validation, API security, and logic protection — defending the application surface against injection, manipulation, and unauthorised access to system functions.",
    primary: [
      "Input validation & sanitisation",
      "API authentication & rate limiting",
    ],
    secondary: [
      "Dependency vulnerability management",
      "Penetration testing programme",
    ],
  },
  {
    title: "Data Layer",
    description:
      "Encryption, integrity controls, and access restrictions — protecting workforce data at rest and in transit with cryptographic controls and strict access governance at every stage of the data lifecycle.",
    primary: [
      "AES-256 encryption at rest",
      "TLS 1.3 in transit",
      "SHA-256 integrity verification",
    ],
    secondary: ["Data residency controls"],
  },
  {
    title: "Infrastructure Layer",
    description:
      "Cloud security, network isolation, and environment segmentation — providing a secure, resilient infrastructure foundation with geographic redundancy and strict environment separation between production and non-production systems.",
    primary: [
      "Zero-trust network architecture",
      "Environment segmentation",
    ],
    secondary: [
      "Geographic redundancy",
      "Cloud security controls",
    ],
  },
  {
    title: "Monitoring Layer",
    description:
      "Continuous logging, anomaly detection, and alerting — maintaining real-time visibility into system behaviour across all layers, with event correlation, risk signal aggregation, and automated escalation triggers.",
    primary: [
      "Real-time anomaly detection",
      "Event correlation engine",
      "Risk signal aggregation",
    ],
    secondary: ["Centralised logging (immutable)"],
  },
];

export default function SecurityArchitecture() {
  return (
    <section
  id="architecture-table"
  className="bg-white py-20 dark:bg-slate-950"
>
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Security Architecture
          </p>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Layered Security Architecture
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            Five security layers — each defending a distinct system boundary,
            each with defined controls, risk mitigations, and enforcement
            mechanisms.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_4px_rgba(13,21,38,0.04),0_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-700 dark:bg-slate-900">

          {/* Table Header */}
          <div className="border-b border-slate-200 bg-slate-100 px-6 py-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-center text-base font-bold text-slate-900 dark:text-white">
              ZoikoTime Security Architecture — Layer Breakdown
            </h3>
          </div>

          {/* Table Rows */}
          <div>

                        {architecture.map((layer, index) => (
              <div
                key={layer.title}
                className={`grid grid-cols-1 md:grid-cols-[220px_1fr] ${
                  index !== architecture.length - 1
                    ? "border-b border-slate-200 dark:border-slate-700"
                    : ""
                }`}
              >
                {/* Left Title */}
                <div className="bg-slate-100 px-6 py-6 dark:bg-slate-800 md:border-r md:border-slate-200 dark:md:border-slate-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {layer.title}
                  </h4>
                </div>

                {/* Right Content */}
                <div className="px-6 py-6">

                  <p className="max-w-4xl text-sm leading-6 text-slate-500 dark:text-slate-300">
                    {layer.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">

                    {layer.primary.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-teal-600/20 bg-emerald-50 px-4 py-2 text-xs font-semibold text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300"
                      >
                        {item}
                      </span>
                    ))}

                    {layer.secondary.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            ))}

                      </div>
        </div>
      </div>
    </section>
  );
}