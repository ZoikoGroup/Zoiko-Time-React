
import React from "react";

const riskCards = [
  {
    image: "/about-us/search.png",
    title: "Verification Gaps",
    description:
      "Organisations cannot consistently prove that recorded work reflects legitimate, policy-aligned activity — particularly across distributed and contractor-heavy teams. The absence of verification is itself an audit and legal risk that accumulates with every working day.",
  },
  {
    image: "/about-us/weigh.png",
    title: "Operational and Legal Exposure",
    description:
      "Wage-and-hour risk, compliance drift, payroll leakage, and inconsistent documentation create material financial and legal exposure — exposure that is often invisible until it surfaces in an audit, dispute, or regulatory investigation.",
  },
  {
    image: "/about-us/chart.png",
    title: "Performance Blind Spots",
    description:
      "Activity data alone does not explain outcomes, capacity constraints, or delivery inefficiencies — leaving leadership without the actionable, evidence-based intelligence needed to manage performance fairly and effectively at scale.",
  },
];

export default function WhyZoikoTime() {
  return (
    <section className="w-full bg-slate-100 px-5 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-600 dark:text-teal-400">
            Why ZoikoTime Exists
          </p>

          <h2 className="mx-auto mt-7 max-w-[1000px] text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-10">
            Distributed Work Changed the
            <br className="hidden sm:block" />
            Structure of Organisational Risk
          </h2>

          <p className="mx-auto mt-8 max-w-[620px] text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            Distributed work did not just change where work happens — it
            changed the nature, scale, and complexity of the risks that
            organisations must govern. ZoikoTime addresses these challenges not
            as features, but as core infrastructure.
          </p>
        </div>

        {/* Risk Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {riskCards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[380px] overflow-hidden rounded-xl border border-slate-200 bg-white p-8 shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-600/20 bg-emerald-50 dark:bg-emerald-950/40">
                <img
                  src={card.image}
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-7 text-lg font-bold leading-7 text-slate-900 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}