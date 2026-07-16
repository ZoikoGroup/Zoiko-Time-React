"use client";

const comparisonRows = [
  "Case management with unique IDs and full evidence linking",
  "Decision frameworks that enforce policy consistency",
  "Outcome tracking and closed-loop feedback intelligence",
  "Multi-step governed workflows with escalation and conditional logic",
  "Immutable decision records with full audit trail export",
  "Cross-functional alignment across HR, Audit, and Compliance",
];

export default function WhyZ() {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1040px]">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Why ZoikoTime
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Why Traditional Systems Fail to Execute Decisions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Legacy HR and audit tools were not built for governed decision
            execution. ZoikoTime was.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Desktop Header */}
          <div className="hidden grid-cols-[1fr_160px_288px] md:grid">
            <div className="border-b border-slate-800 bg-slate-800/70 px-7 py-5">
              <span className="text-sm font-bold text-white">Capability</span>
            </div>

            <div className="border-b border-slate-800 bg-slate-800/70 px-4 py-5 text-center">
              <span className="text-sm font-bold text-slate-400">
                Legacy Tools
              </span>
            </div>

            <div className="border-b border-slate-800 bg-teal-950/60 px-4 py-5 text-center">
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                <span className="text-sm font-bold text-teal-400">
                  ZoikoTime®
                </span>

                <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-teal-400">
                  Decision OS
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="grid grid-cols-[1fr_64px_64px] border-b border-slate-800 md:hidden">
            <div className="bg-slate-800/70 px-4 py-4">
              <span className="text-xs font-bold text-white">
                Capability
              </span>
            </div>

            <div className="bg-slate-800/70 px-2 py-4 text-center">
              <span className="text-[10px] font-bold text-slate-400">
                Legacy
              </span>
            </div>

            <div className="bg-teal-950/60 px-2 py-4 text-center">
              <span className="text-[10px] font-bold text-teal-400">
                Zoiko
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, index) => (
            <div
              key={row}
              className="grid grid-cols-[1fr_64px_64px] md:grid-cols-[1fr_160px_288px]"
            >
              {/* Capability */}
              <div
                className={`px-4 py-5 sm:px-7 ${
                  index % 2 === 1 ? "bg-slate-800/30" : "bg-slate-900"
                } ${
                  index !== comparisonRows.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <span className="text-sm leading-6 text-slate-300 sm:text-base">
                  {row}
                </span>
              </div>

              {/* Legacy */}
              <div
                className={`flex items-center justify-center ${
                  index % 2 === 1 ? "bg-slate-800/30" : "bg-slate-900"
                } ${
                  index !== comparisonRows.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <span className="text-xl text-slate-600">✗</span>
              </div>

              {/* ZoikoTime */}
              <div
                className={`flex items-center justify-center bg-teal-950/20 ${
                  index !== comparisonRows.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }`}
              >
                <span className="text-xl font-medium text-teal-400">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}