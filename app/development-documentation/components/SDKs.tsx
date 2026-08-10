"use client";

const sdks = [
  {
    name: "JavaScript / TS",
    command: "npm i @zoikotime/sdk",
  },
  {
    name: "Python",
    command: "pip install zoikotime",
  },
  {
    name: "Go",
    command: "go get zoikotime.com/sdk",
  },
  {
    name: "Ruby",
    command: "gem install zoikotime",
  },
];

export default function SDKs() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            SDKs
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Official libraries
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Install a client for your stack and skip the boilerplate.
          </p>
        </div>

        {/* SDK Cards */}
        <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sdks.map((sdk) => (
            <div
              key={sdk.name}
              className="rounded-2xl border border-slate-200 bg-white p-[19px] shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Language */}
              <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {sdk.name}
              </h3>

              {/* Install Command */}
              <div className="mt-3 overflow-x-auto rounded-lg bg-slate-900 px-3 py-2">
                <code className="whitespace-nowrap font-mono text-[11px] leading-5 text-teal-300 sm:text-xs">
                  {sdk.command}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Sandbox Notice */}
        <div className="mt-8 w-full max-w-[900px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/60 dark:bg-emerald-950/30 sm:px-8">
          <p className="text-center text-sm leading-5 text-slate-800 dark:text-slate-300">
            All examples use{" "}
            <span className="font-bold text-teal-700 dark:text-teal-400">
              synthetic sandbox data
            </span>
            . Availability of specific endpoints, SDKs, and versions is
            confirmed in the developer console for your account.
          </p>
        </div>

      </div>
    </section>
  );
}