"use client";

type PatternItem = {
  title: string;
  items: string[];
  type: "allowed" | "excluded";
};

const patterns: PatternItem[] = [
  {
    title: "Allowed pattern",
    type: "allowed",
    items: [
      "Transfer or reference only the validated structured context required for the approved purpose.",
      "Decision reference, assigned action, owner, due date, status, source link.",
      "Retain source-system link and provenance where supported.",
      "Author or approver shown where permitted.",
    ],
  },
  {
    title: "Excluded pattern",
    type: "excluded",
    items: [
      "Blanket export of messages, reactions, or edits.",
      "Files, search history, typing or activity indicators.",
      "Communication volume or user behavior.",
      "Entire message histories displayed by default.",
    ],
  },
];

export default function MeetingContext() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 dark:text-emerald-400">
            Meeting-to-Work Context · Channels, Spaces, Decisions &amp; Actions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            A Meeting Is Context.
            <br className="hidden sm:block" />
            It Is Not a Timesheet.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            An approved meeting reference, decision, or assigned action may
            attach to a mapped ZoikoTime workflow when purpose, policy,
            permission, privacy, and human review all allow.
          </p>
        </div>

        {/* Pattern Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">

                      {patterns.map((pattern) => {
            const isAllowed = pattern.type === "allowed";

            return (
              <div
                key={pattern.title}
                className={`rounded-2xl border p-6 ${
                  isAllowed
                    ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/20"
                    : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      isAllowed
                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400"
                    }`}
                  >
                    {isAllowed ? "✓" : "✕"}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {pattern.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {pattern.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-1 text-sm font-bold ${
                          isAllowed
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {isAllowed ? "✓" : "✕"}
                      </span>

                      <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Warning Box */}
                <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950/20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
            Not sufficient alone
          </p>

          <p className="mt-3 text-sm leading-7 text-red-700 dark:text-red-300">
            Meeting attendance, presence, duration, speaking time, chat
            activity, transcript content, or an AI recap is not proof of time
            worked, productivity, misconduct, performance, payroll treatment,
            or legal compliance.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400 md:text-sm">
            Destination status is explicit: pending review, approved context,
            attached to workflow, excluded, rejected, correction requested, or
            superseded. When a source is edited or deleted, a decision changes,
            an action is reassigned, or a mapping is paused, the downstream
            impact is reviewed and versioned rather than quietly dropped.
          </p>
        </div>
      </div>
    </section>
  );
}