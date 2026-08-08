"use client";

const endpoints = [
  {
    method: "GET",
    path: "/v1/records",
    description: "List & filter time records with state and provenance",
    style:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-teal-400",
  },
  {
    method: "GET",
    path: "/v1/records/{id}",
    description: "Retrieve a single record and its evidence",
    style:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-teal-400",
  },
  {
    method: "POST",
    path: "/v1/records/{id}/corrections",
    description: "Submit a reasoned correction (append-only)",
    style:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-950/40 dark:text-blue-400",
  },
  {
    method: "GET",
    path: "/v1/policies/{id}",
    description: "Fetch a versioned, deterministic policy definition",
    style:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-teal-400",
  },
  {
    method: "GET",
    path: "/v1/evidence/{id}",
    description: "Read a preserved evidence trail",
    style:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-teal-400",
  },
  {
    method: "POST",
    path: "/v1/webhooks",
    description: "Subscribe to record, review & evidence events",
    style:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-950/40 dark:text-blue-400",
  },
  {
    method: "DELETE",
    path: "/v1/webhooks/{id}",
    description: "Remove a webhook subscription",
    style:
      "bg-rose-50 text-red-700 dark:bg-rose-950/40 dark:text-red-400",
  },
];

export default function Endpoints() {
  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Endpoints
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Common endpoints
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            A quick map of the most-used routes.
          </p>
        </div>

        {/* Endpoint Table */}
        <div className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">

          {/* Desktop Header */}
          <div className="hidden grid-cols-[90px_minmax(220px,1fr)_minmax(300px,1.5fr)] items-center bg-gray-50 px-[18px] py-3 dark:bg-slate-800/70 md:grid">
            <div className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
              Method
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
              Path
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
              Description
            </div>
          </div>

          {/* Rows */}
          <div>
            {endpoints.map((endpoint, index) => (
              <div
                key={`${endpoint.method}-${endpoint.path}`}
                className={`border-t border-slate-200 px-[18px] py-4 dark:border-slate-700 ${
                  index === 0 ? "md:border-t-0" : ""
                }`}
              >
                {/* Desktop */}
                <div className="hidden items-center md:grid md:grid-cols-[90px_minmax(220px,1fr)_minmax(300px,1.5fr)]">
                  {/* Method */}
                  <div>
                    <span
                      className={`inline-flex min-w-[36px] items-center justify-center rounded-md px-2 py-1 font-mono text-[10px] font-bold leading-4 ${endpoint.style}`}
                    >
                      {endpoint.method}
                    </span>
                  </div>

                  {/* Path */}
                  <code className="break-all font-mono text-xs font-bold leading-5 text-slate-800 dark:text-slate-200">
                    {endpoint.path}
                  </code>

                  {/* Description */}
                  <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {endpoint.description}
                  </p>
                </div>

                {/* Mobile */}
                <div className="flex flex-col gap-3 md:hidden">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex min-w-[42px] items-center justify-center rounded-md px-2 py-1 font-mono text-[10px] font-bold leading-4 ${endpoint.style}`}
                    >
                      {endpoint.method}
                    </span>

                    <code className="break-all font-mono text-xs font-bold leading-5 text-slate-800 dark:text-slate-200">
                      {endpoint.path}
                    </code>
                  </div>

                  <p className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                    {endpoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}