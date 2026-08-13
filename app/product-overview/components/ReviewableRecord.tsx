import React from 'react';
import SectionEyebrow from './SectionEyebrow';

interface RecordField {
  label: string;
  value: string;
}

const recordFields: RecordField[] = [
  { label: 'Record ID', value: 'TR-40921' },
  { label: 'Source type', value: 'Desktop app · verified' },
  { label: 'Policy / version', value: 'Overtime & Break Policy v3.2' },
  { label: 'Classification', value: 'Standard · rule v3.2 · Aug 3, 09:02' },
  { label: 'Review status', value: 'Approved by M. Alders (HR)' },
  { label: 'Evidence link', value: '2 comments · 1 correction' },
];

interface RecordState {
  state: string;
  badge: string;
  badgeStyles: string;
}

const recordStates: RecordState[] = [
  {
    state: 'Approved',
    badge: 'Ready',
    badgeStyles: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400',
  },
  {
    state: 'Review required',
    badge: 'Pending',
    badgeStyles: 'bg-orange-100 dark:bg-amber-950/40 text-yellow-800 dark:text-amber-400',
  },
  {
    state: 'Correction submitted',
    badge: 'In progress',
    badgeStyles: 'bg-sky-100 dark:bg-sky-950/40 text-blue-900 dark:text-sky-300',
  },
  {
    state: 'Source unavailable / stale',
    badge: 'Needs attention',
    badgeStyles: 'bg-rose-50 dark:bg-rose-950/40 text-pink-700 dark:text-rose-300',
  },
  {
    state: 'Permission limited',
    badge: 'Restricted',
    badgeStyles: 'bg-zinc-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400',
  },
  {
    state: 'Export pending / failed',
    badge: 'Queued',
    badgeStyles: 'bg-violet-50 dark:bg-violet-950/40 text-indigo-500 dark:text-violet-300',
  },
];

export default function ReviewableRecord() {
  return (
    <section className="w-full bg-green-50 dark:bg-slate-900 pt-14 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-10 sm:gap-12">

        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Core Product Proof</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            A Reviewable Record, Not a Black Box
          </h2>
          <p className="text-base text-gray-500 dark:text-slate-400 leading-7">
            Every state a record can be in is visibly designed — never hidden behind a single
            &quot;current total.&quot;
          </p>
        </div>

        {/* Record & States Panel */}
        <div className="w-full p-2 bg-green-50 dark:bg-slate-900 rounded-[20px] border border-green-100 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

            {/* Record Detail */}
            <div className="px-5 sm:px-7 py-5 sm:py-7 bg-white dark:bg-slate-950 rounded-2xl">
              <dl>
                {recordFields.map((field, idx) => (
                  <div
                    key={field.label}
                    className={`py-3 flex items-start justify-between gap-4 ${
                      idx > 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''
                    }`}
                  >
                    <dt className="text-sm text-gray-500 dark:text-slate-400 leading-6">
                      {field.label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900 dark:text-white leading-6 text-right">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Record States */}
            <div className="p-5 sm:p-7 flex flex-col gap-2.5">
              {recordStates.map((item) => (
                <div
                  key={item.state}
                  className="px-3.5 py-2.5 bg-white dark:bg-slate-950 rounded-[10px] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                >
                  <span className="text-xs text-slate-900 dark:text-slate-200 leading-5">
                    {item.state}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold leading-4 shrink-0 ${item.badgeStyles}`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
