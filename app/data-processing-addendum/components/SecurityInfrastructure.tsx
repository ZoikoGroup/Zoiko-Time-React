import React from "react";
import Image from "next/image";

const securityCards = [
  {
    icon: "/SecurityInfrastructure/encryption.png",
    title: "Encryption",
    description:
      "AES-256 encryption at rest applied from point of data capture. TLS 1.3 enforced in transit across all system pathways. Encryption is architectural — cannot be disabled by configuration.",
    tags: ["GDPR Art. 32", "CC6.7", "A.10"],
  },
  {
    icon: "/SecurityInfrastructure/control.png",
    title: "Role-Based Access Control",
    description:
      "Least-privilege access enforced at platform architecture. Every access event validated against role assignment. Admin access requires MFA re-authentication. All access events logged immutably.",
    tags: ["GDPR Art. 32", "CC6.1", "A.9"],
  },
  {
    icon: "/SecurityInfrastructure/audit.png",
    title: "Immutable Audit Logging",
    description:
      "All processing actions, data access events, and configuration changes logged to an append-only, tamper-evident audit store. SHA-256 integrity verification on every record read.",
    tags: ["GDPR Art. 30", "CC7.2", "A.12"],
  },
  {
    icon: "/SecurityInfrastructure/monitoring.png",
    title: "Continuous Anomaly Monitoring",
    description:
      "Real-time anomaly detection across all processing operations — session signals, access patterns, and system events monitored continuously against defined baselines. Human escalation for all defined threshold breaches.",
    tags: ["GDPR Art. 32", "CC7.3", "A.12"],
  },
  {
    icon: "/SecurityInfrastructure/continuity.png",
    title: "Business Continuity",
    description:
      "Redundant processing infrastructure with defined RTO and RPO commitments. Regular resilience testing and documented incident response procedures — maintained under ISO 22301 business continuity principles.",
    tags: ["GDPR Art. 32", "A1.2", "A.17"],
  },
  {
    icon: "/SecurityInfrastructure/testing.png",
    title: "Regular Testing & Review",
    description:
      "Annual penetration testing by independent third parties. Quarterly internal vulnerability assessment. Continuous security monitoring with defined escalation thresholds and remediation timelines.",
    tags: ["GDPR Art. 32", "CC4.1", "A.14"],
  },
];

export default function SecurityInfrastructure() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Security Infrastructure Article 32 Compliant
          </h2>

          <p className="mt-4 text-slate-500 dark:text-slate-400 text-base leading-7">
            ZoikoTime&apos;s security measures are implemented at the architecture
            level — independently verified against SOC 2 Type II, ISO 27001,
            and GDPR Article 32 requirements.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {securityCards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-7"
            >

              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-teal-500" />


              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="mb-6"
              />


              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {card.title}
              </h3>


              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 min-h-[140px]">
                {card.description}
              </p>


              <div className="flex flex-wrap gap-2 mt-6">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      tag.includes("GDPR")
                        ? "bg-emerald-50 dark:bg-emerald-950 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                        : tag.startsWith("CC")
                        ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                        : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}