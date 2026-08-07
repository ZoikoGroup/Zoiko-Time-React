import React from 'react';

interface FieldItem {
  label: string;
  value: string;
  subtext?: string;
  isHighlight?: boolean;
}

interface FieldGroup {
  category: string;
  fields: FieldItem[];
}

const fieldGroups: FieldGroup[] = [
  {
    category: 'Identity & scope',
    fields: [
      { label: 'Period type', value: 'Weekly', isHighlight: true },
      { label: 'Range', value: '28 Jul – 03 Aug 2026' },
      { label: 'Time zone', value: 'Europe/Berlin' },
      { label: 'Jurisdiction scope', value: 'DE · Field North' },
    ],
  },
  {
    category: 'Ownership',
    fields: [
      { label: 'Worker', value: 'A. Ferreira' },
      { label: 'Submitter', value: 'Same as worker' },
      { label: 'Assigned reviewer', value: 'R. Adeyemi' },
      { label: 'Coverage', value: 'No delegation active' },
    ],
  },
  {
    category: 'Record summary',
    fields: [
      { label: 'Records included', value: '5', isHighlight: true },
      { label: 'Source categories', value: 'Worker input · connected system' },
      {
        label: 'Corrections',
        value: '1 accepted',
        subtext: 'Project reference added',
        isHighlight: true,
      },
    ],
  },
  {
    category: 'Completeness',
    fields: [
      { label: 'Expected vs received', value: '5 of 5', isHighlight: true },
      { label: 'Missing facts', value: '0 remaining', isHighlight: true },
      { label: 'Last sync', value: '05 Aug 09:12', subtext: 'One source 41h stale' },
    ],
  },
  {
    category: 'Policy context',
    fields: [
      { label: 'Policy / version', value: 'Field North v3' },
      { label: 'Effective', value: '01 Jun 2026' },
      { label: 'Boundary', value: 'Configuration, not legal advice' },
    ],
  },
  {
    category: 'Change context',
    fields: [
      { label: 'Since v1', value: '1 record changed', isHighlight: true },
      { label: 'Actor / reason', value: 'Worker · missing context supplied' },
      { label: 'Superseded', value: 'v1 preserved, not deleted' },
    ],
  },
  {
    category: 'Decision & evidence',
    fields: [
      { label: 'Decision', value: 'None recorded yet' },
      { label: 'Evidence events', value: '9', isHighlight: true },
      { label: 'Ledger', value: 'Linked' },
    ],
  },
  {
    category: 'Handoff & privacy',
    fields: [
      {
        label: 'Handoff',
        value: 'Not eligible',
        subtext: 'Approval prerequisite unmet',
      },
      {
        label: 'Privacy treatment',
        value: 'Minimum necessary fields for viewer role',
      },
    ],
  },
];

const periodStatuses = [
  'Draft',
  'Needs review',
  'Ready',
  'Submitted',
  'In review',
  'Information requested',
  'Returned',
  'Correction pending',
  'Approved',
  'Rejected',
  'Superseded',
  'Locked',
  'Reconciliation required',
];

export default function AnatomyOfReviewablePeriod() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <header className="max-w-[800px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Anatomy of a Reviewable Period
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Eleven Field Groups Behind Every Total
          </h2>
          <p className="max-w-[640px] text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
            Every displayed total or status resolves to underlying records, source context, version, and an available action. A number with nothing behind it does not appear.
          </p>
        </header>

        {/* Main Card Container */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          
          {/* Card Top Banner / Meta Bar */}
          <div className="w-full px-6 py-4 bg-slate-100/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Period TP-9042 · version 2 · Week 32, 2026
              </span>
              <div className="flex items-center gap-1.5 flex-wrap text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                <span>A. Ferreira</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                  (synthetic label)
                </span>
                <span className="text-slate-400">·</span>
                <span>Field Services North</span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 rounded-full text-amber-700 dark:text-amber-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>In review</span>
            </div>
          </div>

          {/* Field Groups Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldGroups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="flex flex-col gap-3 p-4 bg-slate-50/50 dark:bg-slate-950/40 rounded-xl border border-slate-200/60 dark:border-slate-800/60"
              >
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {group.category}
                </h3>
                
                <div className="flex flex-col gap-3">
                  {group.fields.map((field, fieldIdx) => (
                    <div key={fieldIdx} className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {field.label}
                      </span>
                      <span
                        className={`text-xs ${
                          field.isHighlight
                            ? 'font-bold text-slate-900 dark:text-white'
                            : 'font-normal text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {field.value}
                      </span>
                      {field.subtext && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                          {field.subtext}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Status List */}
          <div className="px-6 py-4 bg-slate-100/60 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white mr-1.5">
              Period statuses:
            </span>
            <span>{periodStatuses.join(' · ')}</span>
          </div>

        </div>

      </div>
    </section>
  );
}