'use client'
import React, { useState } from 'react';

interface Step {
  id: number;
  label: string;
  title: string;
  description: string;
  details: {
    title: string;
    content: string;
  }[];
}

const stepsData: Step[] = [
  {
    id: 1,
    label: '1 · Ask',
    title: 'Ask',
    description:
      'An authorized person states a question or selects a guided prompt. Before submission, the interface shows the current organization or unit, the period, the record type, and the purpose.',
    details: [
      {
        title: 'Visible before you ask',
        content: 'Scope, period, record type, purpose.',
      },
      {
        title: 'Prompt boundary',
        content:
          'A prompt never grants access, widens scope, overrides an exclusion, or authorizes an action.',
      },
      {
        title: 'If ambiguous',
        content: 'Structured clarification is requested before retrieval.',
      },
      {
        title: 'Submit label',
        content: '“Get explanation” — never Decide, Approve, Fix, or Run.',
      },
    ],
  },
  {
    id: 2,
    label: '2 · Retrieve',
    title: 'Retrieve',
    description:
      'The server evaluates permissions and securely queries authorized ZoikoTime databases for relevant records and contextual policies.',
    details: [
      {
        title: 'Server-side evaluation',
        content: 'Role-based access controls enforced at the query level.',
      },
      {
        title: 'Contextual binding',
        content: 'Retrieves active policies associated with the time window.',
      },
      {
        title: 'Data integrity',
        content: 'Filters out unverified, uncommitted, or restricted data.',
      },
      {
        title: 'Audit logging',
        content: 'Logs retrieval intent and authorized parameters.',
      },
    ],
  },
  {
    id: 3,
    label: '3 · Explain',
    title: 'Explain',
    description:
      'Kairos generates a transparent, source-linked explanation highlighting records, freshness, rules, and any data limitations.',
    details: [
      {
        title: 'Source linkage',
        content: 'Every statement references an inspectable system record.',
      },
      {
        title: 'Freshness indicators',
        content: 'Displays exact timestamps of underlying data sources.',
      },
      {
        title: 'Limitation callouts',
        content: 'Explicitly notes gaps or missing parameters in records.',
      },
      {
        title: 'No speculation',
        content: 'Bound strictly to retrieved evidence without extrapolating.',
      },
    ],
  },
  {
    id: 4,
    label: '4 · Review',
    title: 'Review',
    description:
      'If additional authority, policy interpretation, or action is required, Kairos routes the item to an authorized human reviewer.',
    details: [
      {
        title: 'Human-in-the-loop',
        content: 'All consequential actions remain in human hands.',
      },
      {
        title: 'Direct routing',
        content: 'Links to authoritative objects for review and decision.',
      },
      {
        title: 'Evidence package',
        content: 'Attaches complete audit context for reviewer speed.',
      },
      {
        title: 'No auto-approval',
        content: 'System never approves, alters, or executes decisions.',
      },
    ],
  },
];

export default function InteractionModel() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = stepsData.find((s) => s.id === activeStep) || stepsData[0];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <header className="max-w-[740px] text-center flex flex-col items-center gap-3 sm:gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            The Interaction Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Ask → Retrieve → Explain → Review
          </h2>
          <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Permission is evaluated on the server, between the question and the answer. Nothing about how you phrase a question changes what you may see.
          </p>
        </header>

        {/* Step Navigation Pills */}
        <nav
          aria-label="Interaction steps"
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xl"
        >
          {stepsData.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {step.label}
              </button>
            );
          })}
        </nav>

        {/* Dynamic Interactive Card */}
        <div className="w-full p-6 sm:p-8 md:p-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-col gap-6 transition-colors">
          
          {/* Step Header */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {currentStep.title}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[700px]">
              {currentStep.description}
            </p>
          </div>

          {/* Details Grid (Mobile 1-col, Tablet 2-col, Desktop 4-col) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {currentStep.details.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {item.title}
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Disclaimer / Notice Banner */}
        <div className="w-full p-4 sm:p-5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start sm:items-center gap-3.5 text-slate-700 dark:text-slate-300">
          <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <svg
              className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-sm leading-relaxed font-medium">
            Organization configuration, source quality, permissions, policy ownership, human review, and appropriate use all remain necessary. Kairos does not substitute for any of them.
          </p>
        </div>

      </div>
    </section>
  );
}