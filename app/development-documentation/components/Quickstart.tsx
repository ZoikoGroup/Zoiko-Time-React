"use client";

const steps = [
  {
    number: "1",
    title: "Get a scoped API key",
    description: (
      <>
        Create a least-privilege key in the
        <br className="hidden sm:block" /> developer console and set
      </>
    ),
    code: "ZOIKO_API_KEY",
    suffix: ".",
  },
  {
    number: "2",
    title: "Make a request",
    description: (
      <>
        Call{" "}
        <code className="rounded-md border border-slate-200 bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400">
          GET /v1/records
        </code>{" "}
        with your key and a pinned{" "}
        <code className="rounded-md border border-slate-200 bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400">
          Zoiko-Version
        </code>{" "}
        header.
      </>
    ),
  },
  {
    number: "3",
    title: "Read the evidence",
    description: (
      <>
        Follow{" "}
        <code className="rounded-md border border-slate-200 bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400">
          evidence
        </code>{" "}
        on any record for its
        <br className="hidden sm:block" /> preserved, append-only trail.
      </>
    ),
  },
];

export default function Quickstart() {
  return (
    <section className="w-full bg-gray-50 py-14 text-slate-800 dark:bg-slate-950 dark:text-white sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex w-full flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Quickstart
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Your first call in three steps
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="min-h-[176px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(14,31,61,0.05)] transition-colors dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Number */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 text-sm font-bold leading-6 text-white">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <div className="mt-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {step.description}

                {step.code && (
                  <div className="mt-1 inline-flex items-center gap-0">
                    <code className="rounded-md border border-slate-200 bg-gray-50 px-2 py-0.5 font-mono text-[11px] text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400">
                      {step.code}
                    </code>
                    <span className="ml-0.5">.</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="mt-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-950 bg-slate-900 shadow-[0_10px_30px_rgba(14,31,61,0.10)]">
          
          {/* Terminal Header */}
          <div className="flex h-10 items-center border-b border-blue-950 bg-slate-900 px-4">
            <div className="flex shrink-0 gap-2">
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-md bg-white/20" />
            </div>

            <span className="ml-4 font-mono text-[11px] leading-5 text-white/60 sm:text-xs">
              authenticate.sh
            </span>
          </div>

          {/* Terminal Content */}
          <div className="overflow-x-auto">
            <pre className="min-w-[650px] px-5 py-5 font-mono text-[10px] leading-5 sm:px-6 sm:text-xs">
              <code>
                <span className="text-slate-500">
                  # Every request is authenticated with a scoped API key
                </span>

                {"\n"}

                <span className="text-teal-300">curl</span>
                <span className="text-slate-300">
                  {" "}
                  https://api.zoikotime.com/v1/records \
                </span>

                {"\n  "}

                <span className="text-slate-300">-H </span>

                <span className="text-amber-300">
                  &quot;Authorization: Bearer $ZOIKO_API_KEY&quot;
                </span>

                <span className="text-slate-300"> \</span>

                {"\n  "}

                <span className="text-slate-300">-H </span>

                <span className="text-amber-300">
                  &quot;Zoiko-Version: 2026-06-01&quot;
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}