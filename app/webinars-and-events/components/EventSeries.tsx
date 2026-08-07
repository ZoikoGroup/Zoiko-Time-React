"use client";

export default function EventSeries() {
  return (
    <section className="bg-slate-900 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Event Series
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Governed Time, Explained
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-slate-300">
            A monthly series unpacking one part of the evidence model — from
            state machines to human review — in plain language.
          </p>

          {/* Episode Pills */}
          <div className="mt-8 flex flex-col gap-3">
            {/* First Row */}
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
                Ep. 04 · Rule Trace
              </div>

              <div className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
                Ep. 05 · Exception Recovery
              </div>
            </div>

            {/* Second Row */}
            <div>
              <div className="inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur">
                Ep. 06 · Live Aug 20
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}