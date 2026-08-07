import React from 'react';

interface SecurityFeature {
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    title: 'Provider record',
    description: 'purpose, data categories, access, region, and contractual control.',
  },
  {
    title: 'Connector scopes',
    description: 'credentials, revocation, and rotation ownership stated explicitly.',
  },
  {
    title: 'Transport integrity',
    description: 'webhook, file, and API authenticity, replay handling, and failure behavior.',
  },
  {
    title: 'Visible limitations',
    description: 'provider state and constraints stay visible rather than abstracted away.',
  },
];

export default function ProviderSecurity() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading & Feature List */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <header className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Provider, Subprocessor &amp; Integration Security
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              External Systems Are a<br className="hidden sm:inline" /> Controlled Dependency
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Provider controls are provider controls. We do not present them as ZoikoTime controls, and we do not inherit assurance from a vendor&apos;s certifications.
            </p>
          </header>

          {/* Feature List */}
          <ul className="flex flex-col gap-4 text-sm leading-relaxed">
            {securityFeatures.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <p className="text-slate-600 dark:text-slate-300">
                  <strong className="font-bold text-slate-900 dark:text-white mr-1">
                    {item.title}
                  </strong>
                  — {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Footer Subprocessor Note */}
          <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2">
            Subprocessor and provider lists route to the current{' '}
            <a href="#privacy" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              Privacy
            </a>{' '}
            sources where approved. Credentials, endpoints, and restricted provider terms are never exposed.
          </div>
        </div>

        {/* Right Column: Boundary Details Card */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Where a boundary sits
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If a connected system is compromised, the blast radius is bounded by the scope you granted it — which is why connector scope, credential ownership, and revocation authority are worth reviewing before you enable one.
            </p>
          </div>

          {/* Highlighted Banner */}
          <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 flex items-start gap-3">
            <div className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              A failed integration never broadens access to complete an exchange. Failure states stay visible and owned.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm rounded-lg border border-slate-200 dark:border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Enterprise Integrations
              <span className="text-base leading-none">&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}