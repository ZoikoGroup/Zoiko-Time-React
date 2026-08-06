import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  UserX, 
  FolderGit2, 
  Timer, 
  History, 
  Globe2, 
  ShieldCheck, 
  Clock1,
  TriangleAlert,
  FolderBookmark,
  SquareX,
  AlignLeft,
  Folder
} from 'lucide-react';

export default function OperationalControlGap() {
  const gapCards = [
    {
      title: "Incomplete time and attendance",
      description: "Missing records surface late, so periods close on partial information.",
      icon: Timer,
    },
    {
      title: "Unclear exception ownership",
      description: "Issues sit between teams because no one holds the next action.",
      icon: TriangleAlert,
    },
    {
      title: "Project or cost-code gaps",
      description: "Approved time reaches billing and project control without required attribution.",
      icon: Folder,
    },
    {
      title: "Late approvals",
      description: "Review backlogs compress the window for payroll, billing, and audit checks.",
      icon: Clock,
    },
    {
      title: "Post-approval changes",
      description: "Records change after sign-off with no visible reason or reapproval state.",
      icon: SquareX,
    },
    {
      title: "Policy variation across sites",
      description: "Similar teams follow different rules, so results are hard to compare or defend.",
      icon: AlignLeft,
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-20 px-6 lg:px-32 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-12">
        
        {/* Top Feature Split: Text Content + Main Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              The Operational Control Gap
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Distributed Work Creates Flexibility—and More Places for Records to Break
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Operational leaders often have time, attendance, project, and approval information spread across disconnected systems and people. ZoikoTime creates a shared record and review workflow so incomplete or conflicting information is visible before it affects downstream operations.
            </p>

            {/* Link Anchor */}
            <a
              href="#record-lifecycle"
              className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 font-bold text-sm pt-2 group transition-colors"
            >
              <span>See the controlled record lifecycle</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Hero / Flow Graphic */}
          <div className="w-full">
            <img
              src="/operational-leaders/div.photo.png"
              alt="Operational Control Gap Visualization"
              className="w-full h-auto max-h-[437px] object-cover rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
            />
          </div>

        </div>

        {/* 6 Grid Cards for Operational Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-grey-98-2">
          {gapCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm flex flex-col items-start gap-3 transition-colors duration-150"
              >
                {/* Icon Badge */}
                <div className="w-9 h-9 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
            ZoikoTime makes these gaps visible using deterministic classification, neutral exception states, and assigned human review — not surveillance.
          </p>
        </div>

      </div>
    </section>
  );
}