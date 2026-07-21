import Image from "next/image";
import React from "react";

export default function Proof() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Proof & Positioning
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Why teams switch to ZoikoTime.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Image
                    src="/start-free/activity.png"
                    alt="Activity"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
                    Switching from Time Doctor / Hubstaff
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    From activity signals to workforce assurance
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    ZoikoTime adds policy governance, audit-ready evidence,
                    worker transparency, and defensible records on top of time
                    capture—not just screenshots.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Image
                    src="/start-free/timer.png"
                    alt="Timer"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
                    Switching from Toggl / Clockify
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    From project timers to verified workforce records
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    Move from self-reported timer captures to governed,
                    verified, policy-aware records that compliance, HR, and
                    finance teams can trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <Image
                    src="/start-free/office.png"
                    alt="Office"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-gray-400">
                    Filling gaps beside Deel / HRIS tools
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Specialized time, evidence, and accountability
                    infrastructure
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    ZoikoTime handles workforce time verification, evidence
                    management, and audit records while integrating with your HR
                    and payroll systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-teal-50 dark:bg-slate-900 p-8 flex flex-col">
            <div className="text-6xl text-teal-500/30 leading-none">“</div>

            <p className="mt-2 text-lg leading-8 text-gray-900 dark:text-white">
              "ZoikoTime gave us one place to verify work, review exceptions,
              and prepare reports. Our payroll team went from two days of
              reconciliation to a morning task."
            </p>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Operations Director
              </h4>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Professional services firm · 140 employees · Distributed
                workforce
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-8">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-6">
                During their trial they hit all 5 milestones within 8 days.
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 text-center">
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-400">
                    8d
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    To full activation
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 text-center">
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-400">
                    73%
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Dispute resolution
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 text-center">
                  <div className="text-3xl font-bold text-teal-700 dark:text-teal-400">
                    2→1
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Day payroll prep
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}