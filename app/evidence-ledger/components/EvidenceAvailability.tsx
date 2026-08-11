import SectionIntro from "./SectionIntro";
import StatePill, { type PillTone } from "./StatePill";

const states: { label: string; tone: PillTone; description: string }[] = [
  {
    label: "Available",
    tone: "green",
    description: "Accessible to authorized viewers now.",
  },
  {
    label: "Restricted",
    tone: "amber",
    description: "Exists, access is scoped by role or purpose.",
  },
  {
    label: "Missing",
    tone: "gray",
    description: "Expected but was never captured.",
  },
  {
    label: "Stale",
    tone: "amber",
    description: "Available, but past its expected refresh.",
  },
  {
    label: "Withdrawn",
    tone: "gray",
    description: "Removed by an authorized source action.",
  },
  {
    label: "Superseded",
    tone: "purple",
    description: "Replaced by a newer linked version.",
  },
  {
    label: "Redacted",
    tone: "gray",
    description: "Present, with content masked by policy.",
  },
  {
    label: "Unavailable",
    tone: "red",
    description: "Cannot currently be retrieved or shown.",
  },
  {
    label: "Conflicting",
    tone: "red",
    description: "Multiple sources disagree — flagged for review.",
  },
  {
    label: "Unknown",
    tone: "gray",
    description: "State could not be determined.",
  },
];

export default function EvidenceAvailability() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Evidence Availability"
          title={'Ten explicit states. No universal "complete."'}
          description="Each state carries text and an icon — never color alone — and a clear recovery path. There's no completeness percentage here; evidence availability is stated per item, not summarized into a score."
          descriptionClassName="max-w-[680px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {states.map((state) => (
            <div
              key={state.label}
              className="rounded-2xl border border-gray-200 p-4 dark:border-slate-800"
            >
              <StatePill label={state.label} tone={state.tone} />

              <p className="mt-4 text-xs leading-5 text-slate-600 dark:text-slate-400">
                {state.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
