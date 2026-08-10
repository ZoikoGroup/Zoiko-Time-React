import type { ReactNode } from "react";
import SemaStatusPill, { type SemaTone } from "./SemaStatusPill";

const groups: {
  label: string;
  rows: { label: string; value: ReactNode }[];
}[] = [
  {
    label: "Source",
    rows: [
      { label: "Workspace", value: "Field Ops North" },
      { label: "Workspace owner", value: "Named, on Sema side" },
      {
        label: "Eligibility",
        value: (
          <span className="font-bold text-sky-950 dark:text-white">
            Confirmed
          </span>
        ),
      },
    ],
  },
  {
    label: "Destination",
    rows: [
      { label: "ZoikoTime scope", value: "Field Services · North" },
      { label: "Scope type", value: "Organizational unit" },
      { label: "Duplicates", value: "None unresolved" },
    ],
  },
  {
    label: "Purpose & scope",
    rows: [
      { label: "Business purpose", value: "Documented" },
      { label: "Context categories", value: "Meeting context only" },
      { label: "Prohibited uses", value: "Recorded explicitly" },
    ],
  },
  {
    label: "Governance",
    rows: [
      {
        label: "Privacy mode",
        value: (
          <span className="font-bold text-sky-950 dark:text-white">
            Restricted
          </span>
        ),
      },
      { label: "Policy version", value: "Field North v3" },
      { label: "Jurisdiction", value: "DE · qualified" },
      { label: "Retention", value: "Per approved schedule" },
    ],
  },
  {
    label: "Authority",
    rows: [
      { label: "Review owner", value: "R. Adeyemi" },
      { label: "Integration admin", value: "Named" },
      { label: "Final approver", value: "Named" },
    ],
  },
  {
    label: "Test evidence",
    rows: [
      { label: "Sample validation", value: "Not yet run" },
      { label: "Denied cases", value: "Not yet run" },
      {
        label: "Acceptance",
        value: (
          <span className="font-bold text-sky-950 dark:text-white">
            Not signed off
          </span>
        ),
      },
    ],
  },
  {
    label: "Notices",
    rows: [
      { label: "Participant notice", value: "Drafted, pending activation" },
      { label: "Worker notice", value: "Required before first exchange" },
    ],
  },
];

const categories: {
  category: string;
  state: { label: string; tone: SemaTone };
}[] = [
  {
    category: "Meeting context — occurrence, scope, owner",
    state: { label: "Approved", tone: "green" },
  },
  {
    category: "Decisions recorded in an approved space",
    state: { label: "Approved", tone: "green" },
  },
  {
    category: "Actions and owners from an approved space",
    state: { label: "Approved", tone: "green" },
  },
  {
    category: "Approved AI-generated summary, as reviewable draft",
    state: { label: "Conditional — human review required", tone: "blue" },
  },
  {
    category: "Message content and full communication streams",
    state: { label: "Excluded", tone: "red" },
  },
  {
    category: "File content and attachments",
    state: { label: "Excluded", tone: "red" },
  },
  {
    category: "User activity monitoring of any kind",
    state: { label: "Prohibited", tone: "red" },
  },
];

export default function MappingRecord() {
  return (
    <section
      id="mapping-record"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Workspace &amp; Organizational Mapping
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Every Mapping Is a Governed Object
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Selecting a mapping opens its full record: source, destination,
            purpose, scope, policy, privacy, owner, test evidence, and change
            history.
          </p>

        </div>

        {/* Mapping Record */}
        <div className="mt-9 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_8px_24px_0px_rgba(11,18,32,0.06)] dark:border-slate-800 dark:bg-slate-900">

          {/* Record Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 bg-slate-50/60 px-6 py-5 dark:border-slate-800 dark:bg-slate-950/40">

            <div className="flex min-w-80 flex-col gap-1">

              <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                MAP-0114 · version 2 · effective 01 Sep 2026
              </p>

              <h3 className="text-base font-bold leading-7 text-sky-950 dark:text-white">
                Field Ops North → Field Services · North
              </h3>

            </div>

            <p className="inline-flex items-center gap-2 text-sm font-bold leading-6 text-emerald-700 dark:text-emerald-400">
              <span aria-hidden="true">✓</span> Mapped · awaiting test
            </p>

          </div>

          {/* Record Groups — 1px gaps render the cell dividers */}
          <div className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-slate-800">

            {groups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col bg-white px-5 pb-6 pt-5 dark:bg-slate-900"
              >

                <p className="text-xs font-bold uppercase leading-5 tracking-wide text-emerald-800 dark:text-emerald-400">
                  {group.label}
                </p>

                <dl className="mt-3 flex flex-col gap-2.5">
                  {group.rows.map((row) => (
                    <div key={row.label} className="flex flex-col">

                      <dt className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                        {row.label}
                      </dt>

                      <dd className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                        {row.value}
                      </dd>

                    </div>
                  ))}
                </dl>

              </div>
            ))}

            {/* What This Mapping Does Not Do */}
            <div className="flex flex-col bg-white px-5 pb-6 pt-5 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-emerald-800 dark:text-emerald-400">
                What this mapping does not do
              </p>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                It does not export a communication stream, and it does not make
                meeting context into hours worked. It permits a defined category to
                be reviewed by a named person.
              </p>

            </div>

          </div>

          {/* Mapping States */}
          <p className="border-t border-stone-200 bg-slate-50/60 px-6 py-4 text-sm font-normal leading-6 text-zinc-700 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">

            <span className="font-bold text-sky-950 dark:text-white">
              Mapping states:
            </span>{" "}
            Draft · Mapping incomplete · Mapped · Test pending · Test failed ·
            Accepted · Active · Paused · Excluded · Superseded · Retired.

          </p>

        </div>

        {/* Context Scope Registry */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Context Scope Registry
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Approved categories, and nothing else
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Each category carries a purpose, direction, sensitivity, retention,
              and visibility. A category absent from the registry is excluded by
              definition.
            </p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px] border-collapse text-left">

                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">

                      <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Context category
                      </th>

                      <th className="w-56 border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Registry state
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white dark:bg-slate-950">
                    {categories.map((row) => (
                      <tr
                        key={row.category}
                        className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                      >

                        <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-sky-950 dark:text-slate-200">
                          {row.category}
                        </td>

                        <td className="px-4 py-3.5 align-top">
                          <SemaStatusPill
                            label={row.state.label}
                            tone={row.state.tone}
                          />
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-5">

            <div className="rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                No universal export
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                Not every message, meeting, file, user activity record, or AI output
                is shared with ZoikoTime. Unmapped workspaces and unapproved or
                excluded categories remain outside the connection entirely — there
                is no partial or metadata-only leakage from an unmapped workspace.
              </p>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Exact fields are not published
              </h4>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Precise categories, fields, direction, timing, retention, and
                visibility must come from your current configuration and
                documentation rather than from this page. Publishing a field list we
                cannot guarantee for your deployment would be a claim, not
                information.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
