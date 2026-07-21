export default function PackContents() {
  const items = [
    {
      title: "ROI Business Case",
      description: (
        <>
          Directional financial value and assumptions
          <br className="hidden sm:block" />
          for finance review.
        </>
      ),
      stakeholder: "CFO / Finance",
      question: "Is it worth it?",
    },
    {
      title: "Security Posture Overview",
      description: (
        <>
          Architecture, access controls, and security-first
          <br className="hidden sm:block" />
          design.
        </>
      ),
      stakeholder: "CISO / Security",
      question: "Is it safe?",
    },
    {
      title: "Privacy Safeguards",
      description: (
        <>
          What ZoikoTime does — and does not —
          <br className="hidden sm:block" />
          capture.
        </>
      ),
      stakeholder: "Legal / HR",
      question: "Is it compliant?",
    },
    {
      title: "Technical Architecture",
      description: (
        <>
          Integration model, identity, and deployment
          <br className="hidden sm:block" />
          options.
        </>
      ),
      stakeholder: "IT",
      question: "Will it fit?",
    },
    {
      title: "Procurement Q&A",
      description: (
        <>
          Common procurement questions answered
          <br className="hidden sm:block" />
          up front.
        </>
      ),
      stakeholder: "Procurement",
      question: "Can we buy it?",
    },
    {
      title: "Legal Review Materials",
      description: (
        <>
          Data handling, retention, and contractual
          <br className="hidden sm:block" />
          essentials.
        </>
      ),
      stakeholder: "Legal",
      question: "Is it defensible?",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-10 lg:py-[74px]">
      <div className="mx-auto max-w-[1132px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Inside The Pack
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Final approval pack contents
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-slate-400">
            A structured approval bundle — each item maps to a stakeholder and
            the decision it supports.
          </p>
        </div>

        {/* Content Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative min-h-[176px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_6px_18px_rgba(14,31,61,0.05)] transition-colors dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Included Badge */}
              <span className="absolute right-6 top-5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-teal-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                Included
              </span>

              {/* Title */}
              <h3 className="pr-20 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:bg-emerald-900/30 dark:text-slate-200">
                  {item.stakeholder}
                </span>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-teal-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  {item.question}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}