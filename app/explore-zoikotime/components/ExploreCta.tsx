import Link from "next/link";

export default function ExploreCta() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6 pb-20 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 px-8 py-14 text-center lg:px-16">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-300">
              Get Started
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-4 max-w-[720px] text-3xl font-semibold leading-tight text-white md:text-4xl">
            Find your path, then take the next step.
          </h2>

          <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-slate-300">
            Explore by goal, role, or environment — or go straight to a trial,
            demo, or the full product directory.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#explore-by-goal"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-teal-600 px-7 text-sm font-semibold text-white transition hover:bg-teal-700 sm:w-auto"
            >
              Start Exploring
            </Link>

            <Link
              href="/request-enterprise-demo"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Request Enterprise Demo
            </Link>

            <Link
              href="/how-zoikotime-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              See How ZoikoTime Works
            </Link>
          </div>

          <p className="mt-7 text-xs leading-5 text-slate-400">
            Recommendations are explainable routing suggestions, not legal,
            compliance, or payroll determinations.
          </p>

        </div>
      </div>
    </section>
  );
}
