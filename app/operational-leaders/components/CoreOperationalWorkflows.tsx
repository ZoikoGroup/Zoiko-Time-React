import React from 'react';
import { 
  Clock, 
  UserCheck, 
  FileCheck2, 
  FolderGit2, 
  Network, 
  Briefcase, 
  ArrowRight, 
  TriangleAlert,
  SquareCheck,
  Folder,
  Globe,
  Contact
} from 'lucide-react';

interface WorkflowCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: React.ElementType;
}

export default function CoreOperationalWorkflows() {
  const workflows: WorkflowCard[] = [
    {
      title: "Time and attendance readiness",
      description: "See whether required work records are complete and which items need action.",
      linkText: "Time Tracking",
      linkHref: "#time-tracking",
      icon: Clock,
    },
    {
      title: "Exception ownership",
      description: "Assign incomplete or conflicting records and monitor aging without accusatory labels.",
      linkText: "Human-in-Command Controls",
      linkHref: "#human-in-command",
      icon: TriangleAlert,
    },
    {
      title: "Approvals and change control",
      description: "Preserve who approved, what changed, why it changed, and whether reapproval is required.",
      linkText: "Timesheets & Approvals",
      linkHref: "#timesheets-approvals",
      icon: SquareCheck,
    },
    {
      title: "Project and task attribution",
      description: "Connect approved time to work, customer, or cost structures where configured.",
      linkText: "Control Project Time & Cost",
      linkHref: "#project-time-cost",
      icon: Folder,
    },
    {
      title: "Remote and hybrid coordination",
      description: "Maintain clear records across locations and schedules without invasive monitoring.",
      linkText: "Manage Remote & Hybrid Work",
      linkHref: "#remote-hybrid",
      icon: Globe,
    },
    {
      title: "Contractor operations",
      description: "Support distinct worker types, review rights, project context, and commercial records.",
      linkText: "Contractor-Heavy Workforces",
      linkHref: "#contractor-workforces",
      icon: Contact,
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-20 px-6 lg:px-32 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-11">
        
        {/* Header Section */}
        <div className="max-w-[720px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Core Operational Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            The Jobs Your Teams Repeat Every Week
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[644px]">
            Six recurring operational workflows, each with a defined owner, a visible state, and a route to the product controls behind it.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between items-start gap-4"
              >
                <div className="flex flex-col items-start gap-3 w-full">
                  {/* Icon Badge */}
                  <div className="w-9 h-9 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <a
                  href={item.linkHref}
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 font-bold text-sm pt-2 group transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}