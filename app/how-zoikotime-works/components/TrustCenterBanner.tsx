export default function TrustCenterBanner() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-slate-900">
          {/* Background Glow */}
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]" />

          <div className="relative px-6 py-6 lg:px-8 lg:py-7">
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
              {/* Lock Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10">
                <svg
                  className="h-6 w-6 text-teal-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-500">
                  Binding Anti-Surveillance Invariant
                </p>

                <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
                  No screenshots, keystroke content, URL history,
                  application-name monitoring, or clipboard collection under
                  any tier or configuration.

                  <a
                    href="#"
                    className="ml-2 inline-flex items-center font-semibold text-teal-600 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Visit Trust Center

                    <svg
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        d="M7 5l5 5-5 5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}