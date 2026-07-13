import Image from "next/image";

const threats = [
  {
    title: "Unauthorised Access",
    image: "/threatModel/access.png",
    mitigation: "→ Mitigated by RBAC, MFA, session controls",
    description:
      "Least-privilege access, mandatory MFA, session validation, and continuous access monitoring prevent both external attackers and insider threats from gaining access beyond their authorised scope.",
  },
  {
    title: "Data Exposure",
    image: "/threatModel/exposure.png",
    mitigation: "→ Mitigated by encryption and access restriction",
    description:
      "AES-256 at rest, TLS 1.3 in transit, and strict access controls at every data boundary ensure that workforce data cannot be exposed through network interception, storage breach, or unauthorised access.",
  },
  {
    title: "Insider Risk",
    image: "/threatModel/risk.png",
    mitigation: "→ Mitigated by audit logs and access controls",
    description:
      "Immutable audit logs, least-privilege enforcement, and role-scoped access controls limit the blast radius of insider risk and provide the forensic evidence required to detect, investigate, and resolve incidents.",
  },
  {
    title: "System Abuse",
    image: "/threatModel/abuse.png",
    mitigation: "→ Mitigated by anomaly detection",
    description:
      "Continuous anomaly detection identifies system abuse patterns—unusual access volumes, off-hours activity, configuration changes, and API misuse—before they can be exploited to extract data or disrupt operations.",
  },
  {
    title: "Infrastructure Attack",
    image: "/threatModel/attack.png",
    mitigation: "→ Mitigated by cloud security and isolation",
    description:
      "Zero-trust network architecture, environment segmentation, and cloud-native security controls defend the infrastructure layer—with geographic redundancy ensuring availability even under distributed attack scenarios.",
  },
  {
    title: "Supply Chain Risk",
    image: "/threatModel/supplychain.png",
    mitigation: "→ Mitigated by vendor evaluation and monitoring",
    description:
      "Third-party vendor risk management includes security evaluation before onboarding, restricted access scoping, dependency vulnerability monitoring, and ongoing oversight—reducing supply chain attack surface.",
  },
];

export default function ThreatModel() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">

                {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Threat Model
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Threat Model and Risk Approach
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            Five threat categories, each with specific mitigations built into
            the system architecture—demonstrating security thinking maturity
            to CISOs, security reviewers, and procurement teams.
          </p>
        </div>

        {/* Threat Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {threats.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(13,21,38,0.04),0_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Mitigation */}
              <p className="mt-4 text-sm font-semibold leading-6 text-teal-600 dark:text-teal-400">
                {item.mitigation}
              </p>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}

                  </div>
      </div>
    </section>
  );
}