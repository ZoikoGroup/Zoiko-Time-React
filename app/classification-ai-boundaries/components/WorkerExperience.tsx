import React from "react";
import { Eye, HelpCircle, Edit3, Clipboard, UserCheck, History, Shield } from "lucide-react";

interface Benefit {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WorkerExperience() {
  const benefits: Benefit[] = [
    {
      title: "Understand what happened",
      desc: "Clear step-by-step breakdown of how your active hours were translated and categorized under active payroll rules.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Know whether AI was involved",
      desc: "Explicit signaling whenever machine-learning filters assist a manager in verifying context or flagging errors.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Correct facts/context",
      desc: "A transparent mechanism to submit modifications, adjust dates, or log actual physical hours worked.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Add context safely",
      desc: "Provide written notes or activity descriptions directly into the decision trace to clarify ambiguous logs.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "Escalate to a person",
      desc: "Request formal human arbitration and override evaluation if system calculations feel mismatched.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    },
    {
      title: "See decision history",
      desc: "Trace who approved, modified, or verified your records across all historical reporting cycles.",
      icon: <Shield className="h-5 w-5 text-teal-700 dark:text-teal-400" />
    }
  ];

  return (
    <div className="bg-white py-16 dark:bg-slate-900  font-sans">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center px-2 py-1 bg-teal-50 text-[#10A28D] border border-teal-100 rounded-md text-[10px] font-bold uppercase tracking-wider dark:bg-teal-950/10 dark:text-teal-400 dark:border-teal-900/30">
            Worker Rights
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            Visibility, correction, and human escalation
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start p-4">
              <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0 dark:bg-emerald-950/20">
                {item.icon}
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-base font-bold text-slate-850 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
