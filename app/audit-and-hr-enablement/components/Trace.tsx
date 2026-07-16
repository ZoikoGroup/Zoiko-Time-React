"use client";

const traceabilityPoints = [
  {
    icon: "🏛️",
    title: "Regulatory Audit Support",
    description:
      "Provide complete decision records to regulators on demand — no manual reconstruction required.",
  },
  {
    icon: "⚖️",
    title: "Legal Defence Readiness",
    description:
      "Every decision is backed by verified evidence and policy references, creating a defensible position in any dispute.",
  },
  {
    icon: "📊",
    title: "Internal Accountability",
    description:
      "Management and board-level reporting with full visibility into how and why decisions were made.",
  },
];

export default function Trace() {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
        {/* Left Content */}
        <div>
          {/* Label */}
          <p className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Traceability
          </p>

          {/* Heading */}
          <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Every Decision Is Recorded and Defensible
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
            Whether facing an internal audit, regulatory review, or legal
            challenge — every workforce decision made through ZoikoTime is
            backed by a complete, immutable record.
          </p>

          {/* Traceability Cards */}
          <div className="mt-10 space-y-5">
            {traceabilityPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl transition-all duration-300 hover:border-teal-500/40"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-950 text-base">
                    {point.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold leading-6 text-white">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src="/Trace/image.png"
            alt="Decision traceability"
            className="h-full min-h-[500px] w-full object-cover sm:min-h-[620px]"
          />
        </div>
      </div>
    </section>
  );
}