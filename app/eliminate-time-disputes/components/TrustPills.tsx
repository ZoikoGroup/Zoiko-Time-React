"use client";

const trustItems = [
  "Reviewable records",
  "Preserved evidence",
  "Explainable policies",
  "Accountable human decisions",
  "Role-based access",
];

export default function TrustPills() {
  return (
    <section className="w-full bg-white px-5 py-10 dark:bg-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1054px] flex-wrap items-center justify-center gap-3 sm:gap-4">
        {trustItems.map((item) => (
          <div
            key={item}
            className="inline-flex min-h-10 items-center gap-2 rounded-[30px] border border-emerald-100 bg-white px-4 py-2 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-emerald-900/50 dark:bg-slate-900"
          >
            <span className="relative flex size-4 shrink-0 items-center justify-center">
              <span className="h-2 w-2.5 rounded-[2px] border-2 border-teal-600 dark:border-teal-400" />
            </span>

            <span className="whitespace-nowrap text-xs font-semibold leading-5 text-slate-800 dark:text-slate-200">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}