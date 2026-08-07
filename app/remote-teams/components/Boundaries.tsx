"use client";

const positiveMessages = [
  "Your working window is 9:00 AM–5:00 PM in your local timezone.",
  "You have one handoff awaiting acknowledgment before your workday ends.",
  "Quiet hours begin at 6:00 PM. New nonurgent notifications can be delayed.",
  "Your time source is offline. You can continue and submit when the connection returns.",
];

const negativeMessages = [
  "You must remain online during these hours.",
  "You have not responded fast enough.",
  "You are unavailable after hours.",
  "You are not being tracked. (Never volunteered as reassurance framing.)",
];

export default function Boundaries() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-[700px] text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              Workday Boundaries
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            How ZoikoTime Talks About
            <br className="hidden sm:block" />
            Boundaries
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            Quiet hours, availability, and connectivity are described as
            coordination facts — never as judgments about the worker.
          </p>
        </div>

        {/* Content */}
        <div className="grid w-full gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              What ZoikoTime says
            </h3>

            <div className="space-y-3">
              {positiveMessages.map((message) => (
                <div
                  key={message}
                  className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm bg-emerald-50 px-4 py-3 dark:bg-emerald-500/10"
                >
                  <p className="text-sm leading-6 text-slate-800 dark:text-slate-200">
                    {message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
              What it never says
            </h3>

            <div className="space-y-3">
              {negativeMessages.map((message) => (
                <div
                  key={message}
                  className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm bg-rose-50 px-4 py-3 dark:bg-rose-500/10"
                >
                  <p className="text-sm leading-6 text-red-900 line-through dark:text-rose-300">
                    {message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}