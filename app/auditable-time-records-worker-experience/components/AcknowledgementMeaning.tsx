import React from 'react';

const itMeans: string[] = [
  'You have seen this notice or record',
  'The organization can show the notice reached you',
];

const itNeverMeans: string[] = [
  'Consent',
  'Agreement with the record',
  'Admission of anything',
  'Waiver of any right',
  'Withdrawal of a correction request',
  'Acceptance of a consequential decision',
];

interface NoticeState {
  title: string;
  description: string;
  caveat: string;
}

const noticeStates: NoticeState[] = [
  {
    title: 'Generated',
    description: 'A notice was created for an event.',
    caveat: 'Not yet sent to anyone.',
  },
  {
    title: 'Sent & delivered',
    description: 'Handed to a channel, and confirmed where the channel reports it.',
    caveat: 'Delivery is not reading.',
  },
  {
    title: 'Acknowledged',
    description: 'The worker confirmed they have seen it, where the feature is configured.',
    caveat: 'Seeing is not agreeing.',
  },
  {
    title: 'Failed',
    description: 'Delivery did not succeed. Explicit and owned by the organization.',
    caveat: 'A failed notice never counts against the worker.',
  },
];

export default function AcknowledgementMeaning() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-7">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            What an acknowledgement means
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            This is the single most abusable control in a worker-facing product. Where
            acknowledgement is enabled, the interface must say exactly what it means — and exactly
            what it does not.
          </p>
        </div>

        {/* The Single Permitted Meaning */}
        <div className="w-full p-5 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl border-2 border-emerald-100 dark:border-emerald-900/60 space-y-2">
          <h3 className="text-base font-bold text-emerald-800 dark:text-emerald-400">
            “Acknowledged: you have seen this notice.”
          </h3>
          <p className="text-sm text-emerald-900/90 dark:text-emerald-200/90 leading-6">
            That is the default and only meaning. It is stated on the control itself, not buried in a
            policy.
          </p>

          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* It Means */}
            <div className="px-3.5 pt-3 pb-3.5 bg-white dark:bg-slate-900 rounded-[10px] border border-emerald-100 dark:border-emerald-900/60 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5">It means</h4>
              <ul className="space-y-1.5">
                {itMeans.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-[5px] w-[5px] rounded-sm bg-green-400 shrink-0"
                    />
                    <span className="text-xs text-slate-600 dark:text-slate-300 leading-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* It Never Silently Means */}
            <div className="px-3.5 pt-3 pb-3.5 bg-white dark:bg-slate-900 rounded-[10px] border border-emerald-100 dark:border-emerald-900/60 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5">
                It never silently means
              </h4>
              <ul className="space-y-1.5">
                {itNeverMeans.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-[5px] w-[5px] rounded-sm bg-rose-400 shrink-0"
                    />
                    <span className="text-xs text-rose-700 dark:text-rose-300 leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Four Separate Notice States */}
        <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {noticeStates.map((state) => (
            <div
              key={state.title}
              className="px-4 pt-3 pb-3.5 flex flex-col gap-1.5 border-t sm:border-t-0 first:border-t-0 lg:border-r lg:last:border-r-0 border-slate-200 dark:border-slate-800"
            >
              <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-5">
                {state.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-5">
                {state.description}
              </p>
              <p className="mt-auto pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-amber-700 dark:text-amber-400 leading-5">
                {state.caveat}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
