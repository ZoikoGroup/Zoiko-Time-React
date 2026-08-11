import Image from "next/image";

import SectionHeading from "./SectionHeading";

const matchedChoices = ["Goal: Shift integrity", "Environment: Scheduled / Site"];

const routes = [
  { title: "Shift Integrity Controls", role: "Primary" },
  { title: "Attendance & Presence", role: "Supporting" },
  { title: "Evidence Ledger", role: "Evidence path" },
];

const explanations = [
  {
    label: "Why this fits",
    body: "Your declared goal of protecting shift record integrity matches this capability's purpose: reviewing scheduled-versus-recorded boundaries, changes, overlaps, gaps, and exceptions.",
  },
  {
    label: "What this covers",
    body: "Exception review, audit history, and reviewer queues for shift-based operations.",
  },
  {
    label: "What this does not cover",
    body: "Payroll calculation, legal compliance determination, or automatic disciplinary action — those remain outside this capability's scope.",
  },
];

export default function WhyThisPath() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why This Path"
          title="What a recommendation explanation looks like."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

          {/* Card header */}
          <div className="relative h-[220px] w-full">
            <Image
              src="/explore-zoikotime/why-this-path.png"
              alt="Racked inventory aisles in a scheduled-site operation"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <span className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-800/90" />

            <div className="absolute bottom-7 left-9 right-9">
              <p className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-200">
                Goal: Protect shift record integrity · Environment: Scheduled /
                Site
              </p>

              <h3 className="mt-2 text-2xl font-semibold leading-8 text-white">
                Shift Integrity Controls
              </h3>
            </div>
          </div>

          {/* Card body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px]">

            {/* Explanation */}
            <div className="px-8 py-10 lg:px-10">
              <p className="text-xs font-bold uppercase leading-5 tracking-[0.18em] text-slate-800 dark:text-white">
                Matched choices
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                {matchedChoices.map((choice) => (
                  <span
                    key={choice}
                    className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold leading-5 text-teal-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-300"
                  >
                    {choice}
                  </span>
                ))}
              </div>

              {explanations.map((item) => (
                <div key={item.label} className="mt-8">
                  <p className="text-xs font-bold uppercase leading-5 tracking-[0.18em] text-slate-800 dark:text-white">
                    {item.label}
                  </p>

                  <p className="mt-2 max-w-[600px] text-sm leading-6 text-gray-500 dark:text-slate-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Routes */}
            <div className="border-t border-slate-200 bg-gray-50 px-8 py-10 dark:border-slate-800 dark:bg-slate-900 lg:border-l lg:border-t-0">
              <p className="text-xs font-bold uppercase leading-5 tracking-[0.18em] text-gray-500 dark:text-slate-400">
                Routes
              </p>

              <ul className="mt-6">
                {routes.map((route, index) => (
                  <li
                    key={route.title}
                    className={`flex items-center justify-between gap-4 py-4 ${
                      index > 0
                        ? "border-t border-gray-100 dark:border-slate-800"
                        : ""
                    }`}
                  >
                    <span className="text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                      {route.title}
                    </span>

                    <span className="shrink-0 text-xs leading-4 text-gray-500 dark:text-slate-400">
                      {route.role}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-slate-200 pt-6 text-xs leading-5 text-gray-500 dark:border-slate-800 dark:text-slate-400">
                Recommendation is a routing suggestion, not a legal, compliance,
                or payroll determination.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
