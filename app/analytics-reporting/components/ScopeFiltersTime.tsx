import Image from "next/image";

export default function ScopeFiltersTime() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Scope, Dimensions, Filters &amp; Time
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Controls That Prevent an Invalid Comparison
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Filters are not just convenience. Each one changes what a number
            means, so scope, record state, time zone, and policy context stay
            visible while you work.
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <Image
            src="/analytics-reporting/scope-filters-time.png"
            alt="Scope Dimensions Filters and Time Dashboard"
            width={1124}
            height={571}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}