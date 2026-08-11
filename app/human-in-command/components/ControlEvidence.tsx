import Link from "next/link";

type Entry = {
  title: string;
  access: "Public" | "Controlled" | "Never public";
  summary: string;
  owner?: string;
  reviewed?: string;
  status?: string;
  footnote: string;
  muted?: boolean;
};

const entries: Entry[] = [
  {
    title: "Human-only decision classes",
    access: "Public",
    summary:
      "The eight classes, their human-only requirement, and the supporting control.",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      'Limitation: not a universal legal definition of "consequential".',
  },
  {
    title: "Neutral state vocabulary",
    access: "Public",
    summary: "Governed state labels and the prohibited accusatory terms.",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: describes product behavior, not your internal terminology.",
  },
  {
    title: "Separation-of-duties patterns",
    access: "Public",
    summary: "Default controls and how exceptions are treated per pattern.",
    owner: "Security & Product governance",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote: "Limitation: your configured role model may differ.",
  },
  {
    title: "Decision audit evidence",
    access: "Controlled",
    summary:
      "Audit event structure, immutability controls, and retention approach.",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote:
      "Access: governed request. Never contains worker-case content.",
  },
  {
    title: "Rule-change governance",
    access: "Controlled",
    summary:
      "How deterministic rule versions are proposed, reviewed, and released.",
    owner: "Product governance",
    reviewed: "20 Jun 2026",
    status: "Current",
    footnote:
      "Access: governed request via Trust Center review pathway.",
  },
  {
    title: "Worker case records",
    access: "Never public",
    summary: "Individual cases, reasons, evidence, and outcomes.",
    footnote:
      "These do not appear on any public page, in any form, at any access level. Authenticated routes only.",
    muted: true,
  },
];

const accessStyles: Record<Entry["access"], string> = {
  Public:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  Controlled:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  "Never public":
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function ControlEvidence() {
  return (
    <section
      id="control-evidence"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Control Evidence &amp; Access
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Public Commitments and Governed Artifacts
          </h2>

        </div>

        {/* Entries */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {entries.map((entry) => (
            <article
              key={entry.title}
              className={`flex flex-col rounded-2xl border p-5 ${
                entry.muted
                  ? "border-stone-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
                  : "border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >

              <div className="flex items-start justify-between gap-3">

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {entry.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${accessStyles[entry.access]}`}
                >
                  {entry.access}
                </span>

              </div>

              <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {entry.summary}
              </p>

              {entry.owner && (
                <dl className="mt-3.5 grid flex-1 grid-cols-[72px_1fr] content-start gap-x-3 gap-y-1">
                  {[
                    { label: "Owner", value: entry.owner },
                    { label: "Reviewed", value: entry.reviewed },
                    { label: "Status", value: entry.status },
                  ].map((row) => (
                    <div key={row.label} className="contents">

                      <dt className="text-xs font-semibold leading-5 text-zinc-500 dark:text-slate-400">
                        {row.label}
                      </dt>

                      <dd className="text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                        {row.value}
                      </dd>

                    </div>
                  ))}
                </dl>
              )}

              <p
                className={`border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400 ${
                  entry.owner ? "mt-4" : "mt-3.5 flex-1"
                }`}
              >
                {entry.footnote}
              </p>

            </article>
          ))}

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">

          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
          >
            Request control evidence via Trust Center
          </Link>

          <Link
            href="/evidence-ledger"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Evidence Ledger
          </Link>

        </div>

      </div>
    </section>
  );
}
