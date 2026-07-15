import React from "react";

const impacts = [
  {
    role: "CFO",
    title: "Eliminates Unverified Payroll Spend",
    description:
      "Every payroll period is backed by verified session evidence—unverified sessions never qualify for payment, eliminating the primary source of payroll leakage across distributed workforces.",
  },
  {
    role: "CIO",
    title: "Ensures Data Integrity",
    description:
      "Workforce data integrity is established at the source—every data point linked to a verified identity and session, providing a trusted foundation for every downstream analysis and report.",
  },
  {
    role: "Compliance",
    title: "Enables Audit Defensibility",
    description:
      "Every session generates a tamper-evident evidence record with AI reasoning—providing the structured, verifiable documentation that regulators, auditors, and legal proceedings require.",
  },
];

export default function ImpactCards() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Enterprise Impact
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What This Means for Your Organisation
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {impacts.map((item) => (
            <div
              key={item.role}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
            >
              {/* Top Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  {item.role}
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}