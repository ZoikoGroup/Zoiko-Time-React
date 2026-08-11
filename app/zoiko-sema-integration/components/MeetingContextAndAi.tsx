import Image from "next/image";

const draftRows = [
  { label: "Status", value: "Draft — not approved, no downstream effect" },
  { label: "Source references", value: "Linked to the approved meeting record" },
  { label: "Generated", value: "05 Aug 2026, 11:02 CEST" },
  { label: "Reviewer", value: "Unassigned" },
  { label: "Edited", value: "No" },
  { label: "Retention", value: "Per approved schedule" },
  {
    label: "Limitations",
    value: "May omit or misattribute content. Not a record of work performed.",
  },
];

export default function MeetingContextAndAi() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Meeting-to-Work Context */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Meeting-to-Work Context
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              A Meeting Is Not a Timesheet
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Approved meeting context — occurrence, scope, owner, recorded
              decisions, actions, and follow-ups — may support review. Its
              limitations travel with it.
            </p>

            {/* Presence Is Not Time Worked */}
            <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Meeting presence is not time worked
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                Meeting presence or duration is context, not automatic time,
                attendance, payroll, performance, or compliance truth. ZoikoTime
                rules, review, correction, and human approval remain authoritative —
                a calendar entry has never been evidence of work performed.
              </p>

            </div>

            {/* Structured Outcomes */}
            <div className="mt-5 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Channels, spaces, decisions &amp; actions
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Structured communication outcomes — a recorded decision, an assigned
                action, a named owner, a follow-up — carry their workspace scope with
                them. Unstructured discussion does not transfer.
              </p>

            </div>

          </div>

          {/* Governed AI Outputs */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Governed AI-Generated Outputs
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Always a draft until a person owns it
            </h3>

            {/* Draft Record */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-slate-50 px-2.5 py-[5px] text-[10px] font-extrabold uppercase leading-4 tracking-wide text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">

                <Image
                  src="/zoiko-sema-integration/plus-mark.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="shrink-0"
                />

                AI-generated

              </span>

              <h4 className="mt-3 text-base font-bold leading-6 text-sky-950 dark:text-white">
                Meeting summary · draft, pending review
              </h4>

              <dl className="mt-4 flex flex-col gap-2.5">
                {draftRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 sm:grid-cols-[150px_1fr] sm:gap-4"
                  >

                    <dt className="text-sm font-normal leading-6 text-zinc-500 dark:text-slate-400">
                      {row.label}
                    </dt>

                    <dd className="text-sm font-normal leading-6 text-sky-900 dark:text-slate-300">
                      {row.value}
                    </dd>

                  </div>
                ))}
              </dl>

              <p className="mt-5 text-sm font-normal leading-6 text-zinc-500 dark:text-slate-400">
                Product, version, and model information appear only when approved. A
                reviewer must verify source, accuracy, completeness, attribution,
                context, sensitivity, permitted purpose, and destination effect
                before approval.
              </p>

            </div>

            {/* Prohibited Use */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Prohibited use of any AI output
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                No AI-generated output may automatically determine hours, attendance,
                breaks, payroll, performance, misconduct, discipline, employment
                status, legal status, or compliance. If source content, AI output,
                policy, or a reviewer decision changes, downstream context is
                re-evaluated and versioned.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
