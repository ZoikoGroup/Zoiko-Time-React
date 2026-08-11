import Link from 'next/link';

interface SecurityDomainCard {
  title: string;
  description: string;
  isSpecial?: boolean;
}

const domainCards: SecurityDomainCard[] = [
  {
    title: 'Security',
    description:
      'Least privilege, approved identities, credential references, environment separation, access review, logging, incident routing, revocation.',
  },
  {
    title: 'Privacy',
    description:
      'Purpose limitation, minimization, sensitive-field inventory, region and transfer context, retention, staging deletion, rights routing.',
  },
  {
    title: 'Worker trust',
    description:
      'Plain-language notice, visibility into applicable records, a correction route, human review, neutral states, and no retrospective repurposing.',
  },
  {
    title: 'Accessibility',
    description:
      'WCAG 2.2 AA across the page, readiness form, tables, filters, mapping review, exception queues, approvals, and exported summaries.',
  },
  {
    title: 'Data sovereignty',
    description:
      'Region, residency, transfer, support access, backup, and subprocessor statements appear only when registry-verified.',
  },
  {
    title: 'Incident behavior',
    description:
      'Pause affected movement, preserve evidence, notify approved owners. Never broaden access, retry blindly, or conceal a partial failure.',
    isSpecial: true,
  },
];

const pills = [
  { label: 'Security', href: '/security' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Anti-Surveillance', href: '#' },
];

export default function SecurityTrustSection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <header className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Security, Privacy, Legal, Accessibility &amp; Worker Trust
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Stage-Gate Authorities, Not Decorative Badges
            </h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Migration touches historical records about real people. These
              domains hold gates, and an incident pauses movement rather than
              pushing through it.
            </p>
          </header>

          <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/20">
              <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed font-semibold text-slate-800 dark:text-slate-200">
              No hidden productivity scoring. No covert observation. No silent
              value invention. No broader access on failure, under any tier or
              configuration.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {pills.map((pill) => (
              <Link
                key={pill.label}
                href={pill.href}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                {pill.label}
              </Link>
            ))}
          </div>

          <footer className="border-t border-slate-200 pt-5 text-xs leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <strong className="mr-1 font-bold text-slate-700 dark:text-slate-300">
              Legal boundary.
            </strong>
            Legal analysis remains customer-owned. Worker notice and consultation,
            where applicable, remain your responsibility. Retention holds and
            contractual restrictions are surfaced, not resolved, by this process.
          </footer>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:col-span-7 sm:grid-cols-2">
          {domainCards.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col gap-2 rounded-2xl border p-6 shadow-sm transition-all ${
                card.isSpecial
                  ? 'border-slate-300 bg-slate-100/90 dark:border-slate-700 dark:bg-slate-900/90'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
