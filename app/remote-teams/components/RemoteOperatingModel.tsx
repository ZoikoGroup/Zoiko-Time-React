"use client";

export default function RemoteOperatingModel() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1300px] px-6 lg:pl-14 lg:pr-20">
        <div className="flex flex-col gap-12">
          {/* Heading */}
          <div className="flex max-w-[700px] flex-col items-start gap-3.5">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-400">
                HOW IT WORKS
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
              The Remote Team Operating
              <br />
              Model
            </h2>

            <p className="text-base leading-7 text-gray-500 dark:text-slate-400">
              Seven stages, from defining local workday rules through
              continuous improvement — every stage creates evidence.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
            {/* Left Navigation */}
            <div className="w-full border-l-2 border-slate-200 lg:w-72 dark:border-slate-700">
              <div className="border-l-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 -ml-[2px] rounded-r-lg px-5 py-3">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  1 · Define
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  2 · Assign and publish
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  3 · Coordinate
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  4 · Capture and review time
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  5 · Handoff and acknowledge
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  6 · Resolve exceptions
                </span>
              </div>

              <div className="px-5 py-3">
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
                  7 · Improve
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="border-b border-slate-200 pb-8 dark:border-slate-700">
                <span className="text-xs font-bold tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
                  STAGE 1
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                  Define
                </h3>

                <p className="mt-4 max-w-[560px] text-sm leading-6 text-gray-500 dark:text-slate-400">
                  Establish local workday rules, working windows, core overlap,
                  quiet hours, handoffs, availability, time, exceptions, and
                  privacy.
                </p>

                <div className="mt-6 inline-flex rounded-lg bg-emerald-50 px-4 py-2 dark:bg-emerald-900/20">
                  <span className="text-xs leading-5 text-emerald-700 dark:text-emerald-300">
                    Evidence: policy version · scope · owner · approval ·
                    worker communication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}