import React from 'react';
import {
  FileText,
  Users,
  GitMerge,
  ShieldCheck,
  KeyRound,
  ArrowRight,
} from 'lucide-react';

interface CommitmentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  proof: string;
}

const commitments: CommitmentCard[] = [
  {
    icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Scope before activity',
    description:
      'Outcomes, boundaries, dependencies, owners, and exclusions are defined before delivery begins.',
    proof: 'Proof — baseline scope and its approval state.',
  },
  {
    icon: <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Named responsibility',
    description:
      'Customer and ZoikoTime ownership is visible for every workstream and every decision.',
    proof: 'Proof — owner, approver, due state, escalation.',
  },
  {
    icon: <GitMerge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Stage-gated delivery',
    description:
      'Work advances only when readiness, evidence, unresolved risk, and approval conditions are understood.',
    proof: 'Proof — gate checklist and recorded decision.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Acceptance with evidence',
    description:
      'Completion uses scenarios, test results, and stated limitations with a signoff — not a subjective sense of done.',
    proof: 'Proof — criteria and evidence pack.',
  },
  {
    icon: <KeyRound className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    title: 'Handover for continued control',
    description:
      'Runbooks, administration, support, evidence, known limitations, and change ownership transfer to your operating team.',
    proof: 'Proof — handover register and support route.',
  },
];

export default function GovernedImplementation() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 px-6 lg:px-20 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="max-w-[760px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            How a Governed Implementation Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Five Commitments About the Method, Not the Deliverables
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Every card below describes how work is governed. None of them claims what is included — that is confirmed in current service and commercial documents.
          </p>
        </div>

        {/* 6-Card Grid Layout (5 Commitment Cards + 1 Organization Responsibility Card) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Commitment Cards */}
          {commitments.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-100/70 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xs"
            >
              <div className="flex flex-col gap-3">
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  {card.icon}
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Proof Note */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal font-medium">
                  {card.proof}
                </p>
              </div>
            </div>
          ))}

          {/* Special Organization Ownership / Responsibility Card */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col justify-between gap-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600">
            <div className="flex flex-col gap-2 pt-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                What stays with your organization
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Implementation support never transfers your obligations to ZoikoTime. Policy authority, legal review, consultation duties, and consequential decisions remain yours.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#responsibility-model"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-sm transition-colors group"
              >
                <span>See the shared responsibility model</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}