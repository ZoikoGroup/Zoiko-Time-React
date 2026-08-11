import AssuranceStatusPill, {
  type AssuranceTone,
} from "./AssuranceStatusPill";

const changes: {
  item: string;
  previous: string;
  next: { label: string; tone: AssuranceTone };
  reason: string;
  effective: string;
  owner: string;
}[] = [
  {
    item: "ART-0117 independent assessment",
    previous: "Current",
    next: { label: "Under review", tone: "blue" },
    reason: "Scope and wording reassessment",
    effective: "01 Jul 2026",
    owner: "Security",
  },
  {
    item: "MAP-0042 mapping package",
    previous: "v3",
    next: { label: "Superseded by v4", tone: "neutral" },
    reason: "Unmapped requirements added for transparency",
    effective: "28 Jun 2026",
    owner: "Governance",
  },
  {
    item: 'Legacy "audit-ready platform" wording',
    previous: "Published",
    next: { label: "Withdrawn", tone: "red" },
    reason: "Unsupported — implied an assurance opinion that does not exist",
    effective: "02 Jun 2026",
    owner: "Trust & Governance",
  },
  {
    item: "FIND-0088 corrective action",
    previous: "Ready for verification",
    next: { label: "Reopened", tone: "amber" },
    reason: "Re-test did not confirm control restoration",
    effective: "20 Jun 2026",
    owner: "Security",
  },
];

const headers = [
  { label: "Item", width: "w-[220px]" },
  { label: "Previous", width: "w-[150px]" },
  { label: "New", width: "w-[170px]" },
  { label: "Reason", width: "w-[300px]" },
  { label: "Effective", width: "w-[120px]" },
  { label: "Owner", width: "w-[160px]" },
];

export default function AssuranceChangeLog() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Changes, Expiry, Renewal &amp; Withdrawal
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            An Expired Claim Is Removed, Then Recorded
          </h2>

        </div>

        {/* Change Log */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
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
                      <AssuranceStatusPill
                        label={row.next.label}
                        tone={row.next.tone}
                      />
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
            Illustrative change log with synthetic identifiers. Incorrect, expired,
            or withdrawn assurance claims are corrected visibly and removed from
            current search and structured data.
          </p>

        </div>

        {/* Reopened Note */}
        <p className="mt-6 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          The reopened row matters: the task was complete and the finding was
          nearly closed, but verification failed. Task completion is not control
          restoration, and the record reflects that rather than the intent.
        </p>

      </div>
    </section>
  );
}
