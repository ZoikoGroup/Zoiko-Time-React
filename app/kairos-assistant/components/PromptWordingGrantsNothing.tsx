import React from 'react';

interface ParameterItem {
  label: string;
  description: string;
}

const parameters: ParameterItem[] = [
  {
    label: 'Organization context',
    description: 'current organization and unit. Switching requires eligibility and confirmation.',
  },
  {
    label: 'Purpose',
    description: 'own-record review, assigned approval work, record-quality review, policy explanation, or organization-level reporting. Options come from governed configuration.',
  },
  {
    label: 'Period',
    description: 'explicit, with time zone and locale. Broad or ambiguous periods require clarification.',
  },
  {
    label: 'Record types',
    description: 'only approved time, timesheet, attendance, break and rest, policy, evidence, exception, report, or integration-health objects.',
  },
  {
    label: 'Field minimization',
    description: 'no hidden identifiers, no unrelated content.',
  },
];

export default function PromptWordingGrantsNothing() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Content & Parameter List */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Source, Scope, Purpose &amp; Permission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Prompt Wording Grants Nothing
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-[640px]">
              Changing the wording, asking repeatedly, or using synonyms never widens access. Effective access is computed from identity and policy, not from language.
            </p>
          </header>

          {/* Governance Parameters List */}
          <ul className="flex flex-col gap-4 pl-0 list-none pt-2">
            {parameters.map((param, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" aria-hidden="true" />
                <div className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white font-bold">
                    {param.label}
                  </strong>
                  <span> — {param.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Preview Media Container */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[534px] aspect-4/3 rounded-2xl overflow-hidden ">
            <img
              src="/kairos/div.mock (12).png"
              alt="Source and Scope Governance Diagram"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}