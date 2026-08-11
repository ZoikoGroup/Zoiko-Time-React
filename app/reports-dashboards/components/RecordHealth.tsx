import SectionIntro from "./SectionIntro";
import StatePill, { type PillTone } from "./StatePill";
import { poppins } from "../fonts";

const dimensions: {
  title: string;
  states: { label: string; tone: PillTone }[];
}[] = [
  {
    title: "Coverage",
    states: [
      { label: "Complete", tone: "green" },
      { label: "Partial", tone: "amber" },
      { label: "Unavailable", tone: "gray" },
    ],
  },
  {
    title: "Freshness",
    states: [
      { label: "Current", tone: "green" },
      { label: "Delayed", tone: "amber" },
      { label: "Stale", tone: "red" },
    ],
  },
  {
    title: "Validity",
    states: [
      { label: "Valid", tone: "green" },
      { label: "Invalid", tone: "red" },
      { label: "Conflicting", tone: "amber" },
    ],
  },
  {
    title: "Uniqueness",
    states: [
      { label: "Unique", tone: "green" },
      { label: "Duplicate", tone: "amber" },
      { label: "Superseded", tone: "gray" },
    ],
  },
  {
    title: "Workflow",
    states: [
      { label: "Approved", tone: "amber" },
      { label: "Escalated", tone: "red" },
      { label: "Resolved", tone: "green" },
    ],
  },
  {
    title: "Classification",
    states: [
      { label: "Matched", tone: "green" },
      { label: "Needs review", tone: "amber" },
    ],
  },
  {
    title: "Release",
    states: [
      { label: "Ready", tone: "blue" },
      { label: "Delivered", tone: "green" },
      { label: "Reconciled", tone: "purple" },
    ],
  },
  {
    title: "Evidence / privacy",
    states: [
      { label: "Available", tone: "green" },
      { label: "Restricted", tone: "amber" },
      { label: "Missing", tone: "gray" },
    ],
  },
];

export default function RecordHealth() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Record Health"
          title="Data and workflow state — not a performance score."
          description="Eight dimensions, each with neutral, explicit states and a next action. Nothing here ranks a person."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="rounded-2xl border border-gray-200 p-4 dark:border-slate-800"
            >
              <h3
                className={`${poppins.className} text-xs font-bold text-sky-950 dark:text-white`}
              >
                {dimension.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {dimension.states.map((state) => (
                  <StatePill
                    key={state.label}
                    label={state.label}
                    tone={state.tone}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language note */}
        <div className="mt-8 rounded-2xl border-l-[3px] border-teal-600 bg-slate-50 px-6 py-4 dark:bg-slate-800">
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            Example language used throughout:{" "}
            <span className="font-bold">
              &quot;Missing source records — review required&quot;
            </span>{" "}
            rather than a severity score or red alert. Health states describe
            data and process, never a worker.
          </p>
        </div>
      </div>
    </section>
  );
}
