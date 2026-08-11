import type { ReactNode } from "react";
import GovernanceStatusPill, {
  type GovernanceTone,
} from "./GovernanceStatusPill";

const statuses: { label: string; tone: GovernanceTone }[] = [
  { label: "Current", tone: "green" },
  { label: "Limited", tone: "violet" },
  { label: "Under review", tone: "blue" },
  { label: "Suspended", tone: "red" },
  { label: "Retired", tone: "neutral" },
  { label: "Evidence-gated", tone: "neutral" },
  { label: "Unavailable", tone: "neutral" },
];

const filters = [
  "Capability type",
  "Authority class",
  "Risk tier",
  "Product area",
  "Status",
  "Evidence level",
  "Owner",
  "Last reviewed",
];

type Access = "PUBLIC" | "CONTROLLED" | "PROHIBITED";

const accessStyles: Record<Access, string> = {
  PUBLIC:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  CONTROLLED:
    "border-stone-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  PROHIBITED:
    "border-stone-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

const capabilities: {
  title: string;
  access: Access;
  summary: string;
  rows: { label: string; value: ReactNode }[];
  footnote: string;
  prohibited?: boolean;
}[] = [
  {
    title: "Time classification",
    access: "PUBLIC",
    summary:
      "Versioned policy rules producing repeatable, explainable output.",
    rows: [
      {
        label: "Type",
        value: (
          <>
            Deterministic —{" "}
            <span className="font-bold text-sky-950 dark:text-white">
              not AI
            </span>
          </>
        ),
      },
      { label: "Authority", value: "Inform" },
      { label: "Tier", value: "G0" },
      { label: "Status", value: "Current" },
    ],
    footnote:
      "Deterministic does not mean legally correct or consequence-ready without human review.",
  },
  {
    title: "Source-quality flagging",
    access: "PUBLIC",
    summary:
      "Identifies stale, incomplete, or conflicting source conditions for review.",
    rows: [
      { label: "Type", value: "Approved ML flagging" },
      { label: "Authority", value: "Flag" },
      { label: "Tier", value: "G2" },
      { label: "Status", value: "Current" },
    ],
    footnote:
      "False-positive and false-negative limitations documented in the use-case detail.",
  },
  {
    title: "Anomaly flagging",
    access: "PUBLIC",
    summary:
      "Identifies a pattern that may warrant an authorized person's attention.",
    rows: [
      { label: "Type", value: "Approved ML flagging" },
      { label: "Authority", value: "Flag" },
      { label: "Tier", value: "G2" },
      { label: "Status", value: "Current" },
    ],
    footnote:
      "Never a misconduct, fraud, payroll, or legal conclusion. No composite worker score.",
  },
  {
    title: "Kairos retrieval & explanation",
    access: "PUBLIC",
    summary:
      "Retrieves, summarizes, and explains governed data within the requester's existing permissions.",
    rows: [
      { label: "Type", value: "Governed AI assistance" },
      { label: "Authority", value: "Inform · Suggest · Draft" },
      { label: "Tier", value: "G1" },
      { label: "Status", value: "Current" },
    ],
    footnote:
      "No completeness or legal-correctness guarantee. Cannot expand permissions or invent a source.",
  },
  {
    title: "Drafted explanation text",
    access: "CONTROLLED",
    summary:
      "Prepares an explanation draft for an authorized reviewer to adopt or reject.",
    rows: [
      { label: "Type", value: "Governed AI assistance" },
      { label: "Authority", value: "Draft" },
      { label: "Tier", value: "G3" },
      { label: "Status", value: "Limited" },
    ],
    footnote:
      "High-impact context. A draft is never issued without human adoption and verification.",
  },
  {
    title: "Autonomous approval of any kind",
    access: "PROHIBITED",
    summary: "AI determining or executing a consequential outcome.",
    rows: [
      { label: "Tier", value: "G4" },
      { label: "Status", value: "Prohibited" },
    ],
    footnote:
      "No release path exists. Not configurable, not on a roadmap, not an enterprise add-on.",
    prohibited: true,
  },
];

export default function CapabilityRegister() {
  return (
    <section
      id="capability-register"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Public Capability Register
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Every Governed Use, With Its Honest Status
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            If evaluation, monitoring, or source evidence is stale, incomplete, or
            conflicting, the capability reads Under Review, Suspended, Limited, or
            Unavailable — never silently Current.
          </p>

        </div>

        {/* Status Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {statuses.map((status) => (
            <GovernanceStatusPill
              key={status.label}
              label={status.label}
              tone={status.tone}
            />
          ))}
        </div>

        {/* Filters */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className={
                capability.prohibited
                  ? "flex flex-col rounded-2xl border border-dashed border-stone-300 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900/60"
                  : "flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              }
            >

              <div className="flex items-start justify-between gap-3">

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {capability.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${accessStyles[capability.access]}`}
                >
                  {capability.access}
                </span>

              </div>

              <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {capability.summary}
              </p>

              <dl className="mt-3.5 grid flex-1 grid-cols-[72px_1fr] content-start gap-x-3 gap-y-1">
                {capability.rows.map((row) => (
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

              <p
                className="mt-4 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400"
              >
                {capability.footnote}
              </p>

            </article>
          ))}

        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Each public use-case detail states purpose, affected people, sources and
          permission boundary, allowed outputs, human controls, evaluation summary,
          limitations, owner, status, and correction path. Model, provider, tool,
          region, retention, and use-of-data conditions are disclosed at the
          appropriate public or controlled level — never invented for a marketing
          page.
        </p>

      </div>
    </section>
  );
}
