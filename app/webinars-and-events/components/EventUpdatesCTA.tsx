"use client";

export default function EventUpdatesCTA() {
  return (
    <section id="get-event-update" className="bg-white py-20 dark:bg-slate-950">
      <div  className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 dark:border-emerald-900/40 dark:bg-emerald-950/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Get event updates
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                New sessions, series episodes, and on-demand recordings — no
                more than twice a month.
              </p>
            </div>

            {/* Right Form */}
            <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
              />

              <button
                type="button"
                className="h-12 rounded-full bg-teal-600 px-8 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}