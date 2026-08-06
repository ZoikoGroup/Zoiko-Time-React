'use client'
import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function OperationsCommandCenter() {
  const [activeTab, setActiveTab] = useState('Executive summary');
  const [activeFilter, setActiveFilter] = useState('Operating period');

  const tabs = [
    'Executive summary',
    'Regional operations',
    'Manager queue',
    'Project control',
    'Worker record',
  ];

  const filters = [
    'Operating period',
    'Organization',
    'Region',
    'Team',
    'Project',
    'Worker type',
    'Owner',
    'State',
  ];

  const metrics = [
    { label: 'Records complete', value: '96.4%' },
    { label: 'Open exceptions', value: '38' },
    { label: 'Review SLA met', value: '92%' },
    { label: 'Attribution complete', value: '89%' },
    { label: 'Post-approval changes', value: '0.6%' },
    { label: 'Downstream', value: 'Ready' },
  ];

  const tableData = [
    {
      team: 'Field Team · North',
      issue: 'Unverified exit',
      owner: 'R. Adeyemi',
      status: 'Pending review',
      statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      age: '2d',
      nextAction: 'Request context',
    },
    {
      team: 'Service Desk · EMEA',
      issue: 'Schedule variance',
      owner: 'L. Marín',
      status: 'Assigned',
      statusColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      age: '1d',
      nextAction: 'Manager review',
    },
    {
      team: 'Harbour Fit-out',
      issue: 'Missing cost code',
      owner: 'Unassigned',
      status: 'Needs input',
      statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      age: '4d',
      nextAction: 'Assign owner',
    },
    {
      team: 'Contractor roster · APAC',
      issue: 'Late submission',
      owner: 'J. Tan',
      status: 'Resolved',
      statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      age: '—',
      nextAction: 'Release to billing',
    },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-20 px-6 lg:px-20 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Value Proposition */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Operations Command Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              See What Is Ready, What Needs Action, and Who Owns It
            </h2>
            <p className="text-base text-slate-300 leading-relaxed pt-1">
              The Operations Command Center brings record completeness, exceptions, assignments, review state, project attribution, and downstream readiness into one controlled view. It does not rank workers or infer individual productivity.
            </p>
          </div>

          {/* Feature Checklist */}
          <div className="flex flex-col gap-3 py-2">
            {[
              "Required records complete and review SLA",
              "Open exceptions with a named owner and age",
              "Project attribution completeness",
              "Post-approval changes and downstream readiness",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* View Selector Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  activeTab === tab
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                    : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-bold text-base rounded-lg transition-colors shadow-sm"
            >
              Request Enterprise Demo
            </button>
            <a
              href="#reporting-controls"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 text-white font-bold text-base transition-colors group"
            >
              <span>See reporting controls</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Dashboard UI Preview */}
        <div className="flex flex-col gap-6 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-2xl">
          
          {/* Filters Bar */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                  activeFilter === filter
                    ? 'bg-slate-800 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800/40 text-slate-400 border-slate-700/40 hover:text-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Metric KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/40 flex flex-col justify-between gap-1"
              >
                <span className="text-[11px] font-semibold text-emerald-400/90 uppercase tracking-wide">
                  {m.label}
                </span>
                <span className="text-2xl font-extrabold text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Operations Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-2">Team / Worker</th>
                  <th className="py-3 px-2">Issue</th>
                  <th className="py-3 px-2">Owner</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Age</th>
                  <th className="py-3 px-2">Next Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-2 font-semibold text-white whitespace-pre-line">
                      {row.team}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.issue}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.owner}
                    </td>
                    <td className="py-3.5 px-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.age}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300 whitespace-pre-line">
                      {row.nextAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Annotations */}
          <div className="flex flex-col gap-1 text-[11px] text-slate-400 border-t border-slate-800 pt-3">
            <p>Illustrative synthetic data. Status is stated in text as well as color.</p>
            <p className="text-slate-500 font-medium">
              No worker leaderboard, utilization rank, or activity score appears anywhere in the product.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}