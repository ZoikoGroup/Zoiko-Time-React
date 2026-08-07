import Image from "next/image";

export default function SemaTimeHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">

        {/* ========================= */}
        {/* Left Content */}
        {/* ========================= */}
        <div className="w-full lg:max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              Zoiko Sema + ZoikoTime
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Connect approved
            <br />
            communication
            <br />
            context to
            <br />
            <span className="text-emerald-500">
              reviewable
            </span>
            <br />
            workforce
            <br />
            operations
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 lg:text-lg">
            Map approved Zoiko Sema workspaces to ZoikoTime
            teams or organizational units, apply roles,
            permissions, privacy modes, policy scope, and
            jurisdiction controls, then review connection
            health and approved operational context.
          </p>

          {/* Info Card */}
          <div className="mt-8 rounded-xl border border-slate-200 border-l-4 border-l-emerald-500 bg-white p-5 shadow-sm dark:border-slate-700 dark:border-l-emerald-500 dark:bg-slate-900">
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              Optional, customer-configured,
              workspace-scoped, role-controlled,
              privacy-respecting, and audit-ready.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-500 px-7 text-base font-semibold text-white transition hover:bg-emerald-600"
            >
              Start Free
            </button>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Request Enterprise Demo
            </button>

          </div>

          {/* Explore */}
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:gap-3"
          >
            Explore ZoikoTime
            <span>→</span>
          </button>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">

            {[
              "No screenshots",
              "No keystroke content",
              "No URL history or application names",
              "No clipboard collection",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500">

                  <svg
                    className="h-3 w-3 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 111.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>

                </div>

                <span>{item}</span>

              </div>
            ))}

          </div>

          {/* Footer Note */}
          <p className="mt-10 text-xs leading-6 text-slate-500 dark:text-slate-400">
            Zoiko Sema and ZoikoTime licensing, availability,
            setup, context scope, direction, and implementation
            vary by plan, contract, configuration, region,
            and product status.
          </p>

        </div>

        {/* ========================= */}
        {/* Right Content Starts */}
        {/* Continue in Part 2 */}

                {/* ========================= */}
        {/* Right Content */}
        {/* ========================= */}
        <div className="w-full lg:max-w-[600px]">

          {/* Hero Image */}
          <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(11,18,32,0.10)] dark:border-slate-700 dark:bg-slate-900">
            <Image
              src="/integration/image.png"
              alt="Zoiko Sema Integration"
              width={598}
              height={426}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Information Card */}
          <div className="mt-6 rounded-xl border border-slate-200 border-l-4 border-l-slate-700 bg-slate-50 p-5 dark:border-slate-700 dark:border-l-slate-500 dark:bg-slate-900">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">
              What this connection is not
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Not a universal export. Unmapped workspaces and
              unapproved context stay outside the connection.
              Communication context never becomes time worked,
              payroll truth, performance evidence, discipline,
              legal status, or compliance on its own.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}