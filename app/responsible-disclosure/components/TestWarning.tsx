export default function TestWarning() {
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12 lg:py-[84px] dark:bg-slate-900">
      <div
        className="
          mx-auto
          w-full
          max-w-[1056px]
          rounded-3xl
          border
          border-red-200
          bg-rose-100
          px-5
          py-6
          sm:px-8
          sm:py-7
          lg:px-10
          lg:py-7
          dark:border-red-900/60
          dark:bg-red-950/30
        "
      >
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Warning Icon */}
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700 dark:text-red-400"
              aria-hidden="true"
            >
              <path
                d="M12 3L22 20H2L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 9V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="12"
                cy="17"
                r="1"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            {/* Title */}
            <h2 className="text-sm font-semibold leading-6 text-red-900 sm:text-base sm:leading-7 dark:text-red-300">
              Before you test: page access does not authorize testing.
            </h2>

            {/* First paragraph */}
            <p className="mt-3 text-xs leading-5 text-orange-900 sm:text-sm sm:leading-6 dark:text-orange-200">
              Permission to test exists only as defined by the current approved
              policy, an in-scope asset record, its conditions, and the Rules of
              Engagement below. A brand, domain, product, customer
              relationship, or public endpoint does not automatically place
              every related asset in scope.
            </p>

            {/* Second paragraph */}
            <p className="mt-4 text-xs leading-5 text-orange-900 sm:text-sm sm:leading-6 dark:text-orange-200">
              Third-party systems require their own authorization and are not
              covered here. Production, staging, sandbox, customer-managed, and
              partner-managed environments are separate scope dimensions.
              Viewing this page, clicking a link, submitting a report, or
              receiving a case reference never expands testing permission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}