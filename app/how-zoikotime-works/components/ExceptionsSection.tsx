export default function ExceptionsSection() {
  const exceptions = [
    {
      label: "Capture",
      title: "Missing or late data",
      desc: "Incomplete, duplicate, conflicting, late, or future-dated signals are quarantined for review with a clear recovery path.",
    },
    {
      label: "Classify",
      title: "Conflicting or stale policy",
      desc: "Conflicting rules or unavailable/superseded policy raise a neutral state and route to jurisdiction or policy review.",
    },
    {
      label: "Approve",
      title: "Authority conflict",
      desc: "Conflicting authority blocks completion and routes to escalation — high-impact decisions require confirmation and reason.",
    },
    {
      label: "Export",
      title: "Failed delivery",
      desc: "Rejected packages, schema mismatch, duplicates, or downstream conflicts enter governed reconciliation flows.",
    },
    {
      label: "Evidence",
      title: "Corrected & superseded",
      desc: "Corrections create reviewable versions; superseded records stay linked in the ledger, never overwritten.",
    },
    {
      label: "Recovery",
      title: "Human-controlled resolution",
      desc: "Every exception resolves with an authorized human, a reason, and a preserved evidence trail.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:px-32 lg:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3">
        
        {/* Label */}
        <div className="text-center text-xs font-semibold uppercase tracking-widest text-teal-600">
          Exceptions
        </div>

        {/* Heading */}
        <h2
          className="
            max-w-[820px]
            text-center
            text-3xl
            font-bold
            leading-10
            text-slate-800
            dark:text-white
            lg:text-4xl
          "
        >
          When something is missing, conflicting, stale,
          <br className="hidden lg:block" />
          or fails delivery
        </h2>

        {/* Description */}
        <p
          className="
            max-w-[680px]
            text-center
            text-base
            leading-7
            text-gray-500
            dark:text-slate-400
          "
        >
          Not every unusual record is a problem. Exceptions route into
          governed correction and reconciliation — never silent drops or
          automatic judgments.
        </p>


        {/* Cards */}
        <div
          className="
            mt-8
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {exceptions.map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]
                shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)]
                dark:border-slate-800
                dark:bg-slate-900
              "
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {item.label}
              </div>

              <h3
                className="
                  mt-2
                  text-base
                  font-semibold
                  leading-7
                  text-slate-800
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-gray-500
                  dark:text-slate-400
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}