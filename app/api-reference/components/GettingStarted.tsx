import {
  Code,
  CodeBlock,
  Str,
  SectionHeading,
} from "./Primitives";

const errors = [
  { status: "200", meaning: "OK — request succeeded" },
  { status: "201", meaning: "Created — resource created (append-only)" },
  { status: "400", meaning: "Bad request — missing or invalid parameters" },
  { status: "401", meaning: "Unauthorized — missing or invalid API key" },
  { status: "403", meaning: "Forbidden — key lacks the required scope/role" },
  { status: "404", meaning: "Not found — no such resource" },
  { status: "409", meaning: "Conflict — idempotency or state conflict" },
  { status: "429", meaning: "Too many requests — rate limited" },
];

export default function GettingStarted() {
  return (
    <>

      {/* Introduction */}
      <section className="flex flex-col">

        <SectionHeading id="introduction" title="Introduction" />

        <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          The ZoikoTime API is organized around REST. It has predictable,
          resource-oriented URLs, returns JSON, uses standard HTTP verbs and
          status codes, and is versioned by date. All classification is{" "}
          <strong className="font-bold">deterministic</strong> and every
          consequential <Code>decision</Code> is made by a human — the API never
          auto-decides.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/40 dark:bg-emerald-950/20">

          <span className="text-xs font-bold leading-5 text-teal-700 dark:text-teal-300">
            Base URL
          </span>

          <span className="api-mono text-xs font-normal leading-5 text-slate-800 dark:text-white">
            https://api.zoikotime.com
          </span>

          <span className="text-xs text-slate-800 dark:text-white">·</span>

          <span className="text-xs font-bold leading-5 text-teal-700 dark:text-teal-300">
            Version header
          </span>

          <span className="api-mono text-xs font-normal leading-5 text-slate-800 dark:text-white">
            Zoiko-Version: 2026-06-01
          </span>

        </div>

      </section>

      {/* Authentication */}
      <section
      id="authentication"
       className="mt-14 flex flex-col">

        <SectionHeading id="authentication" title="Authentication" />

        <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          Authenticate with a scoped, least-privilege API key sent as a bearer
          token. Keys map to governed roles; never expose a secret key in
          client-side code. All requests must be made over HTTPS.
        </p>

        <div className="mt-6">
          <CodeBlock label="authenticate.sh">
            <span className="text-teal-300">curl</span>
            {" https://api.zoikotime.com/v1/records \\\n  -H "}
            <Str>&quot;Authorization: Bearer $ZOIKO_API_KEY&quot;</Str>
            {" \\\n  -H "}
            <Str>&quot;Zoiko-Version: 2026-06-01&quot;</Str>
          </CodeBlock>
        </div>

      </section>

      {/* Errors */}
      <section className="mt-14 flex flex-col">

        <SectionHeading id="errors" title="Errors" />

        <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          ZoikoTime uses conventional HTTP status codes. Codes in the{" "}
          <Code>2xx</Code> range indicate success, <Code>4xx</Code> indicate a
          client error, and <Code>5xx</Code> indicate a server error. Error
          bodies include a <Code>type</Code>, <Code>message</Code>, and where
          useful a <Code>param</Code>.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[560px] border-collapse text-left">

              <thead>
                <tr className="bg-gray-50 dark:bg-slate-900">
                  {[
                    { label: "Status", width: "w-[18%]" },
                    { label: "Meaning", width: "w-[82%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:border-slate-800 dark:text-slate-400 ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {errors.map((row) => (
                  <tr
                    key={row.status}
                    className="border-b border-slate-200 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="api-mono px-4 py-3 align-middle text-xs font-bold leading-5 text-slate-800 dark:text-white">
                      {row.status}
                    </td>

                    <td className="px-4 py-3 align-middle text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {row.meaning}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* Rate limits */}
      <section className="mt-14 flex flex-col">

        <SectionHeading id="rate-limits" title="Rate limits" />

        <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          Requests are rate limited per API key. Every response includes{" "}
          <Code>Zoiko-RateLimit-Remaining</Code> and{" "}
          <Code>Zoiko-RateLimit-Reset</Code> headers. On <Code>429</Code>, back
          off using the reset value. Limits for your account are shown in the
          developer console.
        </p>

      </section>

      {/* Pagination */}
      <section className="mt-14 flex flex-col">

        <SectionHeading id="pagination" title="Pagination" />

        <p className="mt-6 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
          List endpoints are cursor-paginated. Pass <Code>limit</Code> (1–100)
          and <Code>starting_after</Code> with the last object id from the
          previous page. Responses include <Code>has_more</Code> and a{" "}
          <Code>data</Code> array.
        </p>

      </section>

    </>
  );
}
