import Link from "next/link";

const steps = [
  {
    label: "Step 1",
    title: "Capture",
    description:
      "A worker records time through approved desktop, mobile, or organization workflows. Scheduled context and approved integrations may enrich the record.",
    active: true,
  },
  { label: "Step 2", title: "Classify" },
  { label: "Step 3", title: "Review" },
  { label: "Step 4", title: "Approve and Export" },
];

const record = [
  { label: "Worker", value: "J. Ferris — Ops" },
  { label: "Schedule context", value: "Hybrid · Mon–Fri" },
  { label: "Classification", value: "Pending" },
  { label: "Evidence", value: "Capture in progress" },
  { label: "Approval", value: "—" },
];

export default function HowItWorks() {
  return (
    <section className="w-full overflow-hidden bg-[#F0FBF6] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex max-w-[680px] flex-col">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              How It Works
            </p>
          </div>

          <h2 className="mt-3.5 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            From Work Event to HR Action
          </h2>

          <p className="mt-3.5 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            The value comes from deterministic policy application, evidence, and
            human review — not a black box.
          </p>

        </div>

        <div className="mt-11 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">

          {/* Step Timeline */}
          <div className="flex flex-col border-l-2 border-slate-200 dark:border-slate-700">

            {steps.map((step) => (
              <div
                key={step.label}
                className="relative flex flex-col gap-2 pb-5 pl-7 pt-6"
              >

                {/* Timeline Dot */}
                <span
                  className={`absolute -left-[9px] top-[26px] h-4 w-4 rounded-full border-2 ${
                    step.active
                      ? "border-emerald-600 bg-emerald-600"
                      : "border-slate-400 bg-white dark:bg-slate-900"
                  }`}
                  aria-hidden="true"
                />

                <p
                  className={`text-xs font-bold uppercase leading-5 tracking-wide ${
                    step.active
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-slate-400"
                  }`}
                >
                  {step.label}
                </p>

                <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                {step.description && (
                  <p className="max-w-96 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                    {step.description}
                  </p>
                )}

              </div>
            ))}

          </div>

          {/* Record Preview */}
          <div className="flex flex-col gap-7 rounded-[20px] bg-slate-900 p-5 sm:p-7">

            <div className="flex flex-col rounded-2xl border border-white/10 p-5">

              <div className="flex items-center justify-between gap-3 pb-4">

                <p className="text-xs font-normal leading-5 text-white/50">
                  RECORD · 8842-A
                </p>

                <span className="whitespace-nowrap rounded-full bg-slate-700 px-3 py-1 text-xs font-bold leading-5 text-slate-400">
                  In Progress
                </span>

              </div>

              {record.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 border-t border-white/10 py-2.5"
                >

                  <span className="text-sm font-normal leading-5 text-white/50">
                    {row.label}
                  </span>

                  <span className="text-right text-sm font-normal leading-5 text-white/90">
                    {row.value}
                  </span>

                </div>
              ))}

            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold leading-6 text-emerald-500 transition hover:text-emerald-400"
            >
              <span>See How ZoikoTime Works</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
