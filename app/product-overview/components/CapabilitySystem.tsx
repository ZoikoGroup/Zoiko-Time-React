import React from 'react';
import SectionEyebrow from './SectionEyebrow';

interface Capability {
  name: string;
  detail: string;
}

interface CapabilityGroup {
  group: string;
  items: Capability[];
}

const groups: CapabilityGroup[] = [
  {
    group: 'Platform',
    items: [
      { name: 'Desktop & Mobile Apps', detail: 'Capture time anywhere, consistently' },
      { name: 'Zoiko Sema Integration', detail: 'Optional, permissioned connection' },
      { name: 'Kairos Assistant', detail: 'Retrieves and explains governed data — decides nothing' },
    ],
  },
  {
    group: 'Time & Attendance',
    items: [
      { name: 'Time Tracking', detail: 'Capture and switch context in seconds' },
      { name: 'Timesheets & Approvals', detail: 'Review, request context, approve' },
      { name: 'Attendance & Presence', detail: 'Verified states from approved context' },
      { name: 'Break & Rest Compliance', detail: 'Configured policy applied consistently' },
    ],
  },
  {
    group: 'Truth & Evidence',
    items: [
      { name: 'Deterministic Time Classification', detail: 'Rule-based, not AI-branded' },
      { name: 'Evidence Ledger', detail: 'Append-only record history' },
      { name: 'Reports & Dashboards', detail: 'Aggregate, defined, scoped metrics' },
    ],
  },
];

export default function CapabilitySystem() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pt-16 sm:pt-24 pb-12 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col items-center gap-6">

        {/* Header Section */}
        <div className="max-w-[640px] flex flex-col items-center gap-3.5 text-center">
          <SectionEyebrow centered>Capability System</SectionEyebrow>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-10">
            Platform, Time &amp; Truth
          </h2>
        </div>

        {/* Capability Cards */}
        <div className="pt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {groups.map((group) => (
            <div
              key={group.group}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4"
            >
              <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                {group.group}
              </h3>

              <div className="flex flex-col">
                {group.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className={`py-3 flex flex-col gap-1 ${
                      idx > 0 ? 'border-t border-slate-200 dark:border-slate-800' : 'pt-0'
                    }`}
                  >
                    <span className="text-sm font-medium text-slate-900 dark:text-white leading-6">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 leading-5">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Non-AI Footnote */}
        <p className="max-w-[640px] text-center text-xs text-gray-500 dark:text-slate-400 leading-5">
          Deterministic Time Classification is not AI. Kairos can retrieve, summarize, and explain
          governed organization data — but decides nothing.
        </p>

        {/* Platform Photo */}
        <figure className="w-full relative rounded-[20px] shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.16)] overflow-hidden">
          <img
            className="w-full h-64 sm:h-72 object-cover"
            src="/product-overview/capability-system.png"
            alt="A team reviewing ZoikoTime capabilities together around a shared screen"
          />
          <figcaption className="absolute inset-x-0 bottom-0 px-6 sm:px-8 py-6 bg-linear-to-t from-slate-900/90 to-slate-900/0 text-white text-sm sm:text-base font-medium leading-6">
            <span className="block max-w-136">
              One platform, capture through evidence — desktop, mobile, and governed assistant access,
              all built on the same record.
            </span>
          </figcaption>
        </figure>

      </div>
    </section>
  );
}
