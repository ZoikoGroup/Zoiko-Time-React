'use client'
import { useState, type FormEvent } from 'react';
import Link from 'next/link';

type TimingIntent = 'exploring' | 'planning' | 'procurement' | 'active_program' | 'urgent_issue';

export default function MigrationReadinessAssessment() {
  const [relationship, setRelationship] = useState('');
  const [sourceCategory, setSourceCategory] = useState('');
  const [selectedObjects, setSelectedObjects] = useState<string[]>(['Time records', 'Attendance']);
  const [scaleBand, setScaleBand] = useState('');
  const [historyBand, setHistoryBand] = useState('');
  const [region, setRegion] = useState('');
  const [owners, setOwners] = useState({
    sourceOwner: '',
    dataOwner: '',
    privacyReviewer: '',
    businessReviewer: '',
    cutoverAuthority: '',
  });
  const [timingIntent, setTimingIntent] = useState<TimingIntent>('planning');
  const [organization, setOrganization] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const toggleObjectFamily = (item: string) => {
    setSelectedObjects((prev) => (prev.includes(item) ? prev.filter((o) => o !== item) : [...prev, item]));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted Data:', {
      relationship,
      sourceCategory,
      selectedObjects,
      scaleBand,
      historyBand,
      region,
      owners,
      timingIntent,
      organization,
      workEmail,
      consent,
    });
    alert('Assessment submitted successfully! Check console for output.');
  };

  const objectOptions = [
    'Time records',
    'Attendance',
    'Breaks',
    'Schedules',
    'People / identity references',
    'Policies',
    'Approvals',
    'Corrections',
    'Evidence',
    'Other',
  ];

  const timingOptions: { id: TimingIntent; label: string }[] = [
    { id: 'exploring', label: 'Exploring' },
    { id: 'planning', label: 'Planning' },
    { id: 'procurement', label: 'Procurement' },
    { id: 'active_program', label: 'Active program' },
    { id: 'urgent_issue', label: 'Urgent issue' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 font-sans text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Migration Readiness Assessment
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Nine Questions, Broad Bands Only
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            This helps you prepare and helps us route responsibly. It returns a
            preparedness summary showing missing owners, decisions, and
            evidence. It never calculates a success likelihood, risk score,
            price, or duration.
          </p>
        </header>

        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 shadow-sm dark:border-rose-800/60 dark:bg-rose-950/40 sm:p-5">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Never enter these here
          </h2>
          <p className="text-xs leading-relaxed text-rose-800 dark:text-rose-300 sm:text-sm">
            Workforce files, schemas, credentials, API keys, screenshots, record
            samples, employee names, payroll values, health data, union data,
            disciplinary data, incident narratives, or confidential source
            details. This form has no file upload, by design.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <section className="space-y-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 1 &amp; 2
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Relationship and source category
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Are you an existing customer or evaluating ZoikoTime?
                </label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="existing">Existing Customer</option>
                  <option value="evaluating">Evaluating ZoikoTime</option>
                  <option value="partner">Implementation Partner</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Source category
                </label>
                <select
                  value={sourceCategory}
                  onChange={(e) => setSourceCategory(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="legacy_wfm">Legacy WFM System</option>
                  <option value="erp_suite">ERP Module</option>
                  <option value="custom_inhouse">Custom / In-house Solution</option>
                  <option value="spreadsheets">Spreadsheets / Manual Files</option>
                </select>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Broad category only. Named systems appear only from the approved
              registry, and never as a marketing list.
            </p>
          </section>

          <section className="space-y-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 3
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Object families in scope
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {objectOptions.map((item) => {
                const isSelected = selectedObjects.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleObjectFamily(item)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 4, 5 &amp; 6
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Scale, history, and region
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Approximate scale band
                </label>
                <select
                  value={scaleBand}
                  onChange={(e) => setScaleBand(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="" disabled>
                    Select a band
                  </option>
                  <option value="under_1000">&lt; 1,000 active records</option>
                  <option value="1k_10k">1,000 - 10,000</option>
                  <option value="10k_50k">10,000 - 50,000</option>
                  <option value="50k_plus">50,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  History band
                </label>
                <select
                  value={historyBand}
                  onChange={(e) => setHistoryBand(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="" disabled>
                    Select a band
                  </option>
                  <option value="current_only">Current active state only</option>
                  <option value="1_year">Up to 1 year</option>
                  <option value="2_3_years">2 - 3 years</option>
                  <option value="3_plus_years">3+ years</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Regions or jurisdictions
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="single_region">Single Jurisdiction / Country</option>
                  <option value="multi_region">Multi-Region (North America / EU)</option>
                  <option value="global">Global Jurisdiction</option>
                </select>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Bands only - no exact worker count is required. Historical scope
              depends on purpose, authority, object support, quality, privacy,
              retention, region, scale, and approved terms. Multi-year is never
              assumed to be supported.
            </p>
          </section>

          <section className="space-y-4 border-b border-slate-200 pb-6 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 7
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Owner readiness
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Missing owners are the most common reason a migration stalls.
                Mark each as available or not yet.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {[
                { key: 'sourceOwner', label: 'Source owner' },
                { key: 'dataOwner', label: 'Data owner' },
                { key: 'privacyReviewer', label: 'Privacy / security reviewer' },
                { key: 'businessReviewer', label: 'Business reviewer' },
                { key: 'cutoverAuthority', label: 'Cutover authority' },
              ].map((field) => (
                <div key={field.key} className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {field.label}
                  </label>
                  <select
                    value={owners[field.key as keyof typeof owners]}
                    onChange={(e) => setOwners({ ...owners, [field.key]: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    <option value="" disabled>
                      Select status
                    </option>
                    <option value="assigned">Assigned / Available</option>
                    <option value="not_yet">Not yet assigned</option>
                    <option value="external">External / Consultant</option>
                  </select>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                Step 8 &amp; 9
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Timing intent and contact
              </h3>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Timing Intent
              </label>
              <div className="flex flex-wrap gap-2.5">
                {timingOptions.map((option) => {
                  const isChecked = timingIntent === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTimingIntent(option.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="timingIntent"
                        value={option.id}
                        checked={isChecked}
                        onChange={() => {}}
                        className="h-3.5 w-3.5 border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/80 dark:bg-slate-800/60">
              <input
                type="checkbox"
                id="privacyConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="privacyConsent" className="cursor-pointer text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                You may contact me about this assessment. I&apos;ve read the{' '}
                <a href="#privacy" className="font-bold text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400">
                  privacy notice
                </a>
                . Selecting a timing intent does not generate a date commitment.
              </label>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-emerald-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Get my preparedness summary
              </button>
              <Link
                href="/contact-sales"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                Talk to Sales instead
              </Link>
            </div>
          </section>
        </form>

        <footer className="border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <strong className="font-bold text-slate-700 dark:text-slate-300">
            What you get back.
          </strong>{' '}
          A preparedness summary listing missing owners, outstanding decisions,
          and evidence you would need. Not a migration success score, risk
          rating, price, or duration - those depend on assessment and approved
          terms.
        </footer>
      </div>
    </div>
  );
}
