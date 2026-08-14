"use client";

const authorities = [
  {
    title: "Product behaviour",
    source: "Product Documentation.",
  },
  {
    title: "Troubleshooting",
    source: "Help Center.",
  },
  {
    title: "Shipped changes",
    source: "Release Notes.",
  },
  {
    title: "Security & privacy",
    source: "Trust & Governance.",
  },
  {
    title: "Live operational state",
    source: "System Status.",
  },
  {
    title: "Procurement & contracts",
    source: "Enterprise & Procurement.",
  },
  {
    title: "Commercial terms",
    source: "Pricing — never duplicated here.",
  },
  {
    title: "Accessibility",
    source: "Tested scope and known limitations.",
    highlighted: true,
  },
];

export default function Authority() {
  return (
    <section className="w-full bg-[#071b38] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-5 sm:px-7">

        {/* Header */}
        <div className="flex w-full max-w-[820px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-white sm:text-4xl">
            One question, one authority
          </h2>

          <p className="max-w-[643px] text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            The Resource Center summarizes what a destination governs and then
            gets out of the way. It does not restate security posture, quote
            pricing, or explain product behaviour in its own words.
          </p>
        </div>

        {/* Authority cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorities.map((item) => (
            <div
              key={item.title}
              className={`flex min-h-[150px] flex-col rounded-2xl border px-6 py-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] transition-colors ${
                item.highlighted
                  ? "border-emerald-400/30 bg-emerald-400/10"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <h3 className="text-base font-bold leading-6 text-white">
                {item.title}
              </h3>

              <p className="mt-1.5 text-base font-normal leading-6 text-slate-300">
                {item.source}
              </p>
            </div>
          ))}
        </div>

        {/* Governance statement */}
        <div className="flex w-full max-w-[820px] flex-col items-center gap-4 text-center">
          <p className="text-sm font-bold leading-6 text-white sm:text-base">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or
            configuration.
          </p>

          <p className="text-xs font-normal leading-5 text-slate-400">
            Every resource indexed here preserves worker visibility,
            correction rights, human decision authority, and the
            deterministic-classification boundary.
          </p>
        </div>
      </div>
    </section>
  );
}