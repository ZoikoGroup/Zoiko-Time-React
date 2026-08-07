"use client";

export default function Workday() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1300px] items-center gap-16 lg:grid-cols-[340px_1fr] lg:gap-24">
        {/* Phone Preview */}
        <div className="mx-auto w-full max-w-[316px] rounded-[36px] bg-slate-900 p-3 shadow-[0px_24px_50px_-26px_rgba(10,22,40,0.35)]">
          <div className="rounded-[28px] bg-white p-[18px] dark:bg-slate-900">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Wednesday, local time · Lisbon
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              09:00–17:00
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Working window · core overlap
              <br />
              13:00–16:00
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  My Time
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                  6h 42m captured · pending approval
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Handoffs
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                  1 to send · 2 received · 1 awaiting clarification
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  My Requests
                </p>

                <p className="mt-2 text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                  Schedule change — under review
                </p>
              </div>

              <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-500/10">
                <p className="text-xs font-semibold leading-5 text-violet-700 dark:text-violet-300">
                  🌙 Quiet hours begin at 18:00.
                  <br />
                  New nonurgent notifications can be delayed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              Worker Self-Service
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            My Remote Workday
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Every worker sees their own local day, boundaries, time,
            handoffs, requests, and privacy information — nothing about
            anyone else.
          </p>

          <div className="mt-8 space-y-4 lg:pl-8">
            <div className="rounded-lg border-l-[3px] border-emerald-600 bg-emerald-50 px-4 py-3 dark:bg-emerald-500/10">
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                "Your working window is 9:00 AM–5:00 PM in your local
                timezone." — not "You must remain online during these
                hours."
              </p>
            </div>

            <div className="rounded-lg border-l-[3px] border-emerald-600 bg-emerald-50 px-4 py-3 dark:bg-emerald-500/10">
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                "Your time source is offline. You can continue and submit
                when the connection returns." — not a fault assumption.
              </p>
            </div>

            <div className="rounded-lg border-l-[3px] border-emerald-600 bg-emerald-50 px-4 py-3 dark:bg-emerald-500/10">
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                "Request a correction or provide context." — never "Prove
                that you worked."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}