import React from "react";
import Image from "next/image";

const disclosureCards = [
  {
    icon: "🔐",
    title: "Controlled Access",
    description:
      "Every evidence record has access policies — who can view, export, or share it, and under what conditions. Access is logged to the chain of custody automatically.",
  },
  {
    icon: "🖊️",
    title: "Data Redaction",
    description:
      "Sensitive fields — personal identifiers, unrelated third-party data, legally protected information — can be redacted before disclosure without affecting the integrity of the evidence record.",
  },
  {
    icon: "👥",
    title: "Role-Based Visibility",
    description:
      "Different roles receive different views of the same evidence. Auditors see the full record. Managers see operational summaries. Legal counsel sees evidence packages. All from one system.",
  },
];

export default function SelectiveDisclosure() {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-teal-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
                Selective Disclosure
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Share What Is Needed —
              <br />
              Protect What Is Sensitive
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              Evidence access is not binary. ZoikoTime provides granular control
              over who sees what — enabling organisations to share the right
              evidence with the right people, without exposing sensitive data
              unnecessarily.
            </p>

            <div className="mt-10 space-y-6">
              {disclosureCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-xl shrink-0">
                      {card.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">
              <Image
                src="/SelectiveDisclosure/image.png"
                alt="Selective Disclosure"
                width={612}
                height={813}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}