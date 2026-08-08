"use client";

const lifecycleSteps = [
  {
    label: "Engagement Created",
    type: "complete",
  },
  {
    label: "Project Assigned",
    type: "complete",
  },
  {
    label: "Time Recorded",
    type: "complete",
  },
  {
    label: "Reviewed",
    type: "review",
  },
  {
    label: "Approved",
    type: "pending",
  },
  {
    label: "Exported",
    type: "pending",
  },
];

function Step({
  label,
  type,
}: {
  label: string;
  type: "complete" | "review" | "pending";
}) {
  const styles = {
    complete: {
      container:
        "border-emerald-100 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/30",
      dot: "bg-teal-600 dark:bg-teal-400",
      text: "text-teal-700 dark:text-teal-400",
    },
    review: {
      container:
        "border-slate-300 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/40",
      dot: "bg-blue-950 dark:bg-blue-400",
      text: "text-blue-950 dark:text-blue-300",
    },
    pending: {
      container:
        "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900",
      dot: "bg-gray-500 dark:bg-slate-400",
      text: "text-gray-500 dark:text-slate-400",
    },
  };

  const current = styles[type];

  return (
    <div
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 ${current.container}`}
    >
      <div className={`h-1.5 w-1.5 rounded-[3px] ${current.dot}`} />

      <span
        className={`whitespace-nowrap text-xs font-semibold leading-5 ${current.text}`}
      >
        {label}
      </span>
    </div>
  );
}

export default function OpsLifecycle() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 sm:gap-10">
          {/* Heading */}
          <div className="flex w-full max-w-[620px] flex-col items-start gap-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
                Contractor Lifecycle
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
              Every hour follows the same
              <br className="hidden sm:block" /> governed chain.
            </h2>
          </div>

          {/* Lifecycle */}
          <div className="w-full overflow-x-auto pb-2">
            <div className="flex min-w-max items-center">
              {lifecycleSteps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <Step label={step.label} type={step.type as "complete" | "review" | "pending"} />

                  {index < lifecycleSteps.length - 1 && (
                    <div className="mx-0 h-px w-4 shrink-0 bg-slate-200 dark:bg-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}