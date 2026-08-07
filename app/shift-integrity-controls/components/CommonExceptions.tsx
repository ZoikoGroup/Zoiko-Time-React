import Image from "next/image";

const exceptions = [
  {
    icon: "/shift-integrity-controls/Late-clock-in.svg",
    title: "Late clock-in",
    body: "Compared against the configured grace window, then held for worker context — not counted against anyone automatically.",
  },
  {
    icon: "/shift-integrity-controls/Missed-break-event.svg",
    title: "Missed break event",
    body: "Surfaced as incomplete, not judged — worker and reviewer resolve together with the applicable policy in view.",
  },
  {
    icon: "/shift-integrity-controls/Duplicate-conflicting-event.svg",
    title: "Duplicate or conflicting event",
    body: "System-level detection with reviewer confirmation for anything ambiguous — never silently discarded.",
  },
];

export default function CommonExceptions() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Exception Resolution
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Common exceptions, resolved consistently
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {exceptions.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-slate-700">
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </span>

              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
