import SectionIntro from "./SectionIntro";

const fields = [
  { label: "Affected object", value: "REC-88214-A", mono: true },
  { label: "Actor / service", value: "J. Alvarez — Compliance Reviewer" },
  { label: "Role / scope", value: "Reviewer · Team 12 scope" },
  { label: "Canonical timestamp", value: "2026-08-06T14:40:11Z", mono: true },
  { label: "Local timestamp", value: "Aug 6, 2026 · 7:40 AM PDT (UTC-7)", mono: true },
  { label: "Action / reason", value: "Approved worker correction — break duration" },
  { label: "Before → after", value: "25 min → 30 min" },
  { label: "Source / policy context", value: "Break & Rest Policy v3.2" },
  { label: "Evidence references", value: "2 available, 1 restricted" },
  { label: "Relationships", value: "Supersedes EVT-30401" },
  { label: "Retention state", value: "Standard retention · not restricted" },
  { label: "Owner / recovery", value: "Compliance Reviewer team" },
];

export default function EventAnatomy() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Ledger Event Anatomy"
          title="Every material event, fully explained."
          description="No event is a bare line item — each one expands into identity, timing, reason, evidence, and what happens next."
          descriptionClassName="max-w-[680px]"
        />

        <div className="mt-12 overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,34,71,0.06)] dark:border-slate-800 dark:bg-slate-950">

          {/* Event header */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-900 px-6 py-4">
            <p className="font-mono text-xs text-white/90">
              EVT-30456 · type: correction_approved · v4
            </p>

            <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
              Resulting state: Approved
            </span>
          </div>

          {/* Event fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((field) => (
              <div
                key={field.label}
                className="border-b border-gray-100 px-6 py-4 lg:border-r lg:[&:nth-child(3n)]:border-r-0 dark:border-slate-800"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {field.label}
                </p>

                <p
                  className={`mt-1.5 leading-5 text-sky-950 dark:text-white ${
                    field.mono ? "font-mono text-xs font-medium" : "text-sm font-medium"
                  }`}
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
