"use client"
import React, { useState } from 'react';

// Options definitions
const scopeOptions = [
  'New deployment',
  'Additional entity or region',
  'Policy',
  'Identity',
  'Integrations',
  'Analytics',
  'Controlled change',
  'Something else',
];

const readinessFields = [
  { id: 'owners', label: 'Owners named' },
  { id: 'policy', label: 'Policy source identified' },
  { id: 'identity', label: 'Identity source identified' },
  { id: 'integrations', label: 'Integration inventory' },
  { id: 'privacy', label: 'Privacy or legal review' },
  { id: 'communications', label: 'Worker communication plan' },
];

const readinessStates = [
  'Not started',
  'In progress',
  'Needs help',
  'Ready for review',
  'Not applicable',
];

const outcomeOptions = [
  'Evaluate fit',
  'Plan an implementation',
  'Review a current deployment',
  'Coordinate a change',
  'Procurement discussion',
];

export default function ReadinessAssessment() {
  // Form State
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const [selectedOutcome, setSelectedOutcome] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(false);
  const [readinessValues, setReadinessValues] = useState<Record<string, string>>({});

  const toggleScope = (option: string) => {
    setSelectedScopes((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleReadinessChange = (fieldId: string, value: string) => {
    setReadinessValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assessment Submitted', {
      selectedScopes,
      selectedOutcome,
      consent,
      readinessValues,
    });
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1124px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[760px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Implementation Readiness Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Find Out What You&apos;d Need Ready —<br className="hidden sm:inline" /> Before You Talk to Anyone
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            This assessment helps you prepare and helps sales route responsibly. It returns a readiness summary by domain and preparation guidance. It does not return an eligibility decision, a compliance score, a start date, or a timeline.
          </p>
        </div>

        {/* Assessment Card Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white dark:bg-slate-800 p-6 sm:p-10 rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200 dark:border-slate-700/80 flex flex-col gap-10"
        >
          {/* STEP 1: Organization Context */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 1
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Organization context
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                We ask for the minimum needed to route your enquiry. A personal phone number is not required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 max-w-[850px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Organization name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Corp"
                  className="w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Your role
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Operations Director"
                  className="w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Existing ZoikoTime customer
                </label>
                <select
                  defaultValue=""
                  className="w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="" disabled>Select one</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-700/60" />

          {/* STEP 2: Intended Scope */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 2
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Intended scope
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                High level only. Please do not enter worker data, policy text, legal analysis, credentials, or security findings.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {scopeOptions.map((option) => {
                const isSelected = selectedScopes.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => toggleScope(option)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-150 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <span
                      className={`size-3 rounded-full border ${
                        isSelected
                          ? 'border-emerald-600 dark:border-emerald-400 bg-emerald-600 dark:bg-emerald-400'
                          : 'border-slate-400 dark:border-slate-500 bg-transparent'
                      }`}
                    />
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-700/60" />

          {/* STEP 3: Current Readiness */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 3
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Current readiness
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Use the same states we use internally: not started, in progress, needs help, ready for review, or not applicable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 max-w-[850px]">
              {readinessFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {field.label}
                  </label>
                  <select
                    value={readinessValues[field.id] || ''}
                    onChange={(e) => handleReadinessChange(field.id, e.target.value)}
                    className="w-full h-11 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="" disabled>Select a state</option>
                    {readinessStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-700/60" />

          {/* STEP 4: Desired Outcome */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 4
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Desired outcome
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {outcomeOptions.map((outcome) => {
                const isSelected = selectedOutcome === outcome;
                return (
                  <button
                    type="button"
                    key={outcome}
                    onClick={() => setSelectedOutcome(outcome)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-150 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <span
                      className={`size-3 rounded-full border ${
                        isSelected
                          ? 'border-emerald-600 dark:border-emerald-400 bg-emerald-600 dark:bg-emerald-400'
                          : 'border-slate-400 dark:border-slate-500 bg-transparent'
                      }`}
                    />
                    {outcome}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-700/60" />

          {/* STEP 5: Consent & Submission */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide block">
                Step 5
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Consent and submit
              </h3>
            </div>

            {/* Consent Box */}
            <label className="p-4 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                You may contact me about this enquiry. I&apos;ve read the{' '}
                <a
                  href="#privacy"
                  className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  privacy notice
                </a>
                , which explains what is collected, why, and how long it is kept.
              </span>
            </label>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={!consent}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-base rounded-lg transition-colors text-center shadow-sm"
              >
                Get my readiness summary
              </button>
              <button
                type="button"
                className="px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors text-center"
              >
                Talk to Sales instead
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Nothing you enter appears in the page address, and no marketing consent is pre-selected. If submission fails you can retry without losing your place, or use the sales route above.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
}