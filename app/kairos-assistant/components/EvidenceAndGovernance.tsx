import React from 'react';

interface EvidenceCard {
  title: string;
  description: string;
}

const evidenceGrid: EvidenceCard[] = [
  { title: 'Trust Center', description: 'Entry point for assurance material.' },
  { title: 'AI Governance', description: 'Approved scope and prohibited uses.' },
  { title: 'Privacy', description: 'Purpose, minimization, retention, rights.' },
  { title: 'Security', description: 'Access, scoping, operational controls.' },
  { title: 'Accessibility', description: 'WCAG 2.2 AA and known limitations.' },
  { title: 'System Status', description: 'Current operational state.' },
  { title: 'Procurement & Legal', description: 'Controlled evidence requests.' },
  { title: 'Human-in-Command', description: 'Where authority sits and stays.' },
];

const programPillars: EvidenceCard[] = [
  { title: 'Administration & Policy', description: 'Source eligibility and policy ownership.' },
  { title: 'Identity & Access', description: 'Roles, scopes, permission intersection.' },
  { title: 'Global Deployment', description: 'Region, jurisdiction, and rollout readiness.' },
  { title: 'Enterprise Support', description: 'Support profile and escalation.' },
];

export default function EvidenceAndGovernance() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-16 lg:gap-20">
        
        {/* Top Split: Sema Integration & Shared Responsibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Sema Integration */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Zoiko Sema &amp; connected work
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Zoiko Sema is an independent product. Any connection is optional, explicitly mapped, permissioned, and governed. Kairos can only reach connected context that your administrators mapped and approved — and connected communication context never becomes time worked.
              </p>
            </div>
            <div>
              <a
                href="/zoiko-sema-integration"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group transition-colors"
              >
                <span>Zoiko Sema Integration</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Shared Responsibility */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-start gap-2.5">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Shared responsibility
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Configuration, source quality, policy accuracy, permissions, review, interpretation, downstream action, and legal or compliance assessment all remain shared human and organizational responsibilities. A good answer does not transfer any of them.
            </p>
          </div>

        </div>

        {/* Middle Section: Privacy, Security, AI Governance & Trust */}
        <div className="flex flex-col items-center gap-8 sm:gap-10">
          
          <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Privacy, Security, AI Governance &amp; Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Where the evidence lives
            </h2>
            <p className="max-w-[640px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We publish only verified processing, retention, security, and review facts. Everything else routes to the authority that owns it.
            </p>
          </header>

          {/* 8-Card Evidence Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evidenceGrid.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col gap-1.5"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Disclaimer */}
          <div className="w-full max-w-[800px] pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              No model name, provider claim, language list, region list, or capability appears here without current verified evidence. Where the supplied source set does not support a claim, this page qualifies it or omits it.
            </p>
          </div>

        </div>

        {/* Bottom Section: Enterprise Readiness & Controlled Deployment */}
        <div className="flex flex-col items-center gap-8 sm:gap-10">
          
          <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Enterprise Readiness &amp; Controlled Deployment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Where Kairos sits in a governed programme
            </h2>
          </header>

          {/* 4 Pillars Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1.5"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}