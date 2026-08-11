'use client' 
import { useState } from 'react';

interface StepDetail {
  id: number;
  stepNumber: string;
  tabLabel: string;
  title: string;
  description: string;
  inputs: string;
  resultingState: string;
  owner: string;
  nextAction: string;
}

const stepsData: StepDetail[] = [
  {
    id: 1,
    stepNumber: "Step 01",
    tabLabel: "Capture work context",
    title: "Capture work context",
    description: "Workers and managers record start, pause, resume, break, and project context on mobile or desktop. Capture is low-friction and visible to the worker.",
    inputs: "Session events, schedule context, project and task selection, location group where configured.",
    resultingState: "Draft record with captured context.",
    owner: "Worker, with manager visibility.",
    nextAction: "Automatic classification against the effective policy.",
  },
  {
    id: 2,
    stepNumber: "Step 02",
    tabLabel: "Deterministic classification",
    title: "Deterministic classification",
    description: "System evaluates captured events against location, schedule, and labor rules to classify time into regular, overtime, or exception categories automatically.",
    inputs: "Draft records, active policy rules, shift definitions, location boundaries.",
    resultingState: "Classified time entries with applied policy tags.",
    owner: "System engine.",
    nextAction: "Flagging exceptions or routing directly for manager review.",
  },
  {
    id: 3,
    stepNumber: "Step 03",
    tabLabel: "Neutral exception flag",
    title: "Neutral exception flag",
    description: "Incomplete shifts, missing cost codes, or policy conflicts are tagged with a neutral exception state rather than immediate penalties.",
    inputs: "Classified records with missing parameters or rule mismatches.",
    resultingState: "Flagged record pending resolution.",
    owner: "System flagged, awaiting assigned owner.",
    nextAction: "Assign to worker or manager for human review.",
  },
  {
    id: 4,
    stepNumber: "Step 04",
    tabLabel: "Assigned human review",
    title: "Assigned human review",
    description: "Exceptions are routed to the designated reviewer with a complete audit trail and clear prompt for required action.",
    inputs: "Flagged exception, reason code, worker notes.",
    resultingState: "Reviewed & resolved record.",
    owner: "Assigned manager / Team Lead.",
    nextAction: "Manager sign-off and versioned approval.",
  },
  {
    id: 5,
    stepNumber: "Step 05",
    tabLabel: "Versioned approval",
    title: "Versioned approval",
    description: "Managers review and approve records with immutable history log, preserving original submissions alongside any adjustments.",
    inputs: "Resolved record, manager signature, adjustment notes.",
    resultingState: "Approved & locked record version.",
    owner: "Authorized Approver.",
    nextAction: "Controlled release to downstream systems.",
  },
  {
    id: 6,
    stepNumber: "Step 06",
    tabLabel: "Controlled release",
    title: "Controlled release",
    description: "Approved operational data is safely transmitted to payroll, ERP, and billing systems via API or secure export.",
    inputs: "Locked & verified record versions.",
    resultingState: "Exported / Synced operational data.",
    owner: "Payroll / Operations Lead.",
    nextAction: "Archived for compliance and audit trail.",
  },
];

export default function ControlledRecordLifecycle() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activeContent = stepsData.find((step) => step.id === activeStep) || stepsData[0];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 px-6 lg:px-32 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[780px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Controlled Record Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            From Work Event to Operationally Ready Record
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[644px]">
            ZoikoTime captures configured work context, applies deterministic policy rules, flags incomplete or conflicting records, routes them to the correct people, preserves corrections and approvals, and makes the approved record available to authorized operational and downstream systems.
          </p>
        </div>

        {/* Step Cards Navigation */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stepsData.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                type="button"
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col gap-2 ${
                  isActive
                    ? "bg-white dark:bg-slate-800 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                    : "bg-white/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800"
                }`}
              >
                <span className="text-emerald-500 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide">
                  {step.stepNumber}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {step.tabLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Panel */}
        <div className="w-full p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-lg flex flex-col gap-6">
          
          {/* Active Title & Description */}
          <div className="flex flex-col gap-2 max-w-[644px]">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {activeContent.title}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeContent.description}
            </p>
          </div>

          {/* Active Attributes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Inputs
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeContent.inputs}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Resulting state
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeContent.resultingState}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Owner
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeContent.owner}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Next action
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                {activeContent.nextAction}
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
         <a href="/deterministic-time-classification">
          <button
            type="button"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
          >
            Explore Deterministic Time Classification
          </button></a>
          <a href="/human-in-command">
          <button
            type="button"
            className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
          >
            Human-in-Command Controls
          </button></a>
        </div>

      </div>
    </section>
  );
}