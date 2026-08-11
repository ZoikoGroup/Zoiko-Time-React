'use client'
import Link from "next/link";
import React, { useState } from 'react';

interface LifecycleStep {
  id: string;
  stepNumber: string;
  title: string;
  heading: string;
  description: string;
  inputs: string;
  resultingState: string;
  owner: string;
  nextAction: string;
}

const steps: LifecycleStep[] = [
  {
    id: '01',
    stepNumber: 'Step 01',
    title: 'Capture work context',
    heading: 'Capture work context',
    description:
      'Your team records start, pause, resume, break, and project context on mobile or desktop. Capture is low-friction, and the worker can see everything that was recorded about them.',
    inputs:
      'Session events, schedule context, project and task selection, location group where configured.',
    resultingState: 'Draft record with captured context.',
    owner: 'Worker, with team lead visibility.',
    nextAction: 'Automatic classification against the effective policy.',
  },
  {
    id: '02',
    stepNumber: 'Step 02',
    title: 'Deterministic classification',
    heading: 'Deterministic classification',
    description:
      'Engine rules evaluate captured inputs against business logic, schedules, and pay rules deterministically without arbitrary black-box AI guessing.',
    inputs: 'Draft records, shift parameters, active policy rulesets.',
    resultingState: 'Classified hours and preliminary category tags.',
    owner: 'System / Automated Engine.',
    nextAction: 'Exception evaluation and flagging.',
  },
  {
    id: '03',
    stepNumber: 'Step 03',
    title: 'Neutral exception flag',
    heading: 'Neutral exception flag',
    description:
      'Missing punches, overtime threshold breaches, or unallocated project hours are flagged in a neutral state for non-punitive resolution.',
    inputs: 'Classified records with policy variances.',
    resultingState: 'Open exception ticket attached to record.',
    owner: 'Assigned Manager or Worker.',
    nextAction: 'Resolution workflow and reason entry.',
  },
  {
    id: '04',
    stepNumber: 'Step 04',
    title: 'Assigned human review',
    heading: 'Assigned human review',
    description:
      'Designated managers review exceptions, communicate in-line with workers, and resolve discrepancies with audit history intact.',
    inputs: 'Exception tags, worker notes, historical logs.',
    resultingState: 'Resolved record awaiting final sign-off.',
    owner: 'Team Lead / Manager.',
    nextAction: 'Formal approval submission.',
  },
  {
    id: '05',
    stepNumber: 'Step 05',
    title: 'Versioned approval',
    heading: 'Versioned approval',
    description:
      'Managers lock and approve records. Any subsequent post-approval edit creates a new record version and triggers a reapproval requirement.',
    inputs: 'Resolved timecard & manager sign-off credentials.',
    resultingState: 'Locked, versioned approval state.',
    owner: 'Approving Manager.',
    nextAction: 'Controlled queue release to downstream systems.',
  },
  {
    id: '06',
    stepNumber: 'Step 06',
    title: 'Controlled release',
    heading: 'Controlled release',
    description:
      'Approved records are automatically synchronized or exported to payroll, billing, ERP, or customer reporting platforms.',
    inputs: 'Versioned, approved records.',
    resultingState: 'Synchronized / Exported record.',
    owner: 'Payroll / Finance System Integration.',
    nextAction: 'Payroll execution and project billing.',
  },
];

export default function ControlledRecordLifecycle() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section id="lifecycle" className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div  className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Block */}
        <div className="max-w-[780px] text-center flex flex-col gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Controlled Record Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            From Work Event to an Approved Team Record
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed pt-1">
            ZoikoTime captures configured work context, applies deterministic policy rules, flags incomplete or conflicting records, routes them to the correct people, preserves corrections and approvals, and makes the approved record available to authorized team and downstream systems.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
          {steps.map((step, index) => {
            const isActive = index === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 flex flex-col gap-2 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                  {step.stepNumber}
                </span>
                <span
                  className={`text-sm font-bold leading-snug ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: step.title.replace(' ', '<br/>'),
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Active Step Details Card */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {activeStep.heading}
            </h3>
            <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Inputs
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeStep.inputs}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Resulting state
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeStep.resultingState}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Owner
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeStep.owner}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                Next action
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeStep.nextAction}
              </p>
            </div>
          </div>
        </div>

        {/* Action / Navigation Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <Link href="/deterministic-time-classification" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Explore Deterministic Time Classification
          </Link>
          <Link href="/human-in-command" className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
            Human-in-Command Controls
          </Link>
        </div>

      </div>
    </section>
  );
}
