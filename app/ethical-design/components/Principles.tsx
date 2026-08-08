import StatusPill, { type Tone } from "./StatusPill";

const states: { label: string; tone: Tone }[] = [
  { label: "Adopted", tone: "green" },
  { label: "Implemented", tone: "green" },
  { label: "Partially implemented", tone: "violet" },
  { label: "Under review", tone: "blue" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
  { label: "Evidence-gated", tone: "neutral" },
];

type Principle = {
  id: string;
  state: { label: string; tone: Tone };
  title: string;
  body: string;
  safeguards?: string;
  gap?: string;
  owner?: string;
  reviewed?: string;
};

const groups: { group: string; title: string; principles: Principle[] }[] = [
  {
    group: "Group 1",
    title: "People & Rights",
    principles: [
      {
        id: "ED-01",
        state: { label: "Implemented", tone: "green" },
        title: "Human dignity & non-surveillance",
        body: "Design must not demean, coerce, or convert ordinary work into hidden behavioral surveillance.",
        safeguards:
          "Product-wide collection prohibition enforced in architecture, not configuration.",
        owner: "Trust & Governance",
        reviewed: "12 Jul 2026",
      },
      {
        id: "ED-04",
        state: { label: "Implemented", tone: "green" },
        title: "Human authority",
        body: "Consequential outcomes require eligible human judgment. Flags, classifications, and summaries remain evidence for review.",
        safeguards:
          "Eight human-only decision classes; separation of duties; no automation may hold final permission.",
        owner: "Product governance",
        reviewed: "04 Jul 2026",
      },
      {
        id: "ED-05",
        state: { label: "Implemented", tone: "green" },
        title: "Transparency & contestability",
        body: "Affected people can understand records, inputs, rule versions, status, and reasons — and reach correction, challenge, and escalation.",
        safeguards:
          "Own-record visibility, neutral states, correction path, linked appeal history.",
        owner: "Product governance",
        reviewed: "04 Jul 2026",
      },
      {
        id: "ED-06",
        state: { label: "Partially implemented", tone: "violet" },
        title: "Fairness & non-discrimination",
        body: "Assess foreseeable differential impact, exclusion, proxy effects, and inconsistent treatment — without unnecessary sensitive-data collection.",
        safeguards:
          "Context-specific differential-impact review at design gate; qualitative and accessibility evidence methods.",
        gap: "quantitative testing coverage varies by journey. Interim control is manual review at release gate. Review plan owned by Product governance.",
        owner: "Product governance",
        reviewed: "20 Jun 2026",
      },
      {
        id: "ED-07",
        state: { label: "Partially implemented", tone: "violet" },
        title: "Accessibility & inclusion",
        body: "Design, test, and operate inclusive journeys and alternatives across supported devices, assistive technologies, and contexts.",
        safeguards:
          "WCAG 2.2 AA target, manual and automated testing, published known limitations, issue route.",
        gap: "conformance is asserted per surface, not platform-wide. Remediation status is published alongside each limitation.",
        owner: "Accessibility",
        reviewed: "22 Jun 2026",
      },
      {
        id: "ED-12",
        state: { label: "Implemented", tone: "green" },
        title: "Freedom from dark patterns",
        body: "No hidden consent, fake urgency, obstructive withdrawal, confirmshaming, coercive defaults, or commercial prioritization over public evidence and rights.",
        safeguards:
          "No preselected consent anywhere; one-action unsubscribe; public evidence never gated behind a lead form.",
        owner: "Design & Trust",
        reviewed: "12 Jul 2026",
      },
    ],
  },
  {
    group: "Group 2",
    title: "Data & Technology",
    principles: [
      {
        id: "ED-02",
        state: { label: "Implemented", tone: "green" },
        title: "Legitimate purpose & proportionality",
        body: "Define the operational need, affected people, intended benefit, non-goals, alternatives, and why this intervention is proportionate.",
        safeguards:
          "Need statement, baseline, alternatives considered, and non-goals required at design gate.",
        owner: "Product governance",
        reviewed: "04 Jul 2026",
      },
      {
        id: "ED-03",
        state: { label: "Implemented", tone: "green" },
        title: "Data minimization & context preservation",
        body: "Collect, derive, retain, and expose only what is necessary — while preserving source, policy, jurisdiction, timezone, limitations, and evidence context.",
        safeguards:
          "Field-level minimization, deny-by-default exposure, preserved lineage on every record.",
        owner: "Privacy",
        reviewed: "28 Jun 2026",
      },
      {
        id: "ED-08",
        state: { label: "Implemented", tone: "green" },
        title: "Privacy & security by design",
        body: "Purpose limitation, least privilege, deny-by-default access, retention controls, safe logging, and secure change are built in.",
        safeguards:
          "Design-gate privacy and security review; prohibited categories excluded from logs by architecture.",
        owner: "Privacy & Security",
        reviewed: "01 Jul 2026",
      },
      {
        id: "ED-09",
        state: { label: "Partially implemented", tone: "violet" },
        title: "Reliability & safe failure",
        body: "Unknown, partial, stale, and conflicting states stay visible. Rollback, recovery, reconciliation, and incident communication are designed before release.",
        safeguards:
          "Explicit Unknown states, no optimistic fallback, reconciliation on recovery, published incident practice.",
        gap: "recovery test evidence is under review and not yet publishable. See Platform Reliability.",
        owner: "Platform",
        reviewed: "28 Jun 2026",
      },
    ],
  },
  {
    group: "Group 3",
    title: "Operations & Accountability",
    principles: [
      {
        id: "ED-10",
        state: { label: "Partially implemented", tone: "violet" },
        title: "Shared responsibility & jurisdictional context",
        body: "Make organizational responsibilities, worker rights, policy versions, legal variation, and consultation context visible — without making legal conclusions.",
        safeguards:
          "Three-column responsibility model on trust destinations; policy version shown on records.",
        gap: "consultation materials remain evidence-gated pending legal review. Jurisdictional guidance is not published as legal advice.",
        owner: "Trust & Governance",
        reviewed: "12 Jul 2026",
      },
      {
        id: "ED-11",
        state: { label: "Implemented", tone: "green" },
        title: "Evidence, accountability & correction",
        body: "Preserve owners, approvals, tests, limitations, incidents, feedback, corrections, supersession, and withdrawal as attributable history.",
        safeguards:
          "Append-only evidence history; no silent overwrite; published correction records.",
        owner: "Trust & Governance",
        reviewed: "12 Jul 2026",
      },
      {
        id: "Related",
        state: { label: "Evidence-gated", tone: "amber" },
        title: "AI Governance",
        body: "Approved ML scope, prohibited uses, and the Kairos boundary as a standalone destination.",
        gap: "Not yet approved for public release, so it is described here but not linked. The AI boundary itself is covered under ED-04 and on Human-in-Command Controls.",
      },
    ],
  },
];

export default function Principles() {
  return (
    <section
      id="principles"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Twelve Governed Principles
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Grouped by What They Protect
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A design can pass one principle and fail another. There is no
            combined score, because a combined score would hide exactly the
            release-blocking gap you need to see.
          </p>

          {/* States */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {states.map((state) => (
              <StatusPill
                key={state.label}
                label={state.label}
                tone={state.tone}
              />
            ))}
          </div>

        </div>

        {/* Groups */}
        <div className="mt-10 flex flex-col gap-10">

          {groups.map((group) => (
            <div key={group.group} className="flex flex-col">

              {/* Group Heading */}
              <div className="flex items-center gap-2.5">

                <span className="inline-flex rounded-full border border-stone-200 bg-slate-50 px-2.5 py-1 text-[10px] font-extrabold uppercase leading-3 tracking-wide text-zinc-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                  {group.group}
                </span>

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {group.title}
                </h3>

              </div>

              {/* Principles */}
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {group.principles.map((principle) => (
                  <article
                    key={principle.id + principle.title}
                    className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                  >

                    <div className="flex items-start justify-between gap-3">

                      <span className="text-xs font-semibold leading-5 text-emerald-800 dark:text-emerald-400">
                        {principle.id}
                      </span>

                      <StatusPill
                        label={principle.state.label}
                        tone={principle.state.tone}
                      />

                    </div>

                    <h4 className="mt-1.5 text-base font-bold leading-5 text-sky-950 dark:text-white">
                      {principle.title}
                    </h4>

                    <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {principle.body}
                    </p>

                    {principle.safeguards && (
                      <div className="mt-3 border-t border-stone-200 pt-2 dark:border-slate-800">

                        <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:text-slate-400">
                          Current safeguards
                        </p>

                        <p className="mt-1 text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                          {principle.safeguards}
                        </p>

                      </div>
                    )}

                    {principle.gap && (
                      <div className="mt-2 rounded-lg bg-amber-50/60 px-2.5 pb-2.5 pt-2 dark:bg-amber-950/10">
                        <p className="text-xs font-normal leading-5 text-amber-800 dark:text-amber-200/80">
                          {principle.id === "Related" ? (
                            principle.gap
                          ) : (
                            <>
                              <span className="font-bold">Stated gap:</span>{" "}
                              {principle.gap}
                            </>
                          )}
                        </p>
                      </div>
                    )}

                    {principle.owner && (
                      <div className="mt-2 flex flex-1 flex-col items-start justify-end gap-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">

                        <span>Owner: {principle.owner}</span>
                        <span>Reviewed {principle.reviewed}</span>

                      </div>
                    )}

                  </article>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Application Callout */}
        <div className="mx-auto mt-10 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 py-3 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            How principles are applied
          </p>

          <p className="mt-1 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            Every material feature, workflow, policy-affecting change, data use,
            permission change, automation, or public claim maps to the relevant
            principle IDs. A principle may be marked Not Applicable only with a
            reason, a reviewer, and a scope — it can never be skipped silently.
            Residual limitations remain visible after approval and can trigger
            restricted availability, manual-only operation, additional notice,
            independent review, or non-release.
          </p>

        </div>

      </div>
    </section>
  );
}
