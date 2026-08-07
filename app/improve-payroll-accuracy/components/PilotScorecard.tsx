const criteria = [
  {
    measure: "Payroll-ready rate",
    question: "Are more required records approved and export-ready by cutoff?",
  },
  {
    measure: "Exception age",
    question: "Are missing or conflicting records resolved earlier?",
  },
  {
    measure: "Correction traceability",
    question:
      "Can reviewers reconstruct every consequential change and approval?",
  },
  {
    measure: "Export validation",
    question: "Can the team detect, explain, and resolve rejected records?",
  },
  {
    measure: "Reconciliation",
    question: "Do approved totals and delivered totals agree?",
  },
];

const columns = "md:grid-cols-[27.8%_72.2%]";

export default function PilotScorecard() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Validate It
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Prove the accuracy gains in your own pilot
          </h2>

          <p className="max-w-[650px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Where signed public proof isn&apos;t available, we use a rigorous
            pilot scorecard instead of fabricated testimonials.
          </p>

        </div>

        {/* Scorecard */}
        <div className="mx-auto mt-12 w-full max-w-[900px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-950">

          <div className="bg-gradient-to-r from-[#10A28D] to-[#0C7D6D] px-[22px] py-4">
            <p className="text-base font-semibold leading-6 text-white">
              Payroll accuracy pilot scorecard
            </p>
          </div>

          {criteria.map((row) => (
            <div
              key={row.measure}
              className={`grid grid-cols-1 gap-1 border-t border-[#E4E9EE] px-[22px] py-3 md:items-center md:gap-0 md:px-0 md:py-0 ${columns} dark:border-slate-800`}
            >

              <p className="text-xs font-semibold leading-5 text-[#0E1F3D] md:px-[22px] md:py-3 dark:text-white">
                {row.measure}
              </p>

              <p className="text-xs font-normal leading-5 text-[#3C4858] md:px-[22px] md:py-3 dark:text-slate-300">
                {row.question}
              </p>

            </div>
          ))}

        </div>

        {/* Preferred Proof Note */}
        <div className="mx-auto mt-8 w-full max-w-[860px] rounded-xl border border-[#C9EAE2] bg-[#EAF6F3] px-6 py-[18px] dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-sm font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            Preferred proof is a signed customer story with named role, scope,
            measured result, time period, and method — never invented people,
            logos, or unverifiable savings.
          </p>
        </div>

      </div>
    </section>
  );
}
