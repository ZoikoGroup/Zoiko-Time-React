import React from 'react';

interface SecurityControlCard {
  title: string;
  status: string;
  objective: string;
  scopeLabel: string;
  scopeValue: string;
  summary: string;
  owner: string;
  lastReviewed: string;
  limitations: React.ReactNode;
}

const controlCards: SecurityControlCard[] = [
  {
    title: 'Secure development & change control',
    status: 'Current',
    objective: 'Ensure changes reach production only through accountable gates, and can be reversed.',
    scopeLabel: 'Scope',
    scopeValue: 'Application, configuration, and infrastructure change',
    summary: 'Security requirements and threat-informed design review where appropriate; code and change review; test and dependency checks; release approval, deployment identity, and environment scope; configuration and infrastructure change history; rollback, emergency change, and retrospective review.',
    owner: 'Engineering · reviewed by Security',
    lastReviewed: '15 Jun 2026',
    limitations: (
      <>
        Some release gates are automated and evidenced rather than manually approved — we do not claim every change receives individual human sign-off, because that would be false. Repositories, tooling, and architecture detail are not published.
      </>
    ),
  },
  {
    title: 'Logging, monitoring & source health',
    status: 'Current',
    objective: 'Detect and investigate security-relevant events without surveillance overreach.',
    scopeLabel: 'Categories logged',
    scopeValue: 'Identity, access, configuration, service, source-health, and security events',
    summary: 'Purpose, retention, access, and minimization apply to logs. Alerts have named ownership, triage, and escalation. Clock, source, and integrity context is preserved where relevant.',
    owner: 'Security',
    lastReviewed: '01 Jul 2026',
    limitations: (
      <>
        We make no promise of complete detection — coverage is not measured to a published standard. Monitoring gaps and source failure produce <strong>visible uncertainty</strong> rather than silent assumption; see how that surfaces on{' '}
        <a href="#status" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
          System Status
        </a>
        .
      </>
    ),
  },
];

export default function DevAndLoggingControls() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-6">
        
        {/* 2-Column Main Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {controlCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-5 sm:p-6 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                
                {/* Header with Title & Status Badge */}
                <div className="flex items-center justify-between gap-3 pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {card.title}
                  </h3>
                  <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400">
                    {card.status}
                  </span>
                </div>

                {/* Objective Banner */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white mr-1">Objective:</strong>
                  <span className="text-slate-600 dark:text-slate-300">{card.objective}</span>
                </div>

                {/* Key-Value Details */}
                <dl className="grid grid-cols-1 gap-3 text-xs pt-1">
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">{card.scopeLabel}</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">
                      {card.scopeValue}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Summary</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">
                      {card.summary}
                    </dd>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <dt className="font-semibold text-slate-400 dark:text-slate-500">Owner</dt>
                      <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                        {card.owner}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-semibold text-slate-400 dark:text-slate-500">Last reviewed</dt>
                      <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                        {card.lastReviewed}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Limitations Warning Box */}
              <div className="p-4 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/50 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                <strong className="font-bold mr-1">Limitations:</strong>
                <span>{card.limitations}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Red Prohibited Telemetry Alert */}
        <div className="w-full max-w-[900px] p-4 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200/80 dark:border-rose-900/60 flex flex-col gap-1 text-left">
          <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
            Never in security telemetry
          </span>
          <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
            Application-name monitoring, URL history, or keystroke content. Sensitive payloads and the prohibited surveillance categories are excluded from logs by design, not by configuration.
          </p>
        </div>

      </div>
    </section>
  );
}