"use client";

const proofItems = [
  {
    title: "Hybrid rollout story",
    description:
      "Reference available once customer approval and evidence are documented.",
  },
  {
    title: "Payroll-readiness outcome",
    description:
      "Measured outcomes shown only with customer-verified figures.",
  },
  {
    title: "Works-council review",
    description:
      "Privacy & governance reference available where permitted.",
  },
];

export default function Proof() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Customer Proof
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Evidence-backed — only where approved
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Logos, quotes, and outcomes appear only with documented customer
            approval and evidence.
          </p>
        </div>

        {/* Proof cards */}
        <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3">
          {proofItems.map((item) => (
            <div
              key={item.title}
              className="
                flex
                min-h-40
                flex-col
                items-center
                rounded-2xl
                border
                border-gray-300
                bg-white
                px-6
                py-6
                text-center
                transition-colors
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Approval badge */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-emerald-100
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  leading-4
                  text-gray-700
                  dark:border-emerald-900/60
                  dark:text-slate-300
                "
              >
                Pending approval
              </span>

              {/* Title */}
              <h3 className="mt-4 text-base font-bold leading-6 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[280px] text-xs leading-5 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}