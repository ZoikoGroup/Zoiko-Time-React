import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: 'Field mapping',
    description:
      'source and destination object and field, semantic definition, data type, required status, authority.',
  },
  {
    title: 'Code mapping',
    description:
      'source value, destination value, unmapped behavior, owner, effective dates, version, approval.',
  },
  {
    title: 'Transformation',
    description:
      'deterministic rule, inputs, output, null and error behavior, reversibility, test cases, evidence.',
  },
  {
    title: 'Temporal treatment',
    description:
      'source time zone, local date, UTC where applicable, DST ambiguity, period boundary, ordering.',
  },
  {
    title: 'Identity mapping',
    description:
      'stable identifier, matching rule, ambiguity state, merge prohibition, access consequence, approval.',
  },
  {
    title: 'Attachments',
    description:
      'reference versus copy decision, integrity check, metadata preservation, retention, unsupported-type handling.',
  },
];

export default function DeterministicMappingSection() {
  return (
    <section id="mapping-controls" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Content */}
        <div className="flex flex-col gap-6">
          
          {/* Header */}
          <header className="space-y-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Deterministic Mapping &amp; Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Explicit Enough for Business, Privacy, and Audit Reviewers
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              A mapping is a reviewable artifact with an author, a reviewer, test cases, and a version — not a hidden script.
            </p>
          </header>

          {/* Feature List */}
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </strong>
                  {' — '}
                  <span>{item.description}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Unknown Values Warning Box */}
          <div className="p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-xl space-y-1 shadow-sm">
            <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wide">
              Unknown values
            </span>
            <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300 leading-relaxed">
              An unknown value stays unresolved, or maps to an approved neutral state. The system never infers attendance, approval, reason, identity, or policy outcome to fill a gap.
            </p>
          </div>

          {/* Change Impact Box */}
          <div className="p-5 sm:p-6 bg-slate-100/80 dark:bg-slate-900/80 border-l-4 border-l-emerald-500 border border-slate-200 dark:border-slate-800 rounded-r-xl space-y-1.5 shadow-sm">
            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">
              Change impact
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Any mapping change invalidates the affected rehearsal and validation evidence, and requires a re-run before cutover. Evidence does not survive the thing it was evidence for.
            </p>
          </div>

        </div>

        {/* Right Column: Visual Preview / Diagram */}
        <div className="w-full h-full flex items-center justify-center lg:sticky lg:top-8">
          <div className="w-full max-w-lg lg:max-w-none aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-900">
            <img
              src="/data-migration/div.mock (10).png"
              alt="Deterministic Mapping and Transformation Diagram Preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}