import StatusPill, { type Tone } from "./StatusPill";

const changes: {
  item: string;
  previous: string;
  next: { label: string; tone: Tone };
  reason: string;
  effective: string;
  owner: string;
}[] = [
  {
    item: "APAC primary storage",
    previous: "Generally available",
    next: { label: "Under review", tone: "blue" },
    reason: "Provider evidence reassessment",
    effective: "20 Jun 2026",
    owner: "Privacy & Platform",
  },
  {
    item: "UK primary storage",
    previous: "—",
    next: { label: "Planned", tone: "amber" },
    reason: "Approved roadmap intent; no date committed",
    effective: "28 Jun 2026",
    owner: "Platform",
  },
  {
    item: 'Legacy "EU data stays in the EU" wording',
    previous: "Published",
    next: { label: "Withdrawn", tone: "red" },
    reason: "Unsupported — did not account for support access or backups",
    effective: "02 Jun 2026",
    owner: "Trust & Governance",
  },
  {
    item: "Backup region statement",
    previous: "v2",
    next: { label: "Superseded by v3", tone: "neutral" },
    reason: "Scope clarified per data category",
    effective: "28 Jun 2026",
    owner: "Privacy",
  },
];

const headers = [
  { label: "Item", width: "w-[220px]" },
  { label: "Previous", width: "w-[140px]" },
  { label: "New", width: "w-[160px]" },
  { label: "Reason", width: "w-[300px]" },
  { label: "Effective", width: "w-[120px]" },
  { label: "Owner", width: "w-[160px]" },
];

export default function ChangeHistory() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Change History &amp; Notices
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Location Changes Are Published, Not Absorbed
          </h2>

        </div>

        {/* Change Log */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">
                  {headers.map((header) => (
                    <th
                      key={header.label}
                      className={`${header.width} border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {changes.map((row) => (
                  <tr
                    key={row.item}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.item}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.previous}
                    </td>

                    <td className="px-4 py-3.5 align-top">
                      <StatusPill label={row.next.label} tone={row.next.tone} />
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.reason}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.effective}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <p className="px-4 pb-5 pt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Illustrative change log. Unsafe, stale, or unsupported claims may be
            removed first, followed by a retrospective correction record.
          </p>

        </div>

        {/* Withdrawal Note */}
        <p className="mt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          The withdrawn row is a real category of correction: a statement that
          was true about primary storage but was being read as a claim about all
          handling. Withdrawing it was more honest than qualifying it further.
        </p>

      </div>
    </section>
  );
}
