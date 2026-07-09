import React from "react";

export default function ProhibitedUses() {
  const sections = [
    {
      title: "7.1 Illegal, Fraudulent, or Harmful Activity",
      items: [
        "Violating any applicable law, regulation, court order, labor obligation, data protection obligation, or employment law.",
        "Engaging in fraud, deception, impersonation, payroll fraud, billing fraud, evidence tampering, or falsification of work records.",
        "Facilitating criminal conduct, regulatory evasion, money laundering, unauthorized surveillance, or unlawful discrimination.",
      ],
    },
    {
      title: "7.2 Unlawful or Excessive Workforce Monitoring",
      items: [
        "Using ZoikoTime for covert monitoring where notice, transparency, consent, or lawful basis is required.",
        "Monitoring workers outside lawful working hours or beyond the scope disclosed to them.",
        "Collecting data that is unnecessary, disproportionate, or unrelated to a legitimate business purpose.",
        "Deploying in jurisdictions requiring works council or union approval without completing that process.",
      ],
    },
    {
      title: "7.3 Discrimination, Harassment, and Unfair Treatment",
      items: [
        "Using the Service to discriminate against, harass, target, retaliate against, or unfairly disadvantage any person or protected group.",
        "Using AI-assisted outputs as the sole basis for adverse employment action, disciplinary action, or termination without human review.",
      ],
    },
    {
      title: "7.4 Security Abuse and Platform Interference",
      items: [
        "Accessing accounts, systems, or data without authorization.",
        "Probing, scanning, or penetration testing the Service without prior written authorization.",
        "Introducing malware, ransomware, or other harmful code.",
        "Circumventing security controls, rate limits, authentication mechanisms, or audit logs.",
      ],
    },
    {
      title: "7.5 Data Misuse and Privacy Abuse",
      items: [
        "Uploading, collecting, or processing data without a lawful basis or legitimate business purpose.",
        "Attempting to re-identify de-identified or anonymized data.",
        "Exporting, sharing, selling, or transferring Customer Data except as permitted by law and contract.",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          7. Prohibited Uses
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Intro */}
        <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          Customers and Authorized Users must not use, attempt to use, permit,
          encourage, or assist any person to use the Service for any prohibited
          purpose.
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mt-10">
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold leading-8 text-slate-900 dark:text-white">
              {section.title}
            </h3>

            <ul className="mt-5 space-y-5">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-base font-bold leading-7 text-teal-600">
                    ›
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}