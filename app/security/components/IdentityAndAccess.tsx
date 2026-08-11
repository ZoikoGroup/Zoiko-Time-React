import React from 'react';

interface CardDetail {
  title: string;
  status: string;
  objective: string;
  scope: string;
  summary: string;
  owner: string;
  lastReviewed: string;
  dependencyLabel: string;
  dependencyValue: string;
  limitations: string;
}

const cardsData: CardDetail[] = [
  {
    title: 'Identity & authentication',
    status: 'Current',
    objective: 'Ensure human, administrator, and service identities are verified before entering scope, and can be revoked.',
    scope: 'Human users, administrators, service identities · production',
    summary: 'Session creation, renewal, expiration, revocation, and risk response. Directory provisioning and deprovisioning where supported.',
    owner: 'Security · reviewed by Platform',
    lastReviewed: '01 Jul 2026 · next 01 Jan 2027',
    dependencyLabel: 'Depends on:',
    dependencyValue: 'your identity provider, your user lifecycle process.',
    limitations: 'Identity-provider integrations and authentication methods are stated per deployment. We do not claim phishing resistance, passwordless support, or specific SSO standards on this page — those are confirmed against your configuration. Recovery secrets and bypass methods are never published.',
  },
  {
    title: 'Authorization & administrative access',
    status: 'Current',
    objective: 'Prevent access beyond an explicitly granted intersection, and make privileged action attributable.',
    scope: 'All roles and administrative functions',
    summary: 'Separate view, create, edit, approve, export, configure, and administer permissions. Sensitive configuration changes may require review or dual control where supported.',
    owner: 'Security · reviewed by Product governance',
    lastReviewed: '01 Jul 2026',
    dependencyLabel: 'You can inspect:',
    dependencyValue: 'effective permissions and their dependencies, where available.',
    limitations: 'Dual control availability varies by function. There is no hidden super-admin and no unlogged emergency access — break-glass access requires a named authority, a stated reason, a time limit, and an audit record.',
  },
];

export default function IdentityAndAccess() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <header className="max-w-[800px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Identity, Authentication &amp; Administrative Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            How Identities Enter Scope, and What They May Do
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Effective access is a deny-by-default intersection of role, tenant, entity, object, source, policy, and action. One role never grants unrestricted data access.
          </p>
        </header>

        {/* 2-Column Main Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-6 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-5">
                
                {/* Title & Status Header */}
                <div className="flex items-center justify-between gap-2 pb-1 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                  <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-100 text-emerald-600 dark:bg-slate-800 dark:text-emerald-400 shrink-0">
                    {card.status}
                  </span>
                </div>

                {/* Objective Callout Box */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white mr-1">Objective:</strong>
                  <span className="text-slate-600 dark:text-slate-300">{card.objective}</span>
                </div>

                {/* Key-Value Details */}
                <dl className="grid grid-cols-1 gap-3 text-xs">
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Scope</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{card.scope}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-400 dark:text-slate-500">Summary</dt>
                    <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5 leading-relaxed">{card.summary}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <dt className="font-semibold text-slate-400 dark:text-slate-500">Owner</dt>
                      <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{card.owner}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-400 dark:text-slate-500">Last reviewed</dt>
                      <dd className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{card.lastReviewed}</dd>
                    </div>
                  </div>
                </dl>

                {/* Dependency / Inspection Note */}
                <div className="text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                  <strong className="font-bold text-slate-500 dark:text-slate-400 mr-1">{card.dependencyLabel}</strong>
                  <span className="text-slate-600 dark:text-slate-400">{card.dependencyValue}</span>
                </div>
              </div>

              {/* Limitations Warning Box */}
              <div className="p-4 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/50 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                <strong className="font-bold mr-1">Limitations:</strong>
                <span>{card.limitations}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a href="/identity-access-management">
          <button
            type="button"
            className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base rounded-lg border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Identity &amp; Access Management
          </button></a>
          <a href="/adminstration-policy-controls">
          <button
            type="button"
            className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-base rounded-lg border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Administrative Controls
          </button></a>
        </div>

      </div>
    </section>
  );
}