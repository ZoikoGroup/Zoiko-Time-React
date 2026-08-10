import type { ReactNode } from "react";
import CoverageStateBadge from "./CoverageStateBadge";
import type { AssuranceTone } from "./AssuranceStatusPill";

const coverageStates: {
  state: { label: string; tone: AssuranceTone };
  meaning: string;
  displayed: ReactNode;
}[] = [
  {
    state: { label: "Full", tone: "green" },
    meaning:
      "Approved controls and evidence address the mapped requirement within stated scope.",
    displayed: (
      <>
        Mapping basis and limitations.{" "}
        <span className="font-bold text-sky-950 dark:text-white">
          Still not a legal compliance conclusion.
        </span>
      </>
    ),
  },
  {
    state: { label: "Partial", tone: "amber" },
    meaning: "Only part of the requirement is addressed.",
    displayed: "The uncovered elements, and the responsible party for each.",
  },
  {
    state: { label: "Customer responsibility", tone: "blue" },
    meaning:
      "Your configuration, process, or contractual action is required.",
    displayed: "The exact responsibility and the evidence expectation.",
  },
  {
    state: { label: "Provider dependency", tone: "blue" },
    meaning: "A named approved provider contributes to coverage.",
    displayed:
      "The dependency and ZoikoTime's governance of it — no blind transfer of responsibility.",
  },
  {
    state: { label: "Not applicable", tone: "neutral" },
    meaning:
      "An approved reviewer determined the requirement falls outside stated scope.",
    displayed: "Rationale category, reviewer, and date.",
  },
  {
    state: { label: "Not mapped", tone: "neutral" },
    meaning: "No approved relationship exists.",
    displayed: "Nothing inferred — neither failure nor compliance.",
  },
  {
    state: { label: "Under review", tone: "amber" },
    meaning: "Applicability or mapping is being reassessed.",
    displayed: "Interim limitation and safe next action.",
  },
  {
    state: { label: "Conflicting", tone: "red" },
    meaning: "Sources or reviewers disagree.",
    displayed: (
      <>
        The current conclusion is{" "}
        <span className="font-bold text-sky-950 dark:text-white">blocked</span>{" "}
        and routed to human review.
      </>
    ),
  },
];

const headers = [
  { label: "Coverage state", width: "w-[176px]" },
  { label: "Meaning", width: "w-[471px]" },
  { label: "What must be displayed with it", width: "w-[474px]" },
];

export default function CoverageStates() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Control Mappings &amp; Coverage
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eight Coverage States, Including the Uncomfortable Ones
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Partial coverage names the uncovered elements. Conflicting coverage
            blocks a conclusion entirely and routes to human review.
          </p>

        </div>

        {/* Coverage Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left">

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
                {coverageStates.map((row) => (
                  <tr
                    key={row.state.label}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 py-3.5 align-top">
                      <CoverageStateBadge
                        label={row.state.label}
                        tone={row.state.tone}
                      />
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.meaning}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.displayed}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <p className="px-4 py-3.5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Illustrative mapping register with synthetic identifiers. No framework
            name, regulator, or assessor appears without approved permission and
            exact scope.
          </p>

        </div>

        {/* Not Mapped Callout */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 py-3 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            &quot;Not mapped&quot; is the honest one
          </p>

          <p className="mt-0.5 text-xs font-normal leading-5 text-red-700 dark:text-red-200/80">
            It is tempting to omit unmapped requirements so a coverage table looks
            complete. Omission is how a mapping package becomes misleading. An
            unmapped requirement is shown as unmapped, and nothing is inferred
            from it in either direction.
          </p>

        </div>

      </div>
    </section>
  );
}
