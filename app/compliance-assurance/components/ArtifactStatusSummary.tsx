import AssuranceStatusPill, {
  type AssuranceTone,
} from "./AssuranceStatusPill";

const statuses: { label: string; tone: AssuranceTone }[] = [
  { label: "Current", tone: "green" },
  { label: "Expiring", tone: "violet" },
  { label: "Under review", tone: "blue" },
  { label: "Superseded", tone: "neutral" },
  { label: "Expired", tone: "red" },
  { label: "Withdrawn", tone: "red" },
  { label: "Evidence-gated", tone: "neutral" },
  { label: "Unavailable", tone: "neutral" },
];

const notes = [
  {
    title: "Expiring is not failure",
    body: "An artifact approaching its renewal threshold is shown as Expiring with its renewal state. That is a normal lifecycle position, not a deficiency — and hiding it until renewal completes would be worse.",
    tinted: true,
  },
  {
    title: "Unknown blocks positive claims",
    body: "If registry state cannot be determined, no positive summary appears. We show the uncertainty rather than defaulting to the last good answer.",
  },
  {
    title: "Counts never leak existence",
    body: "Summary counts are scoped to public visibility. A restricted artifact is not revealed by appearing in a total.",
  },
];

export default function ArtifactStatusSummary() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Current Assurance Summary
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Artifact Statuses
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Prepared, planned, expired, superseded, and under-review artifacts can
            never appear as current. There is no score and no percentage anywhere
            on this page.
          </p>

        </div>

        {/* Status Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {statuses.map((status) => (
            <AssuranceStatusPill
              key={status.label}
              label={status.label}
              tone={status.tone}
            />
          ))}
        </div>

        {/* Summary Rules */}
        <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {notes.map((note) => (
            <article
              key={note.title}
              className={
                note.tinted
                  ? "flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 pb-6 pt-10 dark:border-emerald-900/40 dark:bg-emerald-950/10"
                  : "flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-10 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900"
              }
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {note.title}
              </h3>

              <p className="mt-1.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {note.body}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
