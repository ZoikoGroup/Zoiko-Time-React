import React from "react";

const evidenceCards = [
  {
    icon: "🔗",
    title: "Traceable Origin",
    description:
      "Every record has a cryptographically verifiable origin — when it was created, by which system, and under what policy context.",
  },
  {
    icon: "🔏",
    title: "Integrity Verification",
    description:
      "Hash-based tamper detection ensures any modification — however minor — is permanently and instantly detectable on review.",
  },
  {
    icon: "📋",
    title: "Complete Context Preservation",
    description:
      "Identity, jurisdiction, policy framework, and environmental context are embedded in every record — nothing is reconstructed after the fact.",
  },
];

const legalCards = [
  {
    icon: "🏛️",
    title: "Legal Review & Proceedings",
    description:
      "Evidence packages structured to meet court and tribunal requirements — origin verifiable, integrity confirmed, chain of custody complete, and policy context fully documented for legal counsel.",
  },
  {
    icon: "⚖️",
    title: "Dispute Resolution",
    description:
      "Verified evidence that resolves employment disputes, contractor disagreements, and performance challenges — providing a defensible, impartial record that reduces litigation risk and resolution time.",
  },
  {
    icon: "🔎",
    title: "Regulatory Inspection",
    description:
      "Export-ready evidence packages formatted for regulatory submission — labour authority inspections, data protection audits, financial compliance reviews — delivered in the structure regulators require.",
  },
];

export default function LegalAdmissibility() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-teal-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
                Legal Admissibility
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Evidence That Stands Up in
              <br className="hidden md:block" />
              Legal Proceedings
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
              ZoikoTime is designed with legal admissibility as a foundational
              requirement — not a feature added after the fact. Every evidence
              record meets the standards required for formal legal proceedings.
            </p>

            <div className="mt-10 space-y-6">
              {evidenceCards.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {legalCards.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-8"
              >
                <div className="h-11 w-11 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}