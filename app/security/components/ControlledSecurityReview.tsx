'use client'
import React, { useState } from 'react';

const categories = [
  'Control summaries',
  'Independent assessment',
  'Change control evidence',
  'Backup & restoration',
  'Provider & subprocessor',
  'Other approved category',
];

const evaluationStages = [
  'Select one',
  'Initial Evaluation',
  'Active Procurement / RFP',
  'Annual Security Audit',
  'Existing Customer Review',
  'Other',
];

const requestStatuses = [
  { label: 'Received', colorClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' },
  { label: 'Needs clarification', colorClass: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400' },
  { label: 'Under review', colorClass: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400' },
  { label: 'Approved', colorClass: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' },
  { label: 'Partially approved', colorClass: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' },
  { label: 'Declined with reason category', colorClass: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400' },
  { label: 'Expired', colorClass: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' },
  { label: 'Withdrawn', colorClass: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' },
];

export default function ControlledSecurityReview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Control summaries');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Controlled Security Review
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Request Evidence That Isn&apos;t Public
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Access level is determined by identity, purpose, and entitlement. Minimal fields, optional free text, secure delivery with expiry.
          </p>
        </header>

        {/* Main Form Box */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-10 flex flex-col gap-8"
        >
          
          {/* Step 1: Category Selection */}
          <fieldset className="flex flex-col gap-3">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 1
              </span>
              <legend className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Evidence category
              </legend>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <label
                    key={cat}
                    className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer border transition-colors ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="evidenceCategory"
                      value={cat}
                      checked={isSelected}
                      onChange={() => setSelectedCategory(cat)}
                      className="sr-only"
                    />
                    <span
                      className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-600 dark:border-emerald-400 dark:bg-emerald-400'
                          : 'border-slate-400 dark:border-slate-500 bg-transparent'
                      }`}
                    >
                      {isSelected && <span className="w-1 h-1 rounded-full bg-white dark:bg-slate-900" />}
                    </span>
                    {cat}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Step 2: Minimum Details Grid */}
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 2
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Minimum details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="workEmail" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Work email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  required
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="organization" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  required
                  placeholder="Company Name"
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="role" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Role or function
                </label>
                <input
                  type="text"
                  id="role"
                  placeholder="e.g. Security Lead, IT Manager"
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="evaluationStage" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Evaluation stage
                </label>
                <select
                  id="evaluationStage"
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {evaluationStages.map((stage, idx) => (
                    <option key={idx} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Optional Context & Warning */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 3
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Optional context
              </h3>
            </div>

            {/* Red Warning Banner */}
            <div className="p-4 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200/80 dark:border-rose-900/60 flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
                Never include here
              </span>
              <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
                Credentials, secrets, exploit or vulnerability detail, worker records, customer data, or legal strategy. If you are reporting a vulnerability, use the{' '}
                <a href="#reporting-route" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                  security reporting route
                </a>{' '}
                instead — not this form.
              </p>
            </div>

            {/* Context Input Field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contextNote" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Anything that helps us route this correctly
              </label>
              <textarea
                id="contextNote"
                rows={3}
                placeholder="Provide additional details regarding your request..."
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="submit"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-xs"
              >
                Submit request
              </button>
              <a
                href="#public-evidence"
                className="px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-sm rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              >
                Read public evidence instead
              </a>
            </div>

            {/* SLA Footnote */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
              No response time is promised, because no SLA is approved for this route. Nothing you enter appears in the page address or in analytics.
            </p>
          </div>

        </form>

        {/* Request Statuses Heading & Badges */}
        <div className="w-full flex flex-col gap-3 pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Request statuses
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {requestStatuses.map((status, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs font-bold rounded-full ${status.colorClass}`}
              >
                {status.label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}