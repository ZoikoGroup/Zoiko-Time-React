import React from "react";

const rows = [
  {
    title: "Identity certainty",
    traditional:
      "Assumed at login — never re-verified during a session",
    zoiko:
      "Verified continuously throughout every session",
  },
  {
    title: "Session integrity",
    traditional:
      "Unchecked — session = valid by default",
    zoiko:
      "Monitored in real time with integrity signals",
  },
  {
    title: "Device trust",
    traditional:
      "No device context — any device is treated as trusted",
    zoiko:
      "Device fingerprinting and trust status per session",
  },
  {
    title: "Location consistency",
    traditional:
      "Not validated — location is self-reported or absent",
    zoiko:
      "Geo-consistency verified against policy and prior sessions",
  },
  {
    title: "Evidence",
    traditional:
      "Incomplete logs — unverified, editable, inadmissible",
    zoiko:
      "Generated automatically — tamper-evident, chain-of-custody",
  },
];

export default function HiddenFailure() {
  return (
    <section className="w-full bg-slate-100 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            The Hidden Failure
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            The Hidden Failure in Workforce Systems
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Most systems assume identity. ZoikoTime verifies it —
            continuously, across every session, every device, and every
            location.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-16 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 lg:block">
          <div className="grid grid-cols-[1.1fr_2fr_2.3fr]">
            <div className="border-b border-slate-200 bg-slate-100 px-7 py-4 font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              Workforce Reality
            </div>

            <div className="border-b border-slate-200 bg-slate-100 px-7 py-4 font-bold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              Traditional Systems
            </div>

            <div className="border-b border-slate-200 bg-emerald-50 px-7 py-4 font-bold text-teal-600 dark:border-slate-700 dark:bg-teal-900/20">
              ZoikoTime®
            </div>

            {rows.map((row, index) => (
              <React.Fragment key={index}>
                <div className="border-b border-slate-200 px-7 py-7 font-semibold text-slate-900 dark:border-slate-700 dark:text-white">
                  {row.title}
                </div>

                <div className="border-b border-slate-200 px-7 py-7 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  {row.traditional}
                </div>

                <div className="border-b border-slate-200 bg-teal-50 px-7 py-7 font-semibold text-teal-600 dark:border-slate-700 dark:bg-teal-900/20">
                  {row.zoiko}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Cards */}
        <div className="mt-12 space-y-6 lg:hidden">
          {rows.map((row, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="border-b border-slate-200 bg-slate-100 px-5 py-4 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {row.title}
                </h3>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Traditional Systems
                  </p>

                  <p className="text-slate-600 dark:text-slate-300">
                    {row.traditional}
                  </p>
                </div>

                <div className="rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
                    ZoikoTime®
                  </p>

                  <p className="font-semibold text-teal-600">
                    {row.zoiko}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-6 dark:border-indigo-700 dark:bg-slate-800">
          <p className="text-center text-base font-semibold leading-7 text-slate-900 dark:text-white">
            Most systems are built on assumed identity. ZoikoTime is built on{" "}
            <span className="text-teal-600">verified truth</span>.
          </p>
        </div>
      </div>
    </section>
  );
}