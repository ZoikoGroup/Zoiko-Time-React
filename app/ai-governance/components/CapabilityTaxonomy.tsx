import Link from "next/link";
import type { ReactNode } from "react";

const categories = [
  {
    title: "Deterministic rules",
    body: "Versioned policy logic, arithmetic, thresholds, or routing producing repeatable output from the same governed inputs.",
    note: "Not labelled AI. Rule version, inputs, and reason exposed.",
  },
  {
    title: "Approved ML flagging",
    body: "A governed statistical or machine-learning system identifies an anomaly, pattern, or signal-quality concern.",
    note: "Flag only. No automatic guilt, payroll, discipline, or employment conclusion.",
  },
  {
    title: "Governed AI assistance",
    body: "A model retrieves, summarizes, transforms, or explains approved information within defined source, permission, tool, and output limits.",
    note: "Source-linked, reviewable, non-authoritative.",
  },
  {
    title: "Human-only outcome",
    body: "A consequence that must be decided by an authorized person.",
    note: "Outside autonomous authority entirely.",
  },
  {
    title: "Prohibited use",
    body: "A use that violates product invariants or approved policy.",
    note: "Not configurable, not an add-on, not described as future capability.",
  },
  {
    title: "Evidence-gated use",
    body: "A proposed or evaluated use that has not passed release and operating gates.",
    note: "Not current. Prerequisites and safe alternative stated, or absent.",
  },
  {
    title: "Unavailable",
    body: "No approved capability or evidence supports the request.",
    note: "Routes to a deterministic or human process instead.",
  },
];

const authorityClasses: {
  authority: string;
  behavior: ReactNode;
  control: string;
  prohibited?: boolean;
}[] = [
  {
    authority: "Inform",
    behavior: "Present source-linked information or status.",
    control: "User can inspect sources, freshness, and limitations.",
  },
  {
    authority: "Suggest",
    behavior: "Offer a non-binding option or draft.",
    control: "An authorized user reviews and chooses whether to act.",
  },
  {
    authority: "Flag",
    behavior: "Identify a pattern or potential concern.",
    control: "A flag opens review. It is not a conclusion.",
  },
  {
    authority: "Draft",
    behavior: "Prepare text, summary, explanation, or workflow artifact.",
    control:
      "A human approves any consequential communication or action.",
  },
  {
    authority: "Execute reversible administrative action",
    behavior:
      "Only when explicitly approved, permissioned, and safely reversible.",
    control:
      "Human initiation and confirmation, preview, audit, undo, and policy limits.",
  },
  {
    authority: "Consequential decision",
    behavior: (
      <>
        <span className="font-bold text-sky-950 dark:text-white">
          Prohibited for autonomous AI.
        </span>{" "}
        Payroll, discipline, employment, legal, eligibility, or comparable
        outcome.
      </>
    ),
    control: "An authorized human decision is required — always.",
    prohibited: true,
  },
  {
    authority: "Irreversible or external action",
    behavior:
      "Send, disclose, delete, publish, lock, or change authoritative records outside safe reversible bounds.",
    control:
      "Human authorization plus explicit action-specific controls. Otherwise prohibited.",
    prohibited: true,
  },
];

const headers = [
  { label: "Authority class", width: "w-[220px]" },
  { label: "Allowed behavior", width: "w-[420px]" },
  { label: "Required human control", width: "w-[420px]" },
];

export default function CapabilityTaxonomy() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Capability Taxonomy
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Seven Categories — Starting With the One That Is Not AI
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Relabelling ordinary rules as AI is a marketing choice with a
            governance cost: it makes an explainable system look opaque, and
            invites trust the mechanism has not earned.
          </p>

        </div>

        {/* Categories */}
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <article
              key={category.title}
              className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-xs font-bold leading-5 text-sky-950 dark:text-white">
                {category.title}
              </h3>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {category.body}
              </p>

              <p className="mt-4 border-t border-stone-200 pt-2.5 text-xs font-normal leading-5 text-amber-700 dark:border-slate-800 dark:text-amber-400">
                {category.note}
              </p>

            </article>
          ))}

          {/* Why the First Row Matters */}
          <article className="flex flex-col rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/10">

            <h3 className="text-xs font-bold leading-5 text-sky-950 dark:text-white">
              Why the first row matters
            </h3>

            <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
              Time classification is deterministic and policy-bound. Calling it AI
              would make a reviewable rule engine harder to challenge, not easier.
            </p>

            <div className="mt-4 border-t border-stone-200 pt-2.5 dark:border-slate-800">
              <Link
                href="/deterministic-time-classification"
                className="inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                Deterministic Classification <span aria-hidden="true">→</span>
              </Link>
            </div>

          </article>

        </div>

        {/* Authority Classes */}
        <h3 className="mt-12 text-lg font-bold leading-6 text-sky-950 dark:text-white">
          Seven authority classes
        </h3>

        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">
                  {headers.map((header) => (
                    <th
                      key={header.label}
                      className={`${header.width} border-b border-stone-200 px-5 py-3.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {authorityClasses.map((row) => (
                  <tr
                    key={row.authority}
                    className={`border-b border-stone-200 last:border-b-0 dark:border-slate-800 ${
                      row.prohibited ? "bg-red-50/30 dark:bg-red-950/10" : ""
                    }`}
                  >

                    <td
                      className={`px-5 py-3.5 align-top text-sm font-bold leading-6 ${
                        row.prohibited
                          ? "text-red-700 dark:text-red-400"
                          : "text-sky-950 dark:text-white"
                      }`}
                    >
                      {row.authority}
                    </td>

                    <td className="px-5 py-4 align-top text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.behavior}
                    </td>

                    <td className="px-5 py-4 align-top text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.control}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
