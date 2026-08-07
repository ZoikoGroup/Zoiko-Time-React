"use client";

const items = [
  {
    cause: "Timezone ambiguity",
    causeDesc:
      "Deadlines, workdays, and payroll dates are interpreted differently across regions.",
    response: "Local + reference time",
    responseDesc:
      "Show local and reference time, timezone source, offset, and explicit needed-by time.",
  },
  {
    cause: "Unstructured handoff",
    causeDesc:
      "Ownership, context, evidence, and acknowledgment get lost between regions.",
    response: "Structured handoff object",
    responseDesc:
      "Sender, receiver, work item, status, timing, attachments, and history — always visible.",
  },
  {
    cause: "Always-on expectations",
    causeDesc:
      "Workers receive requests or escalations outside agreed hours.",
    response: "Quiet hours & escalation",
    responseDesc:
      "Unavailable periods, escalation rules, and recipient local time — respected by default.",
  },
  {
    cause: "Availability confused with output",
    causeDesc:
      "Managers treat green status or quick responses as performance.",
    response: "Coordination only",
    responseDesc:
      "Availability is for coordination. Individual response or online-time scoring is prohibited.",
  },
  {
    cause: "Connectivity failure",
    causeDesc:
      "Time or status appears missing even though work may continue offline.",
    response: "Fair offline handling",
    responseDesc:
      "Source state, offline queue, alternate capture — no automatic fault inference.",
  },
];

export default function FailurePattern() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              THE FAILURE PATTERN
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Why Remote Operations Break
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            Timezone ambiguity, unstructured handoffs, and always-on
            expectations quietly erode trust. Here's the cause—and the
            response ZoikoTime builds in.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-6xl">

          {/* Desktop Center Line */}
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-700 lg:block" />

          {items.slice(0, 3).map((item, index) => (
            <div
              key={item.cause}
              className="relative mb-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
            >
              {/* Cause */}
              <div className="text-left lg:text-right">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Cause
                </p>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.cause}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.causeDesc}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="relative hidden w-10 items-start justify-center lg:flex">
                <span className="mt-2 h-4 w-4 rounded-md border-4 border-white bg-slate-900 dark:border-slate-950 dark:bg-emerald-400" />
              </div>

              {/* Response */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Response
                </p>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.response}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.responseDesc}
                </p>
              </div>
            </div>
          ))}
                    {items.slice(3).map((item) => (
            <div
              key={item.cause}
              className="relative mb-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
            >
              {/* Cause */}
              <div className="text-left lg:text-right">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Cause
                </p>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.cause}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.causeDesc}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="relative hidden w-10 items-start justify-center lg:flex">
                <span className="mt-2 h-4 w-4 rounded-md border-4 border-white bg-slate-900 dark:border-slate-950 dark:bg-emerald-400" />
              </div>

              {/* Response */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Response
                </p>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {item.response}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.responseDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}