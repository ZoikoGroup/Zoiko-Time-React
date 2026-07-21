import React from "react";

const assuranceCards = [
  {
    image: "/about-us/home.png",
    title: "Executive Scrutiny Ready",
    description:
      "Built to withstand board-level governance review, CISO assessment, and internal audit examination — not just day-to-day operational use.",
  },
  {
    image: "/about-us/read.png",
    title: "Procurement Due Diligence",
    description:
      "Complete security documentation, compliance alignment, and architecture transparency to satisfy the most rigorous enterprise procurement processes.",
  },
  {
    image: "/about-us/globe.png",
    title: "Regulatory Inspection Ready",
    description:
      "Designed to support regulatory scrutiny across jurisdictions — with audit-ready records, jurisdiction-aware policy controls, and defensible documentation at every level.",
  },
  {
    image: "/about-us/setting.png",
    title: "Real-World Operational Complexity",
    description:
      "Proven across multi-jurisdiction deployments, contractor-heavy operations, and hybrid workforce models — not just controlled enterprise pilots.",
  },
];

export default function Purpose() {
  return (
    <section className="w-full bg-slate-100 px-5 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1040px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div>
          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-600 dark:text-teal-400">
            Our Purpose
          </p>

          <h2 className="mt-7 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-10">
            Enable Accurate Measurement.
            <br />
            Responsible Governance.
            <br />
            Intelligent Performance.
          </h2>

          <p className="mt-8 max-w-[520px] text-base leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime exists to enable organisations to measure work
            accurately, govern it responsibly, and improve performance
            intelligently — without compromising trust, privacy, or employee
            rights.
          </p>

          {/* Highlight Box */}
          <div className="mt-10 rounded-xl border border-slate-200 border-l-[3px] border-l-teal-600 bg-emerald-50 p-7 dark:border-slate-700 dark:border-l-teal-500 dark:bg-emerald-950/30">
            <p className="text-base leading-6">
              <span className="font-bold text-slate-900 dark:text-white">
                ZoikoTime is not a surveillance product.
              </span>{" "}
              <span className="font-medium text-teal-700 dark:text-teal-300">
                It is a governed system of record for workforce accountability
                and performance intelligence — engineered to withstand executive
                scrutiny, procurement due diligence, regulatory inspection, and
                real-world operational complexity.
              </span>
            </p>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 gap-5">
          {assuranceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_1px_2px_0px_rgba(13,21,38,0.04),0px_1px_4px_0px_rgba(13,21,38,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-start gap-4">
                {/* Icon Image */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50">
                  <img
                    src={card.image}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}