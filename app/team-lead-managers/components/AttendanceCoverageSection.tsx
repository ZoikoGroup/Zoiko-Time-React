'use client'
import  { useState } from 'react';

interface Scenario {
  id: string;
  tabLabel: string;
  cardTitle: string;
  description: string;
  metrics: {
    requiredRecords: string;
    coverageVariance: string;
    assignedReview: string;
    resolutionTimeline: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: 'field-team',
    tabLabel: 'Field team management',
    cardTitle: 'Field team management — a coverage gap you can explain',
    description:
      'Sixteen workers across two crews. Two records have no end event and one shift shows a coverage gap against the configured schedule. Both arrive in your queue with the reason stated, so your first message to the worker is a question, not an accusation.',
    metrics: {
      requiredRecords: '14 of 16 complete',
      coverageVariance: '1 gap · North crew, 07:00–09:00',
      assignedReview: 'You · due before Wed cut-off',
      resolutionTimeline: 'Flagged 08:12 · context added 09:40',
    },
  },
  {
    id: 'service-desk',
    tabLabel: 'Service desk',
    cardTitle: 'Service desk — managing active shift overlaps',
    description:
      'Twenty-four support agents across three shift rotations. System surfaces unscheduled overtime and unassigned break durations for review prior to payroll submission.',
    metrics: {
      requiredRecords: '22 of 24 complete',
      coverageVariance: '2 overlaps · Tier 2 desk, 14:00–15:00',
      assignedReview: 'Shift Lead · due today 18:00',
      resolutionTimeline: 'Flagged 11:05 · pending response',
    },
  },
  {
    id: 'project-team',
    tabLabel: 'Project team',
    cardTitle: 'Project team — budget attribution & hours alignment',
    description:
      'Cross-functional team allocated across four client deliverables. Tracks logged time against client milestones without requiring background keylogger tools.',
    metrics: {
      requiredRecords: '18 of 18 complete',
      coverageVariance: '0 gaps · Allocation verified',
      assignedReview: 'Project Admin · completed',
      resolutionTimeline: 'Resolved 16:30',
    },
  },
  {
    id: 'contractor-roster',
    tabLabel: 'Contractor roster',
    cardTitle: 'Contractor roster — commercial record verification',
    description:
      'External specialists providing specialized technical support. Verifies commercial record entries against agreed scope of work and deliverables.',
    metrics: {
      requiredRecords: '8 of 10 complete',
      coverageVariance: '2 pending invoice sign-offs',
      assignedReview: 'Vendor Ops · due Friday',
      resolutionTimeline: 'Flagged yesterday · in review',
    },
  },
];

export default function AttendanceCoverageSection() {
  const [activeTabId, setActiveTabId] = useState<string>('field-team');

  const activeScenario =
    scenarios.find((s) => s.id === activeTabId) || scenarios[0];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Block */}
        <div className="max-w-[800px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Attendance, Coverage &amp; Schedule Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Coordinate Attendance and Coverage<br className="hidden sm:inline" /> Without Watching Screens
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime compares captured attendance and time records with configured schedules and policy context, then surfaces missing or inconsistent records for review. It does not monitor application use, browser activity, webcams, microphones, or physical location unless a separately defined and lawful capability is explicitly enabled and documented.
          </p>
        </div>

        {/* Tab Pills Bar */}
        <div className="w-full flex flex-wrap justify-center sm:justify-start gap-2.5 pt-4">
          {scenarios.map((scenario) => {
            const isActive = scenario.id === activeTabId;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveTabId(scenario.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {scenario.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-9 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {activeScenario.cardTitle}
            </h3>
            <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {activeScenario.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-3 border-t border-slate-100 dark:border-slate-700/60">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Required records
              </span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {activeScenario.metrics.requiredRecords}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Coverage variance
              </span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {activeScenario.metrics.coverageVariance}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Assigned review
              </span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {activeScenario.metrics.assignedReview}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Resolution timeline
              </span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {activeScenario.metrics.resolutionTimeline}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
      
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 w-full sm:w-auto">
           <a href="/attendance-and-presence">
          <button className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm">
            Explore Attendance &amp; Presence
          </button></a>
          <a href="/verify-time-attendance">
          <button className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            Verify Time &amp; Attendance
          </button></a>
        </div>

      </div>
    </section>
  );
}