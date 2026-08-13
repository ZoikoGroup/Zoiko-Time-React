'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ReviewReason {
  id: string;
  title: string;
  detail: string;
}

const reasons: ReviewReason[] = [
  {
    id: 'enterprise-diligence',
    title: 'Enterprise privacy diligence',
    detail: 'Vendor assessment, security & privacy review, or procurement diligence.',
  },
  {
    id: 'customer-configuration',
    title: 'Customer privacy configuration',
    detail: 'Questions about how privacy settings work in your workspace.',
  },
  {
    id: 'worker-question',
    title: 'Worker or individual privacy question',
    detail: 'A question about your own records, visibility, or corrections.',
  },
  {
    id: 'data-use',
    title: 'Data-use or collection concern',
    detail: 'What is collected, why, and how it’s used.',
  },
  {
    id: 'processor-transfer',
    title: 'Processor / transfer / location question',
    detail: 'Sub-processors, data transfers, or where data is handled.',
  },
  {
    id: 'ai-automation',
    title: 'AI / automation privacy question',
    detail: 'How automation and AI are bounded and governed.',
  },
  { id: 'other', title: 'Other', detail: 'A privacy topic not listed above.' },
];

const topics: string[] = [
  'Collection',
  'Purpose',
  'Access / roles',
  'Worker visibility',
  'Retention',
  'Deletion',
  'Processors',
  'Transfers',
  'Location / residency',
  'AI / provider data',
  'Integrations',
  'Exports',
  'Analytics',
  'Support access',
  'Policy / notice',
  'Other',
];

// Option lists below are not specified in the design — adjust to the real routing taxonomy.
const relationshipOptions = [
  'Customer administrator',
  'Worker or individual',
  'Prospective customer or evaluator',
  'Procurement or legal',
  'Partner or provider',
  'Other',
];

const regionOptions = [
  'Multiple regions',
  'United States',
  'United Kingdom',
  'European Union',
  'Other',
];

const contactOptions = ['Email', 'No follow-up needed'];

const scopeOptions = [
  'Organization-wide',
  'A team or department',
  'A single worker record',
  'A specific integration',
  'Not sure',
];

const contextOptions = [
  'New setup',
  'Existing configuration',
  'Recent change',
  'Audit or diligence',
  'Not sure',
];

const steps = ['Reason', 'Context', 'Scope', 'Review'];

const fieldClasses =
  'w-full px-3.5 py-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-100 placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors';

const labelClasses = 'text-sm font-semibold text-slate-800 dark:text-slate-100';
const optionalClasses = 'text-xs font-normal text-gray-500 dark:text-slate-500';

export default function RequestReviewForm() {
  const [step, setStep] = useState(1);

  // Step 1
  const [reason, setReason] = useState<string | null>(null);
  // Step 2
  const [relationship, setRelationship] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [region, setRegion] = useState('');
  const [productArea, setProductArea] = useState('');
  const [preferredContact, setPreferredContact] = useState('Email');
  const [optIn, setOptIn] = useState(false);
  // Step 3
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [affectedScope, setAffectedScope] = useState('');
  const [changeContext, setChangeContext] = useState('');
  const [timing, setTiming] = useState('');
  const [summary, setSummary] = useState('');

  const reasonTitle = reasons.find((item) => item.id === reason)?.title ?? '—';
  const canLeaveReason = Boolean(reason);
  const canLeaveContext = Boolean(relationship) && Boolean(email);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((current) =>
      current.includes(topic) ? current.filter((item) => item !== topic) : [...current, topic],
    );
  };

  return (
    <section
      id="request-a-privacy-review"
      className="w-full bg-gray-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-40 transition-colors duration-200"
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[384px_1fr] gap-10 lg:gap-14 items-start">

        {/* Explainer Column */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white leading-10">
            Request a Privacy Review
          </h2>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              What this is
            </span>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-5">
              A way to ask about privacy practices, enterprise diligence, customer configuration, data
              use, worker transparency, processors/transfers, or another approved topic — routed to a
              qualified human.
            </p>
          </div>

          <div className="pt-1 flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              What it isn’t
            </span>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-5">
              This review does not itself determine legal rights or guarantee an outcome. It is a
              trusted escalation path — not a legal filing, a sales form, or a compliance alarm.
            </p>
          </div>

          <div className="pt-1 flex flex-col gap-1.5">
            <span className="text-xs font-bold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              You can keep reading instead
            </span>
            <div className="flex items-start gap-2">
              <Image
                src="/request-privacy-review/icon-check.svg"
                alt=""
                width={16}
                height={16}
                className="mt-0.5 h-4 w-4 shrink-0"
              />
              <p className="text-xs text-gray-700 dark:text-slate-300 leading-5">
                All Privacy &amp; Trust content stays available without submitting anything.
              </p>
            </div>
          </div>

          {/* Sensitive Data Warning */}
          <div className="px-3.5 pt-4 pb-3 bg-orange-50 dark:bg-amber-950/20 rounded-xl border border-orange-200 dark:border-amber-900/60">
            <p className="text-xs leading-5">
              <span className="font-bold text-yellow-700 dark:text-amber-400">
                Please don’t include sensitive data.
              </span>{' '}
              <span className="text-yellow-800 dark:text-amber-300">
                No passwords, credentials, government IDs, health information, full payroll records,
                detailed worker disputes, or confidential documents in this initial request. Protected
                evidence can be requested later, securely.
              </span>
            </p>
          </div>

          <img
            className="w-full h-40 object-cover rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)]"
            src="/request-privacy-review/review-request.png"
            alt="A privacy reviewer working at a desk"
          />
        </div>

        {/* Wizard Card */}
        <form
          onSubmit={(event) => {
            // No submission endpoint is wired yet — point this at the real handler.
            event.preventDefault();
          }}
          className="px-5 sm:px-6 pt-5 pb-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] flex flex-col gap-6 overflow-hidden"
        >
          {/* Step Indicator */}
          <ol className="flex items-stretch gap-1.5">
            {steps.map((label, idx) => {
              const stepNumber = idx + 1;
              const isCurrent = stepNumber === step;
              const isComplete = stepNumber < step;

              return (
                <li key={label} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setStep(stepNumber)}
                    disabled={stepNumber > step}
                    aria-current={isCurrent ? 'step' : undefined}
                    className={`w-full pb-2 text-center text-xs font-bold border-b-2 transition-colors disabled:cursor-not-allowed ${
                      isCurrent
                        ? 'border-teal-600 text-teal-700 dark:text-teal-400'
                        : isComplete
                          ? 'border-teal-200 dark:border-teal-900 text-slate-800 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400'
                          : 'border-slate-200 dark:border-slate-800 text-gray-500 dark:text-slate-500'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Step 1 — Reason */}
          {step === 1 && (
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-8">
                1 · Choose a review reason
              </h3>
              <p className="pb-3.5 text-xs text-gray-500 dark:text-slate-400 leading-5">
                Pick the closest topic. You won’t need statutes, legal bases, or policy numbers — and
                you can change this later.
              </p>

              <fieldset className="flex flex-col gap-2.5">
                <legend className="sr-only">Review reason</legend>
                {reasons.map((item) => {
                  const isSelected = reason === item.id;

                  return (
                    <label
                      key={item.id}
                      className={`px-3.5 py-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                        isSelected
                          ? 'border-teal-600 bg-emerald-50/50 dark:bg-emerald-950/20'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="review-reason"
                        value={item.id}
                        checked={isSelected}
                        onChange={() => setReason(item.id)}
                        className="mt-1 h-4 w-4 shrink-0 accent-teal-600"
                      />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-slate-800 dark:text-white leading-6">
                          {item.title}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-slate-400 leading-4">
                          {item.detail}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </fieldset>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!canLeaveReason}
                  className="min-h-11 px-6 py-3.5 bg-green-400 hover:bg-green-500 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:shadow-none rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Relationship & context */}
          {step === 2 && (
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-8">
                2 · Relationship &amp; context
              </h3>
              <p className="pb-3.5 text-xs text-gray-500 dark:text-slate-400 leading-5">
                Just enough to route your request and follow up. Routing only — never risk or revenue
                scoring.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="relationship" className={labelClasses}>
                    Your relationship to ZoikoTime <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="relationship"
                    required
                    value={relationship}
                    onChange={(event) => setRelationship(event.target.value)}
                    className={fieldClasses}
                  >
                    <option value="">Select one</option>
                    {relationshipOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className={labelClasses}>
                    Contact email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={fieldClasses}
                  />
                  <span className="text-xs text-gray-500 dark:text-slate-500 leading-5">
                    Used only to follow up on this review.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="organization" className={labelClasses}>
                      Organization <span className={optionalClasses}>(optional)</span>
                    </label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="Optional"
                      value={organization}
                      onChange={(event) => setOrganization(event.target.value)}
                      className={fieldClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="region" className={labelClasses}>
                      Country / region <span className={optionalClasses}>(optional)</span>
                    </label>
                    <select
                      id="region"
                      value={region}
                      onChange={(event) => setRegion(event.target.value)}
                      className={fieldClasses}
                    >
                      <option value="">Optional</option>
                      {regionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="product-area" className={labelClasses}>
                      Product area <span className={optionalClasses}>(optional)</span>
                    </label>
                    <input
                      id="product-area"
                      type="text"
                      placeholder="Optional"
                      value={productArea}
                      onChange={(event) => setProductArea(event.target.value)}
                      className={fieldClasses}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="preferred-contact" className={labelClasses}>
                      Preferred contact <span className={optionalClasses}>(optional)</span>
                    </label>
                    <select
                      id="preferred-contact"
                      value={preferredContact}
                      onChange={(event) => setPreferredContact(event.target.value)}
                      className={fieldClasses}
                    >
                      {contactOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Marketing Opt-In — unchecked by default */}
                <label className="px-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(event) => setOptIn(event.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded accent-teal-600"
                  />
                  <span className="text-xs text-gray-500 dark:text-slate-400 leading-5">
                    Optional: you may occasionally contact me about relevant updates. (Unchecked by
                    default — a privacy review is never turned into a sales lead.)
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="min-h-11 px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-[10px] border border-slate-200 dark:border-slate-700 inline-flex justify-center items-center text-slate-800 dark:text-slate-100 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!canLeaveContext}
                  className="min-h-11 px-6 py-3.5 bg-green-400 hover:bg-green-500 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:shadow-none rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Scope & a safe summary */}
          {step === 3 && (
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-8">
                3 · Scope &amp; a safe summary
              </h3>
              <p className="pb-3.5 text-xs text-gray-500 dark:text-slate-400 leading-5">
                Tell us what the review is about. Share only what’s needed to route and respond.
              </p>

              <div className="flex flex-col gap-4">
                {/* Topic Toggles */}
                <fieldset className="flex flex-col gap-2.5">
                  <legend className={labelClasses}>
                    Topics <span className={optionalClasses}>(select any)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => {
                      const isSelected = selectedTopics.includes(topic);

                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => toggleTopic(topic)}
                          aria-pressed={isSelected}
                          className={`px-3.5 py-2 rounded-full border text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                            isSelected
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="affected-scope" className={labelClasses}>
                      Affected scope <span className={optionalClasses}>(optional)</span>
                    </label>
                    <select
                      id="affected-scope"
                      value={affectedScope}
                      onChange={(event) => setAffectedScope(event.target.value)}
                      className={fieldClasses}
                    >
                      <option value="">Optional</option>
                      {scopeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="change-context" className={labelClasses}>
                      Change context <span className={optionalClasses}>(optional)</span>
                    </label>
                    <select
                      id="change-context"
                      value={changeContext}
                      onChange={(event) => setChangeContext(event.target.value)}
                      className={fieldClasses}
                    >
                      <option value="">Optional</option>
                      {contextOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="timing" className={labelClasses}>
                    Requested timing <span className={optionalClasses}>(optional business date)</span>
                  </label>
                  <input
                    id="timing"
                    type="date"
                    value={timing}
                    onChange={(event) => setTiming(event.target.value)}
                    className={fieldClasses}
                  />
                  <span className="text-xs text-gray-500 dark:text-slate-500 leading-5">
                    A helpful target only — not a deadline or service-level commitment.
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="safe-summary" className={labelClasses}>
                    Safe summary
                  </label>
                  <textarea
                    id="safe-summary"
                    rows={4}
                    maxLength={1000}
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)}
                    className={`${fieldClasses} resize-y leading-6`}
                  />
                  <span className="text-xs text-gray-500 dark:text-slate-500 leading-5">
                    {summary.length} / 1000 — aim for 500–1000 characters.
                  </span>
                </div>

                {/* Sensitive Content Reminder */}
                <div className="px-3.5 pt-3 pb-3 bg-orange-50 dark:bg-amber-950/20 rounded-xl border border-orange-200 dark:border-amber-900/60">
                  <p className="text-xs leading-5">
                    <span className="font-bold text-yellow-700 dark:text-amber-400">Reminder:</span>{' '}
                    <span className="text-yellow-800 dark:text-amber-300">
                      no passwords, tokens, IDs, medical details, payment information, full worker
                      records, confidential attachments, or incident secrets. Attachments aren’t
                      accepted in this initial request.
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="min-h-11 px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-[10px] border border-slate-200 dark:border-slate-700 inline-flex justify-center items-center text-slate-800 dark:text-slate-100 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="min-h-11 px-6 py-3.5 bg-green-400 hover:bg-green-500 rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Review
                </button>
              </div>
            </div>
          )}

          {/* Step 4 — Review & submit */}
          {step === 4 && (
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white leading-8">
                4 · Review &amp; submit
              </h3>
              <p className="pb-3.5 text-xs text-gray-500 dark:text-slate-400 leading-5">
                Check what you’re sending. Edit any section — nothing is submitted until you choose to.
              </p>

              <div className="flex flex-col gap-3">
                {/* Reason Summary */}
                <div className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">Reason</h4>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm font-semibold text-teal-700 dark:text-teal-400 underline shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-6">
                    {reasonTitle}
                  </p>
                </div>

                {/* Context Summary */}
                <div className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      Relationship &amp; context
                    </h4>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-sm font-semibold text-teal-700 dark:text-teal-400 underline shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-6">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {relationship || '—'}
                    </span>
                    {email && <> · {email}</>}
                    {region && <> · {region}</>}
                  </p>
                </div>

                {/* Scope Summary */}
                <div className="px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">
                      Scope &amp; summary
                    </h4>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="text-sm font-semibold text-teal-700 dark:text-teal-400 underline shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-6">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Topics:</span>{' '}
                    {selectedTopics.length > 0 ? selectedTopics.join(', ') : 'None selected'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-6">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Scope:</span>{' '}
                    {affectedScope || 'Not specified'} ·{' '}
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Context:</span>{' '}
                    {changeContext || 'Not specified'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-6">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">Summary:</span>{' '}
                    {summary || 'Not provided'}
                  </p>
                </div>

                {/* No-Promise Notice */}
                <div className="px-4 py-3.5 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl border border-emerald-100 dark:border-emerald-900/60">
                  <p className="text-center text-sm text-slate-700 dark:text-slate-300 leading-6">
                    <span className="font-bold text-teal-700 dark:text-teal-400">
                      Before you submit:
                    </span>{' '}
                    we can’t promise a response time, legal outcome, remedy, or compliance status. A
                    qualified human reviews and routes your request.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="min-h-11 px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-[10px] border border-slate-200 dark:border-slate-700 inline-flex justify-center items-center text-slate-800 dark:text-slate-100 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="min-h-11 px-6 py-3.5 bg-green-500 hover:bg-green-600 rounded-[10px] shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] inline-flex justify-center items-center text-white text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  Submit Privacy Review Request
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </section>
  );
}
