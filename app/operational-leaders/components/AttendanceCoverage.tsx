'use client'
import { useState } from 'react';

interface TabData {
  id: string;
  label: string;
  heading: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const tabContents: TabData[] = [
  {
    id: 'field-ops',
    label: 'Field operations',
    heading: 'Field operations — coverage variance across a regional day',
    description:
      'Twelve crews, three regions. Two records are missing an end event and one shift shows a coverage gap against the configured schedule. Both are routed to the regional reviewer with the reason stated.',
    metrics: [
      { label: 'Required records', value: '34 of 36 complete' },
      { label: 'Coverage variance', value: '1 gap · North region, 07:00–09:00' },
      { label: 'Assigned review', value: 'R. Adeyemi · due today' },
      { label: 'Resolution timeline', value: 'Flagged 08:12 · context added 09:40' },
    ],
  },
  {
    id: 'service-desk',
    label: 'Service desk',
    heading: 'Service desk — schedule alignment & queue handling',
    description:
      'Real-time staffing comparison across peak support windows. Identifies variance between scheduled shift start and actual login events across global support zones.',
    metrics: [
      { label: 'Required records', value: '88 of 90 complete' },
      { label: 'Coverage variance', value: '2 gaps · EMEA support queue' },
      { label: 'Assigned review', value: 'L. Marín · in progress' },
      { label: 'Resolution timeline', value: 'Flagged 09:05 · pending review' },
    ],
  },
  {
    id: 'project-team',
    label: 'Project team',
    heading: 'Project team — milestone milestone activity tracking',
    description:
      'Compares project time logs against assigned work orders. Surfaces discrepancies between logged site hours and approved project milestones.',
    metrics: [
      { label: 'Required records', value: '100% complete' },
      { label: 'Coverage variance', value: 'No variance detected' },
      { label: 'Assigned review', value: 'Automated validation' },
      { label: 'Resolution timeline', value: 'Cleared at 07:30' },
    ],
  },
  {
    id: 'contractor-roster',
    label: 'Contractor roster',
    heading: 'Contractor roster — submission completeness & sign-off',
    description:
      'Tracks vendor shift submissions and approval workflows before invoice processing, ensuring all required time attestations are logged.',
    metrics: [
      { label: 'Required records', value: '42 of 45 complete' },
      { label: 'Coverage variance', value: '3 late submissions' },
      { label: 'Assigned review', value: 'J. Tan · due tomorrow' },
      { label: 'Resolution timeline', value: 'Flagged 11:20' },
    ],
  },
];

export default function AttendanceCoverage() {
  const [activeTab, setActiveTab] = useState<string>('field-ops');

  const currentData =
    tabContents.find((tab) => tab.id === activeTab) || tabContents[0];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <div className="max-w-[800px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Attendance, Coverage &amp; Schedule Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Coordinate Attendance and Coverage Without Watching Screens
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            ZoikoTime compares captured attendance and time records with configured schedules and policy context, then surfaces missing or inconsistent records for review. It does not monitor application use, browser activity, webcams, microphones, or physical location unless a separately defined and lawful capability is explicitly enabled and documented.
          </p>
        </div>

        {/* Tab Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {tabContents.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  isActive
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="w-full bg-white rounded-2xl p-6 sm:p-9 shadow-md border border-slate-200 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {currentData.heading}
            </h3>
            <p className="max-w-[644px] text-slate-600 text-base leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-3 border-t border-slate-100">
            {currentData.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {metric.label}
                </span>
                <span className="text-sm font-normal text-slate-800 leading-normal">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          <a href="attendance-and-presence">
          <button
            type="button"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-base font-bold rounded-lg transition-colors shadow-sm"
          >
            Explore Attendance &amp; Presence
          </button></a>
          <a href="/verify-time-attendance">
          <button
            type="button"
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-base font-bold rounded-lg border border-slate-200 transition-colors"
          >
            Verify Time &amp; Attendance
          </button></a>
        </div>

      </div>
    </section>
  );
}