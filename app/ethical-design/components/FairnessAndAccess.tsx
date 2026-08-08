import Link from "next/link";
import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Fairness & differential impact",
    status: { label: "Partially implemented", tone: "violet" },
    objective: (
      <>
        <span className="font-bold text-sky-950 dark:text-white">ED-06.</span>{" "}
        Assess foreseeable differential burden without collecting sensitive
        attributes we do not need.
      </>
    ),
    rows: [
      {
        label: "Dimension choice",
        value:
          "Chosen because relevant to the design and ethically supportable — not because broad profiling is convenient",
      },
      {
        label: "Where attributes cannot be collected",
        value:
          "Qualitative research, accessibility testing, scenario analysis, and support or complaint evidence",
      },
      {
        label: "Always reported",
        value:
          "Sample, environment, period, missingness, confidence limitations, excluded populations",
      },
      {
        label: "Remediation options",
        value:
          "Redesign, manual review, alternative route, restricted scope, additional notice, training, monitoring, or non-release",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> averages do not erase
        materially worse outcomes for a subgroup, region, device, schedule
        pattern, or exception path — and we report the subgroup result rather
        than the average that hides it. No universal fairness claim is made, and
        quantitative coverage varies by journey.
      </>
    ),
  },
  {
    title: "Accessibility & inclusion",
    status: { label: "Partially implemented", tone: "violet" },
    objective: (
      <>
        <span className="font-bold text-sky-950 dark:text-white">ED-07.</span>{" "}
        Inclusive journeys and tested alternatives are a release requirement,
        not a later fix.
      </>
    ),
    rows: [
      {
        label: "Target",
        value: "WCAG 2.2 AA across supported surfaces",
      },
      {
        label: "Methods",
        value:
          "Manual and automated testing, user research, alternative-path validation",
      },
      {
        label: "Published",
        value:
          "Tested scope, methods used, known limitations, remediation status, owner, issue route",
      },
    ],
    limitation: (
      <>
        <span className="font-bold">Limitations:</span> no perfect-conformance
        claim. Conformance is stated per surface rather than platform-wide, and
        known limitations are published alongside the position rather than after
        it. Any product claiming flawless accessibility has not tested honestly.
      </>
    ),
  },
];

export default function FairnessAndAccess() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/accessibility"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            <span>Accessibility conformance</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
